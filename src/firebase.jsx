// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAiWr20ngL6MSU0_gxiUdQaoHK3mNDr3DU",
  authDomain: "chat-app-4a6ed.firebaseapp.com",
  projectId: "chat-app-4a6ed",
  storageBucket: "chat-app-4a6ed.appspot.com",
  messagingSenderId: "134862849531",
  appId: "1:134862849531:web:0ef74214aae8f1e233f75e",
  measurementId: "G-TDQWLHDWQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
