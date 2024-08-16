// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Add this import for Firestore
import { getAnalytics } from "firebase/analytics"; // Optional, only if you use Analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdkybSAYQ-9VnSusNXcGRo_rUvtOVf4hU",
  authDomain: "inventory-management-app-76cf2.firebaseapp.com",
  projectId: "inventory-management-app-76cf2",
  storageBucket: "inventory-management-app-76cf2.appspot.com",
  messagingSenderId: "613328558340",
  appId: "1:613328558340:web:b939dd3c5ea92a00a09851",
  measurementId: "G-FYXCWJRFM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Initialize Firestore
const analytics = getAnalytics(app);

export {firestore};
