import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/Home";
import Science from "./pages/Science/science";
import Navbar from "./components/Navbar";
import Technology from "./pages/Technology/Technology";
import HealthView from "./pages/HealthView/index"
import Faqs from "./pages/Faqs/Index"
import Testimonial from "./pages/Testimonial/Testimonial";
import Navtop from './components/Topnav/index'
import VideoTutorial from "./pages/VideoTutorial/VideoTutorial";

function App() {
  return (
    <Router>
      <Navtop/>
      <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<Science />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/24x7" element={<HealthView />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/video-tutorial" element={<VideoTutorial />} />
          <Route path="*" element={<h2 className="comingSoom">Coming Soon</h2>} />
        </Routes>
    
    {/* <Footer/> */}
    </Router>
  );
}

export default App;
