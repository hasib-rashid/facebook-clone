import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJXO2nsXN_a40ZjxAEsbuquWTZZaZ0wVQ",
    authDomain: "facebook-clone-bcdb2.firebaseapp.com",
    projectId: "facebook-clone-bcdb2",
    storageBucket: "facebook-clone-bcdb2.appspot.com",
    messagingSenderId: "826018512732",
    appId: "1:826018512732:web:f8ca01fec37c1d891d0b99",
    measurementId: "G-6BCQ90VTPY",
};

// eslint-disable-next-line
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
