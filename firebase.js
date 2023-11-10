// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyFLIhm3GHDi6sw2RXYBuOs0KjKaFHxAc",
  authDomain: "minyan-maker-cdf86.firebaseapp.com",
  projectId: "minyan-maker-cdf86",
  storageBucket: "minyan-maker-cdf86.appspot.com",
  messagingSenderId: "277587903",
  appId: "1:277587903:web:5a11fddc54b0235befa30a",
  measurementId: "G-KK6S6Z4F1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth()

export { auth }