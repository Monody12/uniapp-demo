<script>
	import { setupInterceptors } from './utils/request.js';
	export default {
		onLaunch: function() {
			console.log('App Launch')
			setupInterceptors();
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
