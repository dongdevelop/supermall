<template>
  <div class="nav_bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>

</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav_bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
}
.left,.right{
  width: 60px;
}
.center{
  flex: 1;
}
</style>