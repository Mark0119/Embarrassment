<template>
	<view>
		<!-- 导航占位符盒子 -->
		<view>
			<my-placeholder></my-placeholder>
		</view>
		动态
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
