// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgP88M0kIKX-hmHXOze2zdNW_YcR9G5-A",
  authDomain: "login-with-authprovider.firebaseapp.com",
  projectId: "login-with-authprovider",
  storageBucket: "login-with-authprovider.firebasestorage.app",
  messagingSenderId: "387974179161",
  appId: "1:387974179161:web:4c5a0d43d152ab974cc448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);