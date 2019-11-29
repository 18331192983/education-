import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: {}, //登录成功的token
    list_home: [] //右边导航栏数据
  },
  mutations: {},
  actions: {},
  modules: {}
});
