<template>
	<view>
		<web-view fullscreen="false" webview-styles="webviewStyles"
			src="https://www.dluserver.cn:8080/api/files/download?fileId=225&preview=true"></web-view>
		<!-- <web-view fullscreen="false"
			src="https://www.dluserver.cn:8080/api/files/download?fileId=635&token=c36d55c4459c423ba2338c909bd49905&preview=true"></web-view> -->
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	// const innerAudioContext = uni.createInnerAudioContext();
	// innerAudioContext.autoplay = true;
	// innerAudioContext.src = 'https://web-ext-storage.dcloud.net.cn/uni-app/ForElise.mp3';
	// innerAudioContext.onPlay(() => {
	//   console.log('开始播放');
	// });
	// innerAudioContext.onError((res) => {
	//   console.log(res.errMsg);
	//   console.log(res.errCode);
	// });
	var num = ref(0)
	var webviewStyles = {
		progress: {
			color: '#FF3333'
		},
		width: '100px',
		height: '100px'
	}
	var current = {
		poster: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/music-a.png',
		name: '致爱丽丝',
		author: '暂无',
		src: 'https://web-ext-storage.dcloud.net.cn/uni-app/ForElise.mp3',
	}
	var audioAction = {
		method: 'pause'
	}
	setInterval(function() {
		num.value++
	}, 1000)
</script>

<style lang="scss">

</style>