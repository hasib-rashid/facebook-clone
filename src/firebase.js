import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// eslint-disable-next-line
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
	apiKey: "AIzaSyDJXO2nsXN_a40ZjxAEsbuquWTZZaZ0wVQ",
    authDomain: "facebook-clone-bcdb2.firebaseapp.com",
    projectId: "facebook-clone-bcdb2",
    storageBucket: "facebook-clone-bcdb2.appspot.com",
    messagingSenderId: "826018512732",
    appId: "1:826018512732:web:f8ca01fec37c1d891d0b99",
    measurementId: "G-6BCQ90VTPY"
})

export const auth = firebase.auth();
export const firestore = firebase.firestore();