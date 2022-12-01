// Import the functions you need from the SDKs you need

// firebase 앱 실행하기
import { initializeApp } from 'firebase/app'

// firebase.js
// 파이어 스토어 (문자 데이터베이스)
import { getFirestore } from 'firebase/firestore'
// 파이어 스토리지 (대용량 데이터베이스)
import { getStorage } from 'firebase/storage'
// 파이어 얻흐 (인증정보 서비스)
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

import config from './configs/configs'

// Initialize Firebase
// 파이어베이스 시작해서 프로젝트 app 정보 받아오기
const app = initializeApp(config.firebase)

// app 프로젝트의 파이어베이스 가져오기
const db = getFirestore(app)
// app 프로젝트의 스토리지 가져오기
const storage = getStorage(app)
// app 프로젝트의 인증정보 가져오기
const auth = getAuth(app)
// google
const provider = new GoogleAuthProvider()

export { db, storage, auth, provider }
