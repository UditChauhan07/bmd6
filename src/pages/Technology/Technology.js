import React from 'react'
import GlucoseTracking from "../../components/AppTechnologyPage/GlucoseTracking/index"
import Informed from "../../components/AppTechnologyPage/Informed/index"
import Note from "../../components/AppTechnologyPage/Note/index"
import Order from "../../components/Order/index"
import DiabetesManager from '../../components/AppTechnologyPage/DiabetesManager/index'
import Footer from '../../components/footer/index'

const Technology = () => {
  return (
    <div>
      <DiabetesManager />
      <GlucoseTracking />
      <Informed />
      <Note />
      <Order />
      <Footer/>
    </div>
  )
}

export default Technology
