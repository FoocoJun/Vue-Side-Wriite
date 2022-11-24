import { auth, db /*, storage */ } from '@/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
// import {
//   getDownloadURL,
//   ref,
//   uploadBytes,
//   uploadBytesResumable
// } from 'firebase/storage'

// userData = { displayName, email, photoURL, uid }
export const saveUserDataFB = async (userData) => {
  const UUID = auth.currentUser?.uid
  if (UUID) {
    await setDoc(doc(db, `${userData.uid}`, 'Auth'), {
      ...userData
    })
    alert('저장되었습니다.')
  } else {
    alert('로그인을 해주세요.')
  }
}

export const takeUserDataFB = async (uid) => {
  const UUID = auth.currentUser?.uid
  if (UUID) {
    const docRef = doc(db, `${uid}/Auth`)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data())
      console.log('저장 유저 데이터가 호출되었습니다.')
      return docSnap.data()
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!')
      alert('저장된 데이터가 없습니다. 새로 작성해주세요.')
    }
  } else {
    alert('로그인을 해주세요.')
  }
}
