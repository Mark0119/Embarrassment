<template>
	<view class="wh-100">
		<!-- 导航占位符盒子 -->
		<view>
			<my-placeholder></my-placeholder>
		</view>
		<!-- 动态标题 -->
		<view class="mb-2 wh-100" :style="{height:`${height}px`}">
			<view class="poasd">
				<view class="flex wh-100 justify-center align-center">
					<view class="mr-1 title" :style="{color:`${color1}`}">关注</view>
					<view class="ml-1 title" :style="{color:`${color2}`}">话题</view>
				</view>
			</view>
			<van-tabs @change="onChange" class="wh-100" active="active" animated swipeable>
				<van-tab>
					<view class="pt-2" :style="{height:`${height}px`}">
						<!-- 列表 -->
						<my-IndexList :attion="attion"></my-IndexList>
					</view>
				</van-tab>
				<van-tab>
					<view class="pt-2" :style="{height:`${height}px`}">
						<view class="flex justify-between pl-2 pr-2">
							<view><text>热门分类</text></view>
							<view><text class="font-sm">更多</text><i class="iconfont"></i></view>
						</view>
						<view class="border-bottom m-2">
							<my-tabsNav :TabNavList="TabNavList" :CircleListShow="true"></my-tabsNav>
						</view>
					</view>
				</van-tab>
			</van-tabs>
		</view>
	</view>
</template>

<script>
	// 导入自定义组件
	import placeholder from '@/component/placeholder/placeholder.vue'
	import Index_List from '@/component/Index_List/Index_List.vue'
	import tabsNav from '@/component/tabs-nav/tabs-nav.vue'
	const Width = uni.getSystemInfoSync().windowWidth; //获取可用宽
	const height = uni.getSystemInfoSync().windowHeight; //获取可用高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight; //获取导航高度
	// 导入api
	import {CircleTopicclass} from '@/api/circle.js'
	export default {
		data() {
			return {
				// 关注按钮是否存在
				attion: false,
				height: height-statusBarHeight-54,
				Width:Width,
				active: 0,
				color1:'#FE5B7D',
				color2:"#000000",
				TabNavList: [{}, {}, {}, {}, {}, {}],
			}
		},
		onLoad() {
			// 请求数据
			CircleTopicclass().then(res => {
				this.TabNavList = res.data.data.list
			})
		},
		components: {
			"my-placeholder": placeholder,
			"my-tabsNav": tabsNav,
			"my-IndexList":Index_List
		},
		methods: {
			// 滑动触发事件
			onChange(event) {
				const index=event.detail.index
				if(index==1){
					this.color1=this.color2
					this.color2='#FE5B7D'
				}else{
					this.color1='#FE5B7D'
					this.color2='#000000'
				}
			},
			

		}
	}
</script>

<style>
.poasd{
	position: absolute;
	width: 100%;
	top:45px;
	z-index: 99;
}
</style>
