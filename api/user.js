import { http } from '@/utils/request';

export const userApi = {
  login: (data) => {
    return http.post('/user/login', data);
  },
  
  getUserInfo: () => {
    return http.get('/user/info');
  }
}