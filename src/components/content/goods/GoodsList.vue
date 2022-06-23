<template>
  <div  class="good">
    <goods-list-item v-for="item in goods" :goodItem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";


export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },

  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }

  }
}
</script>

<style scoped>
.good{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>