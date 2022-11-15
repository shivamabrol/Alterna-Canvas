import React from "react";
import "./course.css";
import SDCourseSidebar from "./SDCourseSidebar";

const myHTML = `
<h2>Assignments</h2>
<table>
    <tbody>
        <tr>
            <th style="width: 150px;">Assigment</th>
            <th>Deadline</th>
        </tr>
        <tr>
            <td>Assignment 1</td>
            <td>09/18</td>
        </tr>
        <tr>
            <td>Assignment 2</td>
            <td>10/25</td>
        </tr>
        <tr>
            <td>Assignment 3</td>
            <td>11/15</td>
        </tr>
        <tr>
            <td>Assignment 4</td>
            <td>11/29</td>
        </tr>
        <tr>
            <td>Assignment 5</td>
            <td>12/06</td>
        </tr>
    </tbody>
</table>
`;

const SDAssignments = () => (
    <div>
        <SDCourseSidebar />
        <div
            className="syllabus-text"
            dangerouslySetInnerHTML={{ __html: myHTML }}
        />
    </div>
);

export default SDAssignments;
