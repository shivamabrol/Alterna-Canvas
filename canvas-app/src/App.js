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
                </Routes>
            </Router>
        </>
    );
}
export default App;
