import React from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import { useStateValue } from "./StateProvider";

function App() {
    // eslint-disable-next-line
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="app">
            {!user ? (
                <Login />
            ) : (
                <>
                    <Header />
                    <div className="app__body">
                        <Sidebar />
                        <Feed />
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
