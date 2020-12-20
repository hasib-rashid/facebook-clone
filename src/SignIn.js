import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './firebase';
import { auth } from "./firebase";

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div className="SignIn">
            <button onClick={signInWithGoogle}>Sign In</button>
        </div>
    )
}
export default SignIn
