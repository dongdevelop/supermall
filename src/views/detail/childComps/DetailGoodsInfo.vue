<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
        <img  v-for="(item, index) in detailInfo.detailImage[0].list" :key="index"
              :src="item"  @load="imagesLoad"/>
      </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  // computed: {
  //   images() {
  //     return this.detailInfo.detailImage[0].list
  //   },
  //   title() {
  //     return this.detailInfo.detailImage[0].key
  //   }
  // },
  data(){
    return {
      counter:0,
      imagesLength:0
    }
  },
  methods: {
    // TIP所有图片加载完才发送事件，以便于 Detial 组件正确的获取 offsetTop
    imagesLoad() {

      if(++this.counter === this.imagesLength){
        this.$emit('imageLoad')
      }
    }
  },
  watch:{
    detailInfo(){
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
.goods-info{
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.desc {
  padding: 15px 0;
  font-size: 20px;
  color: #444;
}
.start {
  height: 1px;
  width: 100px;
  background-color: #333;
}

.end {
  height: 1px;
  width: 100px;
  background-color: #333;
  position: absolute;
  right: 20px;

}


img {
  width: 100%;
}
</style>