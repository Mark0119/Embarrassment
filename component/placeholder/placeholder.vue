<template>
	<view :style="{background:`${color}`}">
		<view :style="{height:`${statusBarHeight}px`}">
		</view>
	</view>
</template>

<script>
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	export default {
		data() {
			return {
				statusBarHeight: statusBarHeight
			}
		},
		props: {
			color:{//接收的背景色
				type:String,
				default:'#00000000'
			}
		}
	}
</script>

<style>

</style>
