<template>
	<view>
		<view>页面1</view>
		<image :src="picUrl" mode="heightFix"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picUrl : 'https://www.dluserver.cn:8080/api/files/download?fileId=253&token=8c2a1c731b464cb88f6131787a7b99a3&preview=true',
				
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>