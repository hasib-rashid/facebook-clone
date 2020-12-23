import React from "react";
import { Avatar } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import "../../firebase";
import { auth } from "../../firebase";

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
                <div className="messageSender__option"></div>

                <div className="messageSender__option"></div>

                <div className="messageSender__option"></div>
            </div>
        </div>
    );
}

export default MessageSender;
