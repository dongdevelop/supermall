<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>

    <tab-control :titles="['展会','考察','路演']" class="tab-control"></tab-control>

    <ul>
      <li>12222222222222222222222222</li>
      <li>122222222222222222</li>
      <li>1222222222222222222222222</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li> <li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li> <li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>

import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";

import {getHomeMultidata,getHomeGoods} from "@/network/home";



export default {
  name: "Home",

  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
  },
  data(){
    return {
      banners: [],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    }
  },
  created() {
   this.getHomeMultidata();
   this.getHomeGoods('pop');
   this.getHomeGoods('new');
   this.getHomeGoods('sell');
  },
  methods:{
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
  padding-top: 44px;
  padding-bottom: 60px;
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
</style>