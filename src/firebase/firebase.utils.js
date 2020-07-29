import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyA93AZcFCRYNVeO_HAIB8YFZYm7rzGY_QQ",
    authDomain: "crwn-db-e70ee.firebaseapp.com",
    databaseURL: "https://crwn-db-e70ee.firebaseio.com",
    projectId: "crwn-db-e70ee",
    storageBucket: "crwn-db-e70ee.appspot.com",
    messagingSenderId: "780864943749",
    appId: "1:780864943749:web:91cba5c239add1b58b9bec",
    measurementId: "G-W04YHP92DD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
