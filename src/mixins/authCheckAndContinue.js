import { getAuth } from 'firebase/auth'
import { app } from '@/firebase'

export default {
  methods: {
    // 새로고침에 의하여 vuex스토어가 초기화 되었을 시
    $authCheckAndContinue() {
      const auth = getAuth(app)
      let count = 0
      const authCheck = setInterval(() => {
        count++
        // 5번을 기다려도 인증정보가 없으면 인터벌 종료
        if (count >= 5 && !auth.currentUser) {
          clearInterval(authCheck)
        }

        // 5번 동안 인증정보를 가져오고 유효한 email일 때
        if (auth.currentUser?.email) {
          const sessionLoginData = window.sessionStorage.getItem('LoginData')
          // 로그인 데이터가 없다면 로그아웃 처리
          !sessionLoginData && this.$store.dispatch('authLogOut')
          // 로그인 데이터가 있다면 스토어에 저장 후 인터벌 종료
          const userData = JSON.parse(sessionLoginData)
          userData && this.$store.commit('auth/keepUserData', userData)
          clearInterval(authCheck)
        }
      }, 1000)
    }
  }
}
