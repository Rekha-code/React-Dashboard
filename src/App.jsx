import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import "./App.css";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
