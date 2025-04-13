
// import React from "react";
// import { Button } from "@/Components/ui/button";
// import Link from "next/link";
// const Contactherosection = () => {
//   return (
//     <section className="relative flex flex-col items-center justify-center min-h-screen bg-white px-5 py-10 text-center">
//       {/* Circle Background */}
//       <div className="absolute w-[640px] h-[640px] max-lg:w-[500px] max-lg:h-[500px] max-md:w-[400px] max-md:h-[400px] max-sm:w-[350px] max-sm:h-[350px] rounded-full border border-gray-300 flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//         {/* Middle Circle */}
//         <div className="absolute w-[500px] h-[500px] max-lg:w-[430px] max-lg:h-[430px] max-md:w-[360px] max-md:h-[360px] max-sm:w-[250px] max-sm:h-[250px] rounded-full border border-gray-300" />
//         {/* Inner Circle */}
//         <div className="absolute w-[350px] h-[350px] max-lg:w-[300px] max-lg:h-[300px] max-md:w-[250px] max-md:h-[250px] max-sm:w-[170px] max-sm:h-[170px] rounded-full border border-gray-300" />

//         {/* Dots */}
//         <div className="absolute w-3 h-3 max-sm:w-2 max-sm:h-2 bg-green-200 shadow-[0_0_10px_rgba(209,250,229,0.5)] rounded-full left-1/2 -top-1 -translate-x-1/2" />
//         <div className="absolute w-3 h-3 max-sm:w-2 max-sm:h-2 bg-green-200 shadow-[0_0_10px_rgba(209,250,229,0.5)] rounded-full top-1/2 right-0 -translate-y-1/2 translate-x-1/2" />
//         <div className="absolute w-3 h-3 max-sm:w-2 max-sm:h-2 bg-green-200 shadow-[0_0_10px_rgba(209,250,229,0.5)] rounded-full left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2" />
//         {/* <div className="absolute w-3 h-3 max-sm:w-2 max-sm:h-2 bg-green-200 shadow-[0_0_10px_rgba(209,250,229,0.5)] rounded-full left-0 top-1/3 -translate-x-1/2" /> */}
//       </div>

//       {/* Text Content */}
//       <div className="relative z-10 text-center max-w-[800px]">
//         <h3 className="text-green-700 text-lg font-medium mb-2">Services</h3>
//         <div className="mb-6">
//           <h2 className="text-black text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-bold mb-2">Where   <span className="text-green-600 text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-bold">technology</span>  </h2>

//           <h2 className="text-black text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-bold mb-2">meets opportunity</h2>

//         </div>
//         <p className="text-gray-600 text-lg max-sm:text-base leading-7 mx-auto mt-4 max-w-[600px] px-4">
//         Our mission is to bridge the gap between complexity and efficiency, ensuring every organization can thrive in a digital-first world.
//         </p>
//       </div>
//       <div className="relative flex flex-col sm:flex-row items-center mt-6">
//       <Button 
//               asChild
//               variant="default"
//               className="bg-gradient-to-b from-green-600 to-green-700 text-white rounded-full  px-6 py-4 md:px-8 md:py-5"
//             >
//               <Link href="#">Contact Us</Link>
//             </Button>
//       </div>

//     </section>
//   );
// };

// export default Contactherosection;





"use client";
import React from "react";
import Title from "@/Components/ui/title";

const Herosection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-green-100/80 px-5 py-10 text-center">
      {/* Circle Background */}
      {/* <div className="absolute w-[640px] h-[640px] max-lg:w-[500px] max-lg:h-[500px] max-md:w-[400px] max-md:h-[400px] max-sm:w-[350px] max-sm:h-[350px] rounded-full border border-gray-300 flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Middle Circle */}
      {/* <div className="absolute w-[500px] h-[500px] max-lg:w-[430px] max-lg:h-[430px] max-md:w-[360px] max-md:h-[360px] max-sm:w-[250px] max-sm:h-[250px] rounded-full border border-gray-300" /> */}
      {/* Inner Circle */}
      {/* <div className="absolute w-[350px] h-[350px] max-lg:w-[300px] max-lg:h-[300px] max-md:w-[250px] max-md:h-[250px] max-sm:w-[170px] max-sm:h-[170px] rounded-full border border-gray-300" /> */}

      {/* Small Circles */}
      {/* <div className="absolute w-3 h-3 max-sm:w-2 max-sm:h-2 bg-green-200 shadow-[0_0_10px_rgba(209,250,229,0.5)] rounded-full left-1/2 -top-1 -translate-x-1/2" />
        <div className="absolute w-3 h-3 max-sm:w-2 max-sm:h-2 bg-green-200 shadow-[0_0_10px_rgba(209,250,229,0.5)] rounded-full top-1/2 right-0 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute w-3 h-3 max-sm:w-2 max-sm:h-2 bg-green-200 shadow-[0_0_10px_rgba(209,250,229,0.5)] rounded-full left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2" /> */}
      {/* <div className="absolute w-3 h-3 max-sm:w-2 max-sm:h-2 bg-green-200 shadow-[0_0_10px_rgba(209,250,229,0.5)] rounded-full left-0 top-1/3 -translate-x-1/2" /> */}
      {/* </div> */}

      {/* Text Content */}
      <div className="relative z-10 text-center space-y-5">
        <Title text="Contact Us" />
          <h2 className="mb-10 text-black md:text-5xl lg:text-7xl text-3xl font-bold ">Build your <span className="bg-gradient-to-b from-green-800  to-green-500 bg-clip-text text-transparent">future  </span>with us  </h2>
          <p className="text-gray-600 text-xl  max-sm:text-base max-w-3xl leading-7 mx-auto px-4">
            Join a team of talented individuals who are passionate about innovation,collaboration, and making a real impact.
          </p>
      </div> 


    </section>
  );
};

export default Herosection;



