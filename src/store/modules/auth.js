import googleAuth from './googleAuth'
import emailAuth from './emailAuth'

import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'

export default {
  name: 'auth',
  namespaced: true,
  state: {
    user: { displayName: '', email: '', photoURL: '', uid: '' },
    isLogin: false
  },
  getters: {},
  mutations: {
    keepUserData(state, userData) {
      const JsonUserData = JSON.stringify(userData)
      window.sessionStorage.setItem('LoginData', JsonUserData)
      state.user = userData
      state.isLogin = true
    },
    clearUserData(state) {
      window.sessionStorage.removeItem('LoginData')
      state.user = { displayName: '', email: '', photoURL: '', uid: '' }
      state.isLogin = false
    }
  },
  actions: {
    LogOut() {
      signOut(auth)
        .then(() => {
          this.commit('auth/clearUserData')
          alert('로그아웃 되었습니다.')
          console.log(auth)
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
          console.log(error)
        })
    }
  },
  modules: { googleAuth, emailAuth }
}
