// import React from 'react';
// import { Button } from "@/Components/ui/button";
// import Link from 'next/link';
// const Aboutsection =()=> {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#F6FFF7] py-16 px-4">
//       <div className="text-center w-11/12 mx-auto">
//         <h2 className="text-green-600 font-semibold text-xl mb-6">About Dezprox</h2>
        
//         <div className="text-center mb-10">
//           <p className="text-4xl md:text-5xl font-semibold text-slate-800 leading-tight w-10/12 mx-auto" >
//             Where <span className='font-bold text-green-500'> Ideas Go Digital!</span>  We mix creativity, tech,
//             <span className="inline-flex items-center">
//               <span> and a touch of genius to  </span>
//               {/* <img src="/api/placeholder/40/40" alt="profile" className="rounded-full w-8 h-8 mx-1" /> */}
//             </span>
//             <span className="">build stunning websites,</span>
//             <span>  smart apps, and unforgettable brands. </span> <br />
//             {/* <img src="/api/placeholder/40/40" alt="coffee" className="inline w-10 h-10 mx-1" /> */}
//             <span> If it&apos;s digital, we make it awesome!</span>
//           </p>
//         </div>
//         {/* Where Ideas Go Digital! We mix creativity, tech, and a touch of genius to build stunning websites, smart apps, and unforgettable brands. If it’s digital, we make it awesome! */}
//         <Link href="/about">
//           <Button 
//             className="bg-gradient-to-b from-gray-800 to-gray-900 text-white hover:bg-slate-800 px-10 py-6 rounded-full text-md font-medium"
//           >
//             About Us
//           </Button>
//         </Link>
//         {/* <Button 
//           className="bg-gradient-to-b from-gray-800 to-gray-900 text-white hover:bg-slate-800 px-10 py-6 rounded-full text-md font-medium"
//         >
//           About Us
//         </Button> */}
//       </div>
//     </div>
//   );
// }
// export default Aboutsection;

import React from 'react';
import { Button } from "@/Components/ui/button";
import Link from 'next/link';

const Aboutsection = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:min-h-screen bg-[#F6FFF7] py-8 px-4 sm:py-16">
      <div className="text-center w-full sm:w-11/12 mx-auto">
        <h2 className="text-green-600 font-semibold text-lg sm:text-xl mb-4 sm:mb-6">About Dezprox</h2>
        
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-2xl sm:text-4xl md:text-5xl font-semibold text-slate-800 leading-tight w-full sm:w-10/12 mx-auto" >
            Where <span className='font-bold text-green-500'> Ideas Go Digital!</span>  We mix creativity, tech,
            <span className="inline-flex items-center">
              <span> and a touch of genius to  </span>
            </span>
            <span className="">build stunning websites,</span>
            <span>  smart apps, and unforgettable brands. </span> <br />
            <span> If it&apos;s digital, we make it awesome!</span>
          </p>
        </div>

        <Link href="/about">
          <Button 
            className="bg-gradient-to-b from-gray-800 to-gray-900 text-white hover:bg-slate-800 px-6 sm:px-10 py-4 sm:py-6 rounded-full text-sm sm:text-md font-medium"
          >
            About Us
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Aboutsection;