import React from "react";
import "./course.css";
import CGCourseSidebar from "./CGCourseSidebar";

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
            <td>09/05</td>
        </tr>
        <tr>
            <td>Assignment 2</td>
            <td>09/23</td>
        </tr>
        <tr>
            <td>Assignment 3</td>
            <td>10/01</td>
        </tr>
        <tr>
            <td>Midterm Exam</td>
            <td>10/20</td>
        </tr>
        <tr>
            <td>Assignment 4</td>
            <td>11/06</td>
        </tr>
        <tr>
            <td>Assignment 5</td>
            <td>11/18</td>
        </tr>
        <tr>
            <td>Assignment 6</td>
            <td>11/30</td>
        </tr>
    </tbody>
</table>
`;

const CGAssignments = () => (
    <div>
        <CGCourseSidebar />
        <div
            className="syllabus-text"
            dangerouslySetInnerHTML={{ __html: myHTML }}
        />
    </div>
);

export default CGAssignments;
