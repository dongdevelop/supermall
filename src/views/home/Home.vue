<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>

      <tab-control :titles="['展会','考察','路演']" class="tab-control" @tabClick="tabClick"></tab-control>

      <goods-list :goods="goods[currentTabItem].list"></goods-list>
    </scroll>
    <back-top  @click.native="backClick" v-show="ishow"></back-top>

  </div>
</template>

<script>

import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";
import Scroll from "@/components/common/scroll/Scroll";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backTop/BackTop";



import {getHomeMultidata,getHomeGoods} from "@/network/home";



export default {
  name: "Home",

  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return {
      banners: [],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentTabItem:'pop',
      ishow:false
    }
  },
  created() {
   this.getHomeMultidata();
   this.getHomeGoods('pop');
   this.getHomeGoods('new');
   this.getHomeGoods('sell');

  },
  mounted() {

    const refresh = this.debounce(this.$refs.scroll.refresh,200)
    this.$bus.$on('itemImageLoad',()=>{

      refresh()
      // this.$refs.scroll.refresh()
      // console.log('-----');
    })
  },
  methods:{
    debounce(func,delay){
      let timer = null;
      return function (...args){
        if(timer){ clearTimeout(timer) }

        timer = setTimeout(()=>{
          func.apply(this,args)
        },delay)
      }
    },
    tabClick(index){
      switch (index) {
        case 0:
          this.currentTabItem = 'pop';
          break;
        case 1:
          this.currentTabItem = 'new';
          break;
        case 2:
          this.currentTabItem = 'sell';
          break;

      }
    },
    backClick(){
      this.$refs.scroll.scrollerTo(0,0,1000)
    },
    contentScroll(position){
      this.ishow = (-position.y) > 1000
    },
    loadMore(){
      // console.log('加载更多');
      this.getHomeGoods(this.currentTabItem)

      this.$refs.scroll.refresh()
    },
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      })
    }
  }
}
</script>



<style scoped>
#home{
  height: 100vh;
}
.home-nav{
  background-color: var(--color-black);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
.tab-control{
  position: sticky;
  top: 44px;
}
.content{
  /*height: calc(100% - 35px);*/
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>