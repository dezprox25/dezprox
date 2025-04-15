"use client";
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744419982/Bharanidharan_N_R_qtxjny.jpg",
    name: "Bharanidharan N R",
    role: "Senior Ui/Ux Designer",
    alt: "Dezprox Founder"
  },
  {
    id: 2,
    imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744421479/MKM_ij2vkp.jpg",
    name: "Mohan Kumar",
    role: 'Senior Data Analysite',
    alt: "Dezprox Founder"
  },
  {
    id: 3,
    imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744421114/Agnel_sjolku.jpg",
    name: "Agnel David",
    role: "Senior Product Designer",
    alt: "Dezprox Founder"
  },
  {
    id: 4,
    imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744419976/Dinesh_wztiy5.jpg",
    name: "Dinesh Siva",
    role: 'Product Manager',
    alt: "Dezprox Founder"
  },
  {
    id: 5,
    imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744419976/Elanchezhiyan_Mahendiran_x4bvu5.jpg",
    name: "Elanchezhiyan Mahendiran",
    role: 'seniour Web Developer',
    alt: "Dezprox Founder"
  }
];

const Ourteam = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = useCallback(() => {
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % teamMembers.length);
  }, [teamMembers.length]);

  const prevImage = useCallback(() => {
    setDirection(-1);
    setCurrentImage((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  }, [teamMembers.length]);

  const imageVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? -1000 : 1000,
        opacity: 0,
      };
    },
  };

  return (
    <section className='h-screen bg-black w-full p-5 overflow-hidden'>
      <div className='container h-full mx-auto bg-black/50 flex flex-col items-center justify-center '>
        <div className="w-full mx-auto">
          <div className="relative flex justify-center scale-105 items-center gap-3 -left-5 ">

            {/* Left Image */}
            <div className="w-[26rem] h-[40rem]  lg:block hidden left-3 overflow-hidden  rounded-lg  shadow-lg relative">
              <Image
                width={500}
                height={500}
                src={teamMembers[(currentImage - 2 + teamMembers.length) % teamMembers.length].imageUrl}
                alt="Previous"
                className="w-full h-full object-cover"
              />
              <div className='absolute top-0 w-full h-full  bg-black/60'>

              </div>
              <div className='z-40 w-full bg-gradient-to-t from-black via-black/50 to-transparent relative min-h-40 -top-40 space-y-4 p-5'>
                <p className='text-white text-start text-[0.6rem]'>&apos;The Meat Lover's Feast is everything a carnivore dreams of, loaded
                  with perfectly cooked meats and balanced with just the right amount of
                  sauce. This is pizza at its finest.&apos;</p>
                <h1 className='text-white text-xl font-bold'>{teamMembers[(currentImage - 2 + teamMembers.length) % teamMembers.length].name} </h1>
                <h1 className='text-white font-light text-[0.6rem]'>&quot;{teamMembers[(currentImage - 2 + teamMembers.length) % teamMembers.length].role}&quot;</h1>
              </div>
            </div>
            <div className="w-[26rem] h-[40rem]  lg:block hidden left-3  rounded-lg overflow-hidden shadow-lg relative">
              <Image
                width={500}
                height={500}
                src={teamMembers[(currentImage - 1 + teamMembers.length) % teamMembers.length].imageUrl}
                alt="Previous"
                className="w-full h-full object-cover"
              />
              <div className='absolute top-0 w-full h-full flex flex-col justify-center items-start p-5 bg-black/60'>
                <TextGenerateEffect words="Meet Our Founders" className="text-white text-2xl font-bold mb-4" />
                <p className="text-gray-300 max-w-80 text-sm ">
                  Our team of innovators, designers, and strategists collaborate to craft impactful digital experiences that drive success and transformation.
                </p>
              </div>
              <div className='z-40 w-full bg-gradient-to-t from-black via-black/50 to-transparent relative min-h-40 -top-40 space-y-4 p-5'>
                <p className='text-white text-start text-[0.6rem]'>&apos;The Meat Lover's Feast is everything a carnivore dreams of, loaded
                  with perfectly cooked meats and balanced with just the right amount of
                  sauce. This is pizza at its finest.&apos;</p>
                <h1 className='text-white text-xl font-bold'>{teamMembers[(currentImage - 1 + teamMembers.length) % teamMembers.length].name} </h1>
                <h1 className='text-white font-light text-[0.6rem]'>&quot;{teamMembers[(currentImage - 1 + teamMembers.length) % teamMembers.length].role}&quot; </h1>
              </div>
            </div>

            {/* Center Image (Larger) */}
            <div
              key={currentImage}
              className="w-[26rem] h-[40rem] lg:block hidden left-3 rounded-lg overflow-hidden shadow-lg relative"
            >
              <Image
                width={500}
                height={500}
                src={teamMembers[currentImage].imageUrl}
                alt="Current"
                className="w-full h-full object-cover"
              />
              <div className='absolute top-0 w-full h-full flex justify-between gap-5 items-center bg-transparent '>
                <button
                  onClick={prevImage}
                  className="cursor-pointer flex items-center justify-center  bg-black/20 rounded-full p-1 lg:shadow-lg  transition-colors"
                >
                  <ChevronLeft className=" w-4 h-4 relative right-[1px]  text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className=" cursor-pointer flex items-center justify-center  bg-black/20 rounded-full p-1 lg:shadow-lg  transition-colors"
                >
                  <ChevronRight className=" w-4 h-4 relative right-[1px]  text-white" />
                </button>

              </div>

              <div className='z-40 w-full bg-gradient-to-t from-black via-black/90 to-black/5 relative min-h-40 -top-40 space-y-4 p-2'>
                <p className='text-white text-start text-[0.6rem]'>&apos;The Meat Lover's Feast is everything a carnivore dreams of, loaded
                  with perfectly cooked meats and balanced with just the right amount of
                  sauce. This is pizza at its finest.&apos;</p>
                <h1 className='text-white text-xl font-bold'>{teamMembers[currentImage].name} </h1>
                <h1 className='text-white font-light text-[0.6rem]'>&quot;{teamMembers[currentImage].role} &quot;</h1>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-[26rem] h-[40rem]  lg:block hidden left-3  rounded-lg overflow-hidden shadow-lg relative">
              <Image
                width={500}
                height={500}
                src={teamMembers[(currentImage + 1) % teamMembers.length].imageUrl}
                alt="Next"
                className="w-full h-full object-cover"
              />
              <div className='absolute top-0 w-full h-full  bg-black/60'>

              </div>
              <div className='z-40 w-full bg-gradient-to-t from-black via-black/50 to-transparent relative min-h-40 -top-40 space-y-4 p-5'>
                <p className='text-white text-start text-[0.6rem]'>&apos;The Meat Lover's Feast is everything a carnivore dreams of, loaded
                  with perfectly cooked meats and balanced with just the right amount of
                  sauce. This is pizza at its finest.&apos;</p>
                <h1 className='text-white text-xl font-bold'>{teamMembers[(currentImage + 1) % teamMembers.length].name} </h1>
                <h1 className='text-white font-light text-[0.6rem] '>&quot;{teamMembers[(currentImage + 1) % teamMembers.length].role}&quot;</h1>
              </div>
            </div>
            {/* <div className='min-w-[28rem] h-full bg-transparent flex flex-col items-start justify-center float-end '>
                <TextGenerateEffect words="Meet Our Founders" className="text-white text-2xl font-bold mb-4" />
                <p className="text-gray-300 max-w-80 text-sm ">
                  Our team of innovators, designers, and strategists collaborate to craft impactful digital experiences that drive success and transformation.
                </p>
              </div> */}



          </div>
        </div>
      </div >
    </section >
  );
};

export default Ourteam;

// =======================================================================================================deepseek code===================================================


// "use client";
// import React, { useState, useCallback, useEffect } from 'react';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { motion, AnimatePresence } from "framer-motion";

// interface TeamMember {
//   id: number;
//   imageUrl: string;
//   name: string;
//   role: string;
//   alt: string;
//   quote?: string;
// }

// interface ImageSliderProps {
//   items: TeamMember[];
//   showSideItems?: boolean;
//   autoPlay?: boolean;
//   interval?: number;
// }

// const ImageSlider: React.FC<ImageSliderProps> = ({
//   items,
//   showSideItems = true,
//   autoPlay = false,
//   interval = 5000
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const nextSlide = useCallback(() => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % items.length);
//   }, [items.length]);

//   const prevSlide = useCallback(() => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
//   }, [items.length]);

//   const goToSlide = (index: number) => {
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//   };

//   // Auto-play functionality
//   useEffect(() => {
//     if (!autoPlay || isHovered) return;

//     const timer = setInterval(() => {
//       nextSlide();
//     }, interval);

//     return () => clearInterval(timer);
//   }, [autoPlay, interval, isHovered, nextSlide]);

//   const imageVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? '100%' : '-100%',
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: number) => ({
//       zIndex: 0,
//       x: direction < 0 ? '100%' : '-100%',
//       opacity: 0,
//     }),
//   };

//   const slideContainerClasses = `relative w-full h-full flex items-center justify-center`;
//   const slideClasses = `relative overflow-hidden rounded-lg shadow-lg`;
//   const sideSlideClasses = `hidden lg:block relative rounded-lg shadow-lg`;

//   // Responsive sizing
//   const getSlideDimensions = () => {
//     return {
//       width: 300,
//       height: 450,
//       // Adjust for different screen sizes
//       ...(typeof window !== 'undefined' && {
//         width: window.innerWidth < 640 ? 200 : 300,
//         height: window.innerWidth < 640 ? 300 : 450,
//       })
//     };
//   };

//   const { width, height } = getSlideDimensions();

//   return (
//     <div
//       className="relative w-full h-full"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className={slideContainerClasses}>
//         {/* Left side items (visible on larger screens) */}
//         {showSideItems && (
//           <>
//             <div className={`${sideSlideClasses} mr-4`} style={{ width, height }}>
//               <Image
//                 width={width}
//                 height={height}
//                 src={items[(currentIndex - 2 + items.length) % items.length].imageUrl}
//                 alt={items[(currentIndex - 2 + items.length) % items.length].alt}
//                 className="w-full h-full object-cover"
//               />
//               <SlideOverlay member={items[(currentIndex - 2 + items.length) % items.length]} />
//             </div>
//             <div className={`${sideSlideClasses} mr-4`} style={{ width, height }}>
//               <Image
//                 width={width}
//                 height={height}
//                 src={items[(currentIndex - 1 + items.length) % items.length].imageUrl}
//                 alt={items[(currentIndex - 1 + items.length) % items.length].alt}
//                 className="w-full h-full object-cover"
//               />
//               <SlideOverlay member={items[(currentIndex - 1 + items.length) % items.length]} />
//             </div>
//           </>
//         )}

//         {/* Main slide (animated) */}
//         <div className={`${slideClasses} mx-2 z-10`} style={{ width: width * 1.1, height: height * 1.1 }}>
//           <AnimatePresence custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={imageVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{
//                 x: { type: "spring", stiffness: 300, damping: 30 },
//                 opacity: { duration: 0.2 },
//               }}
//               className="w-full h-full relative"
//             >
//               <Image
//                 width={width * 1.1}
//                 height={height * 1.1}
//                 src={items[currentIndex].imageUrl}
//                 alt={items[currentIndex].alt}
//                 className="w-full h-full object-cover"
//                 priority
//               />
//               <SlideOverlay member={items[currentIndex]} isMain />
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Right side items (visible on larger screens) */}
//         {showSideItems && (
//           <>
//             <div className={`${sideSlideClasses} ml-4`} style={{ width, height }}>
//               <Image
//                 width={width}
//                 height={height}
//                 src={items[(currentIndex + 1) % items.length].imageUrl}
//                 alt={items[(currentIndex + 1) % items.length].alt}
//                 className="w-full h-full object-cover"
//               />
//               <SlideOverlay member={items[(currentIndex + 1) % items.length]} />
//             </div>
//             <div className={`${sideSlideClasses} ml-4`} style={{ width, height }}>
//               <Image
//                 width={width}
//                 height={height}
//                 src={items[(currentIndex + 2) % items.length].imageUrl}
//                 alt={items[(currentIndex + 2) % items.length].alt}
//                 className="w-full h-full object-cover"
//               />
//               <SlideOverlay member={items[(currentIndex + 2) % items.length]} />
//             </div>
//           </>
//         )}
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute z-20 left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-5 h-5 text-white" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute z-20 right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-5 h-5 text-white" />
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
//         {items.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-white w-6' : 'bg-white/50'}`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const SlideOverlay: React.FC<{ member: TeamMember; isMain?: boolean }> = ({ member, isMain = false }) => {
//   return (
//     <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent ${isMain ? 'pt-8' : 'pt-6'}`}>
//       <p className="text-white text-xs mb-2 line-clamp-2">
//         {member.quote || "The Meat Lover's Feast is everything a carnivore dreams of, loaded with perfectly cooked meats."}
//       </p>
//       <h3 className="text-white font-bold">{member.name}</h3>
//       <p className="text-white/80 text-xs italic">&quot;{member.role}&quot;</p>
//     </div>
//   );
// };

// // Example usage with your team data
// const OurTeam = () => {
//   const teamMembers: TeamMember[] = [
//     {
//       id: 1,
//       imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744419982/Bharanidharan_N_R_qtxjny.jpg",
//       name: "Bharanidharan N R",
//       role: "Senior Ui/Ux Designer",
//       alt: "Bharanidharan N R - Senior Ui/Ux Designer"
//     },

//     {
//       id: 2,
//       imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744421479/MKM_ij2vkp.jpg",
//       name: "Mohan Kumar",
//       role: 'Senior Data Analysite',
//       alt: "Dezprox Founder"
//     },
//     {
//       id: 3,
//       imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744421114/Agnel_sjolku.jpg",
//       name: "Agnel David",
//       role: "Senior Product Designer",
//       alt: "Dezprox Founder"
//     },
//     {
//       id: 4,
//       imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744419976/Dinesh_wztiy5.jpg",
//       name: "Dinesh Siva",
//       role: 'Product Manager',
//       alt: "Dezprox Founder"
//     },
//     {
//       id: 5,
//       imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744419976/Elanchezhiyan_Mahendiran_x4bvu5.jpg",
//       name: "Elanchezhiyan Mahendiran",
//       role: 'seniour Web Developer',
//       alt: "Dezprox Founder"
//     }
//   ];

//   return (
//     <section className="min-h-screen bg-black w-full py-12 px-4 sm:px-6 lg:px-8">
//       <div className="container mx-auto h-full flex flex-col items-center justify-center">
//         <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
//           Meet Our Team
//         </h2>
//         <p className="text-gray-300 max-w-2xl text-center mb-12 px-4">
//           Our team of innovators, designers, and strategists collaborate to craft impactful digital experiences.
//         </p>

//         <div className="w-full max-w-7xl h-[500px] sm:h-[600px]">
//           <ImageSlider
//             items={teamMembers}
//             showSideItems={true}
//             autoPlay={true}
//             interval={5000}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurTeam;


// =================================================================================chagbt code =====================================================================================================

// "use client";
// import React, { useState, useCallback } from 'react';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const teamMembers = [
//   {
//     id: 1,
//     imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744419982/Bharanidharan_N_R_qtxjny.jpg",
//     name: "Bharanidharan N R",
//     role: "Senior Ui/Ux Designer",
//     alt: "Dezprox Founder"
//   },
//   {
//     id: 2,
//     imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744421479/MKM_ij2vkp.jpg",
//     name: "Mohan Kumar",
//     role: 'Senior Data Analysite',
//     alt: "Dezprox Founder"
//   },
//   {
//     id: 3,
//     imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744421114/Agnel_sjolku.jpg",
//     name: "Agnel David",
//     role: "Senior Product Designer",
//     alt: "Dezprox Founder"
//   },
//   {
//     id: 4,
//     imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744419976/Dinesh_wztiy5.jpg",
//     name: "Dinesh Siva",
//     role: 'Product Manager',
//     alt: "Dezprox Founder"
//   },
//   {
//     id: 5,
//     imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744419976/Elanchezhiyan_Mahendiran_x4bvu5.jpg",
//     name: "Elanchezhiyan Mahendiran",
//     role: 'seniour Web Developer',
//     alt: "Dezprox Founder"
//   }
// ];

// const Ourteam = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const nextImage = useCallback(() => {
//     setCurrentImage((prev) => (prev + 1) % teamMembers.length);
//   }, []);

//   const prevImage = useCallback(() => {
//     setCurrentImage((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
//   }, []);

//   return (
//     <section className='h-screen bg-black w-full p-5 overflow-hidden'>
//       <div className='container h-full mx-auto bg-black/50 flex flex-col items-center justify-center'>
//         <div className='w-full mx-auto'>
//           <div className='relative flex justify-center scale-105 items-center gap-3 -left-5'>
//             {[ -2, -1, 0, 1 ].map((offset, index) => {
//               const member = teamMembers[(currentImage + offset + teamMembers.length) % teamMembers.length];
//               return (
//                 <div
//                   key={index}
//                   className={`w-[26rem] h-[40rem] lg:block hidden left-3 rounded-lg overflow-hidden shadow-lg relative ${offset === 0 ? '' : ''}`}
//                 >
//                   <Image
//                     width={500}
//                     height={500}
//                     src={member.imageUrl}
//                     alt={member.alt}
//                     className='w-full h-full object-cover'
//                   />
//                   <div className='z-40 w-full bg-gradient-to-t from-black via-black/60 to-transparent relative min-h-40 -top-40 space-y-4 p-5'>
//                     <p className='text-white text-start text-[0.6rem]'>&apos;The Meat Lover's Feast is everything a carnivore dreams of, loaded
//                       with perfectly cooked meats and balanced with just the right amount of
//                       sauce. This is pizza at its finest.&apos;</p>
//                     <h1 className='text-white text-xl font-bold'>{member.name}</h1>
//                     <h1 className='text-white font-light text-[0.6rem]'>&quot;{member.role}&quot;</h1>
//                   </div>
//                 </div>
//               );
//             })}

//             <div className='absolute w-[49.4rem] left-0 h-[40rem] bg-black/60'></div>
//             <div className='absolute w-[25.4rem] -right-10 h-[40rem] bg-black/60'></div>

//             {/* Navigation Arrows */}
//             <button
//               onClick={prevImage}
//               className='absolute z-40 lg:right-[43rem] cursor-pointer flex items-center justify-center bg-black/20 rounded-full p-1 lg:shadow-lg transition-colors'
//             >
//               <ChevronLeft className='w-4 h-4 relative right-[1px] text-white' />
//             </button>
//             <button
//               onClick={nextImage}
//               className='absolute z-40 lg:right-[23rem] cursor-pointer flex items-center justify-center bg-black/20 rounded-full p-1 lg:shadow-lg transition-colors'
//             >
//               <ChevronRight className='w-4 h-4 relative right-[1px] text-white' />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Ourteam;
