import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

import { config } from 'config/config'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: `${config.appSlug as string}.firebaseapp.com`,
  databaseURL: `https://${config.appSlug as string}.firebaseio.com`,
  projectId: config.appSlug,
  storageBucket: `${config.appSlug as string}.appspot.com`,
  messagingSenderId: '952284368443',
  appId: '1:952284368443:web:b88f8bdda98e5fd8ce161e',
  measurementId: 'G-4BH0K0P06S'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebaseApp)

export { firebaseApp }
