// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJc0xO9KSjCef0pw7-YrJ0w4pzk-PAsCA",
  authDomain: "evoclabs-41905.firebaseapp.com",
  projectId: "evoclabs-41905",
  storageBucket: "evoclabs-41905.firebasestorage.app",
  messagingSenderId: "230797425266",
  appId: "1:230797425266:web:7230b02573b4177e64e0eb",
  measurementId: "G-25T2MC064F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (only in browser environment)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;

