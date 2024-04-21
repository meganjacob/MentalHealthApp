// firebase.js
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "REACT_APP_FIREBASE_KEY",
    authDomain: "REACT_APP_AUtH_DOMAIN",
    projectId: "REACT_APP_PROJECT_ID",
    storageBucket: "REACT_APP_STORAGE_BUCKET",
    messagingSenderId: "REACT_APP_SENDER_ID ",
    appId: "REACT_APP_APP_ID"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export default firebaseApp;
