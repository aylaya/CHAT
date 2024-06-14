
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDl0Kyn6lkJkJ1XG8OJDBMfcbnDK3RgOnE",
  authDomain: "chat-84047.firebaseapp.com",
  databaseURL: "https://chat-84047-default-rtdb.firebaseio.com",
  projectId: "chat-84047",
  storageBucket: "chat-84047.appspot.com",
  messagingSenderId: "528370910832",
  appId: "1:528370910832:web:6e5e88576cd85f6691d6b5",
  measurementId: "G-WBGC1XK9TX"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
