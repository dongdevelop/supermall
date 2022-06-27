<template>
  <div class="tabcontrol">
      <div v-for="(item,index) in titles" class="item" :class="{active:index===currentIndex}" @click="mcilck(index)">
        <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return {
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    mcilck(ind){
      this.currentIndex = ind;
      this.$emit('tabClick',ind)
    }
  }
}
</script>

<style scoped>
.tabcontrol{
  display: flex;
  text-align: center;
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
}
.item{
  flex: 1;

}
.active{
  color: var(--color-tint);

}
.active span{
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>