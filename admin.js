// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDK3dqXZuWaH3gctxURdOZc_Q1UfioesaA",
  authDomain: "rcem-system.firebaseapp.com",
  projectId: "rcem-system",
  storageBucket: "rcem-system.firebasestorage.app",
  messagingSenderId: "569730845486",
  appId: "1:569730845486:web:93e6c14ea47fdc6c89c8bf"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Protect page (login না থাকলে ঢুকতে দেবে না)
auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "index.html";
  } else {
    document.getElementById("adminEmail").innerText = user.email;
  }
});

// Logout
function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}
