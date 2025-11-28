// --- FIREBASE CONFIGURATION ---
const firebaseConfig = {
  apiKey: "AIzaSyCw7as_RexoYbKZHBcGS47bscXfxj_8iTs",
  authDomain: "shopping-e3ab0.firebaseapp.com",
  databaseURL: "https://shopping-e3ab0-default-rtdb.firebaseio.com",
  projectId: "shopping-e3ab0",
  storageBucket: "shopping-e3ab0.firebasestorage.app",
  messagingSenderId: "297301068816",
  appId: "1:297301068816:web:02b29a230f429367abce95"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
