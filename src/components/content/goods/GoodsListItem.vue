<template>
  <div class="good-item">
    <img :src="goodItem.show.img"/>
    <div class="good-info">
      <p>{{goodItem.title}}</p>
      <span>{{goodItem.price}}</span>
      <span>{{goodItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodItem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.good-item{
  width: 48%;
  padding-bottom: 10px;
}
.good-info{
  bottom: 5px;
  left: 0;
  right: 0;
  font-size: 12px;
}
.good-item img{
  width: 100%;
  border-radius: 5px;
  margin-bottom: 8px;
}
</style>