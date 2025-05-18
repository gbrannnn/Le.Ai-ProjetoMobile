// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU_EjhxfaPZCtmUY_z4qubL1C54NahLaM",
  authDomain: "appbiblioteca-mb.firebaseapp.com",
  projectId: "appbiblioteca-mb",
  storageBucket: "appbiblioteca-mb.firebasestorage.app",
  messagingSenderId: "403361575082",
  appId: "1:403361575082:web:0059df7d9ce13a268260d3",
  measurementId: "G-K3XB39VW1N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);