// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArvEeHsKuoRfvJgfOH6wBNhM_YfZxavYI",
  authDomain: "supremethrifters.firebaseapp.com",
  projectId: "supremethrifters",
  storageBucket: "supremethrifters.appspot.com",
  messagingSenderId: "152659535436",
  appId: "1:152659535436:web:eb8a18ccac1f9dad4d76e9",
  measurementId: "G-8B696L0THM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
