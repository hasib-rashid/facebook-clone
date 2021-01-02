import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

function Post() {
    return (
        <div className="Post">
            <div className="post__top">
                <Avatar src="" className="post__avatar" />
                <div className="post__topInfo">
                    <h3>Username</h3>
                    <p>Date and Timestamp</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>Message</p>
            </div>
        </div>
    );
}

export default Post;
