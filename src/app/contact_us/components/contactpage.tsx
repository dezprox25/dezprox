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
import React, { useRef, useState } from 'react';
import Title from '@/Components/ui/title';
import { TextGenerateEffect } from '@/Components/ui/text-generate-effect';

const ContactPage = () => {
  // State for each field
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [Newsletter] = useState('No'); // or "Yes" if you want to default-subscribe
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [, setIsSubmitted] = useState(false);
  const [thankYouVisible, setThankYouVisible] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "4978278f-e316-4f6e-bfdc-8f9fe048446e");
    formData.append("Newsletter", Newsletter);
    formData.append("email", email);

    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setResult("Form Submitted Successfully");
        alert("form subbted successfully")
        setThankYouVisible(true);
        if (formRef.current) {
          formRef.current.reset();
        }
        setEmail(""); // Clear the email state
        setTimeout(() => {
          setIsSubmitted(false);
          setThankYouVisible(false);
        }, 2000);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult(`Error in submitting form, please try again. ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12">
        <Title text="Let's Connect" />
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
            <a href="mailto:info@dezprox.com">
              <p className="text-black underline font-medium">info@dezprox.com</p>
            </a>
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
            <a href="tel:8072818574" className="text-black underline font-medium">Book a call</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg px-6  space-y-2 pb-4">
          <div className="mx-auto text-center flex justify-center">
            {/* SVG here */}
          </div>
          <h2 className="text-2xl font-semibold text-center text-black mb-4">We&apos;d love to help! Let us know how</h2>
          <form ref={formRef} onSubmit={onSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 bg-green-50/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 bg-green-50/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Johndoe123@gmail.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 bg-green-50/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="1122334455"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">How may we assist you?</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-green-50/50 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Give us more info..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Your Message"}
              </button>
              {result && <div className="text-center text-green-700 mt-2">{result}</div>}
              {thankYouVisible && <div className="text-center text-green-700 mt-2">Thank you for contacting us!</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;