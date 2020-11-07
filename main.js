
Vue.component("Home", Home);
Vue.component("About",About);
Vue.component("About",Dotcomdotnpletter);

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/about', component: About, name:'about' },
  { path: '/dotcomdotnpletter', component: Dotcomdotnpletter, name:'dotcomdotnpletter' },
]


const router = new VueRouter({
  routes // short for `routes: routes`
})

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
const app = new Vue({
    store,
    router
}).$mount('#app')