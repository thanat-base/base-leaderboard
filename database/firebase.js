// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvL3pTDjv7ItM2byJ36c934ovoTYyQx1E",
  authDomain: "base-playhouse-leader-board.firebaseapp.com",
  projectId: "base-playhouse-leader-board",
  storageBucket: "base-playhouse-leader-board.appspot.com",
  messagingSenderId: "500691372149",
  appId: "1:500691372149:web:980391e8465935b70c903c",
  measurementId: "G-3VTF411YZD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
