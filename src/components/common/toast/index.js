import Toast from "@/components/common/toast/Toast";


const obj = {}

obj.install = function (Vue){

  // 创建组件构造器
  const toactContrustor = Vue.extend(Toast);

  //  new 的方式，根据组件构造器，可以创建一个对象
  const toast = new toactContrustor()

  // 将组件元素手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj