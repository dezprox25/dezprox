'use client'
import React from 'react'
import Aboutus from './components/Aboutus'
import Vision from './components/Vision'
import Whatwedo from './components/Whatwedo'
import Ourvalues from './components/Ourvalues'
import Features from './components/Features'
import Ourteam from './components/Ourteam'
import FaqSection from '../home/components/Faqsection'
import Footertop from '../home/components/Footertop'


const Page = () => {
  return (
    <div className=''>
      <Aboutus />
      <Vision />
      <Whatwedo />
      <Ourvalues />
      <Features />
      <Ourteam />
      <FaqSection />
      <Footertop />
    </div >
  )
}

export default Page