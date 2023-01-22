import React from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Departments from "./pages/Departments";
import Staff from "./pages/Staff";

import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="departments" element={<Departments />} />
        <Route path="staff" element={<Staff />} />
      </Routes>
    </>
  );
};

export default App;
