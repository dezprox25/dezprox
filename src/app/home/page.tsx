'use client'
import React, { useEffect, useState } from 'react'
import Herosection from './components/Herosection'
import Ourfeature from './components/Ourfeature'
import Aboutsection from './components/Aboutsection'
import Whoweare from './components/Whoweare'
import ServicesSection from './components/Servicessection'
import Productsection from './components/Productsection'
import Whychooseus from './components/Whychooseus'
import Testimonialsection from './components/TestimonialSection'
import Faqsection from './components/Faqsection'
import FavouriteTools from './components/Favtool'
import Footertop from './components/Footertop'
import { ArrowUp } from 'lucide-react';

const Page = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='min-h-screen'>
      <Herosection />
      <div className='w-auto h-auto lg:block hidden float-end sticky top-[40rem] z-50 p-5'>
        <button
          onClick={scrollToTop}
          className={`
  fixed bottom-8 right-8
  w-[45px] h-[45px]
  bg-gradient-to-r from-[#6bff72] to-[#00662a]
  flex items-center justify-center
  rounded-full cursor-pointer border-none
  group
   ${showButton ? 'opacity-100' : 'opacity-0'}
  transition-opacity duration-300
`}
        >
          <ArrowUp
            className="w-5 h-5 text-white group-hover:animate-[slide-in-bottom_0.7s_cubic-bezier(0.25,0.46,0.45,0.94)_both]"
          />
        </button>
      </div>
      <Ourfeature />
      <Aboutsection />
      <Whoweare />
      <ServicesSection />
      <Productsection />
      <Whychooseus />
      <FavouriteTools />
      <Testimonialsection />
      <Faqsection />
      <Footertop />
    </div>
  )
}
export default Page;