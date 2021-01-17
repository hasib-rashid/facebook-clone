import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow/SidebarRow";
import { useAuthState } from "react-firebase-hooks/auth";
import "../../firebase";
import { auth } from "../../firebase";

function Sidebar() {
    const [user] = useAuthState(auth);

    const user_name = user.displayName;

    const user_photo = user.photoURL;

    return (
        <div className="Sidebar">
            <SidebarRow src={user_photo} title={user_name} />
            <SidebarRow
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png"
                title="Covid 19 Info"
            />
            <SidebarRow
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
                title="Find Friends"
            />
            <SidebarRow
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/urgjGdqFPM_.png"
                title="Welcome"
            />
            <SidebarRow
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
                title="Groups"
            />
            <SidebarRow
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
                title="Watch"
            />
            <SidebarRow
                src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png"
                title="Events"
            />
            <SidebarRow
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png"
                title="Memories"
            />
            <SidebarRow
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
                title="Saved"
            />
            <SidebarRow
                src="https://cdn.onlinewebfonts.com/svg/img_87510.png"
                title="More"
            />
        </div>
    );
}

export default Sidebar;
