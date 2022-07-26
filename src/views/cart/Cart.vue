<template>
  <div>
    <nav-bar>
      <div slot="center">购物车（{{length}}）</div>
    </nav-bar>

    <cart-list class="carlist"></cart-list>

    <cart-botton-bar class="bottom-bar"></cart-botton-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import { mapGetters } from 'vuex'
import CartList from "@/views/cart/childComps/CartList";
import CartBottonBar from "@/views/cart/childComps/CartBottonBar";
export default {
  name: "Cart",
  components: {CartBottonBar, CartList, NavBar},
  computed:{
    ...mapGetters({
      length:'cartLength',
      list:'cartList'
    })
  }
}
</script>

<style scoped>

</style>