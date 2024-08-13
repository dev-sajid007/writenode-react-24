import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9MXsLzuL3qiSTHkPER_X2j5XPEIx94Nc",
  authDomain: "writenode-e65dd.firebaseapp.com",
  projectId: "writenode-e65dd",
  storageBucket: "writenode-e65dd.appspot.com",
  messagingSenderId: "636527317579",
  appId: "1:636527317579:web:e51eb69b6d55afea9c33ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();