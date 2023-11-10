import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAuzj8fihwt7zum2Ps1Rjn07xKrMYv8lGc",
    authDomain: "eleicoes-apav2023.firebaseapp.com",
    projectId: "eleicoes-apav2023",
    storageBucket: "eleicoes-apav2023.appspot.com",
    messagingSenderId: "986578817782",
    appId: "1:986578817782:web:90ba4697e8b9feb345d2d7",
    measurementId: "G-YYHGRHH4SC"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);