import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmF6kMFPbOcB_QmhDrED-2oJ7eCg8SfZo",
  authDomain: "bookworm-auth-179bf.firebaseapp.com",
  projectId: "bookworm-auth-179bf",
  storageBucket: "bookworm-auth-179bf.firebasestorage.app",
  messagingSenderId: "636415360913",
  appId: "1:636415360913:web:6b46a69fdc6304f0202430",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
