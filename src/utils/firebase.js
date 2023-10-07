// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogsite-588eb.firebaseapp.com",
  projectId: "blogsite-588eb",
  storageBucket: "blogsite-588eb.appspot.com",
  messagingSenderId: "207674743800",
  appId: "1:207674743800:web:91c90fed652dd4a440140d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);