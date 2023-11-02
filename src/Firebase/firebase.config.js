// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtrDdGRz6lGTjtUL-EdD5MWZ0dx8C--BU",
  authDomain: "taskswift-cd0f1.firebaseapp.com",
  projectId: "taskswift-cd0f1",
  storageBucket: "taskswift-cd0f1.appspot.com",
  messagingSenderId: "421214604364",
  appId: "1:421214604364:web:4003ee3e8866ab979678e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;