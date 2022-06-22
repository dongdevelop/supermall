<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>

    <tab-control :titles="['展会','考察','路演']"></tab-control>
  </div>
</template>

<script>

import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";

import {getHomeMultidata} from "@/network/home";



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
      recommends:[]
    }
  },
  created() {
    getHomeMultidata().then(res=>{
      console.log(res);
      this.banners = res.banner;
      this.recommends = res.cal;
    })
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
</style>