<template>
	<div>
		<ul class="search">
			<li v-for="item in searchData" :key="item.id" @click="getDetail(item.id)">{{item.name}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				searchData: []
			}
		},
		mounted() {
			let options = this.$root.$mp.query;
			this.searchData = JSON.parse(options.data)
			console.log(this.searchData)
		},
		methods: {
			//得到垃圾的最终详情
			getDetail(num) {
				this.$http.get({
					url: '/search/detail',
					data: {
						id: num
					},
				}).then(res => {
					mpvue.redirectTo({
						url: '/pages/detail/main?data='+JSON.stringify(res)
						
					})
				})
			}
		}
	}
</script>

<style scoped>
	.search {
		width: 95%;
		list-style: none;
		margin: 0 auto;
	}

	.search li {
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		text-indent: 20px;
		border-bottom: 1px solid #DEDEDE;
	}
</style>
