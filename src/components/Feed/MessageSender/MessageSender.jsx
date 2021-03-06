import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import MoodIcon from "@material-ui/icons/Mood";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { useStateValue } from "../../../StateProvider";
import db from "../../../firebase";
import firebase from "firebase";

function MessageSender() {
    // eslint-disable-next-line
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [inputURL, setInputURL] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: inputURL,
        });

        setInput("");
        setInputURL("");
    };

    return (
        <div className="MessageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        className="messageSender__input"
                        placeholder={`Message`}
                    />
                    <input
                        value={inputURL}
                        onChange={(e) => setInputURL(e.target.value)}
                        type="text"
                        placeholder="Image URL (Optional)"
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Button
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
