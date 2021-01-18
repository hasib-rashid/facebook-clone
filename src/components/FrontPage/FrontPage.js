import React from "react";
import "./FrontPage.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";

function FrontPage() {
    return (
        <div className="FrontPage">
            <Header />

            <div className="frontpage__body">
                <Sidebar />
                <div className="main__content">
                    <MessageSender />
                    <Post />
                </div>
                <h1>Widgets</h1>
            </div>
        </div>
    );
}

export default FrontPage;
