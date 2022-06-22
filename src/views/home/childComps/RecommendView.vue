<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" data-index="index" :key="index" class="item">
      <a :href="item.mlink">
        <img :src="require('../../../assets/imgs/recommend/'+item.icon)"/>
        <div>{{item.title}}</div>
      </a>

    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  font-size: 12px;
  text-align: center;
  padding: 20px 0;
  border-bottom: 8px solid #eee;
  line-height: 17px;
}
.item{
  flex: 1;
}
.item img{
  width: 45px;
  padding-bottom: 10px;
}
</style>