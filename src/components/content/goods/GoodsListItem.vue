<template>
  <div class="good-item" @click="itemClick">
<!--    <img :src="showImage" @load="imageLoad">-->
    <img v-lazy="showImage" @load="imageLoad">
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
  },
  computed:{
    showImage(){
      return this.gooditem.image || this.gooditem.show.img
    }
  },
  methods:{
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
    },
    itemClick(){
      this.$router.push('detail/'+this.gooditem.iid)
    }
  }
}
</script>

<style scoped>
.good-item{
  width: 48%;
  padding-bottom: 10px;
}

.good-item img{
  width: 100%;
  border-radius: 5px;
}
.good-info{
  padding: 5px 0 10px;
  font-size: 12px;
  margin-bottom: 8px;
}
</style>