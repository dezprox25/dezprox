// "use client";
// import WorldMap from "@/Components/ui/world-map";
// import { motion } from "motion/react";

// export default function WorldMapDemo() {
//   return (
//     <div className=" py-40 dark:bg-black bg-white w-full">
//       <div className="max-w-7xl mx-auto text-center">
//         <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
//           Remote{" "}
//           <span className="text-neutral-400">
//             {"Connectivity".split("").map((word, idx) => (
//               <motion.span
//                 key={idx}
//                 className="inline-block"
//                 initial={{ x: -10, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: idx * 0.04 }}
//               >
//                 {word}
//               </motion.span>
//             ))}
//           </span>
//         </p>
//         <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
//           Break free from traditional boundaries. Work from anywhere, at the
//           comfort of your own studio apartment. Perfect for Nomads and
//           Travellers.
//         </p>
//       </div>
//       <WorldMap
//         dots={[
//           {
//             start: {
//               lat: 64.2008,
//               lng: -149.4937,
//             }, // Alaska (Fairbanks)
//             end: {
//               lat: 34.0522,
//               lng: -118.2437,
//             }, // Los Angeles
//           },
//           {
//             start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
//             end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
//           },
//           {
//             start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
//             end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
//           },
//           {
//             start: { lat: 51.5074, lng: -0.1278 }, // London
//             end: { lat: 28.6139, lng: 77.209 }, // New Delhi
//           },
//           {
//             start: { lat: 28.6139, lng: 77.209 }, // New Delhi
//             end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
//           },
//           {
//             start: { lat: 28.6139, lng: 77.209 }, // New Delhi
//             end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
//           },
//         ]}
//       />
//     </div>
//   );
// }


"use client";

import React from "react";
import WorldMap from "@/Components/ui/world-map"; 
import Title from "@/Components/ui/title";
import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
import Image from "next/image";
import Link from "next/link";

const Herosection_careers = () => {
  return (
    <div>
      <div className="relative w-full md:min-h-screen inset-0 z-30 py-12 md:py-20 px-4 overflow-hidden">
        {/* Animated WorldMap Background */}
        <div className="absolute inset-0 z-0 opacity-70">
          <WorldMap
            dots={[
              { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
              { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
              { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
              { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
              { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
              { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
            ]}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6">
            {/* <span className="bg-gradient-to-b from-green-700 to-green-500 bg-clip-text text-transparent font-semibold lg:text-xl text-xl mb-4">
              Careers
            </span> */}
            <Title text="Careers"/>
          </div>

          <TextGenerateEffect words="Build your future with us" className="text-4xl md:text-6xl font-bold mb-6 md:mb-8"/>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Join a team of talented individuals who are passionate about innovation, 
            collaboration, and making a real impact.
          </p>

          <div>
            <Link href="#open-roles">
            <button className="bg-gradient-to-b from-green-600 to-green-700 text-white px-8 py-3 rounded-full inline-flex items-center transition-colors duration-300">
              See Open Roles
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            </Link>
          </div>
        </div>

        {/* Styled image below hero text */}
        <div className="flex justify-center items-center mt-20 px-20">
          <Image width={500} height={500} className="md:h-[500px] md:w-[800px] h-auto w-auto z-10 relative" src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744025395/careers_style_ktdgbf.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Herosection_careers;
