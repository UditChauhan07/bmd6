import React from 'react'
import Health from '../../components/HealthViewPage/Health/index';
import Slider1 from "../../components/HealthViewPage/Slider1/index"
import HealthcareData from "../../components/HealthViewPage/Benefits/index";
import Order from '../../components/Order/index'
import Footer from '../../components/footer/index'
const index = () => {
  return (
    <div>
    <Health/>
    <Slider1/>
    <HealthcareData/>
    <Order/>
    <Footer/>
    </div>
  )
}

export default index
