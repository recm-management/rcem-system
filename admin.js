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

// Prevent instant redirect
let authChecked = false;

auth.onAuthStateChanged(user => {
  if (!authChecked) {
    authChecked = true;

    if (!user) {
      window.location.replace("index.html");
    } else {
      document.getElementById("adminEmail").innerText = user.email;
    }
  }
});

// Logout
function logout() {
  auth.signOut().then(() => {
    window.location.replace("index.html");
  });
}
