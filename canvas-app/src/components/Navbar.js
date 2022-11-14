import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Alterna-Canvas
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/todo">
              To Do
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/goals">
              Goals
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/calendar">
              Calendar
            </a>
          </li>
        </ul>
      </div>
    </nav>
    // <div className="navbar">
    //   <div className="logo">Not Canvas</div>
    //   <ul className="nav-links">
    //     <Link to="/">Home</Link>
    //     <Link to="/calendar">Calendar</Link>
    //     <Link to="/goals">Goals</Link>
    //     <Link to="/todo">To Do</Link>
    //   </ul>
    // </div>
  );
}
