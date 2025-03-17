import React from 'react'
import Electrode from '../../components/SciencePage/Electrode/Electrode'
import Measurement from '../../components/SciencePage/Measurement/Measurement'
import Footer from '../../components/footer/index'
import Order from '../../components/Order/index'
import Newfooter from '../../components/NewFooter/Index'

const science = () => {
  return (
    <div>
      <Electrode />
      <Measurement />
      <Order />
      <Newfooter />

    </div>
  )
}

export default science
