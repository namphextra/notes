// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_C1VqiE5JlIBI1rEizHwuF-V61mrz5Sg",
  authDomain: "my-project-34b4a.firebaseapp.com",
  databaseURL: "https://my-project-34b4a.firebaseio.com",
  projectId: "my-project-34b4a",
  storageBucket: "my-project-34b4a.appspot.com",
  messagingSenderId: "1041889514005",
  appId: "1:1041889514005:web:bb5dd716cfa25333ffb41c",
  measurementId: "G-ZBR4G3XVRM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(444, db);

export default db;
