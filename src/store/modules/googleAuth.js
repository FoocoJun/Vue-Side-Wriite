import {
  signInWithPopup,
  browserSessionPersistence,
  setPersistence
} from 'firebase/auth'
import { provider, auth } from '@/firebase'

export default {
  name: 'googleAuth',
  namespaced: true,
  actions: {
    googleSessionLogin() {
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          return this.dispatch('auth/googleAuth/googleSignInWithPopup')
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
    }
  },
  modules: {}
}
