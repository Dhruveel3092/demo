// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6371d.firebaseapp.com",
  projectId: "mern-estate-6371d",
  storageBucket: "mern-estate-6371d.firebasestorage.app",
  messagingSenderId: "386389956860",
  appId: "1:386389956860:web:31f3ee80a7d05ef16c9f79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);