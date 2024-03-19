import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
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

setTimeout(() => {
  const auth = getAuth();

  const signupForm = document.querySelector("#signupForm");

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById(
      "signupConfirmPassword"
    ).value;

    if (password !== confirmPassword) {
      console.error("As senhas não coincidem.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuário cadastrado com sucesso!");
      window.location.href = "./login.html";
    } catch (error) {
      console.error(error.message);
    }
  });
}, 1000);
