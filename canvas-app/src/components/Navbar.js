import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return(
      <div className="navbar">
        <div className="logo">Not Canvas</div>
        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/goals">Goals</Link>
          <Link to="/todo">To Do</Link>
        </ul>
      </div>
  );
}
