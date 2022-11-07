import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import DatePicker from "react-date-picker";
import { HomePage } from "./components/HomePage";
import { DayPilotScheduler } from "daypilot-pro-react";
import Calendar from "./components/calendar.js";
import Scheduler from "./components/scheduler";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar />
        <HomePage /> */}
        {/* <Calendar /> */}
        <Scheduler />
      </div>
    );
  }
}
