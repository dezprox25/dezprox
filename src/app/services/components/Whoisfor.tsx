"use client";
import React, { useState } from "react";
import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import IconCheck from "./IconCheck";

const Whoisfor = () => {
  const categories = [
    {
      label: "Agencies",
      title: "Multiply your agency output without multiplying your overhead costs.",
      description:
        "Overwhelmed? Overworked? Not anymore! Our vetted designers handle your design requests, freeing you up to focus on growing your business and delivering results for your clients.",
      image: "https://res.cloudinary.com/dwcvkrrpz/image/upload/v1744105162/Agency_v5uyxd.png",
      features: [
        "Save time and money on creative production",
        "Scale up and down as needed",
        "Meet tight deadlines with ease",
      ],
    },
    {
      label: "Small and Medium-Sized Businesses",
      title: "Grow your business with flexible and cost-effective solutions.",
      description:
        "Our services are designed to help small and medium-sized businesses compete effectively with high-quality digital solutions.",
      image: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744024365/collabrate_n0fz4k.png",
      features: [
        "Affordable and scalable services",
        "Expert support tailored to your needs",
        "Achieve your business goals efficiently",
      ],
    },
    {
      label: "Marketing teams",
      title: "Enhance your marketing efforts with top-tier creative support.",
      description:
        "Our expert team provides seamless support to help marketing teams deliver exceptional results.",
      image: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744024339/multipleagency_nhon4q.png",
      features: [
        "High-quality creative assets",
        "Faster turnaround times",
        "Strategic design solutions",
      ],
    },
    {
      label: "Large Enterprise",
      title: "Enterprise-grade solutions for scaling your business.",
      description:
        "We provide high-end creative solutions that help enterprises scale efficiently and effectively.",
      image: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744024339/elopration_dwdq7t.png",
      features: [
        "Robust and scalable solutions",
        "Dedicated expert teams",
        "Custom-tailored creative strategies",
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-8">
        <h3 className="bg-gradient-to-b from-green-800  to-green-500 bg-clip-text text-transparent text-xl font-medium mb-4">Who is it for?</h3>
        <TextGenerateEffect
          className="text-4xl md:text-5xl font-semibold mb-4"
          words="It's Designed For"
        />
        <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg">
          Businesses, entrepreneurs, and creators seeking seamless,
          <br className="hidden md:block" />
          high quality digital solutions with expert support.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`py-2 px-4 sm:px-6 rounded-full transition-all cursor-pointer text-sm sm:text-base ${
              selectedCategory.label === category.label
                ? "bg-gradient-to-b from-green-600 to-green-700 text-white"
                : "bg-white border border-gray-300 text-gray-700"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Content Section with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center gap-8"
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
              {selectedCategory.title}
            </h2>
            <p className="text-gray-700 mb-8 text-sm sm:text-base">
              {selectedCategory.description}
            </p>
            <ul className="space-y-4">
              {selectedCategory.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="space-y-2 mr-3">
                  <IconCheck/>
                  </div>
                  <span className="font-medium text-gray-800 uppercase text-xs sm:text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              key={selectedCategory.image}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden  h-full min-h-[400px]"
            >
              <Image
              width={800}
              height={800}
                src={selectedCategory.image}
                alt={selectedCategory.label}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Whoisfor;
