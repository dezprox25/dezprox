

"use client";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  const Dots = ({ className }: { className: string }) => (
    <svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} >
      <circle cx="24.5155" cy="25.0496" r="19.6942" transform="rotate(75 24.5155 25.0496)" fill="url(#paint0_linear_275_971)" fillOpacity="0.33" />
      <g filter="url(#filter0_f_275_971)">
        <circle cx="24.5169" cy="25.0495" r="13.1294" transform="rotate(75 24.5169 25.0495)" fill="url(#paint1_linear_275_971)" />
      </g>
      <g style={{ mixBlendMode: 'plus-lighter' }} filter="url(#filter1_f_275_971)">
        <circle cx="24.9013" cy="24.3796" r="4.92354" transform="rotate(75 24.9013 24.3796)" fill="white" />
      </g>
      <defs>
        <filter id="filter0_f_275_971" x="8.38477" y="8.91684" width="32.2656" height="32.2654" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_275_971" />
        </filter>
        <filter id="filter1_f_275_971" x="18.1766" y="17.6549" width="13.4496" height="13.4495" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.9" result="effect1_foregroundBlur_275_971" />
        </filter>
        <linearGradient id="paint0_linear_275_971" x1="24.5155" y1="5.35542" x2="24.5155" y2="44.7437" gradientUnits="userSpaceOnUse">
          <stop stopColor="#227631" />
          <stop offset="1" stopColor="#3FA740" />
        </linearGradient>
        <linearGradient id="paint1_linear_275_971" x1="24.5169" y1="11.9201" x2="24.5169" y2="38.179" gradientUnits="userSpaceOnUse">
          <stop stopColor="#227631" />
          <stop offset="1" stopColor="#3FA740" />
        </linearGradient>
      </defs>
    </svg>
  );
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-green-50/90  px-5 py-10 text-center">
      {/* Circle Background */}
      <div className="absolute w-[650px] h-[650px] max-lg:w-[550px] max-lg:h-[550px] max-md:w-[500px] max-md:h-[500px] max-sm:w-[350px] max-sm:h-[350px] rounded-full border border-gray-200 flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Middle Circle */}
        <div className="absolute w-[500px] h-[500px] max-lg:w-[430px] max-lg:h-[430px] max-md:w-[360px] max-md:h-[360px] max-sm:w-[250px] max-sm:h-[250px] rounded-full border border-gray-200" />
        {/* Inner Circle */}
        <div className="absolute w-[350px] h-[350px] max-lg:w-[300px] max-lg:h-[300px] max-md:w-[250px] max-md:h-[250px] max-sm:w-[170px] max-sm:h-[170px] rounded-full border border-gray-200" />

        {/* Dots */}
        <div><Dots className="absolute w-6 h-6 max-sm:w-4 max-sm:h-4  rounded-full left-1/2 md:-top-3 sm:-top-3 -top-2 -translate-x-1/2" /></div>
        <div><Dots className="absolute w-6 h-6 max-sm:w-4 max-sm:h-4 rounded-full top-1/2 right-0 -translate-y-1/2 translate-x-1/2" /></div>
        <div><Dots className="absolute w-6 h-6 max-sm:w-4 max-sm:h-4  rounded-full left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2" /></div>
        {/* <div className="absolute w-3 h-3 max-sm:w-2 max-sm:h-2 bg-green-200 shadow-[0_0_10px_rgba(209,250,229,0.5)] rounded-full left-0 top-1/3 -translate-x-1/2" /> */}
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center max-w-[800px]">
        <h3 className="bg-gradient-to-b from-green-700  to-green-500 bg-clip-text text-transparent font-semibold lg:text-2xl text-xl mb-6">About us</h3>
        <div className="mb-6">
          <h2 className="text-black text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-bold mb-2">Redefining</h2>
          <h2 className="bg-gradient-to-b from-green-700  to-green-500 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl min-h-20 font-bold">Digital Excellence</h2>
        <p className="text-gray-700 text-lg max-sm:text-base leading-7 mx-auto mt-4 max-w-[600px] px-4">
          At Dezprox, we harness innovation and technology to create limitless opportunities, transforming ideas into powerful digital experiences that drive success.
        </p>
        </div>
      </div>

      {/* Team Members */}
      <div className="absolute w-full h-full pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-[20%] left-[10%] max-lg:top-[15%] max-lg:left-[8%] max-md:top-[12%] max-md:left-[5%]">
          <div className="w-16 h-16 max-lg:w-14 max-lg:h-14 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10 rounded-full overflow-hidden relative">
            <Image width={100} height={100} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021162/AboutUs_2_ogakty.png" alt="Dezprox_Team_member" className="w-full h-full object-cover" />
            {/* <div className="absolute w-2 h-2 bg-green-500 rounded-full right-1 bottom-1"></div> */}
          </div>
        </div>

        {/* Top Right */}
        <div className="absolute top-[20%] right-[10%] max-lg:top-[15%] max-lg:right-[8%] max-md:top-[12%] max-md:right-[5%]">
          <div className="w-16 h-16 max-lg:w-14 max-lg:h-14 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10 rounded-full overflow-hidden relative">
            <Image width={100} height={100} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021162/AboutUs_5_q62qhc.png" alt="Dezprox_Team_member" className="w-full h-full object-cover" />
            {/* <div className="absolute w-2 h-2 bg-green-500 rounded-full right-1 bottom-1"></div> */}
          </div>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-[20%] left-[15%] max-lg:bottom-[15%] max-lg:left-[12%] max-md:bottom-[12%] max-md:left-[8%]">
          <div className="w-16 h-16 max-lg:w-14 max-lg:h-14 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10 rounded-full overflow-hidden">
            <Image width={100} height={100} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021162/AboutUs_1_mcbigo.png" alt="Dezprox_Team_member" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Middle Left */}
        <div className="absolute top-[40%] left-[15%] max-lg:top-[40%] max-lg:left-[12%] max-md:top-[40%] max-md:left-[8%]">
          <div className="w-16 h-16 max-lg:w-14 max-lg:h-14 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10 rounded-full overflow-hidden relative">
            <Image width={100} height={100} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021162/AboutUs_3_p9n81d.png" alt="Dezprox_Team_member" className="w-full h-full object-cover" />
            {/* <div className="absolute w-2 h-2 bg-green-500 rounded-full right-1 bottom-1"></div> */}
          </div>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-[30%] right-[15%] max-lg:bottom-[25%] max-lg:right-[12%] max-md:bottom-[20%] max-md:right-[8%]">
          <div className="w-16 h-16 max-lg:w-14 max-lg:h-14 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10 rounded-full overflow-hidden">
            <Image width={100} height={100} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021162/AboutUs_4_fhkuac.png" alt="Dezprox_Team_member" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;