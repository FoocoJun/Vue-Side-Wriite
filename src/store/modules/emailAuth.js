import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  setPersistence
} from 'firebase/auth'
import { auth } from '@/firebase'

import {
  saveUserDataFB,
  takeUserDataFB
} from '@/apis/firebaseDB/auth/userDataApi'

export default {
  name: 'emailAuth',
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    emailSessionLogin(_, authData) {
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          return this.dispatch('auth/emailAuth/emailSignIn', authData)
        })
        .catch((error) => {
          // Handle Errors here.
          console.log(error.code)
        })
    },
    emailSignIn(_, signInData) {
      signInWithEmailAndPassword(auth, ...signInData)
        .then((result) => {
          console.log('asd')
          // 유저 UID와 일치하는 사진과 아이디 챙겨야 함
          const userUid = result.user.uid
          const userData = takeUserDataFB(userUid)
          console.log(userData)
          this.commit('auth/keepUserData', userData)
        })
        .catch((error) => {
          console.log(error.code)
        })
    },
    emailSignUp(_, signUpData) {
      setPersistence(auth, browserSessionPersistence).then(
        createUserWithEmailAndPassword(
          auth,
          signUpData.email,
          signUpData.password
        )
          .then((result) => {
            const user = result.user
            const userData = {
              displayName: signUpData.displayName,
              email: signUpData.email,
              photoURL:
                'https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png',
              uid: user.uid
            }

            saveUserDataFB(userData)

            console.log(userData)
            this.commit('auth/keepUserData', userData)
          })
          .catch((error) => {
            console.log(error)
          })
      )
    }
  },
  modules: {}
}
