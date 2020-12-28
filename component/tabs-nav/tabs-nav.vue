<template>
	<view>
		<van-tabs @change="onChange" active="active" animated swipeable>
			<block v-for="(item,index) in TabNavList" :key="index">
				<van-tab :title="item.classname">
					<view class="pt-2" :style="{height:`${height}px`}">
						<!-- 首页 -->
						<block v-if="IndexListShow==true">
							<my-IndexList :IndexList="IndexList" :attion="attion"></my-IndexList>
						</block>
						<!-- 动态》话题 -->
						<block v-if="CircleListShow==true">
							<my-CircleList></my-CircleList>
						</block>

					</view>
				</van-tab>
			</block>
		</van-tabs>
	</view>
</template>

<script>
	import Index_List from '@/component/Index_List/Index_List.vue'
	import Circle_List from '@/component/Circle_List/Circle_List.vue'
	const height = uni.getSystemInfoSync().windowHeight; //获取可用高度
	const statusBarHeight = uni.getSystemInfoSync().statusBarHeight; //获取导航高度
	export default {
		data() {
			return {
				active: 0,
				height: height - statusBarHeight - 99,
			}
		},
		props: {
			TabNavList: {
				type: Array,
				default: []
			},
			attion: {
				type: Boolean,
				default: false
			},
			// 首页展示
			IndexListShow: {
				type: Boolean,
				default: false
			},
			// 首页数据
			IndexList:{
				type: Array,
				default: []
			},
			// 动态展示
			CircleListShow: {
				type: Boolean,
				default: false
			}
		},
		components: {
			"my-IndexList": Index_List,
			"my-CircleList": Circle_List,
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

</style>
