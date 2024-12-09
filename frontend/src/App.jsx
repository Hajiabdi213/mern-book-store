import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

const App = () => {
  return (
    <div className="bg-blue-100 font-mono">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
};

export default App;
