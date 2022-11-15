import React from "react";
import "./course.css";
import UICourseSidebar from "./UICourseSidebar";

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
            <td>09/08</td>
        </tr>
        <tr>
            <td>Assignment 2</td>
            <td>10/05</td>
        </tr>
        <tr>
            <td>Assignment 3</td>
            <td>11/10</td>
        </tr>
        <tr>
            <td>Assignment 4</td>
            <td>12/04</td>
        </tr>
    </tbody>
</table>
`;

const UIAssignments = () => (
    <div>
        <UICourseSidebar />
        <div
            className="syllabus-text"
            dangerouslySetInnerHTML={{ __html: myHTML }}
        />
    </div>
);

export default UIAssignments;
