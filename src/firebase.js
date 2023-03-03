import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA_g5I0qPPo_2-e_JhqHCUtb9DsGEtYIo8",
  authDomain: "qr-code-auth-9ff6a.firebaseapp.com",
  projectId: "qr-code-auth-9ff6a",
  storageBucket: "qr-code-auth-9ff6a.appspot.com",
  messagingSenderId: "289414191918",
  appId: "1:289414191918:web:0652199c5ba088498338bf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);