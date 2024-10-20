// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAWFdUZTRi3DcadzpsEN4pKNOQ-nx2VppA",
  authDomain: "tkj-bisa.firebaseapp.com",
  projectId: "tkj-bisa",
  storageBucket: "tkj-bisa.appspot.com",
  messagingSenderId: "423680570143",
  appId: "1:423680570143:web:c85047345775de1fc8b62a",
  measurementId: "G-2FX7R48Q4K"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();