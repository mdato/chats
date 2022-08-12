// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "chat-react-fire-c62fb.firebaseapp.com",
  projectId: "chat-react-fire-c62fb",
  storageBucket: "chat-react-fire-c62fb.appspot.com",
  messagingSenderId: "606373767682",
  appId: process.env.REACT_APP_APP_ID
};

/*
const firebaseConfig = {
  apiKey: "AIzaSyBOY78vcaN0hdmDpmGTap4y-jPsPPKGdzs",
  authDomain: "chat-react-fire-c62fb.firebaseapp.com",
  projectId: "chat-react-fire-c62fb",
  storageBucket: "chat-react-fire-c62fb.appspot.com",
  messagingSenderId: "606373767682",
  appId: "1:606373767682:web:26912c5bc03349c1b8d51b"
};
*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)