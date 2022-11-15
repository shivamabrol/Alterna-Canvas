import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const UISidebarData = [
    {
        title: "Home",
        path: "/UserInterfaceHome",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Assignments",
        path: "/ui-assignments",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
    },
    {
        title: "Resources",
        path: "/ui-resources",
        icon: <RiIcons.RiSlideshowLine />,
        cName: "nav-text",
    },
];
