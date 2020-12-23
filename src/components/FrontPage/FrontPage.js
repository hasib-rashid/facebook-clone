import React from "react";
import "./FrontPage.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MessageSender from "../MessageSender/MessageSender";

function FrontPage() {
    return (
        <div className="FrontPage">
            <Header />

            <div className="frontpage__body">
                <Sidebar />
                <MessageSender />
            </div>
        </div>
    );
}

export default FrontPage;
