// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcWWrsc7sk_9sBCgKfcr7iBShtDCukyaI",
  authDomain: "blog-app-fa15d.firebaseapp.com",
  projectId: "blog-app-fa15d",
  storageBucket: "blog-app-fa15d.appspot.com",
  messagingSenderId: "381997599649",
  appId: "1:381997599649:web:51e87b0bcedd7a8946d9e0",
  measurementId: "G-QTN97H9RTX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
