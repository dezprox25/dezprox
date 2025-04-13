// "use client"
// import Image from "next/image"
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Pagination, Autoplay } from "swiper/modules"
// import "swiper/css"
// import "swiper/css/pagination"
// import { ArrowRight } from "lucide-react";
// import "swiper/css/autoplay"
// import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
// import Title from "@/Components/ui/title";

// const CustomLogo = () => {
//   return (
//     <svg
//       width="35"
//       height="20"
//       viewBox="0 0 56 47"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g clipPath="url(#clip0_88_1741)">
//         <mask
//           id="mask0_88_1741"
//           style={{ maskType: "luminance" }}
//           maskUnits="userSpaceOnUse"
//           x="0"
//           y="-1"
//           width="56"
//           height="48"
//         >
//           <path d="M55.525 -0.00976562H0.119995V46.8002H55.525V-0.00976562Z" fill="white" />
//         </mask>
//         <g mask="url(#mask0_88_1741)">
//           <path d="M34.3061 27.2728L47.1838 -0.00976562H55.2346V27.2728V46.8002H34.3061V27.2728Z" fill="#FF4400" />
//           <path d="M0.119995 27.2728L12.9962 -0.00976562H21.0469V27.2728V46.8002H0.119995V27.2728Z" fill="#FF4400" />
//         </g>
//       </g>
//       <defs>
//         <clipPath id="clip0_88_1741">
//           <rect width="55.53" height="46.81" fill="white" transform="translate(0.119995 -0.00976562)" />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// };



// export default function TestimonialSection2() {
//   const testimonials = [
//     {
//       name: "Cameron Williams",
//       role: "Web Designer",
//       review:
//         "Using this SaaS has transformed our user workflow. We couldn't be happier. This SaaS has simplified our data.",
//     },
//     {
//       name: "Sophia Johnson",
//       role: "Product Manager",
//       review:
//         "Using this SaaS has transformed our user workflow. We couldn't be happier. This SaaS has simplified our data.",
//     },
//     {
//       name: "Daniel Lee",
//       role: "Software Engineer",
//       review:
//         "Using this SaaS has transformed our user workflow. We couldn't be happier. This SaaS has simplified our data.",
//     },
//     {
//       name: "Emily Carter",
//       role: "Marketing Lead",
//       review:
//         "Using this SaaS has transformed our user workflow. We couldn't be happier. This SaaS has simplified our data.",
//     },
//     {
//       name: "Michael Brown",
//       role: "CTO",
//       review:
//         "Using this SaaS has transformed our user workflow. We couldn't be happier. This SaaS has simplified our data.",
//     },
//   ]

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-16">
//       {/* Testimonial Header */}
//       <div className="text-center mb-8">
//         <Title text="Testimonials" />
//         {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Powerful Finance Reporting</h2> */}
//         <TextGenerateEffect words="Voices of Trust" className="text-5xl text-[#141515] font-semibold mb-4 max-md:text-4xl max-sm:text-3xl"  />
//       </div>

//       {/* Testimonial Content */}
//       <div className="flex flex-col md:flex-row gap-6 items-center md:items-stretch">
//         {/* Left Section */}
//         <div className="relative lg:w-4/6 md:w-3/6 sm:w-5/6  w-full ">
//           <Image
//             width={1280}
//             height={800}
//             src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1743626394/Greenbg_Final_lorxtj.png"
//             alt="Green background"
//             className="w-full h-80 rounded-3xl"
//           />
//           <div className="absolute inset-0 p-6 md:px-8 flex flex-col justify-between">
//             <div className="max-w-[70%] sm:max-w-[60%] md:max-w-full">
//               <p className="text-white font-medium md:text-lg text-sm mb-2 md:mb-4">REVIEWS</p>
//               <h3 className="lg:text-5xl font-bold text-white mb-2 md:mb-4">
//                 20+ Customers
//                 love DezproX
//               </h3>
//               <p className="text-white text-justify w-9/12  text-xl sm:text-sm md:text-md lg:text-lg ">
//                 20+ customers trust Dezprox for its innovation, reliability and game changing digital solutions that drive real results.
//               </p>

//             </div>
//             <div className="absolute z-10 -right-60 left-52 w-[40%] sm:w-[35%] md:w-[60%] h-auto flex items-center justify-center mx-auto">
//               <motion.img width={200} height={200} src='https://res.cloudinary.com/do7dw5dwq/image/upload/v1743626470/Robot2_iiy9b2.png' animate={{ y: [0, -20, 0] }} // Moves up & down
//                 transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} alt="Cute robot mascot" className=" w-full h-full object-contain" />
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Swiper Carousel */}
//         <div className="relative w-full sm:w-5/6  ">
//           <Image
//             width={1280}
//             height={800}
//             src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1743626491/yellowbg_Final_buf6a6.png"
//             alt="Yellow background"
//             className="w-full h-80 rounded-3xl"
//           />
//           <div className="absolute inset-0">
//             <div className="p-4 sm:p-6 relative flex flex-col h-[20rem]">
//               <div className="flex-grow">
//                 <Swiper
//                   modules={[Pagination, Autoplay]}
//                   spaceBetween={20}
//                   slidesPerView={1}
//                   breakpoints={{
//                     480: { slidesPerView: 1.1 },
//                     640: { slidesPerView: 1.2 },
//                     768: { slidesPerView: 1.3 },
//                     1024: { slidesPerView: 1.5 },
//                   }}
//                   loop={true}
//                   autoplay={{ delay: 3000 }}
//                   pagination={{
//                     clickable: true,
//                     el: ".swiper-pagination",
//                   }}
//                 >
//                   {testimonials.map((testimonial, index) => (
//                     <SwiperSlide key={index}>
//                       <div className="bg-white rounded-xl h-52 sm:h-auto md:h-auto   lg:w-auto lg:h-auto p-4 sm:p-6 shadow-lg">
//                         <h4 className="text-lg font-semibold text-gray-800 mb-1">Greatly done!</h4>
//                         <div className="flex mb-2">
//                           {[...Array(5)].map((_, i) => (
//                             <svg
//                               key={i}
//                               className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
//                               fill="currentColor"
//                               viewBox="0 0 20 20"
//                             >
//                               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                             </svg>
//                           ))}
//                         </div>
//                         <p className="text-xs  sm:text-sm text-gray-700 mb-4">{testimonial.review}</p>
//                         <div className="w-auto h-1 bg-gray-300 mb-2 sm:mb-6" />
//                         <div className="flex items-center justify-evenly">
//                           <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden mr-3">
//                             <Image
//                               src='https://res.cloudinary.com/do7dw5dwq/image/upload/v1743626470/Robot2_iiy9b2.png'
//                               alt="User Avatar"
//                               width={40}
//                               height={40}
//                               className="object-cover"
//                             />
//                           </div>
//                           <div>
//                             <p className="font-medium text-xs sm:text-sm">{testimonial.name}</p>
//                             <p className="text-xs text-gray-500">{testimonial.role}</p>
//                           </div>
//                           <CustomLogo />

//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//                 <div className="w-auto h-auto relative top-9 left-10">
//                   <div className="swiper-pagination  cursor-pointer relative bottom-5 gap-2 right-0 flex "></div>
//                 </div>
//               </div>
//               {/* Custom pagination container at the bottom */}

//               <div className="w-60 h-10 cursor-pointer  mx-auto justify-center items-center relative -bottom-5 gap-2 left-18  flex ">
//                 <div className="w-8 h-8 bg-[#FF4400] rounded-full flex items-center justify-center">
//                   <ArrowRight className="w-4 h-4" />
//                 </div>
//                 <h1>See Similar Experiences</h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <style jsx global>{`
//        @keyframes slideIn {
//     from {
//       transform: translateX(-10px);
//       opacity: 0;
//     }
//     to {
//       transform: translateX(0);
//       opacity: 1;
//     }
//   }

//   @keyframes slideOut {
//     from {
//       transform: translateX(0);
//       opacity: 1;
//     }
//     to {
//       transform: translateX(10px);
//       opacity: 0;
//     }
//   }

//   .swiper-pagination-bullet {
//     background-color: rgba(220, 38, 38, 0.5) !important;
//     opacity: 1;
//     transition: all 0.3s ease;
//   }

//   .swiper-pagination-bullet-active {
//     width: 50px;
//     border-radius: 10px;
//     background-color: rgb(220, 38, 38) !important;
//     animation: slideIn 0.5s ease-out forwards;
//   }

//   .swiper-pagination-bullet-active-out {
//     animation: slideOut 0.5s ease-out forwards;
//   }
//       `}</style>
//     </div>
//   )
// }



"use client"
// import Image from "next/image"
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import { ArrowRight } from "lucide-react";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
const CustomLogo = () => {
  return (
    <svg
      width="35"
      height="20"
      viewBox="0 0 56 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_88_1741)">
        <mask
          id="mask0_88_1741"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="-1"
          width="56"
          height="48"
        >
          <path d="M55.525 -0.00976562H0.119995V46.8002H55.525V-0.00976562Z" fill="white" />
        </mask>
        <g mask="url(#mask0_88_1741)">
          <path d="M34.3061 27.2728L47.1838 -0.00976562H55.2346V27.2728V46.8002H34.3061V27.2728Z" fill="#FF4400" />
          <path d="M0.119995 27.2728L12.9962 -0.00976562H21.0469V27.2728V46.8002H0.119995V27.2728Z" fill="#FF4400" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_88_1741">
          <rect width="55.53" height="46.81" fill="white" transform="translate(0.119995 -0.00976562)" />
        </clipPath>
      </defs>
    </svg>
  );
};



export default function TestimonialSection2() {
  const testimonials = [
    {
      name: "Cameron Williams",
      role: "Web Designer",
      review:
        "Using this SaaS has transformed our user workflow. We couldn't be happier. This SaaS has simplified our data.",
    },
    {
      name: "Sophia Johnson",
      role: "Product Manager",
      review:
        "Using this SaaS has transformed our user workflow. We couldn't be happier. This SaaS has simplified our data.",
    },
    {
      name: "Daniel Lee",
      role: "Software Engineer",
      review:
        "Using this SaaS has transformed our user workflow. We couldn't be happier. This SaaS has simplified our data.",
    },
    {
      name: "Emily Carter",
      role: "Marketing Lead",
      review:
        "Using this SaaS has transformed our user workflow. We couldn't be happier. This SaaS has simplified our data.",
    },
    {
      name: "Michael Brown",
      role: "CTO",
      review:
        "Using this SaaS has transformed our user workflow. We couldn't be happier. This SaaS has simplified our data.",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Testimonial Header */}
      <div className="text-center mb-8">
        <p className="text-green-500 font-medium mb-2">Testimonials</p>
        {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Powerful Finance Reporting</h2> */}
        <TextGenerateEffect words="Powerful Finance Reporting" className="text-3xl md:text-4xl font-bold text-gray-900" as="h1" />
      </div>

      {/* Testimonial Content */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-stretch">
        {/* Left Section */}
        <div className="relative lg:w-4/6 md:w-3/6 sm:w-5/6  w-full ">
          <img
            src="https://res.cloudinary.com/dwcvkrrpz/image/upload/v1744105164/Greenbg_Final_tkvvtb.png"
            alt="Green background"
            className="w-full h-80   rounded-3xl "
          />
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
            <div className="max-w-[70%] sm:max-w-[60%] md:max-w-full">
              <p className="text-white font-medium md:text-lg text-sm  mb-2 md:mb-4">REVIEWS</p>
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-2 md:mb-4">
                12k+ Customers love BlazeX
              </h3>
              <p className="text-white text-lg">
                <span>FramerBite gives you the blocks needed</span>
                <br />
                to create a truly professional website
                <br />
                for your SaaS.
              </p>

            </div>
            <div className="absolute md:bottom-10 md:-right-20 bottom-10 right-0 w-[40%] sm:w-[35%] md:w-[50%] h-auto flex items-end justify-end">
              <motion.img src="https://res.cloudinary.com/dwcvkrrpz/image/upload/v1744105164/Robot2_r3kem8.png" animate={{ y: [0, -20, 0] }} // Moves up & down
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} alt="Cute robot mascot" width={200} height={200} className="object-contain" />
            </div>
          </div>
        </div>

        {/* Right Section - Swiper Carousel */}
        <div className="relative w-full sm:w-5/6  ">
          <img
            src="https://res.cloudinary.com/dwcvkrrpz/image/upload/v1744105165/yellowbg_Final_d16ptn.png"
            alt="Yellow background"
            className="w-full h-80  rounded-3xl"
          />
          <div className="absolute inset-0">
            <div className="p-4 sm:p-6  flex flex-col h-full">
              <div className="flex-grow">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    480: { slidesPerView: 1.1 },
                    640: { slidesPerView: 1.2 },
                    768: { slidesPerView: 1.3 },
                    1024: { slidesPerView: 1.5 },
                  }}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-white rounded-xl h-52 sm:h-auto md:h-auto   lg:w-auto lg:h-auto p-4 sm:p-6 shadow-lg">
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Greatly done!</h4>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-xs  sm:text-sm text-gray-700 mb-4">{testimonial.review}</p>
                        <div className="w-auto h-1 bg-gray-300 mb-2 sm:mb-6" />
                        <div className="flex items-center justify-evenly">
                          {/* <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden mr-3">
                            <Image
                              src="/placeholder.svg?height=40&width=40"
                              alt="User Avatar"
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          </div> */}
                          <div>
                            <p className="font-medium text-xs sm:text-sm">{testimonial.name}</p>
                            <p className="text-xs text-gray-500">{testimonial.role}</p>
                          </div>
                          <CustomLogo />

                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-pagination flex gap-1 lg:mt-5 mt-16 ml-5"></div>
              </div>
              {/* <div className="swiper-pagination absolute bottom-14 left-10 right-0 space-x-2 mx-auto flex justify-center"></div> */}
              {/* Custom pagination container at the bottom */}

              <div className="w-60 h-10 cursor-pointer  mx-auto justify-center items-center relative -bottom-5 sm:-bottom-7 md:-bottom-7  lg:-bottom-5 gap-2 left-12  sm:left-15  md:left-18   flex ">
                <div className="w-7 h-7 bg-[#FF4400] rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <h1 className="text-[0.7rem] sm:text-sm md:text-md ">See Similar Experiences</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .swiper-pagination-bullet {
    background-color: rgba(220, 38, 38, 10) !important;
    opacity: 1;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    width: 30px;
    border-radius: 10px;
    background-color: rgb(220, 38, 38) !important;
    animation: slideIn 0.5s ease-out forwards;
  }

  .swiper-pagination-bullet-active-out {
    animation: slideOut 0.5s ease-out forwards;
  }
      `}</style>
    </div>
  )
}
