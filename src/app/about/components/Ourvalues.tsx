import React from 'react';
import Title from '@/Components/ui/title';
import { TextGenerateEffect } from '@/Components/ui/text-generate-effect';
const Ourvalues = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 mb-20  sm:px-6 lg:px-8">
      {/* Header with icon */}
      <div className="flex justify-center items-center mb-3">
        <span className="text-green-400 gap-2 font-medium text-xl flex items-center">
          <svg
            width="17"
            height="16" 
            viewBox="0 0 17 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_41_413)">
              <mask
                id="mask0_41_413"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="17"
                height="16"
              >
                <path d="M16.2 0H0.199951V16H16.2V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_41_413)">
                <path
                  d="M2.86694 5.33317V3.99984C2.86694 3.64622 3.00742 3.30708 3.25747 3.05703C3.50751 2.80698 3.84665 2.6665 4.20028 2.6665H5.53361"
                  stroke="#2D6E16"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.86694 10.6665V11.9998C2.86694 12.3535 3.00742 12.6926 3.25747 12.9426C3.50751 13.1927 3.84665 13.3332 4.20028 13.3332H5.53361"
                  stroke="#2D6E16"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8669 2.6665H12.2002C12.5538 2.6665 12.893 2.80698 13.143 3.05703C13.3931 3.30708 13.5336 3.64622 13.5336 3.99984V5.33317"
                  stroke="#2D6E16"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8669 13.3332H12.2002C12.5538 13.3332 12.893 13.1927 13.143 12.9426C13.3931 12.6926 13.5336 12.3535 13.5336 11.9998V10.6665"
                  stroke="#2D6E16"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.93536 6.40596C6.06196 6.27695 6.21301 6.17447 6.37967 6.10452C6.54634 6.03457 6.72528 5.99854 6.90603 5.99854C7.08678 5.99854 7.26571 6.03457 7.43238 6.10452C7.59904 6.17447 7.75009 6.27695 7.87669 6.40596L8.20003 6.66596L8.53336 6.40196C8.65987 6.27437 8.81047 6.17318 8.97641 6.10427C9.14235 6.03536 9.32032 6.00008 9.5 6.00052C9.67968 6.00095 9.85748 6.03708 10.0231 6.1068C10.1887 6.17651 10.3387 6.27842 10.4646 6.40662C10.7223 6.66892 10.8667 7.02192 10.8667 7.38962C10.8667 7.75732 10.7223 8.11031 10.4646 8.37261L8.20003 10.666L5.93536 8.37261C5.67747 8.11028 5.53296 7.75715 5.53296 7.38929C5.53296 7.02143 5.67747 6.66829 5.93536 6.40596Z"
                  stroke="#2D6E16"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_41_413">
                <rect width="16" height="16" fill="white" transform="translate(0.199951)" />
              </clipPath>
            </defs>
          </svg>
          <Title text="Our values" />
        </span>
      </div>

      {/* Main heading */}
      <TextGenerateEffect words="Our core values" as="h2" className="text-4xl md:text-5xl font-semibold mb-4 mx-auto text-center"/>

      {/* Subheading/description */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
        We believe in forging strong relationships with our customers, partners,
        and employees, based on trust and mutual respect.
      </p>

      {/* Values grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Collaboration */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="text-xl font-bold">Collaboration</h3>
          </div>
          <p className="text-gray-600">
            Working together to achieve shared goals and innovation.
          </p>
        </div>

        {/* Innovation */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-xl font-bold">Innovation</h3>
          </div>
          <p className="text-gray-600">
            Continuously evolving to meet challenges and opportunities.
          </p>
        </div>

        {/* Excellence */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <h3 className="text-xl font-bold">Excellence</h3>
          </div>
          <p className="text-gray-600">
            Committing to the highest standards in our products.
          </p>
        </div>

        {/* Sustainability */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold">Sustainability</h3>
          </div>
          <p className="text-gray-600">
            Focusing on long-term impact and positive change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ourvalues;