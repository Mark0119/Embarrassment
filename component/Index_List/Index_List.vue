<template>
	<view class="wh-100">
		<block v-for="(item,index) in IndexList" :key="index">
			<view class="w-100 border-bottom pb-4 pl-2 box-ing pr-2">
				<!-- 大V信息 -->
				<view class="flex height justify-between h-100 mb-2">
					<view class="flex">
						<view class="p-2">
							<image class="rounded-50" style="width:80rpx; height:80rpx " :src="item.user.userpic"></image>
						</view>
						<view class="pl-2 pt-1">
							<view><text class="font-sm mb-1">{{item.user.username}}</text></view>
							<view><text class="text-muted font-sm">{{item.create_time|formatDate}}</text></view>
						</view>
					</view>
					<view class="flex attentionBox mt-1" v-if="attion==true">
						<view class="attention">
							<text class="font-sm p-2">关注</text>
						</view>
					</view>
				</view>
				<!-- 标题 -->
				<view class="mb-2">
					<text>{{item.content}}</text>
				</view>
				<!-- 图片 -->
				<view class="bg-danger w-100 rounded-2 mb-3" style="height: 400rpx;">
					<image class="wh-100" :src="item.titlepic"></image>
				</view>
				<!-- 操作 -->
				<view class="flex justify-between">
					<view class="flex-1 text-center>">
						<i class="iconfont ml-1 cD5D5D5">&#xe600;</i>
						<text class="ml-2 cD5D5D5">支持</text>
					</view>
					<view class="flex-1 text-center">
						<i class="iconfont ml-2 cD5D5D5">&#xe701;</i>
						<text class="ml-2 cD5D5D5">反对</text>
					</view>
					<view class="flex-1 text-center">
						<i class="iconfont cD5D5D5 mr-2">&#xe719;</i>
						<text class="mr-2 cD5D5D5">评论</text>
					</view>
					<view class="flex-1 text-center">
						<i class="iconfont cD5D5D5 mr-2">&#xe637;</i>
						<text class="mr-1 cD5D5D5">分享</text>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			console.log()
		},
		props: {
			// 首页数据
			IndexList: {
				type: Array,
				default: []
			},
			attion: {
				type: Boolean,
				default: true
			},
		},
		methods: {

		},
		filters: {
			formatDate: function(value) {
				var date = new Date(value); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = date.getDate() + ' ';
				var h = date.getHours() + ':';
				var m = date.getMinutes() + ':';
				var s = date.getSeconds();
				return Y + M + D + h + m + s;
			}
		},
	}
</script>

<style>
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
