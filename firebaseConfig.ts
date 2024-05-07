// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQ--Go35G84pi84rJmLSDftv1zwAlq4-c",
  authDomain: "loveyeon-c2705.firebaseapp.com",
  projectId: "loveyeon-c2705",
  storageBucket: "loveyeon-c2705.appspot.com",
  messagingSenderId: "992915346241",
  appId: "1:992915346241:web:3c28d2362ea11d7fb407c0",
  measurementId: "G-NBKRNJR0RD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
