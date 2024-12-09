import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import SingleBookPage from "./pages/SingleBookPage";

const App = () => {
  return (
    <div className="bg-blue-100 font-mono min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path={`/:id`} element={<SingleBookPage />} />
      </Routes>
    </div>
  );
};

export default App;
