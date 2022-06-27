<template>
  <div class="good-item">
    <img :src="gooditem.show.img">
    <div class="good-info">
      <p>{{gooditem.title}}</p>
      <span>{{gooditem.price}}</span>
      <span>{{gooditem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    gooditem:{
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
}
.good-item img{
  width: 100%;
  border-radius: 5px;
}
.good-info{
  padding: 5px 0 10px;
  font-size: 12px;
}
</style>