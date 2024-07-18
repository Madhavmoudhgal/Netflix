
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCbSg-fLmPCP6B_x-8RkQnlbhW8PXfTwSo",
    authDomain: "react-netflix-clone-446f2.firebaseapp.com",
    projectId: "react-netflix-clone-446f2",
    storageBucket: "react-netflix-clone-446f2.appspot.com",
    messagingSenderId: "378540094877",
    appId: "1:378540094877:web:da734a25ac7112007a2b74",
    measurementId: "G-T01P99RE0L"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);