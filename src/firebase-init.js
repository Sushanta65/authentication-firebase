// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfM7hT8iSBZxnmBru1jeBokycgPPuNTuI",
  authDomain: "explore-firebase-de126.firebaseapp.com",
  projectId: "explore-firebase-de126",
  storageBucket: "explore-firebase-de126.firebasestorage.app",
  messagingSenderId: "389183409335",
  appId: "1:389183409335:web:bc299f4cdf4c776cf29132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;