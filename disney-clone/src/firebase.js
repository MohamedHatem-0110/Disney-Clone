import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBcYu34rplIbTrOUXiG2u3NhoGf2b52Sko",
  authDomain: "disney-clone-4df9b.firebaseapp.com",
  projectId: "disney-clone-4df9b",
  storageBucket: "disney-clone-4df9b.appspot.com",
  messagingSenderId: "758447188575",
  appId: "1:758447188575:web:8ec480945fedcffac049ea",
  measurementId: "G-XG3675DQPC",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
