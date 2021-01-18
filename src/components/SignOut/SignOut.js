import React from "react";
import "firebase/auth";
import "../../firebase";
import { auth } from "../../firebase";

function SignOut() {
    return (
        auth.currentUser && (
            <button className="sign-out" onClick={() => auth.signOut()}>
                Sign Out
            </button>
        )
    );
}

export default SignOut;
