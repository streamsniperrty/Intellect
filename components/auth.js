import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
    getFirestore,
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

const signUpFunc = () => {
    let emailTemp = document.getElementById("email").value;
    let passwordTemp = document.getElementById("password").value;
    let usernameTemp = document.getElementById("username").value;

    // Convert values to string
    let email = emailTemp.toString();
    let password = passwordTemp.toString();
    let username = usernameTemp.toString();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        console.error("Invalid email format.");
    }

    // Firebase email creation method
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                email: email,
                username: username,
            };
            alert("Account created!");
            const docRef = doc(db, "users", user.uid);
            setDoc(docRef, userData)
                .then(() => {
                    window.location.href = "login.html";
                })
                .catch((e) => {
                    alert(
                        "You are missing one of the requirements. Make sure your password is minimum 6 digits and email is typed correctly.",
                    );
                    console.log(e);
                });
        })
        .catch((e) => {
            console.log(e);
        });
};
const logInFunc = () => {
    const email = document.getElementById("logEmail").value;
    const password = document.getElementById("logPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            let user = userCredential.user;

            // Set localStorage values with user id, email, and login bool
            localStorage.setItem("loggedInUserId", user.uid);
            localStorage.setItem("email", user.email);
            localStorage.setItem("loggedIn", true);

            // Redirect
            window.location.href = "mission.html";
        })
        .catch((e) => {
            alert("Username/password was incorrect.");
            console.log(e);
        });
};

// Sign up
const signUp = document.getElementById("submitRegister");
signUp.addEventListener("click", (e) => {
    e.preventDefault();
    signUpFunc();
});

// Login
const login = document.getElementById("login");
login.addEventListener("click", (e) => {
    e.preventDefault();
    logInFunc();
});
