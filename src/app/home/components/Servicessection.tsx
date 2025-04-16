// 'use client'
// import React from 'react'
// import { motion } from "framer-motion";
// import { Users, Code2, Rocket, Database } from 'lucide-react'
// import Title from "@/Components/ui/title";
// import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
// import Link from 'next/link';

// const Servicessection = () => {
//   const servicescontent = [
//     {
//       id: 1,
//       number: "01",
//       title: "Web DevOps",
//       description: "We build tailored websites to meet your business needs:",
//       features: [
//         "E-commerce Websites: Enhance your online sales with dynamic storefronts.",
//         "Static & Dynamic Websites: From informative sites to interactive platforms.",
//         "Industry-Specific Solutions: Specializing in Real Estate & Textiles."
//       ],
//       progress: 75,
//       stats: {
//         icon: Users,
//         label: "Customers",
//         value: 1218,
//         change: -12.4
//       },
//       feature: "Real-time analytics dashboard",
//     },
//     {
//       id: 2,
//       number: "02",
//       title: "UI UX Design",
//       description: "Creating intuitive and appealing designs:",
//       features: [
//         "No-Code Websites: Quick deployment with stunning designs",
//         "Branding & Graphic Design: Build a strong and memorable brand identity.",
//         "Video & Motion Graphics: Engaging visuals that tell your story.",
//       ],
//       progress: 85,
//       stats: {
//         icon: Code2,
//         label: "Projects",
//         value: 856,
//         change: 24.6
//       },
//       feature: "Interactive prototype testing",
//     },
//     {
//       id: 3,
//       number: "03",
//       title: "Marketing",
//       description: "Boost your brand's visibility and engagement:",
//       features: [
//         "SEO & SMM: Drive organic traffic and connect with your audience.",
//         "Email Marketing & Automation: Reach the right people with the right message.",
//         "Affiliate Marketing & Lead Generation: Expand your market and boost sales.",
//       ],
//       progress: 60,
//       stats: {
//         icon: Database,
//         label: "Servers",
//         value: 2435,
//         change: 18.2
//       },
//       feature: "AI-powered campaign optimization",
//     },
//     {
//       id: 4,
//       number: "04",
//       title: "Content Writing",
//       description: "Engage your audience with compelling content:",
//       features: [
//         "Blog & Article Writing: Informative and engaging articles.",
//         "Social Media Content: Boost your online presence.",
//         "SEO-Optimized Content: Enhance search engine visibility.",
//       ],
//       progress: 90,
//       stats: {
//         icon: Rocket,
//         label: "Speed Index",
//         value: 982,
//         change: 32.8
//       },
//       feature: "Automated content performance analytics",
//     },
//     {
//       id: 5,
//       number: "05",
//       title: "Product Development",
//       description: "Bring your vision to life with our expertise in product development:",
//       features: [
//         "Product Research: Understand the market and competition.",
//         "Product Design: Create a visually appealing and user-friendly product.",
//         "Product Development: Build a product that meets your needs.",
//       ],
//       progress: 90,
//       stats: {
//         icon: Rocket,
//         label: "Speed Index",
//         value: 982,
//         change: 32.8
//       },
//       feature: "Agile development methodology",
//     },
//     {
//       id: 6,
//       number: "06",
//       title: "Tech Training",
//       description: "Equip your team with the latest skills:",
//       features: [
//         "Tech Training: Equip your team with the latest skills.",
//         "Custom Solutions: Tailored training programs for your needs.",
//         "Tech Support: Get help when you need it.",
//       ],
//       progress: 90,
//       stats: {
//         icon: Rocket,
//         label: "Speed Index",
//         value: 982,
//         change: 32.8
//       },
//       feature: "Interactive learning platform",
//     },
//   ];
//   return (
//     <section className='min-h-[120rem] w-full bg-[#f6fff7] p-5 space-y-5'>

//       <div className='flex flex-col justify-center items-center sticky top-8 space-y-2 '>
//         <Title text="Our Services" />
//         <TextGenerateEffect words="Suited for every scenario" as="h1" className="text-[42px] font-semibold text-black mb-4" />
//       </div>

//       {servicescontent.map((service) => (
//         <div key={service.id} className='w-11/12 mx-auto min-h-[30rem] sticky top-36 bg-white border '>
//           <div className='w-full h-full flex'>
//             <div className=' w-1/3  min-h-[30rem]'>
//               <div className='w-60 mx-auto h-auto '>
//                 <h1 className='text-[180px] text-center text-green-500 font-bold'>{service.number}</h1>
//                 <div className='flex justify-center items-center gap-5'>
//                   <div className='h-[0.6px] w-60 bg-green-600'></div>
//                   <div className='h-2 w-2 rounded-lg border border-green-500'></div>
//                 </div>
//               </div>
//             </div>
//             <div className='min-h-[30rem] p-10 w-2/3 space-y-3'>
//               <div className='flex justify-start items-center gap-2'>
//                 <div className='h-2 w-2 rounded-lg bg-green-500'></div>
//                 <div className='h-[0.6px] w-[40rem] bg-green-600'></div>
//                 <div className='h-4 w-20 rounded-lg border border-green-500'></div>
//               </div>
//               <h1 className='text-7xl font-bold'>{service.title}</h1>
//               <h1 className='text-lg'>{service.description}</h1>
//               <div className='w-9/12 min-h-20 rounded-2xl border-2 border-green-500 p-5 py-8 bg-white'>
//                 <ul className='space-y-3'>
//                   {service.features.map((feature) => (
//                     <li key={feature} className='flex items-center justify-start gap-3'>
//                       <div className='w-4 h-4 rounded-full bg-green-500'></div>
//                       <span className='text-sm text-gray-800 font-medium'>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className='flex justify-start items-center gap-96'>
//                 <h1>{service.feature}</h1>

//                 <motion.div animate={{ y: [0, -10, 0] }}
//                   transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="w-32 mb-10">
//                   <svg
//                     width="19"
//                     height="19"
//                     viewBox="0 0 19 19"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="fill-current text-[#E97451] absolute top-1/4 translate-y-2  sm:top-1/4 left-4/4 "
//                   >
//                     <path
//                       d="M1.49358 7.7756C0.876684 7.5357 0.568282 7.4157 0.481682 7.2461C0.406582 7.0992 0.408886 6.9247 0.487786 6.77978C0.578786 6.61251 0.890283 6.50069 1.51328 6.27705L17.403 0.573051C17.9127 0.390081 18.1675 0.298591 18.3341 0.356291C18.479 0.406451 18.5928 0.520291 18.643 0.665141C18.7007 0.831751 18.6092 1.08659 18.4262 1.59629L12.7223 17.486C12.4986 18.109 12.3868 18.4205 12.2195 18.5115C12.0746 18.5904 11.9001 18.5927 11.7532 18.5176C11.5836 18.431 11.4636 18.1226 11.2237 17.5057L8.62688 10.8281C8.57988 10.7072 8.55639 10.6468 8.52009 10.5959C8.48789 10.5508 8.44848 10.5114 8.40338 10.4792C8.35248 10.4429 8.29209 10.4194 8.17119 10.3724L1.49358 7.7756Z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                   <Link href='/services'>
//                     <div className="bg-gradient-to-b cursor-pointer from-green-500 text-center to-green-300 text-white text-xs md:text-sm font-medium  mt-10 place-content-center py-2 rounded-full flex items-center">
//                       Learn More
//                     </div>
//                   </Link>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   )
// }

// export default Servicessection


"use client";
import React from 'react'
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
import { Users, Code2, Rocket, Database } from 'lucide-react'

const Servicessection = () => {
  // const servicescontent =[
  //   {
  //     id: 1,
  //     number: "01",
  //     title: "Web DevOps",
  //     description: "Streamline your development workflow with our comprehensive DevOps solutions",
  //     progress: 75,
  //     stats: {
  //       icon: Users,
  //       label: "Customers",
  //       value: 1218,
  //       change: -12.4
  //     },
  //     feature: "Smart widgets"
  //   },
  //   {
  //     id: 2,
  //     number: "02",
  //     title: "UI UX Design",
  //     description: "Create visually stunning and user-friendly interfaces",
  //     progress: 85,
  //     stats: {
  //       icon: Code2,
  //       label: "Projects",
  //       value: 856,
  //       change: 24.6
  //     },
  //     feature: "Custom solutions"
  //   },
  //   {
  //     id: 3,
  //     number: "03",
  //     title: "Marketing",
  //     description: "Strategic marketing solutions to grow your business",
  //     progress: 60,
  //     stats: {
  //       icon: Database,
  //       label: "Servers",
  //       value: 2435,
  //       change: 18.2
  //     },
  //     feature: "High availability"
  //   },
  //   {
  //     id: 4,
  //     number: "04",
  //     title: "Content Writing",
  //     description: "Creating engaging and informative content for your audience",
  //     progress: 90,
  //     stats: {
  //       icon: Rocket,
  //       label: "Speed Index",
  //       value: 982,
  //       change: 32.8
  //     },
  //     feature: "Lightning fast"
  //   },
  //   {
  //     id: 5,
  //     number: "05",
  //     title: "Product Development",
  //     description: "Bringing your vision to life with our expertise in product development",
  //     progress: 90,
  //     stats: {
  //       icon: Rocket,
  //       label: "Speed Index",
  //       value: 982,
  //       change: 32.8
  //     },
  //     feature: "Lightning fast"
  //   },
  //   {
  //     id: 6,
  //     number: "06",
  //     title: "Tech Training",
  //     description: "Empowering teams with the latest technology skills",
  //     progress: 90,
  //     stats: {
  //       icon: Rocket,
  //       label: "Speed Index",
  //       value: 982,
  //       change: 32.8
  //     },
  //     feature: "Lightning fast"
  //   },
  // ];
  const servicescontent = [
    {
      id: 1,
      number: "01",
      title: "Web DevOps",
      description: "We build tailored websites to meet your business needs:",
      features: [
        "E-commerce Websites: Enhance your online sales with dynamic storefronts.",
        "Static & Dynamic Websites: From informative sites to interactive platforms.",
        "Industry-Specific Solutions: Specializing in Real Estate & Textiles."
      ],
      progress: 75,
      stats: {
        icon: Users,
        label: "Customers",
        value: 1218,
        change: -12.4
      },
      feature: "Real-time analytics dashboard",
    },
    {
      id: 2,
      number: "02",
      title: "UI UX Design",
      description: "Creating intuitive and appealing designs:",
      features: [
        "No-Code Websites: Quick deployment with stunning designs",
        "Branding & Graphic Design: Build a strong and memorable brand identity.",
        "Video & Motion Graphics: Engaging visuals that tell your story.",
      ],
      progress: 85,
      stats: {
        icon: Code2,
        label: "Projects",
        value: 856,
        change: 24.6
      },
      feature: "Interactive prototype testing",
    },
    {
      id: 3,
      number: "03",
      title: "Marketing",
      description: "Boost your brand's visibility and engagement:",
      features: [
        "SEO & SMM: Drive organic traffic and connect with your audience.",
        "Email Marketing & Automation: Reach the right people with the right message.",
        "Affiliate Marketing & Lead Generation: Expand your market and boost sales.",
      ],
      progress: 60,
      stats: {
        icon: Database,
        label: "Servers",
        value: 2435,
        change: 18.2
      },
      feature: "AI-powered campaign optimization",
    },
    {
      id: 4,
      number: "04",
      title: "Content Writing",
      description: "Engage your audience with compelling content:",
      features: [
        "Blog & Article Writing: Informative and engaging articles.",
        "Social Media Content: Boost your online presence.",
        "SEO-Optimized Content: Enhance search engine visibility.",
      ],
      progress: 90,
      stats: {
        icon: Rocket,
        label: "Speed Index",
        value: 982,
        change: 32.8
      },
      feature: "Automated content performance analytics",
    },
    {
      id: 5,
      number: "05",
      title: "Product Development",
      description: "Bring your vision to life with our expertise in product development:",
      features: [
        "Product Research: Understand the market and competition.",
        "Product Design: Create a visually appealing and user-friendly product.",
        "Product Development: Build a product that meets your needs.",
      ],
      progress: 90,
      stats: {
        icon: Rocket,
        label: "Speed Index",
        value: 982,
        change: 32.8
      },
      feature: "Agile development methodology",
    },
    {
      id: 6,
      number: "06",
      title: "Tech Training",
      description: "Equip your team with the latest skills:",
      features: [
        "Tech Training: Equip your team with the latest skills.",
        "Custom Solutions: Tailored training programs for your needs.",
        "Tech Support: Get help when you need it.",
      ],
      progress: 90,
      stats: {
        icon: Rocket,
        label: "Speed Index",
        value: 982,
        change: 32.8
      },
      feature: "Interactive learning platform",
    },
  ];
  return (
    <section className='min-h-screen w-full bg-[#f6fff7] p-3 md:p-5 space-y-3 md:space-y-5'>
      <div className='flex flex-col justify-center items-center sticky top-16  py-4'>
        <h1 className='bg-gradient-to-b from-green-800  to-green-500 bg-clip-text text-transparent text-lg md:text-xl font-semibold'>Our Services</h1>
        {/* <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl text-center'>Suited for every scenario</h1> */}
         <TextGenerateEffect words="Suited for every scenario" className="text-4xl md:text-5xl font-semibold mb-4" />
        
      </div>

      {servicescontent.map((service) => (
        <div key={service.id} className='w-full md:w-11/12 mx-auto min-h-fit md:min-h-[30rem] sticky top-24 md:top-28 lg:top-40 bg-white border'>
          <div className='w-full h-full flex flex-col md:flex-row'>
            <div className='w-full md:w-1/3 py-4 md:py-0'>
              <div className='w-40 sm:w-48 md:w-60 mx-auto h-auto'>
                <h1 className='text-[100px] sm:text-[140px] md:text-[180px] text-center bg-gradient-to-t from-green-800 to-green-500 bg-clip-text text-transparent font-bold'>{service.number}</h1>
                <div className='flex justify-center items-center gap-3 md:gap-5'>
                  <div className='h-[0.7px] w-full bg-gradient-to-b from-green-600 to-green-700'></div>
                  <div className='h-2 w-2 rounded-lg border border-green-700'></div>
                </div>
              </div>
            </div>
            <div className='min-h-fit md:min-h-[30rem] p-4 md:p-6 lg:p-10 w-full md:w-2/3 space-y-2 md:space-y-3'>
              <div className='flex justify-start items-center gap-2'>
                <div className='h-2 w-2 rounded-lg bg-green-700'></div>
                <div className='h-[0.6px] w-full md:w-[20rem] lg:w-[40rem] bg-green-600'></div>
                <div className='h-4 w-16 md:w-20 rounded-lg border border-green-600'></div>
              </div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold'>{service.title}</h1>
              <h1 className='text-base md:text-lg'>{service.description}</h1>
              <div className='lg:w-9/12 min-h-20 rounded-2xl  p-5 py-8 bg-white'>
                <ul className='space-y-3'>
                  {service.features.map((feature) => (
                    <li key={feature} className='flex items-center justify-start gap-3'>
                      <div className='lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-green-500'></div>
                      <span className='text-sm  text-gray-800 font-medium'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex flex-col sm:flex-row justify-between sm:justify-start items-start sm:items-center sm:gap-20 md:gap-40 lg:gap-96 mt-4'>
                <h1 className='mb-4 sm:mb-0'>{service.feature}</h1>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-32 md:mb-10 relative"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-[#f96336] absolute top-1/4 translate-y-2 left-4/4"
                  >
                    <path
                      d="M1.49358 7.7756C0.876684 7.5357 0.568282 7.4157 0.481682 7.2461C0.406582 7.0992 0.408886 6.9247 0.487786 6.77978C0.578786 6.61251 0.890283 6.50069 1.51328 6.27705L17.403 0.573051C17.9127 0.390081 18.1675 0.298591 18.3341 0.356291C18.479 0.406451 18.5928 0.520291 18.643 0.665141C18.7007 0.831751 18.6092 1.08659 18.4262 1.59629L12.7223 17.486C12.4986 18.109 12.3868 18.4205 12.2195 18.5115C12.0746 18.5904 11.9001 18.5927 11.7532 18.5176C11.5836 18.431 11.4636 18.1226 11.2237 17.5057L8.62688 10.8281C8.57988 10.7072 8.55639 10.6468 8.52009 10.5959C8.48789 10.5508 8.44848 10.5114 8.40338 10.4792C8.35248 10.4429 8.29209 10.4194 8.17119 10.3724L1.49358 7.7756Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="bg-gradient-to-b from-green-600 to-green-700 text-center text-white text-xs md:text-sm font-medium mt-10 place-content-center py-2 rounded-full flex items-center">
                    Learn More
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Servicessection