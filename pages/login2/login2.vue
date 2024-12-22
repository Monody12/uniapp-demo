<template>
	<view class="app_out">
		<image :src="logoImgUrl" class="logo"></image>
		<text class="title">登录我的个人网盘</text>
		<view class="input_out">
			<image :src="userImgUrl" class="icon"></image>
			<input placeholder="请输入用户名" class="input" />
		</view>
		<view class="input_out">
			<image :src="passImgUrl" class="icon"></image>
			<input 
				placeholder="请输入密码" 
				class="input" 
				:type="showPassword ? 'text' : 'password'"
			/>
			<text class="eye-icon" @click="togglePasswordVisibility">{{ showPassword ? '🙈' : '👁' }}</text>
		</view>
		<view class="button-container">
			<button type="primary" class="button">登录</button>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const logoImgUrl = 'https://www.dluserver.cn:8080/api/files/download?fileId=636&preview=true';
const userImgUrl = 'https://www.dluserver.cn:8080/api/files/download?fileId=638&preview=true';
const passImgUrl = 'https://www.dluserver.cn:8080/api/files/download?fileId=637&preview=true';

const showPassword = ref(false);
const togglePasswordVisibility = () => {
	showPassword.value = !showPassword.value;
};
</script>

<style lang="scss" scoped>
.app_out {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	padding: 20px;
	box-sizing: border-box;
}

.logo {
	width: 100px;
	height: 100px;
	background-color: #eeeeee;
	margin-bottom: 20px;
}

.title {
	margin: 20px 0;
	font-size: 18px;
	color: #333;
}

.input_out {
	display: flex;
	align-items: center;
	background: #eeeeee;
	margin: 10px 0;
	height: 50px;
	width: 100%;
	padding: 0 10px;
	border-radius: 5px;
	box-sizing: border-box;
}

.icon {
	height: 24px;
	width: 24px;
	margin-right: 10px;
}

.input {
	flex: 1;
	height: 100%;
	border: none;
	outline: none;
	background: none;
	font-size: 16px;
}

.eye-icon {
	margin-left: 10px;
	font-size: 18px;
	cursor: pointer;
}

.button-container {
	width: 100%;
	margin-top: 20px;
}

.button {
	width: 100%;
	height: 50px;
	font-size: 16px;
	border-radius: 5px;
	background-color: #007bff;
	color: white;
	border: none;
	/* 为了使登录按钮中的文字垂直居中，需要添加以下内容 */
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
