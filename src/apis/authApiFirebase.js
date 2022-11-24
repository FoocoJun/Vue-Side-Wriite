import {
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  browserSessionPersistence,
  setPersistence,
  getAuth
} from 'firebase/auth'
import { sessionKey } from '@/configs/configs'
import { provider } from '../firebase'

const auth = getAuth()

export default {
  data() {
    return {
      sessionKey
    }
  },
  methods: {
    $googleSessionLogin() {
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          return this.$googleSignInWithPopup()
        })
        .catch((error) => {
          // Handle Errors here.
          console.log(error)
        })
    },
    $googleSignInWithPopup() {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result)
          if (credential == null) {
            return
          }
          const token = credential.accessToken
          console.log(token)
          // The signed-in user info.
          const user = result.user
          console.log(user)
          alert(auth.currentUser?.displayName + '님 환영합니다.')
          // ...
        })
        .catch((error) => {
          console.log(error)
        })
    },
    $googleLogout() {
      signOut(auth)
        .then(() => {
          alert('로그아웃 되었습니다.')
          console.log(auth)
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
          console.log(error)
        })
    }
  }
}
