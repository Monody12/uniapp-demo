<template>
	<view class="app_out">
		<view class="input_out">
			<view style="width: 15rpx;"></view>
			<image :src="menuImgUrl" class="icon"></image>
			<view style="width: 15rpx;"></view>
			<input class="input" placeholder="搜索我的个人网盘" />
		</view>
		<view class="function_selector" style="margin: 0">
			<view>文件浏览</view>
			<view>媒体播放</view>
		</view>
		<view class="file_top">
			<view style="margin: 30rpx;">名称（升序）</view>
			<image :src="gridIconUrl" class="icon"  style="margin-right: 30rpx;"></image>
		</view>
		<view class="file_list">
			<view class="file_display">
				<image :src="folderIconUrl" class="icon"></image>
				<view class="file_display_info">
					<text>这是一个文件夹</text>
					<text>修改时间：9月13日</text>
				</view>
				<image :src="moreIconUrl" class="icon"></image>
			</view>
			<view class="file_display">
				<image :src="fileIconUrl" class="icon"></image>
				<view class="file_display_info">
					<text>这是一个文件</text>
					<text>修改时间：10月13日</text>
				</view>
				<image :src="moreIconUrl" class="icon"></image>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'

	const menuImgUrl = 'https://www.dluserver.cn:8080/api/files/download?fileId=643'
	const listIconUrl = 'https://www.dluserver.cn:8080/api/files/download?fileId=648'
	const gridIconUrl = 'https://www.dluserver.cn:8080/api/files/download?fileId=647'
	const folderIconUrl = 'https://www.dluserver.cn:8080/api/files/download?fileId=649'
	const fileIconUrl = 'https://www.dluserver.cn:8080/api/files/download?fileId=650'
	const moreIconUrl = 'https://www.dluserver.cn:8080/api/files/download?fileId=651'
	
	const fileInfo = ref([{
			"userId": 1,
			"parentId": null,
			"description": null,
			"publicFlag": false,
			"name": "wg",
			"id": 10000000026,
			"createdAt": "2024-07-25T22:57:04",
			"updatedAt": "2024-07-27T11:55:07",
			"deleteFlag": false
		},
		{
			"userId": 1,
			"parentId": null,
			"description": null,
			"publicFlag": false,
			"name": "文档",
			"id": 10000000028,
			"createdAt": "2024-07-28T22:24:03",
			"updatedAt": "2024-07-28T22:24:03",
			"deleteFlag": false
		},
		{
			"userId": 1,
			"parentId": null,
			"description": null,
			"publicFlag": false,
			"name": "音视频",
			"id": 10000000029,
			"createdAt": "2024-07-30T10:16:24",
			"updatedAt": "2024-07-30T10:16:24",
			"deleteFlag": false
		},
		{
			"userId": 1,
			"parentId": null,
			"description": null,
			"publicFlag": false,
			"name": "软件",
			"id": 10000000035,
			"createdAt": "2024-08-07T20:15:43",
			"updatedAt": "2024-08-07T20:15:43",
			"deleteFlag": false
		},
		{
			"userId": 1,
			"parentId": null,
			"description": null,
			"publicFlag": false,
			"name": "图片",
			"id": 10000000036,
			"createdAt": "2024-08-17T19:49:28",
			"updatedAt": "2024-08-17T19:49:28",
			"deleteFlag": false
		},
		{
			"userId": 1,
			"parentId": null,
			"description": null,
			"publicFlag": false,
			"name": "网盘app",
			"id": 10000000044,
			"createdAt": "2024-12-22T19:57:11",
			"updatedAt": "2024-12-22T19:57:11",
			"deleteFlag": false
		},
		{
			"userId": 1,
			"parentId": null,
			"description": null,
			"publicFlag": false,
			"name": "临时",
			"id": 10000000045,
			"createdAt": "2024-12-24T08:58:54",
			"updatedAt": "2024-12-24T08:58:54",
			"deleteFlag": false
		}
	])
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

	.input {
		flex: 1;
		height: 100%;
		border: none;
		outline: none;
		background: none;
		font-size: 35rpx;
	}


	.function_selector {
		background-color: gold;
		width: 100%;
		height: 100rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	
	.file_top {
		background-color: green;
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
	
	.file_list {
		background-color: yellow;
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
</style>