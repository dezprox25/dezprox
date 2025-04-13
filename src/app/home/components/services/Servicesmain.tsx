
// import React, { useState, useEffect, useRef } from 'react';

// const ServicesSection = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const stepsRef = useRef([]);
//   const containerRef = useRef(null);

//   const steps = [
//     { number: 0, title: "The Start", description: "Where your design journey begins" },
//     { number: 1, brand: "STRIPE", title: "Subscribe", description: "Pick a plan and get immediate access to your design requests" },
//     { number: 2, brand: "TRELLO", title: "Request", description: "Submit a request, one or two at a time, depending on your plan" },
//     { number: 3, brand: "FIGMA", secondBrand: "FRAMER", title: "Receive", description: "Wait for 24-48 hours until your request is finished" },
//     { number: 4, brand: "SLACK", title: "Repeat", description: "Approve, discuss, or start a new request, our team is no-limit ready" },
//     { number: 5, brand: "LOVE", title: "Profit", description: "You get not only hands but also hearts and heads to help your business grow", isLastStep: true }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       let currentStep = 0;
//       stepsRef.current.forEach((step, index) => {
//         const rect = step.getBoundingClientRect();
//         if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 3) {
//           currentStep = index;
//         }
//       });
//       setActiveStep(currentStep);
//     };
    
//     const container = containerRef.current;
//     container.addEventListener("scroll", handleScroll);
//     return () => container.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto font-sans h-screen">
//       {/* Left Section: Header & Step Indicator */}
//       <div className="sticky top-0 h-screen flex flex-col justify-center px-6  bg-white">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           <span className="text-green-600">The smoothest</span> design process you've ever experienced
//         </h2>
//         <p className="text-gray-600 text-lg mb-6">No BS, no contracts. Request and get results in days.</p>
//         {/* Step Indicator */}
//         <div className="text-6xl font-bold text-green-600 transition-all duration-300 ease-in-out">{activeStep}</div>
//       </div>
      
//       {/* Right Section: Scrollable Steps */}
//       <div ref={containerRef} className="w-full md:w-2/3 h-screen overflow-y-scroll  space-y-32 px-6 snap-y snap-mandatory no-scrollbar">
//         {steps.map((step, index) => (
//           <div key={index} ref={(el) => (stepsRef.current[index] = el)} className="h-screen flex items-center snap-start">
//             <div className="p-6 border-l-4 border-green-600">
//               <h3 className="text-2xl md:text-3xl font-bold capitalize mb-2">{step.title}</h3>
//               <p className="text-gray-600">{step.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;