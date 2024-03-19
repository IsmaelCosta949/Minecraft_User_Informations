import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  //   signOut,
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

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Usuário está logado:", user);
  } else {
    console.log(
      "Usuário não está logado. Redirecionando para a página de login..."
    );
    window.location.replace("./login.html");
  }
});

// function logout() {
//   signOut(auth)
//     .then(() => {
//       console.log("Usuário desconectado com sucesso!");
//       window.location.replace("./login.html");
//     })
//     .catch((error) => {
//       console.error("Erro ao desconectar:", error.message);
//     });
// }
