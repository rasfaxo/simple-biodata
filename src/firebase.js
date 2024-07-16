import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7d_6KP_uBECvVgNsRuMCecpUPwrTrG98",
  authDomain: "biodata-app-4de64.firebaseapp.com",
  projectId: "biodata-app-4de64",
  storageBucket: "biodata-app-4de64.appspot.com",
  messagingSenderId: "19778697531",
  appId: "1:19778697531:web:6daa5227d7642370491f1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db 