<template>
  <div class="toast" v-show="isShow">
    <div >{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data(){
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(mess,duration=2000){
      this.isShow = true;
      this.message = mess;

      setTimeout(()=>{
        this.isShow = false;
        this.message = '';
      },duration)
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: white;
  background-color: rgba(0,0,0,0.65);
  z-index: 9999;
  padding: 8px 20px;
  border-radius: 5px;
}
</style>