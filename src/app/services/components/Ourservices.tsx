// // OurServicesSection.jsx
// "use client";
// // import React, { useEffect } from "react";
// import React from 'react';
// import IconCheck from './IconCheck';
// import { TextGenerateEffect } from '@/Components/ui/text-generate-effect';
// import Marketing_services from './Marketservices';
// import UiUx_services from './Uiuxservices';
// import Contentcreation_services from './Contentcreation';
// import AppDevelopement_services from './Appdevelopment';
// // import AOS from "aos";
// // import "aos/dist/aos.css";

 
// const OurServicesSection = () => {
//   // useEffect(() => {
//   //   AOS.init({
//   //     duration: 600,  // Animation speed
//   //     easing: "ease-out",
//   //     once: false,  
//   //     mirror:true,
//   //   });
//   // }, []);
//   return (
//     <section className="py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading Section */}
//         <div className="text-center mb-16">
//           <h3 className="text-green-600 font-medium mb-4">Our Services</h3>
          
//           {/* <h2 className="text-4xl md:text-5xl font-bold mb-6">Crafting Digital Experiences That Matter</h2> */}
//           <TextGenerateEffect className='text-4xl md:text-5xl font-bold mb-6' words="Crafting Digital Experiences That Matter"/>
          
//           <p className="text-gray-700 max-w-3xl mx-auto text-lg">
//             At Dezprox, we design and develop impactful digital experiences that elevate brands,
//             enhance engagement, and drive meaningful results.
//           </p>
//         </div>
        
//         {/* Service Content */}
//         <div className="flex flex-col md:flex-row items-start gap-8">
//           {/* Left Content */}
//           <div className="w-full md:w-1/2">
//             {/* Service Type Badge */}
//             <div className="mb-6">
//               <span className="bg-gradient-to-b from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full inline-block">
//                 Web Development
//               </span>
//             </div>
            
//             {/* Service Title */}
//             <h3 className="text-3xl font-bold mb-6">Build, Launch, Grow Online</h3>
            
//             {/* Service Description */}
//             <p className="text-gray-700 mb-6">
//               The Web Development service is designed for businesses and
//               individuals who need modern, responsive, and high-performance
//               websites tailored to their needs.
//             </p>
            
//             {/* Service Features */}
//             <div className="space-y-2 mb-6">
//               <div className="flex items-start">
//                 <div className="text-green-500 mr-2 mt-1">
//                   {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg> */}
//                   <IconCheck/>
//                 </div>
//                 <span>Website Development (Static / Dynamic)</span>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="text-green-500 mr-2 mt-1">
//                 <IconCheck/>
//                 </div>
//                 <span>Website Redesign (Static / Dynamic)</span>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="text-green-500 mr-2 mt-1">
//                 <IconCheck/>
//                 </div>
//                 <span>Student Projects</span>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="text-green-500 mr-2 mt-1">
//                 <IconCheck/>
//                 </div>
//                 <span>CMS Solutions</span>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="text-green-500 mr-2 mt-1">
//                 <IconCheck/>
//                 </div>
//                 <span>E-Commerce & Medical Websites</span>
//               </div>
//             </div>
            
//             {/* CTA Button */}
//             <div>
//             <a 
//   href="#" 
//   className="group inline-flex items-center justify-between bg-gradient-to-b from-green-600 to-green-700 text-white font-medium text-xl py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:from-green-700 hover:to-green-600 hover:shadow-xl active:scale-95 active:shadow-md"
// >
//   <span>Find Out More</span>
//   <span className="flex items-center justify-center w-9 h-9 bg-opacity-20 rounded-full pt-1  transition-transform duration-300 group-hover:translate-x-1">
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//     </svg>
//   </span>
// </a>

              
//             </div>
//           </div>
          
//           {/* Right Content - Placeholder Image */}
//           <div className="w-full md:w-1/2 mt-8 md:mt-0">
//             <div className="bg-gray-200 rounded-lg h-full min-h-[400px]"></div>
//           </div>
//         </div>
//         <UiUx_services/>
//         <Marketing_services/>
//         <Contentcreation_services/>
//         <AppDevelopement_services/>
//       </div>
      
//     </section>
    
//   );
// };

// export default OurServicesSection;

// OurServicesSection.jsx


"use client";
import React from 'react';
import IconCheck from './IconCheck';
import { TextGenerateEffect } from '@/Components/ui/text-generate-effect';
import Marketing_services from '@/app/services/components/Marketservices';
import UiUx_services from '@/app/services/components/Uiuxservices';
import Contentcreation_services from '@/app/services/components/Contentcreation';
import AppDevelopement_services from '@/app/services/components/Appdevelopment';
import Title from '@/Components/ui/title';
import Image from 'next/image';

const OurServicesSection = () => {

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16 space-y-3">
          <Title text="Our Services" />

          <TextGenerateEffect className='text-4xl md:text-5xl font-bold mb-6' words="Crafting Digital Experiences That Matter" />

          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            At Dezprox, we design and develop impactful digital experiences that elevate brands,
            enhance engagement, and drive meaningful results.
          </p>
        </div>

        {/* Service Content */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            {/* Service Type Badge */}
            <div className="mb-6">
              <span className="bg-gradient-to-b from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full inline-block">
                Web Development
              </span>
            </div>

            {/* Service Title */}
            <h3 className="text-3xl font-bold mb-6">Build, Launch, Grow Online</h3>

            {/* Service Description */}
            <p className="text-gray-700 mb-6">
              The Web Development service is designed for businesses and
              individuals who need modern, responsive, and high-performance
              websites tailored to their needs.
            </p>

            {/* Service Features */}
            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> */}
                  <IconCheck />
                </div>
                <span>Website Development (Static / Dynamic)</span>
              </div>
              <div className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">
                  <IconCheck />
                </div>
                <span>Website Redesign (Static / Dynamic)</span>
              </div>

              <div className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">
                  <IconCheck />
                </div>
                <span>Student Projects</span>
              </div>

              <div className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">
                  <IconCheck />
                </div>
                <span>CMS Solutions</span>
              </div>

              <div className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">
                  <IconCheck />
                </div>
                <span>E-Commerce & Medical Websites</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#"
                className="group inline-flex items-center justify-between bg-gradient-to-b from-green-600 to-green-700 text-white font-medium text-xl py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:from-green-700 hover:to-green-600 hover:shadow-xl active:scale-95 active:shadow-md"
              >
                <span>Find Out More</span>
                <span className="flex items-center justify-center w-9 h-9 bg-opacity-20 rounded-full pt-1  transition-transform duration-300 group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>


            </div>
          </div>

          {/* Right Content - Placeholder Image */}
          <div className="w-full md:w-1/2 h-[30rem] mt-8 md:mt-0">
            <div className=" rounded-lg h-full min-h-[400px]">
              <Image width={500} height={500} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744023104/Webdeveloper_pwomq5.png" alt=""  className='w-full h-full' /></div>
          </div>
        </div>
        <UiUx_services />
        <Marketing_services />
        <Contentcreation_services />
        <AppDevelopement_services />
      </div>

    </section>

  );
};

export default OurServicesSection;