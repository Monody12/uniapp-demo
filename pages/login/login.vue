<template>
	<view class="app_out">
		<image :src="logoImgUrl" class="logo"></image>
		<text class="title">我的个人网盘</text>
		<view class="input_out">
			<image :src="userImgUrl" class="icon"></image>
			<view style="width: 7rpx;"></view>
			<input class="input" placeholder="请输入用户名" />
		</view>
		<view class="input_out">
			<image :src="passImgUrl" class="icon"></image>
			<view style="width: 7rpx;"></view>
			<input class="input" :type="showPassword ? 'text' : 'password'" placeholder="请输入密码" />
			<text class="eye-icon" @click="togglePasswordVisibility">{{ showPassword ? '🙈' : '👁' }}</text>
		</view>
		<view style="height: 20rpx;"></view>
		<view class="remember-password">
			<checkbox v-model="rememberPassword" class="checkbox" />
			<text class="remember-text">记住密码</text>
		</view>
		<view class="button-container">
			<button type="primary" class="button">登录</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const logoImgUrl = 'https://www.dluserver.cn:8080/api/files/download?fileId=636&preview=true'
	const userImgUrl = 'https://www.dluserver.cn:8080/api/files/download?fileId=638&preview=true'
	const passImgUrl = 'https://www.dluserver.cn:8080/api/files/download?fileId=637&preview=true'

	const showPassword = ref(false);
	const togglePasswordVisibility = () => {
		showPassword.value = !showPassword.value;
	};
	
	const rememberPassword = ref(false);
</script>

<style lang="scss" scoped>
	.app_out {
		display: flex;
		/* 纵向排列 */
		flex-direction: column;
		/* 子项的水平分布方式 */
		justify-content: center;
		/* 子项的垂直对齐方式 */
		align-items: center;
		/* 实现垂直居中 */
		height: 80vh;
		margin-left: 75rpx;
		margin-right: 75rpx;
	}

	.logo {
		width: 200rpx;
		height: 200rpx;
		background-color: #eeeeee;
		margin-bottom: 20rpx;
	}

	.title {
		margin: 20rpx 0;
		font-size: 60rpx;
		color: #333;
	}

	.input_out {
		display: flex;
		align-items: center;
		background: #eeeeee;
		margin: 10rpx 0;
		height: 100rpx;
		width: 100%;
		padding: 0 10rpx;
		border-radius: 5rpx;
		box-sizing: border-box;
	}

	.input {
		flex: 1;
		height: 100%;
		border: none;
		outline: none;
		background: none;
		font-size: 35rpx;
	}

	.icon {
		height: 48rpx;
		width: 48rpx;
	}

	.eye-icon {
		margin-left: 30rpx;
		font-size: 36rpx;
		cursor: pointer;
	}

	.fillMaxWidth {
		width: 100%;
	}
	
	.remember-password {
		display: flex;
		align-items: center;
		margin: 10rpx 0;
		width: 100%;
	}
	
	.remember-text {
		font-size: 35rpx;
		color: #333;
	}

	.button-container {
		width: 100%;
		margin-top: 20rpx;
	}

	.button {
		width: 100%;
		height: 100rpx;
		font-size: 40rpx;
		border-radius: 5rpx;
		background-color: #007bff;
		color: white;
		border: none;
		/* 为了使登录按钮中的文字垂直居中，需要添加以下内容 */
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>