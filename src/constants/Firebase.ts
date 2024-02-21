import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyBeFUROXP0EICabxNqnnjWpEgucTZUpSVE",
 authDomain: "trip-app-7959f.firebaseapp.com",
 projectId: "trip-app-7959f",
 storageBucket: "trip-app-7959f.appspot.com",
 messagingSenderId: "11703233790",
 appId: "1:11703233790:web:ea12b643c4d2d31b14c9af",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
