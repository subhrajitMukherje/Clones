// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4BkxtNdLDBsy1WkIBY8noYpg7qvdTq2I",
  authDomain: "clone-19b00.firebaseapp.com",
  projectId: "clone-19b00",
  storageBucket: "clone-19b00.appspot.com",
  messagingSenderId: "728258796631",
  appId: "1:728258796631:web:ed6b78c4db9db15b06d712",
  measurementId: "G-R2ZV8FWFR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);