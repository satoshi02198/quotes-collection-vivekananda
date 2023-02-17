import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO_Wldy6RXtg9wTYCgR2iBEA7OHHBEQ0Y",
  authDomain: "prime-task-377609.firebaseapp.com",
  projectId: "prime-task-377609",
  storageBucket: "prime-task-377609.appspot.com",
  messagingSenderId: "123622709147",
  appId: "1:123622709147:web:6681af0741ac4e7728333e",
  measurementId: "G-YSJH9KXPX4",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
