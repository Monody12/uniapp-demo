<template>
	<view class="app_out">
		<view class="input_out">
			<view style="width: 15rpx;"></view>
			<image :src="menuImgUrl" class="icon"></image>
			<view style="width: 15rpx;"></view>
			<input class="input" placeholder="搜索我的个人网盘"/>
		</view>
		
	</view>
</template>

<script setup>
	import { ref, reactive } from 'vue'
	
	const menuImgUrl = 'https://www.dluserver.cn:8080/api/files/download?fileId=643'
	
	const fileInfo = ref([
        {
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
	}
	
	.input_out {
		display: flex;
		align-items: center;
		background: #eeeeee;
		margin: 10rpx 0;
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
</style>
