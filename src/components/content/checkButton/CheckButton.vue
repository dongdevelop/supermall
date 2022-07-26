<template>
  <div>
    <img src="../../../assets/imgs/cart/tick.svg" class="checkbox" :class="{active:isSelect}">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    isSelect:{
      type:Boolean,
      default(){
        return true;
      }
    }
  },
  computed:{

  }
}
</script>

<style scoped>
.checkbox{
  border:1px solid #999;
  border-radius: 50%;
}
.active{
  background-color: red;

  border-color: #f13e3a;
}
</style>