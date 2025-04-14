'use client'
import React from 'react'
import Services from './components/Services'
import OurServicesSection from './components/Ourservices'
import Standout from './components/Standout'
import Whoisfor from './components/Whoisfor'
import FaqSection from '../home/components/Faqsection'
import Footertop from '../home/components/Footertop'

const Page = () => { 
  return (
    <div>
      <Services />
      <OurServicesSection />
      <Standout />
      <Whoisfor />
      <FaqSection />
      <Footertop />
    </div>
  )
}
export default Page;

