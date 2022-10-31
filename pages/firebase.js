// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl7xkq5UkhDlSBltzVlTR5C0NOp6YPGtU",
  authDomain: "eccomstore-first.firebaseapp.com",
  projectId: "eccomstore-first",
  storageBucket: "eccomstore-first.appspot.com",
  messagingSenderId: "308561011376",
  appId: "1:308561011376:web:4fbbbcf5599c2c01d79175",
  measurementId: "G-9CZZFYW0V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);