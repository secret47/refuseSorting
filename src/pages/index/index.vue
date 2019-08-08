<template>
	<div class="index">
		<div class="head" style="background-image:url(/static/images/topHead.jpg);">
			<div class="inp">
				<input type="text" placeholder="搜索想要扔掉的垃圾">
				<button>
					<i class="iconfont">&#xe649;</i>
				</button>
			</div>
		</div>
		<div class="other">
			<div class="hot">
				<i class="iconfont">&#xe621;</i>
			</div>
			<div class="catalog">
				<van-tree-select :items="items" :main-active-index="mainActiveIndex" :active-id="activeId"
				 bind:click-nav="onClickNav" bind:click-item="onClickItem" />
			</div>

		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				searchText: "",
				items: [{

					// 导航名称
					text: '',
					// 禁用选项
					disabled: false,
					// 该导航下所有的可选项
					children: [{
							// 名称
							text: '温州',
							// id，作为匹配选中状态的标识
							id: 1,
							// 禁用选项
							disabled: true
						},
						{
							text: '杭州',
							id: 2
						}
					]
				}],
			}
		},
		methods: {
			serach(e) {
				console.log(e, this.searchText)
			}
		},

		created() {
			// let app = getApp()
		}
	}
</script>

<style scoped>
	@font-face {
		font-family: 'iconfont';
		/* project id 1308468 */
		src: url('//at.alicdn.com/t/font_1308468_vxfgp658jo.eot');
		src: url('//at.alicdn.com/t/font_1308468_vxfgp658jo.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1308468_vxfgp658jo.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1308468_vxfgp658jo.woff') format('woff'),
			url('//at.alicdn.com/t/font_1308468_vxfgp658jo.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1308468_vxfgp658jo.svg#iconfont') format('svg');
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

	.inp {
		position: absolute;
		height: 50px;
		bottom: -25px;
		width: 90%;
		left: 5%;
		display: flex;
		background: #FFFFFF;
		border-radius: 5px;
	}

	.inp input {
		width: calc(100% - 50px);
		height: 50px;
		text-indent: 10px;
		line-height: 50px;
		;
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
		line-height: 50px;
	}
</style>
