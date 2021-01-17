import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";

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
                <p>Hello this is the Message</p>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>

                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>

                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
            </div>
        </div>
    );
}

export default Post;
