import React from "react";
import SDCourseSidebar from "./SDCourseSidebar";
import SDSyllabus from "./SDSyllabus";

const SeniorDesignHome = ({ children }) => {
    return (
        <div className="main">
            <div className="page-wrapper">
                <SDCourseSidebar />
                <SDSyllabus />
                {children}
            </div>
        </div>
    );
};

export default SeniorDesignHome;
