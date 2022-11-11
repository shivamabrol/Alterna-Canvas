import KotaSidebar from "../core/components/sidebar/KotaSidebar";
import menuItems from "../data/sidebar.json";
import React from "react";

const CourseSidebar = () => (
    <KotaSidebar menuItems={menuItems} autoActiveMenu={true} />
);

export default CourseSidebar;