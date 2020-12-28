<template>
	<view>
		<!-- 导航占位符盒子 -->
		<view>
			<my-placeholder></my-placeholder>
		</view>
		<!-- 搜索框板块 -->
		<view class="flex">
			<view class="w-90">
				<!-- 使用vant中的搜索框组件 -->
				<van-search placeholder="搜索糗事" input-align="center" />
			</view>
			<view class="pt-3 pr-2 box-ing w-10">
				<i class="iconfont font-lg c333333" style="font-size:44rpx">&#xe742;</i>
			</view>
		</view>
		<!-- 滑动列表板块 -->
		<view>
			<van-tabs @change="onChange" active="active" animated swipeable>
				<block v-for="(item,index) in TabNavList" :key="index">
					<van-tab :title="item.classname" @change="tabs(name,title)">
						<view class="pt-2" :style="{height:`${height}px`}">
							<my-IndexList></my-IndexList>
						</view>
					</van-tab>
				</block>
			</van-tabs>
		</view>
	</view>
</template>

<script>
	// 导入自定义组件
	import placeholder from '@/component/placeholder/placeholder.vue'
	import Index_List from '@/component/Index_List/Index_List.vue'
	const height = uni.getSystemInfoSync().windowHeight; //获取可用高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight; //获取导航高度
	// 导入api
	import {
		IndexPostclass
	} from '@/api/Index.js'
	export default {
		data() {
			return {
				active: 0,
				height: height - statusBarHeight - 99,
				// 自定义导航栏数据
				TabNavList: [
					{},{},{},{},{},{},
				]
			}
		},
		onLoad() {
			IndexPostclass().then(res => {
				this.TabNavList = res.data.data.list
			})
		},
		created() {
			// 获取滑动板块数据
			IndexPostclass().then(res => {
				this.TabNavList = res.data.data.list
				console.log(123)
			})
		},
		components: {
			"my-placeholder": placeholder,
			"my-IndexList": Index_List,

		},
		methods: {
			// 滑动触发事件
			onChange(event) {
				console.log(event)
			},


		}
	}
</script>

<style>
	.van-cell__left-icon {
		position: absolute;
		top: 12rpx;
		left: 30%;
		color: #ccc;
	}
</style>
