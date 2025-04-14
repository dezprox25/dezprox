'use client'
import React from 'react'
import Benefits from './components/Benefits'
import Openroles from './components/Openroles'
import Careerhero from './components/Careerhero'
import Footertop from '../home/components/Footertop'
import FaqSection from '../home/components/Faqsection'

const Page = () => {
  return (
    <div className=''>
      <Careerhero />
      <Benefits />
      <div id='open-roles'>
        <Openroles />
      </div>
      <FaqSection />
      <Footertop />
    </div>
  )
}
export default Page