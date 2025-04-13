// "use client";
// import React, { useEffect } from "react";
// import IconCheck from "./IconCheck";
// import AOS from "aos";
// import "aos/dist/aos.css";
// const Marketing_services = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 600,  // Animation speed
//       easing: "ease-out",
//       once: false,  
//       mirror:true
//     });
//   }, []);
//     return (
//       <section className="relative w-full py-20  max-md:px-6 max-sm:px-0 max-sm:py-10 bg-white">
//         <div className="container mx-auto "data-aos="fade-right">
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
//         </div>
//       </section>
//     );
//   };
  
//   export default Marketing_services;
  

"use client";
import React from "react";
import { motion } from "framer-motion";
import IconCheck from "./IconCheck";
import Image from "next/image";

const MarketingServices = () => {
  return (
    <section className="relative w-full py-20 max-md:px-6 max-sm:px-0 max-sm:py-10 bg-white">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start gap-8"
        >
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            {/* Service Type Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="bg-gradient-to-b from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full inline-block">
                Digital Marketing
              </span>
            </motion.div>

            {/* Service Title */}
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl font-bold mb-6"
            >
              Drive Growth with Strategic Marketing
            </motion.h3>

            {/* Service Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-700 mb-6"
            >
              Our comprehensive digital marketing services help businesses reach their target audience, increase brand awareness, and drive conversions through strategic online marketing campaigns.
            </motion.p>

            {/* Service Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-2 mb-6"
            >
              <div className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">
                  <IconCheck />
                </div>
                <span>SEO Optimization</span>
              </div>
              <div className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">
                  <IconCheck />
                </div>
                <span>Social Media Marketing</span>
              </div>
              <div className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">
                  <IconCheck />
                </div>
                <span>Content Marketing</span>
              </div>
              <div className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">
                  <IconCheck />
                </div>
                <span>Email Marketing</span>
              </div>
              <div className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">
                  <IconCheck />
                </div>
                <span>PPC Advertising</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <a 
                href="#" 
                className="group inline-flex items-center justify-between bg-gradient-to-b from-green-600 to-green-700 text-white font-medium text-xl py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:from-green-700 hover:to-green-600 hover:shadow-xl active:scale-95 active:shadow-md"
              >
                <span>Start Your Marketing Journey</span>
                <span className="flex items-center justify-center w-9 h-9 bg-opacity-20 rounded-full pt-1 transition-transform duration-300 group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Content - Placeholder Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 mt-8 md:mt-0"
          >
            <div className="bg-gray-200 rounded-lg h-full min-h-[400px]">
              <Image src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744023512/UiUx_zj7xgg.png" alt="" width={400} height={400} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingServices;