import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Hello form / route</h1>} />
        <Route path="/create" element={<h1>Hello form /create route</h1>} />
      </Routes>
    </div>
  );
};

export default App;
