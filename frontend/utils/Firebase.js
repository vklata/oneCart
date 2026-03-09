import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "aieommerce.firebaseapp.com",
  projectId: "aieommerce",
  storageBucket: "aieommerce.firebasestorage.app",
  messagingSenderId: "568376112484",
  appId: "1:568376112484:web:5debd7d7d324580f063671"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

