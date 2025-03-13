import React from 'react'
import Frequently from '../../components/FaqsPage/Frequently'
import  FaqsTabing from '../../components/FaqsPage/FaqsTabing'
import Footer from '../../components/footer/index'
import Newfooter from '../../components/NewFooter/Index'

const Index = () => {
  return (
    <div>
      <Frequently />
      <FaqsTabing/>
      <Newfooter />
    </div>
  )
}

export default Index
