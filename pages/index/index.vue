<template>
	<view>
		<image :src="picUrl" mode="widthFix"></image>
		<navigator url="../page1/page1" open-type="navigate">
			<button type="default">跳转到page1</button>
		</navigator>
		<navigator url="../page2/page2" open-type="navigate">
			<button type="default">跳转到page2</button>
		</navigator>
		<navigator url="../login/login" open-type="navigate">
			<button type="default">跳转到登录页</button>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picUrl:'https://www.dluserver.cn:8080/api/files/download?fileId=567&token=28b0b144599343d0ab634d7040bb5dc5&preview=true',
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.layout {
		border: 2px solid red;

		.box1 {
			border: 1px solid gold;
		}

		.box2 {
			border: 1px solid darkblue;
		}
	}
</style>