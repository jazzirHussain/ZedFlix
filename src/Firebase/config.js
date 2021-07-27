import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDmj4feiG64q69lA79jrW66bx3-s2RRgRo",
    authDomain: "zflix-cf4d0.firebaseapp.com",
    projectId: "zflix-cf4d0",
    storageBucket: "zflix-cf4d0.appspot.com",
    messagingSenderId: "417410954913",
    appId: "1:417410954913:web:e1c87ee6b00c2c0030a2e0",
    measurementId: "G-PXXEYXTD2T"
  };

export  const fb = firebase.initializeApp(firebaseConfig)
export const storage = firebase.storage() 