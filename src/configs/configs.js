const config = {
  firebase: {
    apiKey: 'AIzaSyA7kbBVFebR0sqBkPr0xz1SD6kTnt9NEbg',
    authDomain: 'wriite-b18c5.firebaseapp.com',
    projectId: 'wriite-b18c5',
    storageBucket: 'wriite-b18c5.appspot.com',
    messagingSenderId: '1094457150114',
    appId: '1:1094457150114:web:da90cd4682b750753e65fb',
    measurementId: 'G-3DT94YM67K'
  }
}

export const sessionKey = `firebase:authUser:${config.firebase.apiKey}:[DEFAULT]`

export default config
