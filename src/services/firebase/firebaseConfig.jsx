import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


export const firebaseConfig = {
  apiKey: "AIzaSyDsXPUELJdjf7EQPXHzUk_4wZ4DFg7nrjY",
  authDomain: "bestetheater.firebaseapp.com",
  projectId: "bestetheater",
  storageBucket: "bestetheater.appspot.com",
  messagingSenderId: "979305561374",
  appId: "1:979305561374:web:d55149c9c635892edc9d0f"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)