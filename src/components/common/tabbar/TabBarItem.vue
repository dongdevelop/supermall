<template>
    <div class="mtab-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icom"></slot></div>
      <div v-else><slot name="item-icom-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>

export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }

}
</script>

<style scoped>
.mtab-item{
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;

}
.mtab-item img{
  padding-top: 3px;
  width: 26px;
  height: 26px;
  vertical-align: middle;
}
</style>