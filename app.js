// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase config (তোমারটাই)
const firebaseConfig = {
  apiKey: "AIzaSyDK3dqXZuWaH3gctxURd0Zc_Q1UfioesaA",
  authDomain: "rcem-system.firebaseapp.com",
  projectId: "rcem-system",
  storageBucket: "rcem-system.firebasestorage.app",
  messagingSenderId: "569730845486",
  appId: "1:569730845486:web:93e6c14ea47fdc6c89c8bf"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Admin login function
window.adminLogin = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      message.style.color = "green";
      message.innerText = "Login successful!";
      // future: redirect to dashboard
    })
    .catch((error) => {
      message.style.color = "red";
      message.innerText = error.message;
    });
};

console.log("🔥 Firebase connected");
