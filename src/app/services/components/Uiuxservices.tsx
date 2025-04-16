// "use client";
// import React, { useEffect } from "react";
// import IconCheck from "./IconCheck";
// import AOS from "aos";
// import "aos/dist/aos.css";
// const UiUx_services = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 600,  // Animation speed
//       easing: "ease-out",
//       once: false,  
//       mirror:true
//     });
//   }, []);
//     return (
//       <section className="relative w-full py-20   max-md:px-6 max-sm:px-0 max-sm:py-10 bg-white"  >
//         <div className="container mx-auto" data-aos="fade-left" >
//           <div className="flex flex-col md:flex-row items-center gap-8">
//             {/* Left Content - Placeholder Image */}
//             <div className="w-full md:w-1/2">
//               <div className="bg-gray-200 rounded-lg h-full min-h-[400px]"></div>
//             </div>

//             {/* Right Content */}
//             <div className="w-full md:w-1/2">
//               {/* Service Type Badge */}
//               <div className="mb-6">
//                 <span className="bg-gradient-to-b from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full inline-block">
//                   Web Development
//                 </span>
//               </div>

//               {/* Service Title */}
//               <h3 className="text-3xl font-bold mb-6">Build, Launch, Grow Online</h3>

//               {/* Service Description */}
//               <p className="text-gray-700 mb-8">
//                 The Web Development service is designed for businesses and individuals who need modern,
//                 responsive, and high-performance websites tailored to their needs.
//               </p>

//               {/* Service Features */}
//               <div className="space-y-2 mb-6">
//                 {[
//                   "Website Development (Static / Dynamic)",
//                   "Website Redesign (Static / Dynamic)",
//                   "Student Projects",
//                   "CMS Solutions",
//                   "E-Commerce & Medical Websites",
//                 ].map((feature, index) => (
//                   <div key={index} className="flex items-start">
//                     <div className="text-green-500 mr-2 mt-1">
//                       <IconCheck />
//                     </div>
//                     <span>{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Button */}
//               <div>
//                 <a
//                   href="#"
//                   className="group inline-flex items-center justify-between bg-gradient-to-b from-green-600 to-green-700 text-white font-medium text-xl py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:from-green-700 hover:to-green-600 hover:shadow-xl active:scale-95 active:shadow-md"
//                 >
//                   <span>Find Out More</span>
//                   <span className="flex items-center justify-center w-9 h-9 bg-opacity-20 rounded-full ml-3 transition-transform duration-300 group-hover:translate-x-1">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };

//   export default UiUx_services;

"use client";
import React, { useEffect } from "react";
import IconCheck from "./IconCheck";
import AOS from "aos";
import "aos/dist/aos.css";
const UiUx_services = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,  // Animation speed
      easing: "ease-out",
      once: false,
      mirror: true
    });
  }, []);
  return (
    <section className="relative w-full py-20   max-md:px-6 max-sm:px-0 max-sm:py-10 bg-white"  >
      <div className="container mx-auto" data-aos="fade-left" >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Content - Placeholder Image */}
          <div className="w-full md:w-1/2">
            <div className=" rounded-lg h-full min-h-[400px]"><img src="https://res.cloudinary.com/dwcvkrrpz/image/upload/v1744105165/UiUx_bw9bih.png" alt="" srcSet="" /></div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2">
            {/* Service Type Badge */}
            <div className="mb-6">
              <span className="bg-gradient-to-b from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full inline-block">
                UI/UX & Graphic Design
              </span>
            </div>

            {/* Service Title */}
            <h3 className="text-3xl font-bold mb-6">Elevate Your Digital Presence</h3>

            {/* Service Description */}
            <p className="text-gray-700 mb-8">
              Our UI/UX and Graphic Design services help brands create stunning visuals and user-friendly digital experiences for better engagement.
            </p>

            {/* Service Features */}
            <div className="space-y-2 mb-6">
              {[
                "No-Code Website",
                "Personal Portfolio Design",
                "Social Media Post Design (Package-Based Pricing)",
                "Branding - Logo, Brand Mockups",
                "E-Commerce & Medical Websites",
                "Motion Graphics, Video Editing",
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-green-500 mr-2 mt-1">
                    <IconCheck />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#"
                className="group inline-flex items-center justify-between bg-gradient-to-b from-green-600 to-green-700 text-white font-medium text-xl py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:from-green-700 hover:to-green-600 hover:shadow-xl active:scale-95 active:shadow-md"
              >
                <span>Find Out More</span>
                <span className="flex items-center justify-center w-9 h-9 bg-opacity-20 rounded-full ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiUx_services;
