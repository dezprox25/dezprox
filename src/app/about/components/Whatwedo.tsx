import React from 'react';
import { TextGenerateEffect } from '@/Components/ui/text-generate-effect';
import Title from '@/Components/ui/title';
import Image from 'next/image';

export default function WhatWeDo() {
  return (
    <section className="py-16 px-4 md:px-6 md:max-w-7xl mx-auto lg:px-8  bg-white">
      <div className="text-center mb-12">
        <Title text="What we Do" className="text-4xl font-bold mb-4" />
        <TextGenerateEffect
          words="Crafting Digital Experiences That Matter"
          className="text-[42px] font-semibold text-black mb-4"
        />
        <p className="text-gray-600 max-w-3xl mx-auto">
          At Dezprox, we design and develop impactful digital experiences that elevate brands,
          enhance engagement, and drive meaningful results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 lg:grid-rows-7 gap-4 p-4">
        {/* Web Development */}
        <div className="lg:col-span-2 lg:row-span-4 bg-[#2A2A2A] p-4 rounded-lg shadow-md relative h-[300px]">
          <div className="absolute top-4 left-4">
            <h3 className="text-lg font-semibold text-white">Graphic Design</h3>
            <p className="text-md text-[#8C8C8C]">Building responsive websites.</p>
          </div>
          <div className="absolute bottom-0 right-0">
            <Image width={600} height={600} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021670/Graphic_Design_1_jgyfyf.png" alt="Dezprox Graphic Design illustration" className="h-64" />
          </div>
        </div>

        {/* UI/UX Design */}
        <div className="lg:col-span-2 lg:row-span-4 lg:col-start-3 bg-[#2A2A2A] p-4 rounded-lg shadow-md relative md:h-[300px] h-[300px] lg:h-[300px]">
          <div className="absolute top-4 left-4">
            <h3 className="text-lg font-semibold text-white">UI/UX Design</h3>
            <p className="text-md text-[#8C8C8C]">Designing user-friendly interfaces.</p>
          </div>
          <div className="absolute bottom-0 right-0">
            <Image width={600} height={600} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021671/ui-ux_service_1_q67awr.png" alt=" dezprox UI UX desgin illustration" className="h-60" />
          </div>
        </div>

        {/* E-commerce */}
        <div className="lg:col-span-2 lg:row-span-4 lg:col-start-5 bg-[#2A2A2A] p-4 rounded-lg shadow-md relative lg:h-auto h-[300px] md:h-[300px]">
          <div className="absolute top-4 left-4">
            <h3 className="text-lg font-semibold text-white">Web Development</h3>
            <p className="text-md text-[#8C8C8C]">Building scalable online stores.</p>
          </div>
          <div className="absolute bottom-0 right-0">
            <Image width={600} height={600} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021671/Web_Development_1_eaziqy.png" alt="dezprox web development illustration" className="h-60 w-72" />
          </div>
        </div>

        {/* SEO & Marketing */}
        <div className="lg:col-span-2 lg:row-span-3 lg:col-start-7 bg-[#2A2A2A] p-4 rounded-lg shadow-md relative lg:h-auto h-[300px] md:h-[280px]">
          <div className="absolute top-4 left-4">
            <h3 className="text-lg font-semibold text-white">App Development</h3>
            <p className="text-md text-[#8C8C8C]">Boosting online presence.</p>
          </div>
          <div className="absolute bottom-0 right-0">
            <Image width={600} height={600}  src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021671/App_Development_1_lrtgsw.png" alt="dezprox App developement illustration" className="h-48" />
          </div>
        </div>

        {/* Branding */}
        <div className="lg:col-span-3 lg:row-span-3 lg:col-start-1 lg:row-start-5 bg-[#2A2A2A] p-4 rounded-lg shadow-md relative lg:h-auto h-[300px] md:h-[280px]">
          <div className="absolute top-4 left-4">
            <h3 className="text-lg font-semibold text-white">Content Creation</h3>
            <p className="text-md text-[#8C8C8C]">Crafting unique identities.</p>
          </div>
          <div className="absolute bottom-0 right-0">
            <Image width={600} height={600}  src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021671/Content_Creation_1_fmkrfr.png" alt="Icon" className="h-56" />
          </div>
        </div>

        {/* Mobile Apps */}
        <div className="lg:col-span-3 lg:row-span-3 lg:col-start-4 lg:row-start-5 bg-[#2A2A2A] p-4 rounded-lg shadow-md relative lg:h-auto h-[300px] md:h-[280px]">
          <div className="absolute top-4 left-4">
            <h3 className="text-lg font-semibold text-white">Digital Marketing</h3>
            <p className="text-md text-[#8C8C8C]">Building powerful apps.</p>
          </div>
          <div className="absolute bottom-0 right-0">
            <Image width={600} height={600} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021839/Digital_Marketing_2_wqkzs3.png" alt="dezprox digital marketing illustration" className="h-56" />
          </div>
        </div>

        {/* Support */}
        <div className="lg:col-span-2 lg:row-span-4 lg:col-start-7 lg:row-start-4 bg-[#2A2A2A] p-4 rounded-lg shadow-md relative lg:h-auto h-[300px] md:h-[300px]">
          <div className="absolute top-4 left-4">
            <h3 className="text-lg font-semibold text-white">Student Projects</h3>
            <p className="text-md text-[#8C8C8C]">Ensuring smooth performance.</p>
          </div>
          <div className="absolute bottom-0 right-0">
            <Image width={600} height={600} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744021672/Students_Projects_1_swaldt.png" alt="dezprox Students Projects illustration" className="h-64" />
          </div>
        </div>
      </div>
    </section>
  );
}
