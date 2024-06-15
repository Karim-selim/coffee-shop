import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHFO8vzWwlUlZ4oBsrR-VYOh4ONa6HLZ0",
  authDomain: "authentication-tutorial-bcacd.firebaseapp.com",
  projectId: "authentication-tutorial-bcacd",
  storageBucket: "authentication-tutorial-bcacd.appspot.com",
  messagingSenderId: "98264986071",
  appId: "1:98264986071:web:234d20f7fc405118415b92",
  measurementId: "G-KKPK1TG9BN",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
