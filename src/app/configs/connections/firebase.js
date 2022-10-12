// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhItc4yOH67ULXWGQtq2Ev-yIeA3ED5CY",
  authDomain: "ewol-twitter.firebaseapp.com",
  projectId: "ewol-twitter",
  storageBucket: "ewol-twitter.appspot.com",
  messagingSenderId: "37565921427",
  appId: "1:37565921427:web:565c36bb32c8fc14e9f566",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = {
  firestore: firebaseApp.firestore(),
  storage: firebase.storage().ref(),
};
