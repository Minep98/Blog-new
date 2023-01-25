// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe4Y6pZTYBFnKXAoW7_u8auSHEFJk3Pgo",
  authDomain: "money-blog-755e7.firebaseapp.com",
  projectId: "money-blog-755e7",
  storageBucket: "money-blog-755e7.appspot.com",
  messagingSenderId: "698680282595",
  appId: "1:698680282595:web:87d88ee1a38f6632b4e4d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)