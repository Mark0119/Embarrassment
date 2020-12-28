<template>
	<view>
		<view>
			<my-placeholder></my-placeholder>
		</view>
		首页
	</view>
</template>

<script>
	// 导入自定义组件
	import placeholder from '@/component/placeholder/placeholder.vue'
	export default {
		data() {
			return {}
		},
		onLoad() {
		},
		components: {
			"my-placeholder": placeholder
		},
		methods: {
		}
	}
</script>

<style>

</style>
