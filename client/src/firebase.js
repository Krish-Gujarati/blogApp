// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-34baf.firebaseapp.com",
  projectId: "blog-34baf",
  storageBucket: "blog-34baf.appspot.com",
  messagingSenderId: "1002723622121",
  appId: "1:1002723622121:web:c0a3a8395bb2908d35c478"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);