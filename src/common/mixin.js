import {debounce} from "@/common/utils";

export const itemListenerMixin = {
  data(){
    return {
      itemImgListener:null,
      newRefresh:null
    }
  },
  mounted(){
    // 监听推荐图片加载

    this.newRefresh = debounce(this.$refs.scroll.refresh,200)
    this.itemImgListener = ()=>{
      this.newRefresh()   // this.$refs.scroll.refresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
    console.log('我是沦入内容');
  }
}