import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

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
const auth = getAuth();

let logOutButton = document.getElementById("logout");

logOutButton.addEventListener("click", () => {
  // Remove localStorage values
  localStorage.removeItem("loggedInUserId");
  localStorage.removeItem("email");
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("username");
  localStorage.removeItem("data_extracurriculars");
  localStorage.removeItem("data_scholarships");
  localStorage.removeItem("dataAvail");

  // Log out
  signOut(auth)
    .then(() => {
      window.location.href = "mission.html";
    })
    .catch((e) => {
      console.log(e);
    });
});
