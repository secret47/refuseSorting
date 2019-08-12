<template>
  <div class="index">
    <div class="head" style="background-image:url(/static/images/topHead.jpg);">
      <div class="inp">
        <input type="text" placeholder="搜索想要扔掉的垃圾" />
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
        <div class="tabs">
          <ul class="tabUl">
            <li
              class="names"
              v-for="item in classify"
              :key="item.id"
              :class="item.active"
              @click="changeTab(item.id)"
              :style="{background:item.background}"
            >
              {{item.name}}
              <!-- <img :src="item.imgUrl" /> -->
            </li>
          </ul>
          <div class="container">
            <div v-if="currentTab == 1">
              <div class="img_item">
                <div class="imgs">
                  <img src="/static/images/kehuishouwu-middle.png" alt srcset />
                </div>
                <div class="intro">
                  <p class="title">可回收物</p>
                  <div>可回收物就是可以再生循环的垃圾。</div>
                </div>
              </div>
            </div>
            <div v-else-if="currentTab == 2">
              <div class="img_item">
                <div class="imgs">
                  <img src="/static/images/ganlaji-middle.png" alt srcset />
                </div>
                <div class="intro">
                  <p class="title">干垃圾</p>
                  <div>干垃圾即其它垃圾,指除可回收物、有害垃圾、厨余垃圾(湿垃圾)以外的其它生活废弃物。</div>
                </div>
              </div>
            </div>
            <div v-else-if="currentTab == 3">
              <div class="img_item">
                <div class="imgs">
                  <img src="/static/images/shilaji-middle.png" alt srcset />
                </div>
                <div class="intro">
                  <p class="title">湿垃圾</p>
                  <div>湿垃圾又称为厨余垃圾、有机垃圾,即易腐垃圾,指食材废料、剩菜剩饭、中药药渣等易腐的生物质生活废弃物。</div>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="img_item">
                <div class="imgs">
                  <img src="/static/images/youhailaji-middle.png" alt srcset />
                </div>
                <div class="intro">
                  <p class="title">有害垃圾</p>
                  <div>有毒有害垃圾是指存有对人体健康有害的重金属、有毒的物质或者对环境造成现实危害或者潜在危害的废弃物</div>
                </div>
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
      classify: [
        {
          id: 1,
          name: "可回收物",
          imgUrl: require("../../../static/images/kehuishouwu-middle.png"),
          active: "active",
          background: "#215287"
        },
        {
          id: 2,
          name: "干垃圾",
          imgUrl: require("../../../static/images/ganlaji-middle.png"),
          active: "",
          background: "2e2c2a" //
        },
        {
          id: 3,
          name: "湿垃圾",
          imgUrl: require("../../../static/images/shilaji-middle.png"),
          active: "",
          background: "62423a" //
        },
        {
          id: 4,
          name: "有害垃圾",
          imgUrl: require("../../../static/images/youhailaji-middle.png"),
          active: "",
          background: "ea3e30" //
        }
      ]
    };
  },
  mounted() {
    this.setSize();
  },
  methods: {
    serach(e) {
      console.log(e, this.searchText);
    },
    setSize() {
      let windowWidth = wx.getSystemInfoSync().windowWidth;
      console.log(windowWidth);
      let itemWidth = windowWidth * 0.9 / 4;
      this.itemWidth = itemWidth;
    },
    changeTab(num) {
      let classify = this.classify;
      classify.forEach(item => {
        if (item.id == num) {
          item.active = "active";
          switch (num) {
            case 1:
              item.background = "#215287";
              break;
            case 2:
              item.background = "#2e2c2a";
              break;
            case 3:
              item.background = "#62423a";
              break;
            case 4:
              item.background = "#ea3e30";
              break;
          }
        } else {
          item.active = "";
          item.background = "";
        }
      });
      this.classify = classify;
      this.currentTab = num;
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
  src: url("//at.alicdn.com/t/font_1308468_vxfgp658jo.eot?#iefix")
      format("embedded-opentype"),
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

.inp {
  position: absolute;
  height: 50px;
  bottom: -25px;
  width: 90%;
  left: 5%;
  display: flex;
  background: #ffffff;
  border-radius: 5px;
}

.inp input {
  width: calc(100% - 50px);
  height: 50px;
  text-indent: 10px;
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
  line-height: 50px;
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
  width: 100%;
  height: 120px;
  background: #fff9f9;
  display: flex;
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
  font-size:15px;
  color:#888
}
.title{
  font-size: 30rpx;
}
</style>
