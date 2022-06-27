<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll class="content">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>

      <tab-control :titles="['展会','考察1','路演']" class="tab-control" @tabClick="tabClick"></tab-control>

      <goods-list :goods="goods[currentTabItem].list"></goods-list>
    </scroll>


  </div>
</template>

<script>

import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";
import Scroll from "@/components/common/scroll/Scroll";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";



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
    Scroll
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
      currentTabItem:'pop'
    }
  },
  created() {
   this.getHomeMultidata();
   this.getHomeGoods('pop');
   this.getHomeGoods('new');
   this.getHomeGoods('sell');
  },
  methods:{
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
      })
    }
  }
}
</script>



<style scoped>
#home{
  padding-bottom: 60px;
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
  margin-top: 44px;
  height: calc(100% - 35px);
  overflow: hidden;
}
</style>