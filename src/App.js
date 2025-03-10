import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/Home";
import Science from "./pages/Science/science";
import Navbar from "./components/Navbar";
import Technology from "./pages/Technology/Technology";

function App() {
  return (
    <Router>
      <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<Science />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<h2 className="comingSoom">Coming Soon</h2>} />
        </Routes>
    
    {/* <Footer/> */}
    </Router>
  );
}

export default App;
