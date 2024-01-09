// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage, ref } from "firebase/storage";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDD3dovvG7g67pxB42Sw-PYfOXqrsAQKHo",
//   authDomain: "introduce-bd0f2.firebaseapp.com",
//   projectId: "introduce-bd0f2",
//   storageBucket: "introduce-bd0f2.appspot.com",
//   messagingSenderId: "213181128144",
//   appId: "1:213181128144:web:3c04b50b4baae26b646dd5",
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebase.initializeApp(firebaseConfig);
// export const authService = firebase.auth();
const firebaseAuth = getAuth(app);

export const storage = getStorage(app);

export const db = firebase.firestore();
export {
  firebaseAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};

// export const db = getFirestore(app);

// firebase.initializeApp(firebaseConfig);
// const firestore = firebase.firestore();
// export { firestore };
