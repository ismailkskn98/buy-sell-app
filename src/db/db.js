import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

let app;

export const initFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCUbXJ4pugdc4oK466nHWsr3B27eOfuOYM",
        authDomain: "buy-sell-app-8f3b0.firebaseapp.com",
        projectId: "buy-sell-app-8f3b0",
        storageBucket: "buy-sell-app-8f3b0.appspot.com",
        messagingSenderId: "979289998737",
        appId: "1:979289998737:web:edc4ed214fad5990280630"
    };
    if (app) {
        return
    }
    app = initializeApp(firebaseConfig);
}

export const getDb = () => {
    if (app) {
        const db = getFirestore(acceptHMRUpdate);
        return db;
    }
}