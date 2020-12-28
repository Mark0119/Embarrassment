<template>
	<view class="border-top pt-3">
		<!-- 搜索框 -->
		<view class="w-100">
			<my-search :searchText="searchText"></my-search>
		</view>
		<!-- 轮播图 -->
		
		<!-- 最近更新 -->
	</view>
</template>

<script>
	
	import search from '@/component/search/search.vue'
	export default {
		data() {
			return {
				searchText:'搜索话题'
			}
		},
		components: {
			"my-search": search
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
