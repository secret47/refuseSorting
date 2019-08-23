<template>
	<div class="index">
		<div class="head">
			<img src="/static/images/topHead.jpg" alt="">
			<div class="inp">
				<input type="text" v-model="searchText" placeholder="搜索想要扔掉的垃圾" placeholder-class="inpp" />
				<button @click="search">
					<i class="iconfont">&#xe649;</i>
				</button>
			</div>
		</div>
		<div class="other">
			<div class="hot">
				<i class="iconfont">&#xe621;</i>
				<div class="hotCont">
					<span v-for="item in showData" :key="item.id">{{item.name}}</span>
				</div>
			</div>
			<div class="catalog">
				<div class="tabs">
					<ul class="tabUl">
						<li class="names" v-for="item in classify" :key="item.id" :class="item.active" @click="getDetail(item.id)" :style="{background:item.background}">
							{{item.name}}
						</li>
					</ul>
					<div class="container">
						<div class="img_item">
							<div class="imgs">
								<img :src="showContent.pic" alt srcset />
							</div>
							<div class="intro">
								<p class="title">{{showContent.name}}</p>
								<div>{{showContent.notes}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				searchText: "",
				itemWidth: "",
				currentTab: 1,
				showContent: [],
				showData: [],
				classify: []
			};
		},
		mounted() {
			this.setSize();
			this.getHot();
			this.getClassfiy();
			this.getDetail(1)
		},
		methods: {
			getClassfiy() {
				this.$http
					.get({
						url: "/type"
					})
					.then(res => {
						res.forEach(item => {
							item.active = ""
						})
						res[0].active = "active"
						res[0].background = "#2e2c2a"
						this.classify = res;
					})
					.catch(err => {});
			},
			//得到最火热的几个
			getHot() {
				this.$http
					.get({
						url: "/hot"
					})
					.then(res => {
						this.showData = res.slice(0, 5)

					})
					.catch(err => {});
			},
			serach(e) {
				console.log(e, this.searchText);
			},
			setSize() {
				let windowWidth = wx.getSystemInfoSync().windowWidth;
				console.log(windowWidth);
				let itemWidth = windowWidth * 0.9 / 4;
				this.itemWidth = itemWidth;
			},
			//得到当前的背景颜色
			getBgColor(num) {
				let bgColor = ""
				switch (num) {
					case 1:
						bgColor = "#2e2c2a"
						break;
					case 2:
						bgColor = "#62423a"
						break;
					case 3:
						bgColor = "#ea3e30"
						break;
					case 4:
						bgColor = "#215287"
						break;
				}
				return bgColor;
			},
			//得到详情
			getDetail(num) {
				let classify = this.classify;
				classify.forEach(item => {
					if (item.id == num) {
						item.background = this.getBgColor(num)
						item.active = "active"
					} else {
						item.active = ""
						item.background = ""
					}
				})
				this.$http.get({
					url: '/type/detail',
					data: {
						id: num
					}
				}).then(res => {
					res.pic = this.$http.host + res.pic
					console.log(res)
					this.showContent = res

				}).catch(err => {

				})
			},
			search() {
				wx.showLoading({
					title: "查询中..."
				})
				this.$http.get({
					url: '/search',
					data: {
						content: this.searchText
					}
				}).then(res => {
					wx.hideLoading();
					mpvue.navigateTo({
						url: '/pages/search/main?data=' + JSON.stringify(res)

					})
				})
			}
		},

		created() {
			// let app = getApp()
		}
	};
</script>

<style scoped>
	@font-face {
		font-family: "iconfont";
		/* project id 1308468 */
		src: url("//at.alicdn.com/t/font_1308468_vxfgp658jo.eot");
		src: url("//at.alicdn.com/t/font_1308468_vxfgp658jo.eot?#iefix") format("embedded-opentype"),
			url("//at.alicdn.com/t/font_1308468_vxfgp658jo.woff2") format("woff2"),
			url("//at.alicdn.com/t/font_1308468_vxfgp658jo.woff") format("woff"),
			url("//at.alicdn.com/t/font_1308468_vxfgp658jo.ttf") format("truetype"),
			url("//at.alicdn.com/t/font_1308468_vxfgp658jo.svg#iconfont") format("svg");
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}

	.head {
		background: #dedede;
		height: 140px;
		position: relative;
		background-size: 100% 100%;
	}

	.head img {
		width: 100%;
		height: 140px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		;
	}

	.inp {
		position: absolute;
		height: 50px;
		bottom: -25px;
		width: 90%;
		left: 5%;
		display: flex;
		background: #ffffff;
		border-radius: 5px;
		z-index: 111;
		;
	}

	.inp input {
		width: calc(100% - 50px);
		height: 50px;
		line-height: 50px;
		padding-left: 10px;
	}


	button::after {
		border: 0;
	}

	.inp button {
		width: 50px;
		height: 50px;
		line-height: 50px;
		background: transparent;
	}

	.van-search {
		border-radius: 5px;
	}

	.imgs {
		width: 100%;
	}

	.other {
		width: 90%;
		margin: 0 auto;
		margin-top: 30px;
	}

	.hot {
		height: 50px;
		display: flex;
		line-height: 50px;
	}

	.hot .iconfont {
		width: 30px;
		color: red;
	}

	.hot .hotCont {
		width: calc(100% -30px);
		display: flex;
	}

	.hot .hotCont span {
		display: inline-block;
		margin-right: 5px;
		font-size: 13px;
	}

	.tabUl {
		width: 100%;
		height: 50px;
		display: flex;
		background: #dedede;
	}

	.tabUl li {
		width: 25%;
		text-align: center;
		height: 50px;
		line-height: 50px;
		font-size: 14px;
	}

	.tabUl li.active {
		border-top: 5px solid red;
		margin-top: -10rpx;
		color: #ffffff;
	}

	.container {
		width: 100%;
		height: 300px;
	}

	.img_item {
		width: 90%;
		height: 120px;
		background: #ffffff;
		display: flex;
		padding: 0 5%;
	}

	.img_item .imgs {
		width: 80px;
		height: 80px;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}

	.img_item .imgs img {
		width: 100%;
		height: 100%;
	}

	.img_item .intro {
		width: calc(100% - 180rpx);
		height: 80px;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		padding-left: 10px;
	}

	.img_item .intro div {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		font-size: 15px;
		color: #888;
	}

	.title {
		font-size: 30rpx;
	}
</style>
