import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";


Vue.use(Vuex)

const state = {cartList:[]}
export default new Vuex.Store({
  state,
  getters,
  // 唯一作用修改state的内容
  mutations,
  actions,
  modules: {
  }
})
