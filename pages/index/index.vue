<template>
	<view>
		<!-- 导航占位符盒子 -->
		<view>
			<my-placeholder></my-placeholder>
		</view>
		<!-- 搜索框板块 -->
		<view class="flex">
			<view class="w-90">
				<my-search :searchText="searchText"></my-search>
			</view>
			<view class="pt-3 pr-2 box-ing w-10">
				<i class="iconfont font-lg c333333" style="font-size:44rpx">&#xe742;</i>
			</view>
		</view>
		<!-- 滑动列表板块 -->
		<view>
			<my-tabsNav :IndexList="IndexList" :TabNavList="TabNavList" :IndexListShow="true" :attion="attion"></my-tabsNav>
		</view>
	</view>
</template>

<script>
	// 导入自定义组件
	import placeholder from '@/component/placeholder/placeholder.vue'
	import search from '@/component/search/search.vue'
	import tabsNav from '@/component/tabs-nav/tabs-nav.vue'
	// 导入api
	import {
		IndexPostclass,
		IndexPostList
	} from '@/api/Index.js'
	export default {
		data() {
			return {
				// 搜索框传参
				searchText:'搜索糗事',
				// 首页导航栏数据
				TabNavList: [{}, {}, {}, {}, {}, {}],
				// 首页列表数据
				IndexList:[],
				// 关注按钮是否存在
				attion: true
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
			})
			// 获取列表
			IndexPostList().then(res=>{
				this.IndexList = res.data.data.list
			})
		},
		components: {
			"my-placeholder": placeholder,
			"my-tabsNav": tabsNav,
			"my-search": search,
		},
		methods: {
		}
	}
</script>

<style>
</style>
