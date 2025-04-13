
import React from "react";
import Title from "@/Components/ui/title";
import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
import Image from "next/image";

const FeaturesOne = () => {
  return (
    <main className="min-h-screen bg-[#f6fff7]">
      <section className="flex flex-col overflow-hidden items-center justify-center px-4 py-12 md:px-8 lg:px-20 lg:py-24">
        <div className="w-full max-w-[1200px] flex flex-col items-center">
          <header className="text-center">
            <div className="flex justify-center mb-4">
              <span className="px-3 py-1 bg-gradient-to-b from-green-900 to-green-800 bg-clip-text text-transparent rounded-full text-sm font-medium flex items-center">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                >
                  <g clipPath="url(#clip0_41_201)">
                    <mask
                      id="mask0_41_201"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="17"
                      height="16"
                    >
                      <path d="M16.61 0H0.609985V16H16.61V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_41_201)">
                      <path
                        d="M9.32428 2V6.66667H13.61L7.8957 14V9.33333H3.60999L9.32428 2Z"
                        stroke="#2D6E16"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_41_201">
                      <rect width="16" height="16" fill="white" transform="translate(0.609985)" />
                    </clipPath>
                  </defs>
                </svg>
                <Title text="Features" />
              </span>
            </div>
            <TextGenerateEffect words="Features Designed to Elevate Your Experience" className="text-[rgba(2,10,15,1)] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mt-6 md:mt-8 lg:mt-[33px]" />
            <p className="text-[rgba(80,86,93,1)] text-base lg:text-[19px] font-normal leading-relaxed mt-4 md:mt-6 lg:mt-[30px]">
              Stay ahead with tools that prioritize your needs, integrating <br className="hidden md:block" />
              insights and efficiency into one powerful platform.
            </p>
          </header>

          {/* First row - 2 cards */}
          <div className="w-full mt-12 md:mt-16 lg:mt-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              <div className="md:col-span-8 lg:col-span-8">
                <article className="bg-white shadow-[0px_0px_0px_1px_rgba(103,103,103,0.08)] overflow-hidden rounded-2xl pb-6 lg:pb-[34px]">
                  <Image
                    width={500}
                    height={500}
                    src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021994/AI-PoweredInsights_vlsxky.png"
                    className="object-contain w-full aspect-[3.12]"
                    alt="Data insights visualization"
                  />
                  <div className="flex flex-col items-stretch mt-4 md:mt-6 lg:mt-7 px-4 md:px-6 lg:px-8">
                    <h3 className="text-[rgba(2,10,15,1)] text-[15px] font-medium leading-[1.4]">
                      Data insights
                    </h3>
                    <p className="text-[rgba(80,86,93,1)] text-[15px] font-normal leading-[21px] mt-3">
                      Make smarter, more informed decisions with powerful and actionable data insights, designed to 
                      empower your business with the tools needed to drive growth, efficiency, and success.
                    </p>
                  </div>
                </article>
              </div>
              <div className="md:col-span-4 lg:col-span-4">
                <article className="bg-white shadow-[0px_0px_0px_1px_rgba(103,103,103,0.08)] overflow-hidden rounded-2xl pb-6 lg:pb-[34px]">
                  <Image
                    width={1000}
                    height={1000}
                    src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021995/Collaboratetogether_jjfexp.png"
                    className="object-contain w-full aspect-[1.5]"
                    alt="Collaboration illustration"
                  />
                  <div className="flex flex-col items-stretch mt-4 md:mt-6 lg:mt-7 px-4 md:px-6 lg:px-8">
                    <h3 className="text-[rgba(2,10,15,1)] text-[15px] font-medium leading-[1.4]">
                      Collaborate together
                    </h3>
                    <p className="text-[rgba(80,86,93,1)] text-[15px] font-normal leading-[21px] mt-3">
                      Collaborate with your team, share updates 
                      instantly, and achieve your goals faster.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Second row - 3 cards */}
          <div className="w-full mt-5 md:mt-6 lg:mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="md:col-span-1">
                <article className="bg-white shadow-[0px_0px_0px_1px_rgba(103,103,103,0.08)] overflow-hidden rounded-2xl pb-6 lg:pb-[34px]">
                  <div className="flex flex-col relative aspect-[1.498] w-full overflow-hidden items-center text-[rgba(2,10,15,1)] pt-16 md:pt-20 lg:pt-[108px] pb-8 px-4 md:px-8 lg:px-[76px]">
                    <Image
                      width={1000}
                      height={1000}
                      src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021994/EffortlessIntegrations_jpv7s2.png"
                      className="absolute h-full w-full object-cover inset-0"
                      alt="Command menu background"
                    />
                  </div>
                  <div className="flex flex-col items-stretch text-[15px] mt-4 md:mt-6 lg:mt-7 px-4 md:px-6 lg:px-8">
                    <h3 className="text-[rgba(2,10,15,1)] font-medium leading-[1.4]">
                      App shortcuts
                    </h3>
                    <p className="text-[rgba(80,86,93,1)] font-normal leading-[21px] mt-3">
                      Save time, boost efficiency, and focus on 
                      what truly matters for you.
                    </p>
                  </div>
                </article>
              </div>
              <div className="md:col-span-1">
                <article className="bg-white shadow-[0px_0px_0px_1px_rgba(103,103,103,0.08)] overflow-hidden rounded-2xl pb-6 lg:pb-[34px]">
                  <Image
                    width={1000}
                    height={1000}
                    src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021993/SmartAutomation_beb9wa.png"
                    className="object-contain w-full aspect-[1.49]"
                    alt="Integrations illustration"
                  />
                  <div className="flex flex-col items-stretch mt-4 md:mt-6 lg:mt-7 px-4 md:px-6 lg:px-8">
                    <h3 className="text-[rgba(2,10,15,1)] text-[15px] font-medium leading-[1.4]">
                      Seamless integrations
                    </h3>
                    <p className="text-[rgba(80,86,93,1)] text-[15px] font-normal leading-[21px] mt-3">
                      Seamlessly connect your favorite apps and 
                      platforms with our powerful integrations.
                    </p>
                  </div>
                </article>
              </div>
              <div className="md:col-span-1">
                <article className="bg-white shadow-[0px_0px_0px_1px_rgba(103,103,103,0.08)] overflow-hidden rounded-2xl pb-6 lg:pb-[34px]">
                  <div className="bg-white pt-6 md:pt-8 lg:pt-[45px] pb-1 px-4 md:px-8 lg:px-[60px]">
                    <Image
                      width={500}
                      height={500}
                      src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021993/ScalableAdaptiveSolutions_d93nzu.png"
                      className="aspect-[1.27] object-contain w-full"
                      alt="Smart widgets illustration"
                    />
                  </div>
                  <div className="flex flex-col items-stretch text-[15px] mt-4 md:mt-6 lg:mt-7 px-4 md:px-6 lg:px-8">
                    <h3 className="text-[rgba(2,10,15,1)] font-medium leading-[1.4]">
                      Smart widgets
                    </h3>
                    <p className="text-[rgba(80,86,93,1)] font-normal leading-[21px] mt-3">
                      Provides real-time data, actionable insights, 
                      and key metrics at a glance.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeaturesOne;