import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgFv_q0zY5mXGH6M1vezwTb1JFmFd_Ksw",
  authDomain: "crwn-clothing-db-f7440.firebaseapp.com",
  projectId: "crwn-clothing-db-f7440",
  storageBucket: "crwn-clothing-db-f7440.firebasestorage.app",
  messagingSenderId: "839069286176",
  appId: "1:839069286176:web:470ac7a1b7e289dbd6e145",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
