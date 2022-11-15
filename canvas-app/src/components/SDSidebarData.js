import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SDSidebarData = [
    {
        title: "Home",
        path: "/SeniorDesignHome",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Assignments",
        path: "/sd-assignments",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
    },
    {
        title: "Resources",
        path: "/sd-resources",
        icon: <RiIcons.RiSlideshowLine />,
        cName: "nav-text",
    },
];
