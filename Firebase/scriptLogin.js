import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC1c6t21i3QNg_01EKpOKfXXguWGHWJBa4",
  authDomain: "hypixeldaniel.firebaseapp.com",
  projectId: "hypixeldaniel",
  storageBucket: "hypixeldaniel.appspot.com",
  messagingSenderId: "335599791681",
  appId: "1:335599791681:web:97626cd00ed8c82e3160c0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Login bem sucedido!");
    window.location.href = "./index.html";
  } catch (error) {
    console.error(error.message);
  }
});
