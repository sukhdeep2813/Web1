// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAurPpcd3_j9zG5mFHRIiKNNDbss_n6eD4",
  authDomain: "vite-project-d0c6f.firebaseapp.com",
  projectId: "vite-project-d0c6f",
  storageBucket: "vite-project-d0c6f.appspot.com",
  messagingSenderId: "730359330627",
  appId: "1:730359330627:web:72301cc5013e45365821f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)