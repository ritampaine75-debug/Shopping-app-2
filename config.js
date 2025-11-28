// --- FIREBASE CONFIGURATION ---
const firebaseConfig = {
  apiKey: "AIzaSyDUHXK7NYeM6CLNN4fsyGVz1MpIVpJuOq0",
  authDomain: "studio-vddd5.firebaseapp.com",
  databaseURL: "https://studio-vddd5-default-rtdb.firebaseio.com",
  projectId: "studio-vddd5",
  storageBucket: "studio-vddd5.firebasestorage.app",
  messagingSenderId: "679230106233",
  appId: "1:679230106233:web:3d6a91cabc2264e15902a8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();