// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz-PzWRlUcPbCliDdWd0ILD7RU-6bGVaM",
  authDomain: "studio-5424960404-8c6bd.firebaseapp.com",
  projectId: "studio-5424960404-8c6bd",
  storageBucket: "studio-5424960404-8c6bd.firebasestorage.app",
  messagingSenderId: "1038651140243",
  appId: "1:1038651140243:web:b93f3dfa32c91e581b0566"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
