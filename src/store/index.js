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
    },
    // 存放历史记录
    messhistory: {
      infos: []
    },
    // 存放房间信息，为了方便以后做多房间
    roomdetail: {
      id: '',
      users: {},
      infos: []
    },
    // 存放机器人开场白
    robotmsg: [{
      message: 'Hi~有什么想知道的可以问我',
      user: 'robot'
    }],
    // 聊天页面显示控制
    chattoggle: false,
    // 登录页面显示控制
    logintoggle: false,
    // 注册页面显示控制
    registertoggle: true,
    // 提示框显示控制
    dialog: false,
    // 提示框内容
    dialoginfo: ''
  }
})

export default store
