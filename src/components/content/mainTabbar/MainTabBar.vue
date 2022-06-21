<template>
 <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icom" src="~assets/imgs/tabbar/home.png">
        <img slot="item-icom-active" src="~assets/imgs/tabbar/home@selected.png">
        <div slot="item-text">首页</div>
    </tab-bar-item>
   <tab-bar-item path="/category">
     <img slot="item-icom" src="~assets/imgs/tabbar/category.png">
     <img slot="item-icom-active" src="~assets/imgs/tabbar/category@selected.png">
     <div slot="item-text">栏目</div>
   </tab-bar-item>
   <tab-bar-item path="/cart">
     <img slot="item-icom" src="~assets/imgs/tabbar/cart.png">
     <img slot="item-icom-active" src="~assets/imgs/tabbar/cart@selected.png">
     <div slot="item-text">购物车</div>
   </tab-bar-item>
   <tab-bar-item path="/profile">
     <img slot="item-icom" src="~assets/imgs/tabbar/my.png">
     <img slot="item-icom-active" src="~assets/imgs/tabbar/my@selected.png">
     <div slot="item-text">我的</div>
   </tab-bar-item>

 </tab-bar>

</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {TabBarItem, TabBar}
}
</script>

<style scoped>

</style>