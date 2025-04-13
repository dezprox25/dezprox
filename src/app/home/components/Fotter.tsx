"use client";
import React from "react";

const FooterSection = () => {
  return (
    <div>
    <footer className="bg-neutral-950 flex flex-col items-center px-6 py-16 text-white">
  
      <div className="w-full max-w-6xl flex flex-wrap justify-between gap-8">
        {[
          {
            title: "Company",
            links: ["Home", "About us", "Services", "Products", "Careers", "Contact us"],
          },
          {
            title: "Services",
            links: ["Web Development", "UI/UX & Graphic Design", "Digital Marketing", "Content Creation", "App Development"],
          },
          {
            title: "Products",
            links: ["School ERP", "College ERP", "Hospital Management", "Work Management"],
          },
          {
            title: "Careers",
            links: ["Internships", "Part-time", "Full-time"],
          },
          {
            title: "Support",
            links: ["Terms of Service", "Refund Policy", "Privacy Policy"],
          },
        ].map((section, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
            <h2 className="text-xl font-medium mb-4">{section.title}</h2>
            <nav className="flex flex-col gap-2">
              {section.links.map((link, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-white transition duration-200">
                  {link}
                </a>
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

      <div className="text-gray-300 text-lg font-medium text-center">
        © 2025 Dezprox - Service and Products
      </div>
    </footer>
    </div>
  );
};

export default FooterSection;