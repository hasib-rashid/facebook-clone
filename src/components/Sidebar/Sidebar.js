import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow/SidebarRow";
import { useAuthState } from "react-firebase-hooks/auth";
import "../../firebase";
import { auth } from "../../firebase";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Sidebar() {
    const [user] = useAuthState(auth);

    const user_name = user.displayName;

    const user_photo = user.photoURL;

    return (
        <div className="Sidebar">
            <SidebarRow src={user_photo} title={user_name} />
            <SidebarRow Icon={LocalHospitalIcon} title="Covid 19 Info" />
            <SidebarRow Icon={PeopleOutlineIcon} title="Friends" />
            <SidebarRow Icon={SupervisedUserCircleRoundedIcon} title="Groups" />
            <SidebarRow Icon={StorefrontIcon} title="Trending" />
            <SidebarRow Icon={ArrowDropDownIcon} title="More" />
        </div>
    );
}

export default Sidebar;
