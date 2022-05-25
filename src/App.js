import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import { Dashboard, Signin } from "./pages";

import "./styles/app.scss";

function App() {
  return (
    <main className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
