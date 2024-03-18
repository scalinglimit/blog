// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-b4c76.firebaseapp.com",
  projectId: "blog-b4c76",
  storageBucket: "blog-b4c76.appspot.com",
  messagingSenderId: "124130692883",
  appId: "1:124130692883:web:110b583afad55ba37a54e6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
