import React from "react";
import CGCourseSidebar from "./CGCourseSidebar";
import CGSyllabus from "./CGSyllabus";

const ComputerGraphicsHome = ({ children }) => {
    return (
        <div className="main">
            <div className="page-wrapper">
                <CGCourseSidebar />
                <CGSyllabus />
                {children}
            </div>
        </div>
    );
};

export default ComputerGraphicsHome;
