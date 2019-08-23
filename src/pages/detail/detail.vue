<template>
	<div class="bg" v-show="showContent">
		<div class="top">
			<span>{{searchData.name}}</span>
		</div>
		<div class="detail">
			<div class="detailCont">
				<div class="intro">
					<div class="introImg">
						<img class="midVerti" :style="{height:imgHeight+'px'}" :src="searchData.pic" alt="">
					</div>
					<div class="introText midVerti" :style="{height:imgHeight+'px'}">
						<p class="introTitle">{{classfiyData.name}}是指：</p>
						<div class="introCont">{{searchData.notes}}</div>
					</div>
				</div>
				<div class="item">
					<p class="pTitle">{{classfiyData.name}}主要包括</p>
					<div class="itemContain">
						{{classfiyData.contain}}
					</div>
				</div>
				<div class="item">
					<p class="pTitle">{{classfiyData.name}}投放要求</p>
					<div class="itemContain">
						<ul>
							<li v-for="item in classfiyData.reques" :key="item.id">
								<div class="icon midVerti"></div>
								<div class="text">{{item.text}}</div>
							</li>
						</ul>
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
				imgHeight: 0,
				classfiyDetail: [{
						name: "干垃圾",
						contain: "餐巾纸、卫生间用纸、尿不湿、猫砂、狗尿垫、污损纸张、烟蒂、干燥剂、污损塑料、尼龙制品、编织袋、防碎气泡膜大骨头、硬贝壳、硬果壳",
						reques: [{
								id: 1,
								text: "禁止混投。"
							},
							{
								id: 2,
								text: "干垃圾应投入干垃圾收集容器，并保持周边环境整洁"
							},
							{
								id: 3,
								text: "凡未列入本目录或成分复杂难以分辨类别的生活垃圾,投入干垃圾收集容器。"
							}
						]
					},
					{
						name: "湿垃圾",
						contain: "食材废料：谷物及其加工食品（米、米饭、面、面包、豆类）、剩菜剩饭：鱼骨、碎骨、过期食品：糕饼、糖果、花卉植物：家养绿植",
						reques: [{
								id: 1,
								text: "湿垃圾投放需破袋处理。"
							},
							{
								id: 2,
								text: "湿垃圾应从产生时就与其他湿垃圾应从产生时就与其他品种垃圾分开收集，投放前尽量沥干水分。"
							},
							{
								id: 3,
								text: "有包装物的湿垃圾应将包装物去除后分类投放，包装物应投放到对应的可回收物或干垃圾收集容器。"
							}
						]
					},
					{
						name: "有害垃圾",
						contain: "废电池、废日光灯管、废水银温度计、过期药品等制",
						reques: [{
								id: 1,
								text: "应注意轻放"
							},
							{
								id: 2,
								text: "废灯管等易破损的有害垃圾应连带包装或包裹后投放;"
							},
							{
								id: 3,
								text: "废弃药品宜连带包装一并投放;杀虫剂等压力罐装容器，应排空内容物后投放;"
							}
						]
					},
					{
						name: "可回收垃圾",
						contain: "主要包括废纸、塑料、玻璃、金属和纺织物五大类生活垃圾，有害垃圾、电子/电器垃圾和电池三类特殊危害垃圾以及废弃家具类垃圾",
						reques: [{
								id: 1,
								text: "可直接卖给废品回收站"
							},
							{
								id: 2,
								text: "可直接投放在“可回收”垃圾桶中"
							},
						]
					}
				],
				classfiyData: {},
				searchData: {},
				showContent: false
			}
		},
		mounted() {
			wx.showLoading({
				title: "查询中..."
			})
			let options = this.$root.$mp.query;
			let currentSearch =JSON.parse(options.data)
			currentSearch.pic = this.$http.host + currentSearch.pic
			this.searchData = currentSearch
			this.setStyle(currentSearch.pic);
			let classfiyData = this.classfiyDetail[currentSearch.type - 1]
			this.classfiyData = classfiyData
			setTimeout(() => {
				this.showContent = true
				wx.hideLoading()
			}, 500)
			// console.log(currentSearch,classfiyData,'------------')// wx.hideLoading()
		},
		methods: {
			setStyle(pic) {
				wx.getImageInfo({
					src: pic,
					success: res => {
						console.log(res);
						let rate = res.width / res.height;
						let imgHeight = 100 / rate
						this.imgHeight = imgHeight
					}
				})
			}
		}
	}
</script>

<style>
	.bg {
		width: 100%;
		height: 100%;
		background: #F8F8F8;
	}

	.top {
		width: 100%;
		height: 200px;
		background: #000000;
		text-align: center;
	}

	.top span {
		display: inline-block;
		font-size: 40px;
		position: relative;
		top: 30%;
		color: #FFFFFF;
	}

	.detail {
		width: 90%;
		height: 80%;
		background: #FFFFFF;
		position: absolute;
		top: 20%;
		left: 5%;
		border-radius: 10px;
	}

	.detailCont {
		width: 90%;
		height: 90%;
		position: absolute;
		margin: auto;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border: 1px dashed #888888;
		border-radius: 20px;
	}

	.intro {
		width: 95%;
		height: 150px;
		display: flex;
		margin: 0 auto;
	}

	.introImg {
		width: 130px;
		height: 150px;
		text-align: center
	}

	.introImg img {
		width: 100px;
		height: 100%;

	}

	.introText {
		width: calc(100% - 140px);
		padding-left: 10px;
		font-size: 14px;
	}

	.introTitle {
		width: 100%;
		height: 40px;
		line-height: 40px;
	}

	.item {
		width: 100%;
	}

	.item .pTitle {
		height: 40px;
		line-height: 40px;
		color: #FFFFFF;
		background: #000000;
		text-align: center;
	}

	.item .itemContain {
		width: 95%;
		margin: 0 auto;
		min-height: 100px;
		font-size: 14px;
	}

	.item ul li {
		min-height: 30px;
		line-height: 20px;
		list-style-type: square;
		display: flex;
	}

	.icon {
		display: inline-block;
		width: 5px;
		height: 5px;
		background: #000000;
		margin-top: 15px;
	}

	.text {
		width: calc(100% - 20px);
		min-height: 20px;
		padding-left: 10px;
		line-height: 20px;
	}
</style>
