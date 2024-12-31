<template>
	<view class="app_out">
		<view class="input_out">
			<view style="width: 15rpx;"></view>
			<image :src="imageUrls.menuImg" class="icon"></image>
			<view style="width: 15rpx;"></view>
			<input class="input" placeholder="搜索我的个人网盘" />
		</view>
		<view class="function_selector" style="margin: 0">
			<view>文件浏览</view>
			<view>媒体播放</view>
		</view>
		<view class="file_top">
			<view style="margin: 30rpx;">名称（升序）</view>
			<image :src="imageUrls.gridIcon" class="icon" style="margin-right: 30rpx;"></image>
		</view>
		<view class="file_list">
			<template v-for="item in fileInfo" key="item.id">
				<view class="file_display" v-on:click="openFile(item)">
					<image :src="item.isFolder ? imageUrls.folderIcon : imageUrls.fileIcon" class="icon"></image>
					<view class="file_display_info">
						<text style="font-size: 1.1rem;">{{item.name}}</text>
						<text>修改时间：{{item.updatedAt.replace('T', ' ')}}</text>
					</view>
					<image :src="imageUrls.moreIcon" class="icon"></image>
				</view>
			</template>
		</view>
		<button class="add_button" v-on:click="openPopup">新增</button>
		<uni-popup ref="addPopRef" type="bottom" border-radius="10px 10px 0 0">
			<view class="add_container">
				<view class="add_content">
					<image :src="imageUrls.folderIcon" class="icon_big"></image>
					<text>文件夹</text>
				</view>
				<view class="add_content" v-on:click="clickUpload">
					<image :src="imageUrls.fileIcon" class="icon_big"></image>
					<text>上传</text>
				</view>
			</view>
		</uni-popup>
		<!-- 文件上传弹出层 -->
		<uni-popup ref="uploadPopRef" type="center">
			<view class="upload_content">
				<text class="upload_title">上传文件</text>
				<view class="upload_picker_container">
					<view class="upload_picker_container">
						<uni-file-picker limit="200" v-model="imageValue" fileMediatype="image" mode="grid"
							:autoUpload="true" @select="select" @progress="progress" 
							@success="success" @fail="fail" @delete="deleteFile"/>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted
	} from 'vue'
	import { folderApi } from '@/api/folder.js'
	import { fileApi } from '@/api/file.js'
	import { HOST_URL, BASE_URL, FILE_URL } from '@/constants/config.js'

	const imageUrls = {
		menuImg: 'https://www.dluserver.cn:8080/api/files/download?fileId=643&preview=true',
		listIcon: 'https://www.dluserver.cn:8080/api/files/download?fileId=648&preview=true',
		gridIcon: 'https://www.dluserver.cn:8080/api/files/download?fileId=647&preview=true',
		folderIcon: 'https://www.dluserver.cn:8080/api/files/download?fileId=649&preview=true',
		fileIcon: 'https://www.dluserver.cn:8080/api/files/download?fileId=650&preview=true',
		moreIcon: 'https://www.dluserver.cn:8080/api/files/download?fileId=651&preview=true'
	}

	// 生命周期时间
	onMounted(()=>{
		getFileList()
	})

	// 声明ref用于获取popup组件实例
	const addPopRef = ref()
	const uploadPopRef = ref()

	const fileInfo = ref([])

	function openPopup() {
		console.log(addPopRef.value)
		// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
		addPopRef.value.open()
	}

	// 上传文件相关函数
	const image_style = {
		"height": 600, // 边框高度
		"width": 600, // 边框宽度
		"border": { // 如果为 Boolean 值，可以控制边框显示与否
			"color": "#eee", // 边框颜色
			"width": "1px", // 边框宽度
			"style": "solid", // 边框样式
			"radius": "50%" // 边框圆角，支持百分比
		}
	}

	// 上传相关逻辑
	const imageValue = ref([])
	const uploadForm = reactive({
		folderId: null,
		publicFlag: true
	})

	// 点击上传按钮
	function clickUpload() {
		addPopRef.value.close()
		uploadPopRef.value.open()
	}
	// 将对象转换为 FormData
	function objectToFormData(obj) {
		const formData = new FormData();
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				formData.append(key, obj[key]);
			}
		}
		return formData;
	}

	// 获取上传状态
	function select(e) {
		console.log('选择文件：', e)
		// 
		uni.uploadFile({
			url: BASE_URL + '/upload', //仅为示例，非真实的接口地址
			header: {
				'authorization': uni.getStorageSync('token')
			},
			filePath: e.tempFilePaths[0],
			name: 'files',
			formData: {
		folderId: null,
		publicFlag: true
	},
			success: (uploadFileRes) => {
				console.log(uploadFileRes.data);
			}
		});
	}
	// 获取上传进度
	function progress(e) {
		console.log('上传进度：', e)
	}

	// 上传成功
	function success(e) {
		console.log('上传成功')
	}

	// 上传失败
	function fail(e) {
		console.log('上传失败：', e)
	}
	
	// 删除
	function deleteFile(e) {
		console.log('删除文件', e)
	}
	
	// 请求文件信息
	async function getFileList() {
		try {
			const res = await folderApi.getFolder(null)
			fileInfo.value = res.data
			console.log('获取文件列表', res)
		} catch (err) {
			console.log('获取文件列表失败：', err)
		}
	}
	
	// 打开文件（点击文件操作）
	async function openFile(f) {
		console.log('打开文件(夹)', f)
		if (f.isFolder) {
			
		} else {
			browseFile(f)
		}
	}
	
	/**
	 * 执行预览操作
	 */
	async function browseFile(f) {
		const fileUrl = await getFileUrl(f.id, f.publicFlag, true)
		uni.navigateTo({
			url: `/pages/file-preview/file-preview?fileUrl=${encodeURIComponent(fileUrl)}&fileType=image&fileName=${encodeURIComponent(f.name)}`
		})
	}
	
	/**
	 * 获取文件链接
	 */
	async function getFileUrl(id, publicFlag, preview) {
		if (publicFlag) {
			return `${FILE_URL}?fileId=${id}&preview=${preview}` 
		} else {
			const token = await fileApi.getToken(id)
			console.log(token.data)
			return HOST_URL + token.data[0]
		}
	}
</script>

<style scoped lang="scss">
	.app_out {
		display: flex;
		/* 纵向排列 */
		flex-direction: column;
		/* 子项的水平分布方式 */
		justify-content: center;
		/* 子项的垂直对齐方式 */
		align-items: center;
		margin: 0 auto;
		padding: 0;
		// 全屏布局 
		height: 100%;
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
	}

	.input_out {
		display: flex;
		align-items: center;
		background: #eeeeee;
		height: 100rpx;
		width: 100%;
		border-radius: 5rpx;
		box-sizing: border-box;
	}

	.icon {
		height: 48rpx;
		width: 48rpx;
	}

	.icon_big {
		height: 96rpx;
		width: 96rpx;
	}

	.input {
		flex: 1;
		height: 100%;
		border: none;
		outline: none;
		background: none;
		font-size: 35rpx;
	}


	.function_selector {
		background-color: paleturquoise;
		width: 100%;
		height: 100rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.file_top {
		background-color: aliceblue;
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}

	.file_list {
		background-color: lemonchiffon;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;

		// 滚动
		flex: 1;
		overflow-y: auto;
	}

	.file_display {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;

		box-sizing: border-box; // 避免添加padding后最右侧元素被移出屏幕右侧
		padding: 20rpx;
		gap: 20rpx; // 添加元素间距

		.file_display_info {
			display: flex;
			flex-direction: column;
			flex: 1; // 占据剩余空间
			gap: 10rpx; // 文本间距
		}

	}

	.add_button {
		position: fixed;
		bottom: 75rpx;
		right: 75rpx;
		z-index: 10; // 浮于顶部
		background-color: #ebebeb;
		color: black;
		border: none;
		padding: 10px 20px;
		border-radius: 10rpx;
		box-shadow: 0 14rpx 16rpx rgba(0, 0, 0, 0.2);
		// cursor: pointer;
	}

	.add_container {
		z-index: 11;
		background-color: whitesmoke;
		border-radius: 30rpx 30rpx 0 0;
		height: auto;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-content: center;

		.add_content {
			background-color: silver;
			height: auto;
			width: auto;
			border-radius: 10rpx;
			margin: 50rpx;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}

	// 文件上传CSS
	.upload_content {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fff;
		padding: 30rpx;
		width: 80vw;
		/* 设置弹窗宽度 */
		max-height: 80vh;
		/* 设置弹窗最大高度 */
	}

	.upload_title {
		margin-bottom: 20rpx;
	}

	.upload_picker_container {
		width: 100%;
		height: 60vh;
		/* 设置固定高度 */
		overflow-y: auto;
		/* 允许垂直滚动 */
		margin-bottom: 20rpx;
	}

	/* 优化滚动条样式 */
	.upload_picker_container::-webkit-scrollbar {
		width: 6rpx;
	}

	.upload_picker_container::-webkit-scrollbar-thumb {
		background-color: #ddd;
		border-radius: 3rpx;
	}
</style>