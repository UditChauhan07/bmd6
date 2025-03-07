import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/Home";
import Science from "./pages/Science/science";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";


function App() {
  return (
    <Router>
      <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<Science />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
    
    {/* <Footer/> */}
    </Router>
  );
}

export default App;
