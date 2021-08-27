// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEYpFZM99UVO4c9n39M99cMqZV5fMc75k",
    authDomain: "clone-4ba78.firebaseapp.com",
    projectId: "clone-4ba78",
    storageBucket: "clone-4ba78.appspot.com",
    messagingSenderId: "240408715611",
    appId: "1:240408715611:web:c35bb759fa58cec0347a7e",
    measurementId: "G-MZF6W4FEL4"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore;


export {db, firebaseApp};