// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAVvXTA3Mvl_F666VbFUQoaU0eG7oDChOI",
  authDomain: "supremethrifters-e5b09.firebaseapp.com",
  projectId: "supremethrifters-e5b09",
  storageBucket: "supremethrifters-e5b09.appspot.com",
  messagingSenderId: "14885238050",
  appId: "1:14885238050:web:75d6a89dc9cd35e335a17b",
  measurementId: "G-BHHDYC3DK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default app;

