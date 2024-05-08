import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reactchat-b0cd1.firebaseapp.com",
  projectId: "reactchat-b0cd1",
  storageBucket: "reactchat-b0cd1.appspot.com",
  messagingSenderId: "214860689483",
  appId: "1:214860689483:web:ef4645743f8ca62c9c9dce",
  measurementId: "G-DYPBD45P55"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()