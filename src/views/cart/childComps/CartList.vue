<template>
    <div class="cart-list">
      <scroll class="content" ref="scroll">
          <cart-list-item v-for="(item,index) in carList" :item-info="item"></cart-list-item>
      </scroll>
    </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import CartListItem from "@/views/cart/childComps/CartListItem";
import {mapGetters} from "vuex";


export default {
  name: "CartList",
  components:{
    CartListItem,
    Scroll
  },
  computed:{
    ...mapGetters(['carList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cart-list{
  /*没有用*/
  height: calc(100vh - 44px - 49px - 40px);

}
.content{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 89px;
  overflow: hidden;
}
</style>