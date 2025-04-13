"use client";
import "@fontsource/outfit";
import Link from "next/link";
import { Button } from "@/Components/ui/button";
import { motion } from "framer-motion";
import { Ripple } from "@/Components/magicui/ripple";
import Image from "next/image";

export default function Thirdhome() {
    return (
        <>
            <div className="relative w-full flex items-center justify-center px-4 py-10 bg-transparent overflow-hidden">
                <div className="absolute flex h-[700px] w-full flex-col items-center justify-center  rounded-lg  bg-background">
                    <Ripple className=" scale-125 top-20" />
                </div>
                <div className="relative container mx-auto  max-w-5xl md:px-36 md:py-20 p-20 border border-[#3CB371] flex flex-col items-center text-center">
                    {/* Green corner squares connected to border lines */}
                    <div className="absolute top-[-10px] left-[-8px] w-4 h-4 bg-[#3CB371]"></div>
                    <div className="absolute top-[-10px] right-[-8px] w-4 h-4 bg-[#3CB371]"></div>
                    <div className="absolute bottom-[-10px] left-[-8px] w-4 h-4 bg-[#3CB371]"></div>
                    <div className="absolute bottom-[-10px] right-[-8px] w-4 h-4 bg-[#3CB371]"></div>

                    {/* Connecting border lines */}
                    <div className="absolute top-0 left-4 right-4 bg-[#3CB371]"></div>
                    <div className="absolute bottom-0 left-4 right-4 bg-[#3CB371]"></div>
                    <div className="absolute left-0 top-4 bottom-4 bg-[#3CB371]"></div>
                    <div className="absolute right-0 top-4 bottom-4 bg-[#3CB371]"></div>

                    {/* Content */}
                    <div className="max-w-3xl w-full flex flex-col items-center text-center relative z-10">
                        {/* Happy customers badge */}
                        <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 mb-8b opacity-0 md:mb-12">
                          <div className="flex -space-x-2 mr-2">
                            <Image 
                              src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021162/AboutUs_2_ogakty.png" 
                              alt="Customer 1" 
                              width={24} 
                              height={24} 
                              className="rounded-full border-2 border-white"
                            />
                            <Image 
                              src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021162/AboutUs_3_p9n81d.png" 
                              alt="Customer 2" 
                              width={24} 
                              height={24} 
                              className="rounded-full border-2 border-white"
                            />
                            <Image 
                              src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021162/AboutUs_1_mcbigo.png" 
                              alt="Customer 3" 
                              width={24} 
                              height={24} 
                              className="rounded-full border-2 border-white"
                            />
                          </div>
                            <span className="text-sm md:text-base font-medium text-[#111827]">320+ Happy customers</span>
                        </div>

                        {/* Main heading with badges */}
                        <div className="relative mb-12 md:mb-16">
                            <motion.div animate={{ y: [0, -10, 0] }} // Moves up & down
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="  absolute -left-18 top-2/4 lg:-left-26 md:-left-26 md:top-2/4 sm:-left-16  sm:top-3/4 ">
                                {/* absolute lg:-left-24 -left-16 top-2/4  */}
                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current text-[#E97451] absolute top-1/4 translate-y-2  sm:top-1/4 left-4/4 "
                                >
                                    <path
                                        d="M1.49358 7.7756C0.876684 7.5357 0.568282 7.4157 0.481682 7.2461C0.406582 7.0992 0.408886 6.9247 0.487786 6.77978C0.578786 6.61251 0.890283 6.50069 1.51328 6.27705L17.403 0.573051C17.9127 0.390081 18.1675 0.298591 18.3341 0.356291C18.479 0.406451 18.5928 0.520291 18.643 0.665141C18.7007 0.831751 18.6092 1.08659 18.4262 1.59629L12.7223 17.486C12.4986 18.109 12.3868 18.4205 12.2195 18.5115C12.0746 18.5904 11.9001 18.5927 11.7532 18.5176C11.5836 18.431 11.4636 18.1226 11.2237 17.5057L8.62688 10.8281C8.57988 10.7072 8.55639 10.6468 8.52009 10.5959C8.48789 10.5508 8.44848 10.5114 8.40338 10.4792C8.35248 10.4429 8.29209 10.4194 8.17119 10.3724L1.49358 7.7756Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div className="bg-gradient-to-b from-amber-500 to-amber-600 text-white text-xs md:text-sm font-medium px-4 mt-10 py-1 rounded-full flex items-center">
                                    Agency
                                </div>
                            </motion.div>

                            <div className="text-center">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-[#111827] leading-tight"> Designing the Future , <span className="text-green-600"> One Pixel & Line of Code</span> at a Time!</h1>
                            </div>

                            <motion.div animate={{ y: [0, -10, 0] }} // Moves up & down
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="absolute -right-18 top-2/4 lg:-right-26 md:-right-26 md:top-2/4 sm:-right-16  sm:top-3/4  ">
                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current text-[#1F2937] absolute top-1/4 translate-y-2  sm:top-1/4 right-4/4 "
                                >
                                    <path
                                        d="M17.5064 7.7756C18.1233 7.5357 18.4317 7.4157 18.5183 7.2461C18.5934 7.0992 18.5911 6.9247 18.5122 6.77978C18.4212 6.61251 18.1097 6.50069 17.4867 6.27705L1.59702 0.573051C1.08733 0.390081 0.832479 0.298591 0.665869 0.356291C0.521019 0.406451 0.407189 0.520291 0.357019 0.665141C0.299329 0.831751 0.39081 1.08659 0.57378 1.59629L6.27773 17.486C6.50137 18.109 6.61319 18.4205 6.78046 18.5115C6.92538 18.5904 7.0999 18.5927 7.2468 18.5176C7.4164 18.431 7.5364 18.1226 7.7763 17.5057L10.3731 10.8281C10.4201 10.7072 10.4436 10.6468 10.4799 10.5959C10.5121 10.5508 10.5515 10.5114 10.5966 10.4792C10.6475 10.4429 10.7079 10.4194 10.8288 10.3724L17.5064 7.7756Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div
                                    className="bg-gradient-to-b from-gray-800 to-gray-900 text-white  text-xs md:text-sm font-medium px-4 md:px-6 py-2 mt-10 rounded-full flex items-center">
                                    Expert

                                </div>
                            </motion.div>
                        </div>

                        {/* CTA buttons and innovative badge */}
                        <div className="relative flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Button
                                asChild
                                variant="default"
                                className="bg-gradient-to-b from-gray-800 to-gray-900  text-white rounded-full px-6 py-4 md:px-8 md:py-5"
                            >
                                <Link href="/contact_us">Contact Us</Link>
                            </Button>

                            <Button
                                asChild
                                variant="default"
                                className="bg-gradient-to-b from-green-600 to-green-700 text-white rounded-full px-6 py-4 md:px-8 md:py-5"
                            >
                                <Link href="/services">Our Services</Link>
                            </Button>

                            <motion.div animate={{ y: [0, -10, 0] }} // Moves up & down
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="absolute -right-16 lg:-right-20 top-1/2 transform lg:translate-y-8 md:translate-y-6 sm:translate-y-6 lg:translate-x-5 translate-y-8">
                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" fill-current text-[#8B5CF6] relative -left-2 sm:top-5 top-4 md:top-0  "
                                >
                                    <path
                                        d="M17.5064 7.7756C18.1233 7.5357 18.4317 7.4157 18.5183 7.2461C18.5934 7.0992 18.5911 6.9247 18.5122 6.77978C18.4212 6.61251 18.1097 6.50069 17.4867 6.27705L1.59702 0.573051C1.08733 0.390081 0.832479 0.298591 0.665869 0.356291C0.521019 0.406451 0.407189 0.520291 0.357019 0.665141C0.299329 0.831751 0.39081 1.08659 0.57378 1.59629L6.27773 17.486C6.50137 18.109 6.61319 18.4205 6.78046 18.5115C6.92538 18.5904 7.0999 18.5927 7.2468 18.5176C7.4164 18.431 7.5364 18.1226 7.7763 17.5057L10.3731 10.8281C10.4201 10.7072 10.4436 10.6468 10.4799 10.5959C10.5121 10.5508 10.5515 10.5114 10.5966 10.4792C10.6475 10.4429 10.7079 10.4194 10.8288 10.3724L17.5064 7.7756Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div className="bg-gradient-to-b from-purple-600 to-purple-700 text-white text-xs md:text-sm font-medium md:px-6 px-4 py-1 mt-5 md:mt-0 rounded-full flex items-center">
                                    Innovative

                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
