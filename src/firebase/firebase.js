// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXARxiaas8tG9aI5Vvvh_DvOZVf0ldNoU",
  authDomain: "filmy-2dce8.firebaseapp.com",
  projectId: "filmy-2dce8",
  storageBucket: "filmy-2dce8.appspot.com",
  messagingSenderId: "795449279936",
  appId: "1:795449279936:web:c1dad02e6847367f607425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");

export default app