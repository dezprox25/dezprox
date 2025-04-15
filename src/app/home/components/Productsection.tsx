import React from "react";
import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
import Image from "next/image";
import Title from "@/Components/ui/title";
import Link from "next/link";

const Productsection = () => {
  return (
    <main className="bg-white text-black min-h-screen">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center min-h-32 space-y-3 mb-4">
            <Title text="Our Products" />
            <TextGenerateEffect words="Powerful ERP & Products" className="text-4xl md:text-5xl font-semibold mb-4" />
            <p className="text-gray-600  max-w-xl text-lg  mx-auto">
              We create powerful digital tools designed to streamline businesses and enhance productivity
            </p>
          </div>

          {/* School ERP Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
            <div className="md:col-span-3">
              <div className="bg-black rounded-3xl h-full w-full p-2">
                {/* Placeholder for School ERP image */}
                <div className=" w-full h-full rounded-2xl flex items-center justify-center">
                  <Image width={500} height={500} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1743619052/Product_iamge_kkkw7p.png" alt="Dezprox_product" className="h-full w-full object-cover rounded-2xl" />
                </div>
              </div>
            </div>


            <div className="md:col-span-2  ">
              <div className="space-y-6 bg-white border-[1.5px] border-[rgba(0,0,0,0.15)] rounded-[30px] p-10 h-full shadow-[0px_158px_44px_0px_rgba(0,0,0,0.00),_0px_101px_41px_0px_rgba(0,0,0,0.01),_0px_57px_34px_0px_rgba(0,0,0,0.02),_0px_25px_25px_0px_rgba(0,0,0,0.03),_0px_6px_14px_0px_rgba(0,0,0,0.04)]">
                <h2 className="text-3xl font-bold">School ERP</h2>
                <p className="text-gray-600 ">
                  Born out of a shared love of good design & quality products, we create considered solutions fit for the modern lifestyle. Always driven by passion, we work to empower others to live the same way.
                </p>
                <ul className="text-gray-600 place-self-center w-10/12">
                  <li className="flex items-start">
                    <span className="text-lg mr-2">•</span>
                    <span>Born out of a shared</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lg mr-2">•</span>
                    <span>love of good design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lg mr-2">•</span>
                    <span>quality products,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lg mr-2">•</span>
                    <span>we create considered</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lg mr-2">•</span>
                    <span>solutions fit for the modern lifestyle</span>
                  </li>
                </ul>
                <Link href="/contact_us">
                <button className="bg-gradient-to-b cursor-pointer from-gray-800 to-gray-900 text-white px-6 w-full py-3 rounded-full font-medium">
                  Contact Us for More
                </button>
                </Link>
              </div>
            </div>
          </div>

          {/* College ERP and Hospital ERP Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* College ERP Card */}
            <div className="col-span-2">
              <div className="space-y-6 bg-white border-[1.5px] border-[rgba(0,0,0,0.15)] rounded-[30px] h-full grid grid-cols-2 overflow-hidden">
                <div className="col-span-1 p-8 ">
                  <h2 className="text-3xl font-bold mb-4">College ERP</h2>
                  <p className="text-gray-600 mb-8">
                    Explore the Latest Innovations and Unleash the Power of Technology
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Coming soon!</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="w-36 h-px bg-gray-300 mt-2"></div>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="bg-gray-200 h-full  w-full flex items-center justify-center">
                    <Image width={500} height={500} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1743619372/product_clg_uedmza.png" alt="Dezprox_product" className="w-full  h-full object-center hidden lg:block " />
                  </div>
                </div>
              </div>
            </div>

            {/* Hospital ERP Card */}
            <div className="col-span-1">
              <div className="space-y-6 bg-white border-[1.5px] border-[rgba(0,0,0,0.15)] rounded-[30px] p-8 h-full">
                <h2 className="text-3xl font-bold mb-4">Hospital ERP</h2>
                <p className="text-gray-600 mb-8">
                  Explore the Latest Innovations and Unleash the Power of Technology
                </p>
                <div className="mt-auto">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Coming soon</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="w-36 h-px bg-gray-300 mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Productsection;