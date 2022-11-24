import {
  signOut,
  signInWithPopup,
  browserSessionPersistence,
  setPersistence
} from 'firebase/auth'
import { provider, auth } from '@/firebase'

export default {
  name: 'auth',
  stateFactory: true,
  namespaced: true,
  state: {
    user: { displayName: '', email: '', photoURL: '', uid: '' },
    isLogin: false
  },
  getters: {},
  mutations: {
    keepUserData(state, userData) {
      state.user = userData
      state.isLogin = true
    },
    clearUserData(state) {
      state.user = { displayName: '', email: '', photoURL: '', uid: '' }
      state.isLogin = false
    }
  },
  actions: {
    googleSessionLogin() {
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          return this.dispatch('auth/googleSignInWithPopup')
        })
        .catch((error) => {
          // Handle Errors here.
          console.log(error)
        })
    },
    googleSignInWithPopup() {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user
          const userData = {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid
          }
          console.log(userData)
          this.commit('auth/keepUserData', userData)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    googleLogout() {
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
  modules: {}
}
