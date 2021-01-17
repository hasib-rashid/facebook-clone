import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function SidebarRow({ src, Icon, title, className }) {
    return (
        <div className="SidebarRow">
            {src && <Avatar className="Avatar" src={src} />}
            {Icon && <Icon className={className} src={src} />}

            <h4>{title}</h4>
        </div>
    );
}

export default SidebarRow;
