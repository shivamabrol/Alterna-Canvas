import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import GoalPage from "./components/GoalPage";
import Navbar from "./components/Navbar";
import ToDo from "./components/ToDo";
import HomePage from "./components/HomePage";
import Calendar from "./components/calendar";
import UserInterfaceHome from "./components/UserInterfaceHome";
import SecondC from "./components/secondC";
import ComputerGraphicsHome from "./components/ComputerGraphicsHome";
import SeniorDesignHome from "./components/SeniorDesignHome";
import UIAssignments from "./components/UIAssignments";
import SDAssignments from "./components/SDAssignments";
import CGAssignments from "./components/CGAssignments";

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
                    <Route
                        path="/UserInterfaceHome"
                        element={<UserInterfaceHome />}
                    />
                    <Route path="/secondC" element={<SecondC />} />
                    <Route
                        path="/ComputerGraphicsHome"
                        element={<ComputerGraphicsHome />}
                    />
                    <Route
                        path="/SeniorDesignHome"
                        element={<SeniorDesignHome />}
                    />
                    <Route path="/ui-assignments" element={<UIAssignments />} />
                    <Route
                        path="/ui-resources"
                        element={<UserInterfaceHome />}
                    />
                    <Route path="/sd-assignments" element={<SDAssignments />} />
                    <Route
                        path="/sd-resources"
                        element={<SeniorDesignHome />}
                    />
                    <Route path="/cg-assignments" element={<CGAssignments />} />
                    <Route
                        path="/cg-resources"
                        element={<ComputerGraphicsHome />}
                    />
                </Routes>
            </Router>
        </>
    );
}
export default App;
