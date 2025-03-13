import React from 'react'
// import styles from "./styles.module.css"
import Navbar from "../../components/Navbar/index";
import Header from "../../components/Hompage/Header/index";
import RealComparison from '../../components/Hompage/RealComparison/index';
import HowItsWork from "../../components/Hompage/HowItsWork/index";
import WhyChoose from "../../components/Hompage/WhyChoose/index";
import BloodVsUrineTesting from "../../components/Hompage/BloodVsUrineTesting/index";
import Wellness from "../../components/Hompage/Wellness/index";
import TestimonialSlider from "../../components/Hompage/TestimonialSlider/index"
import SmartHealthMonitoring from "../../components/Hompage/SmartHealthMonitoring/index"
import GetStartedHeathelier from "../../components/Hompage/GetStartedHeathelier/index"
import Footer from "../../components/footer/index"
import MoneyBackGuarntee from "../../components/Hompage/MoneyBackGuarntee/index"
import WhatsIncluded from "../../components/Hompage/WhatsIncluded/index"
import Newfooter from '../../components/NewFooter/Index'


function index() {
  return (
    <div>

      {/* <Navbar></Navbar> */}
      <Header></Header>
      <MoneyBackGuarntee></MoneyBackGuarntee>
      <WhatsIncluded></WhatsIncluded>
      <WhyChoose></WhyChoose>
      <HowItsWork></HowItsWork>
      <RealComparison></RealComparison>
      <BloodVsUrineTesting></BloodVsUrineTesting>
      <Wellness></Wellness>
      <TestimonialSlider></TestimonialSlider>
      <SmartHealthMonitoring></SmartHealthMonitoring>
      <GetStartedHeathelier></GetStartedHeathelier>
      <Newfooter></Newfooter>



    </div>
  )
}

export default index