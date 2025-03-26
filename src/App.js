import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/Home";
import Science from "./pages/Science/science";
import Navbar from "./components/Navbar";
import Technology from "./pages/Technology/Technology";
import HealthView from "./pages/HealthView/index"
import Faqs from "./pages/Faqs/Index"
import Testimonial from "./pages/Testimonial/Testimonial";
import VideoTutorial from "./pages/VideoTutorial/VideoTutorial";
import OurMission from "./pages/OurMission/OurMission";

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to top on route change
    }, [pathname]);

    return null;
  }
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/science" element={<Science />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/24x7" element={<HealthView />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/video-tutorial" element={<VideoTutorial />} />
        <Route path="/our-mission" element={<OurMission />} />
        <Route path="*" element={<h2 className="comingSoom">Coming Soon</h2>} />
      </Routes>

      {/* <Footer/> */}
    </Router>
  );
}

export default App;
