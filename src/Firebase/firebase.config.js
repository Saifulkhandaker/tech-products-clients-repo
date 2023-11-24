// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATSL5-x1uZpqOVpMMcR9c_Je58sY0vqd4",
  authDomain: "tech-product-51c1d.firebaseapp.com",
  projectId: "tech-product-51c1d",
  storageBucket: "tech-product-51c1d.appspot.com",
  messagingSenderId: "576270798507",
  appId: "1:576270798507:web:7a56737a191750de65f1ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;