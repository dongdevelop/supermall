<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="swipew">
      <swiper-slide v-for="(item, index) in topImages" data-index="index" :key="index" class="item">
        <img class='swiImg' :src='item'/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "DetailSwiper",
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      swiperOption: {
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },

      }
    }
  },
  components:{
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
.swipew{
  height: 300px;
  overflow: hidden;
}
</style>