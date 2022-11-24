import { createStore } from 'vuex'
import auth from './modules/auth'
export default createStore({
  modules: { auth },
  state: {},
  getters: {},
  mutations: {},
  actions: {
    // 모듈을 리팩토링 할 때 마다 사용한 곳을 직접 찾아가는 것이 불편하였음
    emailSignUp(_, signInData) {
      this.dispatch('auth/emailAuth/emailSessionLogin', signInData)
    },
    emailSessionLogin(_, signUpData) {
      this.dispatch('auth/emailAuth/emailSignUp', signUpData)
    },
    googleSessionLogin() {
      this.dispatch('auth/googleAuth/googleSessionLogin')
    },
    authLogOut() {
      this.dispatch('auth/LogOut')
    }
  }
})
