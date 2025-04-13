// 'use client'
// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/Components/ui/collapsible";
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';

// const Vision = () => {
//   const [openSection, setOpenSection] = useState('mission');

//   const toggleSection = (section: string) => {
//     if (openSection === section) {
//       return;
//     }
//     setOpenSection(section);
//   };

//   return (
//     <section className='w-full'>
//       <div className="flex container flex-col justify-center lg:flex-row  mx-auto min-h-screen bg-white">
//         {/* Left Content Side */}
//         <div className="flex-1 flex flex-col justify-center w-1/2 p-8 lg:p-16">
          
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//             Explore our most
//           </h1>

//           <p className="text-lg md:text-xl text-gray-600 mb-4">
//             Complete projects 10x faster, take on more clients, and free up your time to work on more important things.
//           </p>
//           {/* Mission Section */}
//           <Collapsible
//             open={openSection === 'mission'}
//             className="border-t border-gray-200 pt-6 mb-6 px-10"
//           >
//             <CollapsibleTrigger
//               className="flex items-center gap-2 cursor-pointer w-full group"
//               onClick={() => toggleSection('mission')}
//             >
//               <motion.h2
//                 className="text-green-600 font-semibold text-4xl"
//                 whileHover={{ x: 4 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//               >
//                 Our mission
//               </motion.h2>
//               <motion.div
//                 animate={{ rotate: openSection === 'mission' ? 180 : 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="ml-auto"
//               >
//                 <ChevronDown className="h-6 w-6 text-gray-400" />
//               </motion.div>
//             </CollapsibleTrigger>

//             <CollapsibleContent>
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.2 }}
//                 className="py-4"
//               >
//                 <h3 className="text-2xl text-gray-800 mb-3">
//                   Shaping the Future of Business
//                 </h3>

//                 <p className="text-gray-600">
//                   Dezprox is committed to transforming ideas into dynamic digital experiences. We strive to innovate, disrupt and deliver solutions that empower businesses to thrive in the digital age.
//                 </p>
//               </motion.div>
//             </CollapsibleContent>
//           </Collapsible>

//           {/* Vision Section */}
//           <Collapsible
//             open={openSection === 'vision'}
//             className="border-t border-gray-200 px-10 pt-6"
//           >
//             <CollapsibleTrigger
//               className="flex items-center gap-2 cursor-pointer w-full group"
//               onClick={() => toggleSection('vision')}
//             >
//               <motion.h2
//                 className="text-gray-900 font-semibold text-4xl active:text-green-600"
//                 whileHover={{ x: 4 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//               >
//                 Our Vision
//               </motion.h2>
//               <motion.div
//                 animate={{ rotate: openSection === 'vision' ? 180 : 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="ml-auto"
//               >
//                 <ChevronDown className="h-6 w-6 text-gray-400" />
//               </motion.div>
//             </CollapsibleTrigger>

//             <CollapsibleContent>
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.2 }}
//                 className="py-4"
//               >
//                 <h3 className="text-2xl text-gray-800 mb-3">
//                   Leading Digital Innovation
//                 </h3>

//                 <p className="text-gray-600">
//                   We envision a world where digital solutions seamlessly integrate with business objectives, creating meaningful impact and sustainable growth. Our aim is to be at the forefront of technological advancement, setting new standards for digital excellence.
//                 </p>
//               </motion.div>
//             </CollapsibleContent>
//           </Collapsible>
//           <div className='w-full h-[3px] mt-10 bg-gray-300 overflow-hidden'>
//             <div className='h-full w-1/2 bg-black'></div>
//           </div>
//         </div>

//         {/* Right Image Side */}
//         <div className="flex-1 p-8 lg:p-16 flex items-center justify-center">
//           {/* <AnimatePresence mode="wait">
//             <motion.div
//               key={openSection}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="w-full max-w-lg"
//             >
//               <Image
//                 width={1470}
//                 height={1470}
//                 src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021551/Container_mrpokb.png"
//                 alt="Green target with arrows"
//                 className="w-full h-full rounded-3xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform duration-300 hover:scale-[1.02]"
//               />
//             </motion.div>
//           </AnimatePresence> */}

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={openSection}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="w-full max-w-lg"
//             >
//               {openSection === 'mission' ? (
//                 <Image
//                   width={1470}
//                   height={1470}
//                   src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021551/Container_mrpokb.png"
//                   alt="Mission Image Description"
//                   className="w-full h-full rounded-3xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform duration-300 hover:scale-[1.02]"
//                 />
//               ) : (
//                 <Image
//                   width={1470}
//                   height={1470}
//                   src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744189300/jGCAgVOTqmEJcV2hXPwt96TUd6w.png_pazfct.png"
//                   alt="Vision Image Description"
//                   className="w-full h-full rounded-3xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform duration-300 hover:scale-[1.02]"
//                 />
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Vision;


'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/Components/ui/collapsible";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Vision = () => {
  const [openSection, setOpenSection] = useState('mission');

  const toggleSection = (section: string) => {
    if (openSection === section) return;
    setOpenSection(section);
  };

  return (
    <section className='w-full'>
      <div className="flex flex-col lg:flex-row justify-center container mx-auto min-h-screen bg-white">
        {/* Left Content Side */}
        <div className="flex-1 flex flex-col justify-center w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore our most
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">
            Complete projects 10x faster, take on more clients, and free up your time to work on more important things.
          </p>

          {/* Mission Section */}
          <Collapsible open={openSection === 'mission'} className="border-t border-gray-200 pt-6 mb-6 px-4 sm:px-6 md:px-10">
            <CollapsibleTrigger
              className="flex items-center gap-2 cursor-pointer w-full group"
              onClick={() => toggleSection('mission')}
            >
              <motion.h2
                className="text-green-600 font-semibold text-2xl sm:text-3xl md:text-4xl"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Our mission
              </motion.h2>
              <motion.div
                animate={{ rotate: openSection === 'mission' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-auto"
              >
                <ChevronDown className="h-6 w-6 text-gray-400" />
              </motion.div>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="py-4"
              >
                <h3 className="text-xl sm:text-2xl text-gray-800 mb-3">
                  Shaping the Future of Business
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  Dezprox is committed to transforming ideas into dynamic digital experiences. We strive to innovate, disrupt and deliver solutions that empower businesses to thrive in the digital age.
                </p>
              </motion.div>
            </CollapsibleContent>
          </Collapsible>

          {/* Vision Section */}
          <Collapsible open={openSection === 'vision'} className="border-t border-gray-200 pt-6 px-4 sm:px-6 md:px-10">
            <CollapsibleTrigger
              className="flex items-center gap-2 cursor-pointer w-full group"
              onClick={() => toggleSection('vision')}
            >
              <motion.h2
                className="text-gray-900 font-semibold text-2xl sm:text-3xl md:text-4xl"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Our Vision
              </motion.h2>
              <motion.div
                animate={{ rotate: openSection === 'vision' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-auto"
              >
                <ChevronDown className="h-6 w-6 text-gray-400" />
              </motion.div>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="py-4"
              >
                <h3 className="text-xl sm:text-2xl text-gray-800 mb-3">
                  Leading Digital Innovation
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  We envision a world where digital solutions seamlessly integrate with business objectives, creating meaningful impact and sustainable growth. Our aim is to be at the forefront of technological advancement, setting new standards for digital excellence.
                </p>
              </motion.div>
            </CollapsibleContent>
          </Collapsible>

          <div className="w-full h-[3px] mt-10 bg-gray-300 overflow-hidden">
            <div className="h-full w-1/2 bg-black"></div>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-16 flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={openSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-lg"
            >
              <Image
                width={1470}
                height={1470}
                src={
                  openSection === 'mission'
                    ? "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021551/Container_mrpokb.png"
                    : "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744189300/jGCAgVOTqmEJcV2hXPwt96TUd6w.png_pazfct.png"
                }
                alt={openSection === 'mission' ? "Mission Image Description" : "Vision Image Description"}
                className="w-full h-auto rounded-3xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform duration-300 hover:scale-[1.02]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Vision;
