// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//install fire base tools global
// yarn add fire base
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

const firebaseConfig = {

  apiKey: "AIzaSyAA2qoSaGpQmzVF7hh300zRK8fAb_liGvk",
  authDomain: "portafolio-jb.firebaseapp.com",
  projectId: "portafolio-jb",
  storageBucket: "portafolio-jb.appspot.com",
  messagingSenderId: "135346283513",
  appId: "1:135346283513:web:9c7e0d6f2ddfc2c98d5328",
  measurementId: "G-1WT0YZ5M2Y"

};

const firebaseApp = firebase.initializeApp(firebaseConfig); //this will set up all
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

// 3:56:00