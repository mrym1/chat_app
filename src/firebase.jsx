// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1rTMRkS9yewABkzKiDbzymM6ufcFTvP4",
  authDomain: "chat-19537.firebaseapp.com",
  projectId: "chat-19537",
  storageBucket: "chat-19537.appspot.com",
  messagingSenderId: "369860071930",
  appId: "1:369860071930:web:cff4ac3133b79d07ab9443",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
