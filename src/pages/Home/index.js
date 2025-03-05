import React from 'react'
// import styles from "./styles.module.css"
import Navbar from "../../components/Navbar/index"; 
import Header from "../../components/Header";
import RealComparison from '../../components/RealComparison/index';
import HowItsWork from "../../components/HowItsWork/index";
import WhyChoose from "../../components/WhyChoose/index";
import BloodVsUrineTesting from "../../components/BloodVsUrineTesting/index";
import Wellness from "../../components/Wellness/index";
import TestimonialSlider from "../../components/TestimonialSlider/index"
import SmartHealthMonitoring from "../../components/SmartHealthMonitoring/index"
import GetStartedHeathelier from "../../components/GetStartedHeathelier/index"
import Footer from "../../components/footer/index"

function index() {
  return (
    <div>
<Navbar></Navbar>
<Header></Header>
<RealComparison></RealComparison>
<HowItsWork></HowItsWork>
<WhyChoose></WhyChoose>
<BloodVsUrineTesting></BloodVsUrineTesting>
<Wellness></Wellness>
<TestimonialSlider></TestimonialSlider>
<SmartHealthMonitoring></SmartHealthMonitoring>
<GetStartedHeathelier></GetStartedHeathelier>
<Footer></Footer>


    </div>
  )
}

export default index