import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const CGSidebarData = [
    {
        title: "Home",
        path: "/ComputerGraphicsHome",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Assignments",
        path: "/cg-assignments",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
    },
    {
        title: "Resources",
        path: "/cg-resources",
        icon: <RiIcons.RiSlideshowLine />,
        cName: "nav-text",
    },
];
