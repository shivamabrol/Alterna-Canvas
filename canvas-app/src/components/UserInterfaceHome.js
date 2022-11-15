import React from "react";
import UICourseSidebar from "./UICourseSidebar";
import UISyllabus from "./UISyllabus";
import Navbar from "./Navbar";

const UserInterfaceHome = ({ children }) => {
    return (
        <div className="main">
            <div className="page-wrapper">
                <UICourseSidebar />
                <UISyllabus />
                {children}
            </div>
        </div>
    );
};

export default UserInterfaceHome;
