<script>
firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    // লগইন না থাকলে index.html এ পাঠিয়ে দেবে
    window.location.href = "index.html";
  }
});
</script>
