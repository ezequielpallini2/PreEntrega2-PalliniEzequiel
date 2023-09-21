// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQLHDB0a4UbJK7YHBuS8E3iRr1Z5a6Fn0",
  authDomain: "entraditas-e9bcb.firebaseapp.com",
  projectId: "entraditas-e9bcb",
  storageBucket: "entraditas-e9bcb.appspot.com",
  messagingSenderId: "692461298885",
  appId: "1:692461298885:web:5f83c153d1f3664dbbfcac",
  measurementId: "G-927NKJCLZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app); 