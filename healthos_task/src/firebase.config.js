import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGLOw5UzW6fPbLGXTpDeHCSM5rhvlpOrk",
  authDomain: "carefirst-f7334.firebaseapp.com",
  projectId: "carefirst-f7334",
  storageBucket: "carefirst-f7334.appspot.com",
  messagingSenderId: "376727508335",
  appId: "1:376727508335:web:f9416bc2ca62fb98a9849a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
