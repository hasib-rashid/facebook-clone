import React from "react";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import "./firebase";
import { auth } from "./firebase";
import SignIn from "./components/SignIn/SignIn";
import FrontPage from "./components/FrontPage/FrontPage";

function App() {
    const [user] = useAuthState(auth);

    return <div className="App">{user ? <FrontPage /> : <SignIn />}</div>;
}

export default App;
