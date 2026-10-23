import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const creatAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, creatAt });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  return userDocRef;

  //check if user data exists

  //return userDocRef
};
