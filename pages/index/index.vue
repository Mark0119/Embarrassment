<template>
	<view>
		<!-- 导航占位符盒子 -->
		<view>
			<my-placeholder></my-placeholder>
		</view>
		<!-- 搜索框板块 -->
		<view class="flex">
			<view class="pt-3 pl-2 box-ing w-10">
				<i class="iconfont font-lg cFF9A22" style="font-size:44rpx">&#xe609;</i>
			</view>
			<view class="w-90">
				<!-- 使用vant中的搜索框组件 -->
				<van-search placeholder="搜索糗事" input-align="center" />
			</view>
			<view class="pt-3 pr-2 box-ing w-10">
				<i class="iconfont font-lg c333333" style="font-size:44rpx">&#xe653;</i>
			</view>
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
		onLoad() {},
		components: {
			"my-placeholder": placeholder
		},
		methods: {}
	}
</script>

<style>
	.van-cell__left-icon {
		position: absolute;
		top:12rpx;
		left: 30%;
		color:#ccc;
	}
</style>
