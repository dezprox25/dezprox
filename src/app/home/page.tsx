'use client'
import React from 'react'
import Herosection from './components/Herosection'
import Ourfeature from './components/Ourfeature'
import Aboutsection from './components/Aboutsection'
import Whoweare from './components/Whoweare'
import ServicesSection from './components/Servicessection'
import Productsection from './components/Productsection'
import Whychooseus from './components/Whychooseus'
import Testimonialsection from './components/TestimonialSection'
import Faqsection from './components/Faqsection'
// import FavouriteTools from './components/Favtool'
import Integration from './components/Integrations'
import Footertop from './components/Footertop'

const Page = () => {


  return (
    <div className='min-h-screen'>
      <Herosection />
      <Ourfeature />
      <Aboutsection />
      <Whoweare />
      <ServicesSection />
      <Productsection />
      <Whychooseus />
      {/* <FavouriteTools /> */}
      <Integration/>
      <Testimonialsection />
      <Faqsection />
      <Footertop />
    </div>
  )
}
export default Page;