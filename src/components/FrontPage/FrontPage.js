import React from 'react';
import './FrontPage.css';
import Header from "../Header/Header";
import Sidebar from '../Sidebar/Sidebar';

function FrontPage() {
    return (
        <div className="FrontPage">
            <Header />

            <div className="frontpage__body">
                <Sidebar />
            </div>
        </div>
    )
}

export default FrontPage
