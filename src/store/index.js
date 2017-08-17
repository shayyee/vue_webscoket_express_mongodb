/**
 * Created by lenovo on 2017/8/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 存放用户
    socket: '',
    user: {
      name: '',
      src: '',
      room: ''
    }
  }
})

export default store
