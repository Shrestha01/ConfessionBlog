// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// Your Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyCcsl3Izt6CIkoRuD26iYYTSdUr0pVQv68",
  authDomain: "login-4c411.firebaseapp.com",
  databaseURL: "https://login-4c411.firebaseio.com",
  projectId: "login-4c411",
  storageBucket: "login-4c411.firebasestorage.app",
  messagingSenderId: "974771882897",
  appId: "1:974771882897:web:0809f99861838d8e73a830",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue };
