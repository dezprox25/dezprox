"use client";
import React from "react";
import { Button } from "@/Components/ui/button";
import { motion } from "framer-motion";

import { Code2, Cpu, Database, Globe, Layout, Shield } from 'lucide-react';

const cards = [
  {
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    title: "Global Network",
    description: "Connect worldwide instantly"
  },
  {
    icon: <Shield className="w-6 h-6 text-green-500" />,
    title: "Security First",
    description: "Enterprise-grade protection"
  },
  {
    icon: <Code2 className="w-6 h-6 text-purple-500" />,
    title: "Clean Code",
    description: "Modern development practices"
  },
  {
    icon: <Database className="w-6 h-6 text-red-500" />,
    title: "Cloud Storage",
    description: "Unlimited secure storage"
  },
  {
    icon: <Layout className="w-6 h-6 text-yellow-500" />,
    title: "Smart Layout",
    description: "Responsive design system"
  },
  {
    icon: <Cpu className="w-6 h-6 text-indigo-500" />,
    title: "AI Powered",
    description: "Intelligent automation"
  }
];

const FavouriteTools = () => {
  const rows = Array(10).fill(null);

  return (
    <section className="bg-gray-50 w-full min-h-screen ">
      <div className="lg:w-10/12 h-full mx-auto flex justify-start items-center gap-5">
        <div className="lg:w-1/2 min-h-[40rem] flex flex-col justify-center items-center">
          <div className="space-y-3">
            <h3 className="text-green-600 font-medium">Integrations</h3>
            <h2 className="text-5xl font-bold mt-4 mb-4">
              Powerful Tools for<br /> Digital Excellence
            </h2>
            <p className="text-gray-600 mb-8">
              Enhance productivity, streamline processes, and keep<br />
              everything connected without disrupting.
            </p>
            <Button className="bg-gradient-to-b from-gray-800 to-gray-900 hover:bg-slate-800 text-white rounded-full px-6 py-2">
              Explore Integrations
            </Button>
          </div>
        </div>
        <div className="w-1/2 min-h-[40rem] flex flex-col justify-center items-center ">
          <div className="flex flex-row gap-8 place-content-center relative w-full max-w-7xl h-[600px] overflow-hidden">
            <div className="flex gap-4 h-full">
              {[...Array(4)].map((_, colIndex) => (
                <div key={colIndex} className="flex-1 overflow-hidden">
                  <motion.div
                    className="flex flex-col gap-4"
                    animate={{
                      y: colIndex % 2 === 0 ? [0, '-50%'] : ['-50%', 0]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop"
                    }}
                  >
                    {/* First set of cards */}
                    <div className="flex flex-col gap-4">
                      {rows.map((_, rowIndex) => {
                        const card = cards[rowIndex % cards.length];
                        return (
                          <div
                            key={`col-${colIndex}-row-${rowIndex}`}
                            className="w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
                          >
                            <div className="p-2 bg-gradient-to-br border-2 from-white/10 to-white/5 rounded-lg w-fit mb-2">
                              {card.icon}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="flex flex-col gap-4">
                      {rows.map((_, rowIndex) => {
                        const card = cards[rowIndex % cards.length];
                        return (
                          <div
                            key={`col-${colIndex}-row-${rowIndex}-dup`}
                            className="w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
                          >
                            <div className="p-2 bg-gradient-to-br border from-white/10 to-white/5 rounded-lg w-fit mb-2">
                              {card.icon}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavouriteTools;
