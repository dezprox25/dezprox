// "use client";
// import React, { useState } from 'react';
// import { TextGenerateEffect } from '@/Components/ui/text-generate-effect';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Add form submission logic here
//     console.log(formData);
//   };

//   return (
//     <div className="container mx-auto px-4 py-16 max-w-6xl">
//       <div className="text-center mb-12">
//         <p className="text-green-600 mb-4  text-lg font-medium">Let&apos;s Connect</p>
//         {/* <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Let's Build Together</h1> */}
//         <TextGenerateEffect words="Let's Build Together" className="text-4xl md:text-5xl font-bold text-black mb-4"/>
//         <p className="text-gray-600 max-w-2xl md:text-xl mx-auto">
//           We&apos;re here to collaborate, create, and deliver top-notch digital 
//           solutions tailored to your needs.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Contact Options */}
//         <div className="space-y-6">
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <div className="flex items-center mb-4">
//               <div className=" bg-gray-50 shadow-lg p-3 rounded-lg mr-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-black">Email Us</h3>
//                 <p className="text-gray-600">Facing technical challenges or product concerns? We&apos;re here to assist</p>
//               </div>
//             </div>
//             <p className="text-black underline font-medium">alter@support.com</p>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <div className="flex items-center mb-4">
//               <div className=" bg-gray-50 shadow-lg p-3 rounded-lg mr-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-black">Contact Sales</h3>
//                 <p className="text-gray-600">Let&apos;s collaborate on custom solutions or discuss product insights</p>
//               </div>
//             </div>
//             <a href="#" className="text-black underline font-medium">Book a call</a>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="bg-white shadow-md rounded-lg px-6 py-8">

//         <div className=" bg-gray-50 mx-auto shadow-lg p-2 rounded-lg w-12 mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </div>
//           <h2 className="text-2xl font-semibold text-center text-black mb-6">We&apos;re love to help! Let us know how</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-gray-700 mb-2" htmlFor="fullName">Full Name</label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 bg-green-50/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                   placeholder="Bharani"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 bg-green-50/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                   placeholder="bharani2002@gmail.com"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">Phone Number</label>
//                 <input
//                   type="tel"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 bg-green-50/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                   placeholder="9996669966"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-2" htmlFor="message">How may we assist you?</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={4}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-green-50/50 focus:outline-none focus:ring-2 focus:ring-green-500"
//                   placeholder="Give us more info..."
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
//               >
//                 Send Your Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;


"use client";
import React, { useState } from 'react';
import  Title  from '@/Components/ui/title';
import { TextGenerateEffect } from '@/Components/ui/text-generate-effect';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12">
        {/* <p className="bg-gradient-to-b from-green-700  to-green-500 bg-clip-text text-transparent font-semibold lg:text-2xl text-xl mb-6">Let&apos;s Connect</p> */}
        <Title text="Let's Connect"/>
        {/* <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Let's Build Together</h1> */}
        <TextGenerateEffect words="Let's Build Together" className="text-4xl md:text-5xl font-bold text-black mb-4" />
        <p className="text-gray-600 max-w-2xl md:text-xl mx-auto">
          We&apos;re here to collaborate, create, and deliver top-notch digital
          solutions tailored to your needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Options */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className=" bg-gray-50 shadow-lg p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black">Email Us</h3>
                <p className="text-gray-600">Facing technical challenges or product concerns? We&apos;re here to assist</p>
              </div>
            </div>
            <p className="text-black underline font-medium">alter@support.com</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className=" bg-gray-50 shadow-lg p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black">Contact Sales</h3>
                <p className="text-gray-600">Let&apos;s collaborate on custom solutions or discuss product insights</p>
              </div>
            </div>
            <a href="#" className="text-black underline font-medium">Book a call</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg px-6  space-y-2 pb-4">

          <div className="mx-auto text-center flex justify-center">
            <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_dddd_275_4457)">
                <rect x="33" y="13" width="48" height="48" rx="8" fill="#F6FBFF" />
                <path opacity="0.2" d="M51 39V44C51 44.5304 50.7893 45.0391 50.4142 45.4142C50.0391 45.7893 49.5304 46 49 46H47C46.4696 46 45.9609 45.7893 45.5858 45.4142C45.2107 45.0391 45 44.5304 45 44V37H49C49.5304 37 50.0391 37.2107 50.4142 37.5858C50.7893 37.9609 51 38.4696 51 39ZM65 37C64.4696 37 63.9609 37.2107 63.5858 37.5858C63.2107 37.9609 63 38.4696 63 39V44C63 44.5304 63.2107 45.0391 63.5858 45.4142C63.9609 45.7893 64.4696 46 65 46H69V37H65Z" fill="url(#paint0_linear_275_4457)" />
                <path d="M66.2362 27.8325C64.4201 26.0058 62.1026 24.7593 59.5773 24.2509C57.052 23.7426 54.4327 23.9954 52.0512 24.9772C49.6697 25.9591 47.6333 27.6258 46.2 29.7661C44.7667 31.9064 44.001 34.4241 44 37V44C44 44.7957 44.3161 45.5587 44.8787 46.1214C45.4413 46.684 46.2044 47 47 47H49C49.7956 47 50.5587 46.684 51.1213 46.1214C51.6839 45.5587 52 44.7957 52 44V39C52 38.2044 51.6839 37.4413 51.1213 36.8787C50.5587 36.3161 49.7956 36 49 36H46.045C46.2379 33.915 47.021 31.928 48.3028 30.2722C49.5845 28.6163 51.3117 27.3601 53.2819 26.6507C55.2521 25.9414 57.3836 25.8084 59.4267 26.2672C61.4698 26.726 63.3398 27.7577 64.8175 29.2413C66.6236 31.0567 67.7345 33.4489 67.9562 36H65C64.2044 36 63.4413 36.3161 62.8787 36.8787C62.3161 37.4413 62 38.2044 62 39V44C62 44.7957 62.3161 45.5587 62.8787 46.1214C63.4413 46.684 64.2044 47 65 47H68C68 47.7957 67.6839 48.5587 67.1213 49.1214C66.5587 49.684 65.7956 50 65 50H58C57.7348 50 57.4804 50.1054 57.2929 50.2929C57.1054 50.4805 57 50.7348 57 51C57 51.2653 57.1054 51.5196 57.2929 51.7071C57.4804 51.8947 57.7348 52 58 52H65C66.3261 52 67.5979 51.4732 68.5355 50.5356C69.4732 49.5979 70 48.3261 70 47V37C70.0065 35.2995 69.6774 33.6144 69.0316 32.0413C68.3857 30.4681 67.4358 29.0379 66.2362 27.8325ZM49 38C49.2652 38 49.5196 38.1054 49.7071 38.2929C49.8946 38.4805 50 38.7348 50 39V44C50 44.2653 49.8946 44.5196 49.7071 44.7071C49.5196 44.8947 49.2652 45 49 45H47C46.7348 45 46.4804 44.8947 46.2929 44.7071C46.1054 44.5196 46 44.2653 46 44V38H49ZM65 45C64.7348 45 64.4804 44.8947 64.2929 44.7071C64.1054 44.5196 64 44.2653 64 44V39C64 38.7348 64.1054 38.4805 64.2929 38.2929C64.4804 38.1054 64.7348 38 65 38H68V45H65Z" fill="url(#paint1_linear_275_4457)" />
              </g>
              <defs>
                <filter id="filter0_dddd_275_4457" x="0.5" y="0.5" width="113" height="113" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feMorphology radius="3.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_275_4457" />
                  <feOffset dy="20" />
                  <feGaussianBlur stdDeviation="18" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.192157 0 0 0 0 0.301961 0 0 0 0.09 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_4457" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feMorphology radius="2.625" operator="erode" in="SourceAlpha" result="effect2_dropShadow_275_4457" />
                  <feOffset dy="6.38265" />
                  <feGaussianBlur stdDeviation="5.7444" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.192157 0 0 0 0 0.301961 0 0 0 0.173 0" />
                  <feBlend mode="normal" in2="effect1_dropShadow_275_4457" result="effect2_dropShadow_275_4457" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feMorphology radius="1.75" operator="erode" in="SourceAlpha" result="effect3_dropShadow_275_4457" />
                  <feOffset dy="2.41451" />
                  <feGaussianBlur stdDeviation="2.17305" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.192157 0 0 0 0 0.301961 0 0 0 0.196 0" />
                  <feBlend mode="normal" in2="effect2_dropShadow_275_4457" result="effect3_dropShadow_275_4457" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feMorphology radius="0.875" operator="erode" in="SourceAlpha" result="effect4_dropShadow_275_4457" />
                  <feOffset dy="0.796192" />
                  <feGaussianBlur stdDeviation="0.716575" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.192157 0 0 0 0 0.301961 0 0 0 0.21 0" />
                  <feBlend mode="normal" in2="effect3_dropShadow_275_4457" result="effect4_dropShadow_275_4457" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_275_4457" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_275_4457" x1="57" y1="37" x2="57" y2="46" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#227631" />
                  <stop offset="1" stopColor="#3FA740" />
                </linearGradient>
                <linearGradient id="paint1_linear_275_4457" x1="57" y1="23.9951" x2="57" y2="52" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#227631" />
                  <stop offset="1" stopColor="#3FA740" />
                </linearGradient>
              </defs>
            </svg>

          </div>
          <h2 className="text-2xl font-semibold text-center text-black mb-4">We&apos;d love to help! Let us know how</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 bg-green-50/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 bg-green-50/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Johndoe123@gmail.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 bg-green-50/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="1122334455"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">How may we assist you?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-green-50/50 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Give us more info..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Send Your Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;