// "use client";
// import React from "react";
// import Link from 'next/link';
// import { cn } from '@/lib/utils';
// import { usePathname } from 'next/navigation';



// const FooterSection = () => {
//   const path = usePathname();

//   return (
//     <div>
//       <footer className="bg-neutral-950 flex flex-col items-center px-6 py-16 text-white">

//         <div className="w-full flex max-w-6xl  flex-wrap justify-between gap-8">
//           {[
//             {
//               title: "Company",
//               links: [
//                 "Home",
//                 "About us",
//                 "Services",
//                 "Products",
//                 "Careers",
//                 "Contact us"
//               ],
//             },
//             {
//               title: "Services",
//               links: ["Web Development",
//                 "UI/UX & Graphic Design",
//                 "Digital Marketing",
//                 "Content Creation",
//                 "App Development"],
//             },
//             {
//               title: "Products",
//               links: ["School ERP",
//                 "College ERP",
//                 "Hospital Management",
//                 "Work Management"],
//             },
//             {
//               title: "Careers",
//               links: ["Internships", "Part-time", "Full-time"],
//             },
//             {
//               title: "Support",
//               links: ["Terms of Service", "Refund Policy", "Privacy Policy"],
//             },
//           ].map((section, index) => (
//             <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
//               <h2 className="text-xl font-medium mb-4">{section.title}</h2>
//               <nav className="flex flex-col gap-2">
//                 {section.links.map((link, i) => (
//                   <a key={i} href={link} className="text-gray-400 hover:text-white transition duration-200">
//                     {link}
//                   </a>
//                 ))}
//               </nav>
//             </div>
//           ))}


//           {/* =========================================== */}



//           {/* Contact Section */}
//           <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
//             <h2 className="text-xl font-medium mb-4">Contact us</h2>
//             <div className="flex flex-col gap-4">
//               <div>
//                 <p className="text-gray-400">Call us directly</p>
//                 <a href="tel:+917358300110" className="text-white text-lg font-medium">
//                   +91 73583 00110
//                 </a>
//               </div>
//               <div>
//                 <p className="text-gray-400">Email us directly</p>
//                 <a href="mailto:info@dezprox.com" className="text-green-400 text-lg font-medium">
//                   info@dezprox.com
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>


      

//         <div className="w-full h-px bg-gray-600 my-8" />

//         <div className="text-gray-300 text-lg font-medium text-center">
//           © 2025 Dezprox - Service and Products
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FooterSection;


'use client'
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const FooterSection = () => {
  const path = usePathname();

  return (
    <div>
      <footer className="bg-neutral-950 flex flex-col items-center px-6 py-16 text-white">
        <div className="w-full flex max-w-6xl flex-wrap justify-between gap-8">
          {[
            {
              title: "Company",
              links: [
                { name: "Home", link: "/" },
                { name: "About us", link: "/about" },
                { name: "Services", link: "/services" },
                { name: "Products", link: "/products" },
                { name: "Careers", link: "/careers" },
                { name: "Contact us", link: "/contact" }
              ],
            },
            {
              title: "Services",
              links: [
                { name: "Web Development", link: "/services" },
                { name: "UI/UX & Graphic Design", link: "/services" },
                { name: "Digital Marketing", link: "/services" },
                { name: "Content Creation", link: "/services" },
                { name: "App Development", link: "/services" }
              ],
            },
            {
              title: "Products",
              links: [
                { name: "School ERP", link: "/products/school-erp" },
                { name: "College ERP", link: "/products/college-erp" },
                { name: "Hospital Management", link: "/products/hospital" },
                { name: "Work Management", link: "/products/work-management" }
              ],
            },
            {
              title: "Careers",
              links: [
                { name: "Internships", link: "/careers/internships" },
                { name: "Part-time", link: "/careers/part-time" },
                { name: "Full-time", link: "/careers/full-time" }
              ],
            },
            {
              title: "Support",
              links: [
                { name: "Terms of Service", link: "/support/terms" },
                { name: "Refund Policy", link: "/support/refund" },
                { name: "Privacy Policy", link: "/support/privacy" }
              ],
            },
          ].map((section, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
              <h2 className="text-xl font-medium mb-4">{section.title}</h2>
              <nav className="flex flex-col gap-2">
                {section.links.map((linkObj) => (
                  <Link
                    key={linkObj.link}
                    href={linkObj.link}
                    className={cn(
                      'text-gray-400 hover:text-white transition duration-200',
                      path === linkObj.link 
                    )}
                  >
                    {linkObj.name}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          {/* Contact Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
            <h2 className="text-xl font-medium mb-4">Contact us</h2>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-gray-400">Call us directly</p>
                <a href="tel:+917358300110" className="text-white text-lg font-medium">
                  +91 73583 00110
                </a>
              </div>
              <div>
                <p className="text-gray-400">Email us directly</p>
                <a href="mailto:info@dezprox.com" className="text-green-400 text-lg font-medium">
                  info@dezprox.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-600 my-8" />

        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Dezprox. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="[https://facebook.com](https://facebook.com)" target="_blank" rel="noopener noreferrer">
              <span className="text-gray-400 hover:text-white">Facebook</span>
            </a>
            <a href="[https://instagram.com](https://instagram.com)" target="_blank" rel="noopener noreferrer">
              <span className="text-gray-400 hover:text-white">Instagram</span>
            </a>
            <a href="[https://linkedin.com](https://linkedin.com)" target="_blank" rel="noopener noreferrer">
              <span className="text-gray-400 hover:text-white">LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;