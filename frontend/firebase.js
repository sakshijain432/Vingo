// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APTKEY,
  authDomain: "vingo-220de.firebaseapp.com",
  projectId: "vingo-220de",
  storageBucket: "vingo-220de.firebasestorage.app",
  messagingSenderId: "322125452833",
  appId: "1:322125452833:web:0b795f6fd2da0b045bf560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {app,auth}