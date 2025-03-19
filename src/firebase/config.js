// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRMKpB8EpyQaYAbm6pVB-zETaHYSd8QX0",
  authDomain: "tiendareact-e682e.firebaseapp.com",
  projectId: "tiendareact-e682e",
  storageBucket: "tiendareact-e682e.firebasestorage.app",
  messagingSenderId: "632654309997",
  appId: "1:632654309997:web:5e57107d5abd63dba46d64",
  measurementId: "G-EBEF8JTCLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);