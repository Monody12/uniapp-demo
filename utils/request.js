/**
 * 添加请求拦截器
 */
let requestCount = 0;

export function setupInterceptors() {
  uni.addInterceptor('request', {
    invoke(args) {
      if (!args.url.startsWith('http')) {
        args.url = 'https://www.dluserver.cn:8080/api' + args.url;
      }
      
      if (!args.noLoading) {
        showLoadingWithCount();
      }
    },
    
    success(args) {
      const { statusCode, data } = args;
      
      if (statusCode === 200 && data.code !== 200) {
        showErrorMessage(data.msg);
      }
    },
    
    fail(err) {
      showErrorMessage('网络请求失败，请检查网络');
      console.error('请求失败:', err);
    },
    
    complete(res) {
      if (!res.config?.noLoading) {
        hideLoadingWithCount();
      }
      
      handleHttpStatusCode(res.statusCode);
    }
  });
}

function showLoadingWithCount() {
  if (requestCount === 0) {
    uni.showLoading({
      title: '加载中',
      mask: true
    });
  }
  requestCount++;
}

function hideLoadingWithCount() {
  requestCount--;
  if (requestCount === 0) {
    uni.hideLoading();
  }
}

function showErrorMessage(msg) {
  uni.showToast({
    title: msg,
    icon: 'none',
    duration: 2000
  });
}

function handleHttpStatusCode(statusCode) {
  if (statusCode === 401) {
    uni.redirectTo({ url: '/pages/login/login' });
  } else if (statusCode !== 200) {
    showErrorMessage(`请求错误，状态码：${statusCode}`);
  }
}

/**
 * 包装uni.request
 */
const request = (options) => {
  return new Promise((resolve, reject) => {
    const token = uni.getStorageSync('token');
    const defaultOptions = {
      timeout: 10000,
      header: {
        'Content-Type': 'application/json',
        'Authorization': token ? `${token}` : ''
      }
    };

    uni.request({
      ...defaultOptions,
      ...options,
      success: (res) => resolve(res.data),
      fail: (err) => reject(err)
    });
  });
};

export const http = {
  get: (url, data, options = {}) => {
    return request({
      url,
      data,
      method: 'GET',
      ...options
    });
  },
  post: (url, data, options = {}) => {
    return request({
      url,
      data,
      method: 'POST',
      ...options
    });
  },
  patch: (url, data, options = {}) => {
    return request({
      url,
      data,
      method: 'PATCH',
      ...options
    });
  },
  put: (url, data, options = {}) => {
    return request({
      url,
      data,
      method: 'PUT',
      ...options
    });
  },
  delete: (url, data, options = {}) => {
    return request({
      url,
      data,
      method: 'DELETE',
      ...options
    });
  }
  // 可根据需要添加其他方法
};