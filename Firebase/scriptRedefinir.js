import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  sendPasswordResetEmail,
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

const resetPasswordForm = document.querySelector("#resetPasswordForm");

resetPasswordForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("resetEmail").value;
  try {
    await sendPasswordResetEmail(getAuth(), email);
    console.log("E-mail de redefinição de senha enviado com sucesso!");
    window.location.href = "";
  } catch (error) {
    console.error(error.message);
  }
});
