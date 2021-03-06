import React from "react";
import "firebase/auth";
import "../../firebase";
import { auth } from "../../firebase";

function LogOut() {
    return (
        auth.currentUser && (
            <p className="sign-out" onClick={() => auth.signOut()}>
                Sign Out
            </p>
        )
    );
}

export default LogOut;
