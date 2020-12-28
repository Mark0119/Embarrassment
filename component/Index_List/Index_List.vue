<template>
	<view class="wh-100">
		<!-- <block v-for="(item,index) in IndexList" :key="index"> -->
			<view class="w-100 border-bottom pb-4 pl-2 box-ing pr-2">
				<!-- 大V信息 -->
				<view class="flex height justify-between h-100 mb-2">
					<view class="flex">
						<view>
							<image style="width:100rpx; height:100rpx" src="../../static/logo.png"></image>
						</view>
						<view class="pl-2 pt-1">
							<view><text class="font-sm mb-1">名称</text></view>
							<view><text class="text-muted font-sm">2020年12月28日16:58:54</text></view>
						</view>
					</view>
					<view class="flex attentionBox">
						<view class="attention">
							<text class="font-sm p-2">关注</text>
						</view>
					</view>
				</view>
				<!-- 标题 -->
				<view class="mb-2">
					<text>如何用手账记录你的一生？</text>
				</view>
				<!-- 图片 -->
				<view class="bg-danger w-100 rounded-2 mb-2" style="height: 400rpx;">
					<image src=""></image>
				</view>
				<!-- 操作 -->
				<view class="flex justify-between">
					<view class="flex-1 text-center>">
						<i class="iconfont ml-1 cD5D5D5">&#xe600;</i>
						<text class="ml-2 cD5D5D5">1</text>
					</view>
					<view class="flex-1 text-center">
						<i class="iconfont ml-2 cD5D5D5">&#xe701;</i>
						<text class="ml-2 cD5D5D5">踩</text>
					</view>
					<view class="flex-1 text-center">
						<i class="iconfont cD5D5D5 mr-2">&#xe719;</i>
						<text class="mr-2 cD5D5D5">1</text>
					</view><view class="flex-1 text-center">
						<i class="iconfont cD5D5D5 mr-2">&#xe637;</i>
						<text class="mr-1 cD5D5D5">分享</text>
					</view>
				</view>
			</view>
		<!-- </block> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		propo: {
			IndexList: {
				type: Array,
				default: []
			}
		},
		methods: {

		}
	}
</script>

<style>
	image {
		border-radius: 50%;
	}

	.height {
		height: 100rpx;
	}

	.attentionBox {
		padding-top: 20rpx;
		height: 80rpx;
	}

	.attention {
		border: 1px solid #F4F4F4;
		height: 34rpx;
		line-height: 34rpx;
		margin-right: 20rpx;
		padding: 2px;
		border-radius: 3px;
		background: #FD597C;
		color: #fff;
	}
</style>
