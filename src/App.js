import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage.jsx";
import MenuPage from "./components/MenuPage.jsx";





function App() {
  return (
    <div className="bg-red-600 text-white min-h-screen">
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </div>
  );
}

export default App;
