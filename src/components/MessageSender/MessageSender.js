import React, { useState } from "react";
import "./MessageSender.css";
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

    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setInput("");
    };

    return (
        <div className="MessageSender">
            <div className="messageSender__top">
                <Avatar src={user_photo} />

                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="mesageSender_input"
                        type="text"
                        placeholder="Message"
                    />

                    <button onClick={handleSubmit} type="submit">
                        Send
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "crimson" }} />
                    <h4>Live Video</h4>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h4>Photo / Video</h4>
                </div>

                <div className="messageSender__option">
                    <MoodIcon style={{ color: "#ffe700" }} />
                    <h4>Feeling / Activity</h4>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;
