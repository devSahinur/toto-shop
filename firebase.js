// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-RxCvcqsoD8_Gg7IPSrYkbpPG5a2pfjc",
  authDomain: "toto-shopbd.firebaseapp.com",
  projectId: "toto-shopbd",
  storageBucket: "toto-shopbd.appspot.com",
  messagingSenderId: "909530364787",
  appId: "1:909530364787:web:fdeee821e903024952e306",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
