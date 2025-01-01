<template>
	<view class="file-preview">
		<text selectable>{{decodeFileName}}</text>
		<template v-if="displayType == 'Image'">
			<!-- 图片预览 -->
			<image :src="decodeUrl" mode="widthFix" @click="previewImage" class="preview-image" />
		</template>
		<template v-else-if="displayType == 'Media'">
			<!-- 视频预览 -->
			<template v-if="videoMode == 'compatibility'">
				<button v-on:click="videoMode = 'standard'" type="default">标准模式打开</button>
				<video id="myVideo" class="preview-video" @error="videoErrorCallback" :title="decodeFileName" controls
					:src="decodeUrl"></video>
			</template>
			<template v-else>
				<web-view :src="decodeUrl"></web-view>
			</template>
		</template>
		<template v-else-if="displayType == 'Document'">
			<!-- 文档预览 -->
			<template>
				<web-view :src="decodeUrl"></web-view>
			</template>
		</template>
		<template v-else>
			<text>暂不支持该文件类型的预览</text>
		</template>
	</view>
</template>

<script>
	import { getFileType } from '@/constants/config'
	export default {
		name: 'FilePreview',
		props: {
			// 文件URL
			fileUrl: {
				type: String,
				required: true
			},
			// 文件类型(mineType)
			fileType: {
				type: String,
				required: true
			},
			// 文件名
			fileName: {
				type: String,
				default: ''
			}
		},
		data: function() {
			return {
				// 视频播放模式（默认为兼容compatibility，可以切换为标准standard）
				videoMode: "compatibility",
				// 测试用视频URL
				testVideo: "",
				
			}
		},
		computed: {
			// 解码后的URL
			decodeUrl() {
				return decodeURIComponent(this.fileUrl)
			},
			decodeFileName() {
				return decodeURIComponent(this.fileName)
			},
			displayType() {
				return getFileType(this.fileType)
			}
		},

		methods: {
			// 图片预览
			previewImage() {
				uni.previewImage({
					urls: [this.decodeUrl],
					current: 0
				})
			},
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
		}
	}
</script>

<style scoped>
	.file-preview {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.preview-image {
		width: 100%;
		height: 400rpx;
	}

	.preview-video {
		width: 80vw;
		height: 80vh;
	}

	.preview-audio {
		width: 100%;
		margin: 20rpx 0;
	}

	.preview-document {
		width: 100%;
		height: 800rpx;
	}

	.unsupported-file {
		padding: 30rpx;
		text-align: center;
		color: #999;
	}
</style>