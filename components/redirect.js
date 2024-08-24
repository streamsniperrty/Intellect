import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
    getFirestore,
    getDoc,
    setDoc,
    doc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA16yaAxO3TOHviedgcYEFK8W53zCk8emA",
    authDomain: "intellect-25f8c.firebaseapp.com",
    projectId: "intellect-25f8c",
    storageBucket: "intellect-25f8c.appspot.com",
    messagingSenderId: "830660117047",
    appId: "1:830660117047:web:a3d2d45284a70ad1c7f5b2",
};

// Initialize
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

// POST SCRIPT: Run this after login redirection and assign the username to local storage.
onAuthStateChanged(auth, (user) => {
    const loggedInUserId = localStorage.getItem("loggedInUserId");

    if (loggedInUserId) {
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    localStorage.setItem("username", userData.username);
                } else {
                    console.log("ERROR: user does not exist");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        console.log("ERROR: No userID found.");
    }
});
