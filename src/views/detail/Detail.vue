<template>
<div id="detail">
  <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
  <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">

      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop" ></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info  ref="params" :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
  </scroll>

  <detail-bottom-bar @addCart="mAddCart"></detail-bottom-bar>
  <back-top  @click.native="backClick" v-show="ishow"></back-top>
</div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import Scroll from "@/components/common/scroll/Scroll";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backTop/BackTop";

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "@/network/detail";
import {backTop, itemListenerMixin} from "@/common/mixin";
import {debounce} from "@/common/utils";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";






export default {
  name: "Detail",
  components:{
    DetailBottomBar,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll,
    BackTop
  },
  mixins:[itemListenerMixin,backTop],
  data(){
    return {
      iid:null,
      topImages:[],
      goods: {},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[],
      getThemeTopY:null,
      currentIndex:0,
    }
  },
  created() {
    // console.log(this.$route.params);
    this.iid = this.$route.params.iid
    // 请求详情数据
    getDetail(this.iid).then(res=>{
      //  获取轮播图数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages

      //  获取商品数据
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)


      //  获取店铺数据
      this.shop = new Shop(data.shopInfo)

      //  获取商品详情数据
      this.detailInfo = data.detailInfo

      //  获取商品参数数据
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      //  获取商品评论数据
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }

      //  防止多少请求，由于之前imageLoad 限制了发送次数，这里可以不用该方法
      this.getThemeTopY = debounce(()=>{
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      },100)

    })
    // 请求推荐数据
    getRecommend().then(res=>{
      this.recommends = res.data.list;
    })

  },
  destroyed() {
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  methods:{
    mAddCart(){
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc
      product.price = this.goods.newPrice;
      product.iid = this.iid;


      this.$store.dispatch('addCart',product).then(res=>{

        this.$toast.show(res,2000)

        console.log(res)
      })
    },
    imageLoad(){
      // this.newRefresh()
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    titleClick(index){
      this.$refs.scroll.scrollerTo(0,-this.themeTopYs[index],300)
    },
    contentScroll(position){

      this.backIshow(position)

      // 根据scroll 实时的y坐标显示选中的tab
      const positionY = -position.y
      // [0,1000,2000,3000] postionY在0-1000为0，接下来1,2,3
      let length = this.themeTopYs.length
      for (let i=0;i<length;i++){
        if(this.currentIndex !== i && ((i<length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])||(i === length-1 && positionY>this.themeTopYs[i]))){
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex
        }

      }

    }
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  background-color: #fff;
  z-index: 999;
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 58px);
  position: relative;
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;
}

</style>