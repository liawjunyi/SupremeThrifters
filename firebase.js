// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVvXTA3Mvl_F666VbFUQoaU0eG7oDChOI",
  authDomain: "supremethrifters-e5b09.firebaseapp.com",
  projectId: "supremethrifters-e5b09",
  storageBucket: "supremethrifters-e5b09.appspot.com",
  messagingSenderId: "14885238050",
  appId: "1:14885238050:web:75d6a89dc9cd35e335a17b",
  measurementId: "G-BHHDYC3DK0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
