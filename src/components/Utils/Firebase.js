// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu1Lu6ywtQLSsvJDg3BOjmnDoOz57eVNI",
  authDomain: "netflixgpt-1-8a7a3.firebaseapp.com",
  projectId: "netflixgpt-1-8a7a3",
  storageBucket: "netflixgpt-1-8a7a3.appspot.com",
  messagingSenderId: "641461234846",
  appId: "1:641461234846:web:9e3e7ec4330137cde39f8f",
  measurementId: "G-0FPVRGBEE9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
