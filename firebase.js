// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCphLB_jxq7eq6ZO5S17T-l8UJBgff5x98",
  authDomain: "stickynotes-1bb07.firebaseapp.com",
  projectId: "stickynotes-1bb07",
  storageBucket: "stickynotes-1bb07.firebasestorage.app",
  messagingSenderId: "248950643747",
  appId: "1:248950643747:web:cabf80cee3b839176ae596",
  measurementId: "G-6XWB02FLGT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export the auth instance
export { auth };
