import React from "react";
import { Avatar } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import "../../firebase";
import { auth } from "../../firebase";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import MoodIcon from "@material-ui/icons/Mood";

function MessageSender() {
    const [user] = useAuthState(auth);

    const user_photo = user.photoURL;

    return (
        <div className="MessageSender">
            <div className="messageSender__top">
                <Avatar src={user_photo} />

                <form>
                    <input
                        className="mesageSender_input"
                        type="text"
                        placeholder="Message"
                    />
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "crimson" }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo / Video</h3>
                </div>

                <div className="messageSender__option">
                    <MoodIcon style={{ color: "#ffe700" }} />
                    <h3>Feeling / Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;
