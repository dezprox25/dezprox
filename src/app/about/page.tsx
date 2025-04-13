'use client'
import React, { useEffect, useState } from 'react'
import Aboutus from './components/Aboutus'
import Vision from './components/Vision'
import Whatwedo from './components/Whatwedo'
import Ourvalues from './components/Ourvalues'
import Features from './components/Features'
import Ourteam from './components/Ourteam'
import FaqSection from '../home/components/Faqsection'
import Footertop from '../home/components/Footertop'
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
    <div className=''>
      <Aboutus />
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
      <Vision />
      <Whatwedo />
      <Ourvalues />
      <Features />
      <Ourteam />
      <FaqSection />
      <Footertop />
    </div>
  )
}

export default Page