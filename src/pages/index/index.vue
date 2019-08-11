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
              v-bind:style="{width:itemWidth+'px',height:itemWidth+'px'}"
              v-for="item in classify"
              :key="item.id"
            >
              <img :src="item.imgUrl" />
              <!-- {{item.name}} -->
            </li>
          </ul>
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
      classify: [
        {
          id: 1,
          name: "可回收垃圾",
          imgUrl: require("../../../static/images/kehuishouwu-middle.png"),
          active: "active",
          background: ""
        },
        {
          id: 2,
          name: "干垃圾",
          imgUrl: require("../../../static/images/ganlaji-middle.png"),
          active: ""
        },
        {
          id: 3,
          name: "湿垃圾",
          imgUrl: require("../../../static/images/shilaji-middle.png"),
          active: ""
        },
        {
          id: 4,
          name: "有害垃圾",
          imgUrl: require("../../../static/images/youhailaji-middle.png"),
          active: ""
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
  height: 100px;
  display: flex;
  background: #ffffff;
}
.tabUl li {
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.tabUl li img {
  width: 90%;
  height: 90%;
}
.tabUl li.active {
  border-bottom: #000;
}
</style>
