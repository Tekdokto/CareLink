// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
// import { collection, getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyCL8NwpjKZ9gcVb0R2v8zo82P_oqhMGX5A",
//     authDomain: "carelink-3c074.firebaseapp.com",
//     projectId: "carelink-3c074",
//     storageBucket: "carelink-3c074.appspot.com",
//     messagingSenderId: "113595901798",
//     appId: "1:113595901798:web:5ec7ad97ca6eb296844aa7",
//     measurementId: "G-PEWNLB74WM"
//   };
//   const signInWithEmailAndPassword = async (email, password) => {
//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//       console.log("Signed in successfully");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
  
//   const createAccountWithEmailAndPassword = async (
//     email,
//     password
//   ) => {
//     try {
//       await auth.createUserWithEmailAndPassword(email, password);
//       console.log("Account created successfully");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// const app = initializeApp(firebaseConfig);
// const firebaseAuth = getAuth(app);
// const firebaseDB = getFirestore(app);
// const popUP = signInWithPopup
// const googleAuthProvider = new GoogleAuthProvider();
// const facebookAuthProvider = new FacebookAuthProvider();

// export { firebaseAuth, firebaseDB, popUP, googleAuthProvider, facebookAuthProvider};

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL8NwpjKZ9gcVb0R2v8zo82P_oqhMGX5A",
  authDomain: "carelink-3c074.firebaseapp.com",
  projectId: "carelink-3c074",
  storageBucket: "carelink-3c074.appspot.com",
  messagingSenderId: "113595901798",
  appId: "1:113595901798:web:5ec7ad97ca6eb296844aa7",
  measurementId: "G-PEWNLB74WM"
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const popUP = signInWithPopup;
const firebaseDB = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

const signInWithEmail = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(firebaseAuth, email, password);
    console.log("Signed in successfully");
  } catch (error) {
    console.log(error.message);
  }
};

const createAccountWithEmail = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
    console.log("Account created successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export { firebaseAuth, firebaseDB, popUP, googleAuthProvider, facebookAuthProvider, signInWithEmail, createAccountWithEmail };
