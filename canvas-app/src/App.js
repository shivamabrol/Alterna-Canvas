import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import DatePicker from "react-date-picker";
import { HomePage } from "./components/HomePage";
import { DayPilotScheduler } from "daypilot-pro-react";
import Calendar from "./components/calendar.js";

export default class App extends Component {
  c = "Var";
  render() {
    return (
      <div>
        <Navbar />
        <HomePage />
        {/* <Calendar /> */}
      </div>
    );
  }
}
