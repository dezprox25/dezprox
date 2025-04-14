// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Button } from '@/Components/ui/button';
// import Image from "next/image";
// import { Menu, X } from 'lucide-react';
// // import NavbarMenu from '@/Components/ui/navbar-menu';


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white py-4 px-4 sm:px-6 lg:px-8 relative">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-black font-semibold hover:text-green-700 text-sm lg:text-base">
//           <Image width={500} height={500} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1743664757/Company_Logo_amynuq.png" alt="Company Logo" className="h-8 w-auto sm:h-10" />
//         </Link>
//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-black focus:outline-none"
//             aria-label={isOpen ? "Close menu" : "Open menu"}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Navigation links - Desktop */}
//         <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
//           <Link href="/" className="text-black font-semibold hover:text-green-700 text-sm lg:text-base">Home</Link>
//           <Link href="/about" className="text-black font-semibold hover:text-green-700 text-sm lg:text-base">About Us</Link>
//           <Link href="/services" className="text-black font-semibold hover:text-green-700 text-sm lg:text-base">Services</Link>
//           {/* <Link href="/products" className="text-black font-semibold hover:text-green-700 text-sm lg:text-base">Products</Link> */}
//           <Link href="/careers" className="text-black font-semibold hover:text-green-700 text-sm lg:text-base">Careers</Link>
//           <Link href="/contact_us" className="text-black font-semibold hover:text-green-700 text-sm lg:text-base">Contact Us</Link>
//         </div>

//         {/* CTA Button - Desktop */}
//         <div className="hidden md:block">
//           <a
//             href="https://wa.me/9342977856?text=Hi,%20I%20found%20your%20services%20on%20your%20website%20and%20would%20like%20to%20discuss%20my%20project.%20Can%20we%20talk?"
//             className="text-black font-semibold hover:text-green-700 w-full text-center py-2 cursor-pointer"
//             onClick={() => setIsOpen(false)}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Button className="bg-blue-900 cursor-pointer hover:bg-blue-800 text-white rounded-md px-3 py-2 text-sm lg:px-4 lg:text-base flex items-center space-x-2">
//               <svg
//                 width="17"
//                 height="19"
//                 viewBox="0 0 17 19"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g clipPath="url(#clip0_1_1551)">
//                   <g clipPath="url(#clip1_1_1551)">
//                     <path
//                       d="M2.55607 9.39C3.35845 8.78821 4.35099 8.49605 5.35144 8.56715C6.3519 8.63825 7.29313 9.06784 8.00235 9.77705C8.71156 10.4863 9.14115 11.4275 9.21225 12.428C9.28335 13.4284 8.99119 14.4209 8.3894 15.2233M2.55607 9.39C2.03825 9.7778 1.61799 10.281 1.32867 10.8596C1.03936 11.4383 0.888951 12.0764 0.889405 12.7233C0.889137 13.1423 0.952067 13.5589 1.07607 13.9592C1.30274 14.6925 1.1394 15.5092 0.993571 16.2792C0.980639 16.345 0.9849 16.413 1.00594 16.4767C1.02698 16.5404 1.0641 16.5976 1.11369 16.6427C1.16329 16.6879 1.22369 16.7195 1.28907 16.7345C1.35445 16.7495 1.42259 16.7474 1.4869 16.7283C2.19357 16.535 2.89607 16.37 3.61774 16.635C4.07838 16.8042 4.56534 16.8905 5.05607 16.89C5.70303 16.8906 6.3412 16.7402 6.91986 16.4509C7.49851 16.1616 8.00169 15.7412 8.3894 15.2233M2.55607 9.39C2.55607 5.48583 4.9519 1.89 9.22274 1.89C10.2918 1.88981 11.3453 2.14676 12.2943 2.63916C13.2433 3.13157 14.0599 3.84499 14.6753 4.71924C15.2907 5.59348 15.6869 6.60292 15.8303 7.66238C15.9737 8.72185 15.8602 9.80027 15.4994 10.8067C15.1027 11.9117 15.5302 13.3917 15.7802 14.6133C15.7948 14.6784 15.7918 14.7461 15.7715 14.8096C15.7513 14.8731 15.7145 14.9301 15.665 14.9747C15.6155 15.0193 15.555 15.05 15.4897 15.0635C15.4244 15.077 15.3567 15.0729 15.2935 15.0517C14.2002 14.71 12.9169 14.23 11.8894 14.6633C10.7777 15.1317 9.6094 15.2233 8.3894 15.2233"
//                       stroke="white"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </g>
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_1_1551">
//                     <rect width="17" height="18" fill="white" transform="translate(0 0.389999)" />
//                   </clipPath>
//                   <clipPath id="clip1_1_1551">
//                     <rect width="17" height="18" fill="white" transform="translate(0 0.389999)" />
//                   </clipPath>
//                 </defs>
//               </svg>
//               <span>Let&apos;s Talk</span>
//             </Button>
//           </a>
//         </div>
//       </div>
//       {/* <div className="relative w-full flex items-center justify-center">
//         <NavbarMenu className="top-2" />
//         <p className="text-black dark:text-white">
//           The Navbar will show on top of the page
//         </p>
//       </div> */}

//       {/* Mobile Menu - Overlay */}
//       {
//         isOpen && (
//           <div className="md:hidden absolute top-full left-0 right-0 bg-gray-200 shadow-lg z-50">
//             <div className="flex flex-col items-center py-4 space-y-4">
//               <Link href="/" className="text-black font-semibold hover:text-green-700 w-full text-center py-2" onClick={() => setIsOpen(false)}>Home</Link>
//               <Link href="/about" className="text-black font-semibold hover:text-green-700 w-full text-center py-2" onClick={() => setIsOpen(false)}>About Us</Link>
//               <Link href="/services" className="text-black font-semibold hover:text-green-700 w-full text-center py-2" onClick={() => setIsOpen(false)}>Services</Link>
//               {/* <Link href="/products" className="text-black font-semibold hover:text-green-700 w-full text-center py-2" onClick={() => setIsOpen(false)}>Products</Link> */}
//               <Link href="/careers" className="text-black font-semibold hover:text-green-700 w-full text-center py-2" onClick={() => setIsOpen(false)}>Careers</Link>
//               <Link href="/contact_us" className="text-black font-semibold hover:text-green-700 w-full text-center py-2" onClick={() => setIsOpen(false)}>Contact Us</Link>
//               <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-md px-6 py-2 flex items-center space-x-2">
//                 <svg
//                   width="17"
//                   height="19"
//                   viewBox="0 0 17 19"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g clipPath="url(#clip0_1_1551)">
//                     <g clipPath="url(#clip1_1_1551)">
//                       <path
//                         d="M2.55607 9.39C3.35845 8.78821 4.35099 8.49605 5.35144 8.56715C6.3519 8.63825 7.29313 9.06784 8.00235 9.77705C8.71156 10.4863 9.14115 11.4275 9.21225 12.428C9.28335 13.4284 8.99119 14.4209 8.3894 15.2233M2.55607 9.39C2.03825 9.7778 1.61799 10.281 1.32867 10.8596C1.03936 11.4383 0.888951 12.0764 0.889405 12.7233C0.889137 13.1423 0.952067 13.5589 1.07607 13.9592C1.30274 14.6925 1.1394 15.5092 0.993571 16.2792C0.980639 16.345 0.9849 16.413 1.00594 16.4767C1.02698 16.5404 1.0641 16.5976 1.11369 16.6427C1.16329 16.6879 1.22369 16.7195 1.28907 16.7345C1.35445 16.7495 1.42259 16.7474 1.4869 16.7283C2.19357 16.535 2.89607 16.37 3.61774 16.635C4.07838 16.8042 4.56534 16.8905 5.05607 16.89C5.70303 16.8906 6.3412 16.7402 6.91986 16.4509C7.49851 16.1616 8.00169 15.7412 8.3894 15.2233M2.55607 9.39C2.55607 5.48583 4.9519 1.89 9.22274 1.89C10.2918 1.88981 11.3453 2.14676 12.2943 2.63916C13.2433 3.13157 14.0599 3.84499 14.6753 4.71924C15.2907 5.59348 15.6869 6.60292 15.8303 7.66238C15.9737 8.72185 15.8602 9.80027 15.4994 10.8067C15.1027 11.9117 15.5302 13.3917 15.7802 14.6133C15.7948 14.6784 15.7918 14.7461 15.7715 14.8096C15.7513 14.8731 15.7145 14.9301 15.665 14.9747C15.6155 15.0193 15.555 15.05 15.4897 15.0635C15.4244 15.077 15.3567 15.0729 15.2935 15.0517C14.2002 14.71 12.9169 14.23 11.8894 14.6633C10.7777 15.1317 9.6094 15.2233 8.3894 15.2233"
//                         stroke="white"
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </g>
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_1_1551">
//                       <rect width="17" height="18" fill="white" transform="translate(0 0.389999)" />
//                     </clipPath>
//                     <clipPath id="clip1_1_1551">
//                       <rect width="17" height="18" fill="white" transform="translate(0 0.389999)" />
//                     </clipPath>
//                   </defs>
//                 </svg> <span>Let&apos;s Talk</span>
//               </Button>
//             </div>
//           </div>
//         )
//       }
//     </nav >
//   );
// };

// export default Navbar;

// =================================================================================================================================================

// 'use client'
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Button } from "@/Components/ui/button";
// import { Menu, X } from 'lucide-react';
// import Image from 'next/image';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       {/* Original Navbar - Shows only when not scrolled */}
//       <nav className={`bg-white py-4 px-4 sm:px-6 lg:px-8 relative ${isScrolled ? 'hidden' : 'block'}`}>
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="text-black font-semibold hover:text-green-700 text-sm lg:text-base">
//             <Image width={500} height={500} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1743664757/Company_Logo_amynuq.png" alt="Company Logo" className="h-8 w-auto sm:h-10" />
//           </Link>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-black focus:outline-none"
//               aria-label={isOpen ? "Close menu" : "Open menu"}
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Navigation links - Desktop */}
//           <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
//             <Link href="/" className="text-black font-semibold hover:text-green-700 text-sm lg:text-base">Home</Link>
//             <Link href="/about" className="text-black font-semibold hover:text-green-700 text-sm lg:text-base">About Us</Link>
//             <Link href="/services" className="text-black font-semibold hover:text-green-700 text-sm lg:text-base">Services</Link>
//             <Link href="/careers" className="text-black font-semibold hover:text-green-700 text-sm lg:text-base">Careers</Link>
//             <Link href="/contact" className="text-black font-semibold hover:text-green-700 text-sm lg:text-base">Contact Us</Link>
//           </div>

//           {/* CTA Button - Desktop */}
//           <div className="hidden md:block">
//             <a
//               href="https://wa.me/9342977856?text=Hi,%20I%20found%20your%20services%20on%20your%20website%20and%20would%20like%20to%20discuss%20my%20project.%20Can%20we%20talk?"
//               className="text-black font-semibold hover:text-green-700 w-full text-center py-2 cursor-pointer"
//               onClick={() => setIsOpen(false)}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button className="bg-blue-900 cursor-pointer hover:bg-blue-800 text-white rounded-md px-3 py-2 text-sm lg:px-4 lg:text-base flex items-center space-x-2">
//                 <svg
//                   width="17"
//                   height="19"
//                   viewBox="0 0 17 19"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g clipPath="url(#clip0_1_1551)">
//                     <g clipPath="url(#clip1_1_1551)">
//                       <path
//                         d="M2.55607 9.39C3.35845 8.78821 4.35099 8.49605 5.35144 8.56715C6.3519 8.63825 7.29313 9.06784 8.00235 9.77705C8.71156 10.4863 9.14115 11.4275 9.21225 12.428C9.28335 13.4284 8.99119 14.4209 8.3894 15.2233M2.55607 9.39C2.03825 9.7778 1.61799 10.281 1.32867 10.8596C1.03936 11.4383 0.888951 12.0764 0.889405 12.7233C0.889137 13.1423 0.952067 13.5589 1.07607 13.9592C1.30274 14.6925 1.1394 15.5092 0.993571 16.2792C0.980639 16.345 0.9849 16.413 1.00594 16.4767C1.02698 16.5404 1.0641 16.5976 1.11369 16.6427C1.16329 16.6879 1.22369 16.7195 1.28907 16.7345C1.35445 16.7495 1.42259 16.7474 1.4869 16.7283C2.19357 16.535 2.89607 16.37 3.61774 16.635C4.07838 16.8042 4.56534 16.8905 5.05607 16.89C5.70303 16.8906 6.3412 16.7402 6.91986 16.4509C7.49851 16.1616 8.00169 15.7412 8.3894 15.2233M2.55607 9.39C2.55607 5.48583 4.9519 1.89 9.22274 1.89C10.2918 1.88981 11.3453 2.14676 12.2943 2.63916C13.2433 3.13157 14.0599 3.84499 14.6753 4.71924C15.2907 5.59348 15.6869 6.60292 15.8303 7.66238C15.9737 8.72185 15.8602 9.80027 15.4994 10.8067C15.1027 11.9117 15.5302 13.3917 15.7802 14.6133C15.7948 14.6784 15.7918 14.7461 15.7715 14.8096C15.7513 14.8731 15.7145 14.9301 15.665 14.9747C15.6155 15.0193 15.555 15.05 15.4897 15.0635C15.4244 15.077 15.3567 15.0729 15.2935 15.0517C14.2002 14.71 12.9169 14.23 11.8894 14.6633C10.7777 15.1317 9.6094 15.2233 8.3894 15.2233"
//                         stroke="white"
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </g>
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_1_1551">
//                       <rect width="17" height="18" fill="white" transform="translate(0 0.389999)" />
//                     </clipPath>
//                     <clipPath id="clip1_1_1551">
//                       <rect width="17" height="18" fill="white" transform="translate(0 0.389999)" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 <span>Let's Talk</span>
//               </Button>
//             </a>
//           </div>
//         </div>

//         {/* Mobile Menu - Overlay */}
//         {isOpen && (
//           <div className="md:hidden absolute top-full left-0 right-0 bg-gray-200 shadow-lg z-50">
//             <div className="flex flex-col items-center py-4 space-y-4">
//               <Link href="/" className="text-black font-semibold hover:text-green-700 w-full text-center py-2" onClick={() => setIsOpen(false)}>Home</Link>
//               <Link href="/about" className="text-black font-semibold hover:text-green-700 w-full text-center py-2" onClick={() => setIsOpen(false)}>About Us</Link>
//               <Link href="/services" className="text-black font-semibold hover:text-green-700 w-full text-center py-2" onClick={() => setIsOpen(false)}>Services</Link>
//               <Link href="/careers" className="text-black font-semibold hover:text-green-700 w-full text-center py-2" onClick={() => setIsOpen(false)}>Careers</Link>
//               <Link href="/contact" className="text-black font-semibold hover:text-green-700 w-full text-center py-2" onClick={() => setIsOpen(false)}>Contact Us</Link>
//               <a
//                 href="https://wa.me/9342977856?text=Hi,%20I%20found%20your%20services%20on%20your%20website%20and%20would%20like%20to%20discuss%20my%20project.%20Can%20we%20talk?"
//                 className="w-full text-center"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-md px-6 py-2 flex items-center space-x-2 mx-auto">
//                   <svg
//                     width="17"
//                     height="19"
//                     viewBox="0 0 17 19"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_1_1551)">
//                       <g clipPath="url(#clip1_1_1551)">
//                         <path
//                           d="M2.55607 9.39C3.35845 8.78821 4.35099 8.49605 5.35144 8.56715C6.3519 8.63825 7.29313 9.06784 8.00235 9.77705C8.71156 10.4863 9.14115 11.4275 9.21225 12.428C9.28335 13.4284 8.99119 14.4209 8.3894 15.2233M2.55607 9.39C2.03825 9.7778 1.61799 10.281 1.32867 10.8596C1.03936 11.4383 0.888951 12.0764 0.889405 12.7233C0.889137 13.1423 0.952067 13.5589 1.07607 13.9592C1.30274 14.6925 1.1394 15.5092 0.993571 16.2792C0.980639 16.345 0.9849 16.413 1.00594 16.4767C1.02698 16.5404 1.0641 16.5976 1.11369 16.6427C1.16329 16.6879 1.22369 16.7195 1.28907 16.7345C1.35445 16.7495 1.42259 16.7474 1.4869 16.7283C2.19357 16.535 2.89607 16.37 3.61774 16.635C4.07838 16.8042 4.56534 16.8905 5.05607 16.89C5.70303 16.8906 6.3412 16.7402 6.91986 16.4509C7.49851 16.1616 8.00169 15.7412 8.3894 15.2233M2.55607 9.39C2.55607 5.48583 4.9519 1.89 9.22274 1.89C10.2918 1.88981 11.3453 2.14676 12.2943 2.63916C13.2433 3.13157 14.0599 3.84499 14.6753 4.71924C15.2907 5.59348 15.6869 6.60292 15.8303 7.66238C15.9737 8.72185 15.8602 9.80027 15.4994 10.8067C15.1027 11.9117 15.5302 13.3917 15.7802 14.6133C15.7948 14.6784 15.7918 14.7461 15.7715 14.8096C15.7513 14.8731 15.7145 14.9301 15.665 14.9747C15.6155 15.0193 15.555 15.05 15.4897 15.0635C15.4244 15.077 15.3567 15.0729 15.2935 15.0517C14.2002 14.71 12.9169 14.23 11.8894 14.6633C10.7777 15.1317 9.6094 15.2233 8.3894 15.2233"
//                           stroke="white"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </g>
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_1_1551">
//                         <rect width="17" height="18" fill="white" transform="translate(0 0.389999)" />
//                       </clipPath>
//                       <clipPath id="clip1_1_1551">
//                         <rect width="17" height="18" fill="white" transform="translate(0 0.389999)" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                   <span>Let's Talk</span>
//                 </Button>
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Sticky Navbar - Shows when scrolled and is fixed to the top */}
//       <nav
//         className={`fixed top-0 left-0 right-0  bg-transparent h-20 hidden md:flex lg:flex items-center justify-center py-2  z-50 transition-transform duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-full'
//           }`}
//       >
//         <div className="max-w-4xl border border-black bg-white rounded-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-10 p-3">
//           {/* Compact Logo */}
//           <Link href="/" className="text-black font-semibold hover:text-green-700 text-sm lg:text-base">
//             <Image width={500} height={500} src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1743664757/Company_Logo_amynuq.png" alt="Company Logo" className="h-3 w-auto sm:h-7" />
//           </Link>


//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link href="/" className="text-black font-semibold hover:text-green-700 text-sm">Home</Link>
//             <Link href="/about" className="text-black font-semibold hover:text-green-700 text-sm">About Us</Link>
//             <Link href="/services" className="text-black font-semibold hover:text-green-700 text-sm">Services</Link>
//             <Link href="/careers" className="text-black font-semibold hover:text-green-700 text-sm">Careers</Link>
//             <Link href="/contact" className="text-black font-semibold hover:text-green-700 text-sm">Contact Us</Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-black focus:outline-none"
//               aria-label={isOpen ? "Close menu" : "Open menu"}
//             >
//               {isOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>

//           {/* CTA Button - Desktop (Smaller version) */}
//           <div className="hidden md:block">
//             <a
//               href="https://wa.me/9342977856?text=Hi,%20I%20found%20your%20services%20on%20your%20website%20and%20would%20like%20to%20discuss%20my%20project.%20Can%20we%20talk?"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-md px-2 py-1 text-sm flex items-center space-x-1">
//                 <span>Let's Talk</span>
//               </Button>
//             </a>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown - Only shows when isOpen is true */}
//         {isOpen && (
//           <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
//             <div className="flex flex-col items-center py-3 space-y-3">
//               <Link href="/" className="text-black font-semibold hover:text-green-700 w-full text-center py-1" onClick={() => setIsOpen(false)}>Home</Link>
//               <Link href="/about" className="text-black font-semibold hover:text-green-700 w-full text-center py-1" onClick={() => setIsOpen(false)}>About Us</Link>
//               <Link href="/services" className="text-black font-semibold hover:text-green-700 w-full text-center py-1" onClick={() => setIsOpen(false)}>Services</Link>
//               <Link href="/careers" className="text-black font-semibold hover:text-green-700 w-full text-center py-1" onClick={() => setIsOpen(false)}>Careers</Link>
//               <Link href="/contact" className="text-black font-semibold hover:text-green-700 w-full text-center py-1" onClick={() => setIsOpen(false)}>Contact Us</Link>
//               <a
//                 href="https://wa.me/9342977856?text=Hi,%20I%20found%20your%20services%20on%20your%20website%20and%20would%20like%20to%20discuss%20my%20project.%20Can%20we%20talk?"
//                 className="w-full text-center"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-md px-4 py-1 text-sm flex items-center space-x-2 mx-auto">
//                   <span>Let's Talk</span>
//                 </Button>
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;



"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/Components/ui/resizable-navbar";
import Image from "next/image";

import { getCalApi } from "@calcom/embed-react";
import { useState, useEffect } from "react";

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Careers",
      link: "/careers",
    },
    {
      name: "Contact Us",
      link: "/contact_us",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "15min" });
      cal("floatingButton", { "calLink": "dinesh-siva-ttvmmp/15min", "config": { "layout": "month_view" } });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])
  return (
    <div className="w-full sticky top-0 z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center cursor-pointer z-10  gap-4">
            <a href="https://wa.me/918072818574?text=Hi%20Dezprox%2C%20I%20saw%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer">
              <button
                className={`w-[45px] h-[45px] bg-gray-300 flex items-center justify-center rounded-full cursor-pointer border-none group`}
              >
                <Image src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744609090/whatsapp-svgrepo-com_a4duty.svg" alt="logo" width={30} height={30} />

              </button>
            </a>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">

              <a
                className=""
                href="https://wa.me/918072818574?text=Hi%20Dezprox%2C%20I%20saw%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer">

                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full  h-20 flex justify-start items-center gap-5"
                >
                  <button
                    className={`w-[45px] h-[45px] bg-gray-300 flex items-center justify-center rounded-full cursor-pointer border-none group `}
                  >
                    <Image src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1744609090/whatsapp-svgrepo-com_a4duty.svg" alt="logo" width={30} height={30} />

                  </button>
                  <h1 className="text-green-500">WhatsApp</h1>
                </NavbarButton>
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
