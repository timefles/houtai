// 模块化的vuex
import { login } from '@/api/user'
// import { Message } from 'element-ui'
// setToken, getToken把vuex数据持久化,防止用户刷新页面导致token没了
import { setToken, getToken } from '@/utils/auth'
const state = {
  token: getToken || ''
}
const mutations = {
  setToken (state, token) {
    state.token = token
  }
}
const actions = {
  // context 上下文 指的是$store  data是外面传进来的数据账号密码
  async login (context, data) {
    try {
      const res = await login(data)
      console.log(res)
      if (res.data.success) {
        context.commit('setToken', res.data.data)
        setToken(res.data.data)
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    } catch (err) {
      return Promise.reject(new Error('登录失败,请重试'))
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
