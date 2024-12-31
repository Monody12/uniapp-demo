<template>
	<view class="file-preview">
		<text>{{decodeFileName}}</text>
		<!-- 图片预览 -->
		<!-- <image :src="decodeUrl" mode="widthFix" @click="previewImage" class="preview-image" /> -->
		<!-- 视频预览 -->
		<template v-if="videoMode == 'compatibility'">
			<button v-on:click="videoMode = 'standard'" type="default">标准模式播放</button>
			<video id="myVideo" class="preview-video" @error="videoErrorCallback" :title="decodeFileName" controls
				src="https://www.dluserver.cn:8080/api/files/download?fileId=668&preview=true"></video>
		</template>
		<template v-else>
			<web-view src="https://www.dluserver.cn:8080/api/files/download?fileId=668&preview=true"></web-view>
		</template>
		
		


		<!-- 不支持预览 -->
		<!--    <view  class="unsupported-file">
      <text>暂不支持该文件类型的预览</text>
    </view> -->
	</view>
</template>

<script>
	export default {
		name: 'FilePreview',
		props: {
			// 文件URL
			fileUrl: {
				type: String,
				required: true
			},
			// 文件类型
			fileType: {
				type: String,
				required: true,
				validator: function(value) {
					return ['image', 'video', 'audio', 'document'].indexOf(value) !== -1
				}
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

			// 检测文件类型
			detectFileType(fileName) {
				const extension = fileName.split('.').pop().toLowerCase()

				// 图片格式
				if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension)) {
					return 'image'
				}

				// 视频格式
				if (['mp4', 'mov', 'avi', 'mkv'].includes(extension)) {
					return 'video'
				}

				// 音频格式
				if (['mp3', 'wav', 'ogg', 'aac'].includes(extension)) {
					return 'audio'
				}

				// 文档格式
				if (['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'].includes(extension)) {
					return 'document'
				}

				return 'unsupported'
			}
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