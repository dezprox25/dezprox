"use client";
import React from 'react';
import { TextGenerateEffect } from '@/Components/ui/text-generate-effect';
import { motion } from "framer-motion";
import Title from '@/Components/ui/title';

const features = [
  "Endless Requests",
  "Live Collaboration",
  "Limitless Revisions",
  "Trello Workflow Management",
  "Multiple Brand Profiles",
];
const features2 = [
  "Full Design Ownership",
  "No Lock-In Contracts",
  "Expert Art Direction",
  "Skilled Designers",
  "Dedicated Project Lead",
];
const HowWeStandOutSection = () => {
  return (
    <section className="py-16 px-4 bg-[#f3fcf3]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <div className='space-y-3 '>
          
        <Title text="How We Stand Out" />

        {/* <h2 className="text-4xl md:text-5xl font-bold mb-6">What Makes Us Different?</h2> */}
        <TextGenerateEffect className="text-4xl md:text-5xl font-bold mb-6" words="What Makes Us Different?" />

        <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-12">
          We offer unlimited requests, expert driven solutions and seamless
          collaboration ensuring innovation, precision and success with a
          client first, risk free approach.
        </p>
        </div>

        {/* Features - top row */}



        <div className="w-full overflow-hidden py-4 relative">
          <motion.div
            className="flex space-x-4"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 12, // Adjust speed if needed
            }}
            style={{ display: "flex", whiteSpace: "nowrap" }}
          >
            {/* Duplicate items for seamless infinite scroll */}
            {[...features, ...features].map((text, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm min-w-[250px] text-center break-words"
              >
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>



        {/* Features - bottom row */}
        <div className="overflow-hidden  relative w-full py-4">
          <motion.div
            className="flex space-x-4 "
            animate={{ x: ["-100%", "0%"] }} // Continuous left-to-right movement
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 12, // Adjust speed here
            }}
            style={{ display: "flex", whiteSpace: "nowrap" }}
          >
            {[...features2, ...features2].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm sm:min-w-[250px] text-center break-words"
              >
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Centered item in bottom row */}
        {/* <div className="flex justify-center mt-4">
          <div className="bg-white rounded-lg p-4 shadow-sm w-full sm:w-auto sm:min-w-[300px]">
            <span className="font-medium"> </span>
            <span className="text-gray-300 font-light"></span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowWeStandOutSection;




