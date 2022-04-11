// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDaxI6o45bjoFuJPv-Xbk0A2Z2e28uE_nI",
  authDomain: "recap-ema-john-project.firebaseapp.com",
  projectId: "recap-ema-john-project",
  storageBucket: "recap-ema-john-project.appspot.com",
  messagingSenderId: "972958381233",
  appId: "1:972958381233:web:4c420554e2c933b243de90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
