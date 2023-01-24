import React from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Departments from "./pages/Departments";
import Staff from "./pages/Staff";
import Home from "./pages/Home";
import DepartmentPage from "./pages/DepartmentPage";
import EmployeePage from "./pages/EmployeePage";

import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="departments" element={<Departments />} />
        <Route path="departments/:id" element={<DepartmentPage />} />
        <Route path="staff" element={<Staff />} />
        <Route path="staff/:id" element={<EmployeePage />} />
      </Routes>
    </>
  );
};

export default App;
