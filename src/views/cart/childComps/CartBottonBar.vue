<template>
  <div class="bottom-bar">
    <div  class="check-cont">
      <check-button :is-select="isSelectAll" @click.native="checkClick" class="check-btn"></check-button>
      <span>全选</span>
    </div>

    <div class="ff">
      合计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      去计算：{{checkLength}}
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
export default {
  name: "CartBottonBar",
  components: {CheckButton},
  computed:{
    totalPrice(){
      return this.$store.state.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue + parseInt(item.price.substring(1)) * item.count
      },0).toFixed(2)
    },
    checkLength(){
      return this.$store.state.cartList.filter(item=>item.checked).length
    },
    isSelectAll(){
      if(this.$store.state.cartList == 0) return false;
      return !this.$store.state.cartList.find(item=> !item.checked)
    }

  },
  methods:{
    checkClick(){
      if(this.isSelectAll){ //全部选中
        this.$store.state.cartList.forEach(item=>item.checked = false)
      }else{
        this.$store.state.cartList.forEach(item=>item.checked = true)
      }
    },
    calcClick(){
      if(!this.isSelectAll){
        this.$toast.show('请选择购买的商铺',2000)
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  width: 100%;
  height: 40px;
  background-color: #ededed;
  position: absolute;
  left: 0;
  bottom: 49px;
  display: flex;

  justify-content: space-around;
}
.check-cont{
  display: flex;
  line-height: 40px;
  margin-left: 10px;
}
.check-btn{
  width: 20px;
  height: 20px;
  line-height: 44px;
  margin-right: 5px;
}
.ff,.calculate{
  line-height: 40px;
  flex: 1;
  text-align: center;
}
.calculate{
  background-color: #f13e3a;
  color: #f2f5f8;
}
</style>