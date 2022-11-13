import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import "./App.css";
import GoalPage from "./components/GoalPage";
import Navbar from "./components/Navbar";
import ToDo from "./components/ToDo";
import HomePage from "./components/HomePage";
import Calendar from "./components/calendar";
import UserInterfaceHome from "./components/UserInterfaceHome";

import styled from "styled-components";
import DatePicker from "react-date-picker";
import { DayPilotScheduler } from "daypilot-pro-react";
import Scheduler from "./components/scheduler";

function App() {
    return (
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/goals" element={<GoalPage />} />
                <Route path="/todo" element={<ToDo />} />
            </Routes>
        </Router>
        </>

    );
  }
export default App;
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {<Navbar />}
//         {/*{<HomePage /> }*/}
//         <CourseSidebar />
//         {/* <Calendar />*/}
//         < Scheduler />
//       </div>
//     );
//   }
// }
