// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMG3d2EbkPJrZFOaBhsE-XgjXKlQyV12o",
  authDomain: "creative-agency-1146c.firebaseapp.com",
  projectId: "creative-agency-1146c",
  storageBucket: "creative-agency-1146c.appspot.com",
  messagingSenderId: "661727434552",
  appId: "1:661727434552:web:7954fd95f47015c76f13cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
