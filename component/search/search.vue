<template>
	<view class="search">
		<!-- 使用vant中的搜索框组件 -->
		<van-search :placeholder="searchText" input-align="center" />
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			searchText: {
				type: String,
				default: '搜索话题'
			}
		},
		methods: {

		}
	}
</script>

<style>
/* 搜索框图标定位 */
	.search>>>.van-cell__left-icon {
		position: absolute;
		margin-left: 30%;
		color: #ccc;
	}
</style>
