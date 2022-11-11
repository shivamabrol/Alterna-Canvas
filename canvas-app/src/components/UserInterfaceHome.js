import React from "react";
import CourseSidebar from "./CourseSidebar";
import Navbar from "./Navbar";

const UserInterfaceHome = ({ children }) => {
    return (
        <div className="main">
            <Navbar />
            <div className="page-wrapper">
                <CourseSidebar />

                    {children}


            </div>
        </div>
    );
};

export default UserInterfaceHome;