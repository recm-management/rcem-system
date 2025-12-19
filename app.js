// Firebase SDK import (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase config (তোমারটা বসানো)
const firebaseConfig = {
  apiKey: "AIzaSyDK3dqXZUwH3gctxURd0Zc_Q1UfioesaA",
  authDomain: "rcem-system.firebaseapp.com",
  projectId: "rcem-system",
  storageBucket: "rcem-system.firebasestorage.app",
  messagingSenderId: "569730845486",
  appId: "1:569730845486:web:93e6c14ea47fdc6c89c8bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log("🔥 Firebase connected successfully");
