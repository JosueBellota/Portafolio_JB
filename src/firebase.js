// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//install fire base tools global
// yarn add fire base
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCPkswUllb5wJDwF04Q0hwpmgoJdOiGaT4",
  authDomain: "josuebellotaichaso.firebaseapp.com",
  projectId: "josuebellotaichaso",
  storageBucket: "josuebellotaichaso.firebasestorage.app",
  messagingSenderId: "662469889151",
  appId: "1:662469889151:web:ff62d10283e9a482ce434a"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};

// 3:56:00