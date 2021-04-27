import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKjGF4DJ6wlm2nNpqlARIsf2OZxaG5Xr4",
  authDomain: "disneyplusclone-1eb8e.firebaseapp.com",
  projectId: "disneyplusclone-1eb8e",
  storageBucket: "disneyplusclone-1eb8e.appspot.com",
  messagingSenderId: "459999784640",
  appId: "1:459999784640:web:3d50ed1f809f634afa0725",
  measurementId: "G-1L98PD2KKD",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
