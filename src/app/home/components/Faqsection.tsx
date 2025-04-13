
// "use client";
// import React, { useState } from "react";

// const FAQItem = ({ question, answer, isOpen, onClick }) => {
//   return (
//     <div className="border-t border-b border-[rgba(230,230,235,1)] py-6">
//       <div
//         className="flex justify-between items-center cursor-pointer"
//         onClick={onClick}
//       >
//         <h4 className="text-[rgba(2,10,15,1)] text-[15px] font-medium leading-[1.4]">
//           {question}
//         </h4>
//         <div className="relative w-[11px] h-[11px]">
//           <div className="bg-[rgba(2,10,15,1)] absolute top-1/2 left-0 w-full h-0.5 rounded-[64px] transition-transform duration-300" />
//           <div 
//             className={`bg-[rgba(2,10,15,1)] absolute top-0 left-1/2 w-0.5 h-full rounded-[64px] transition-transform duration-300 origin-center ${
//               isOpen ? 'scale-y-0' : 'scale-y-100'
//             }`} 
//           />
//         </div>
//       </div>
//       <div 
//         className={`grid transition-all duration-300 ease-in-out ${
//           isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
//         }`}
//       >
//         <div className="overflow-hidden">
//           <p className="text-[rgba(80,86,93,1)] text-[15px]">{answer}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FaqSection = () => {
//   const [openIndex, setOpenIndex] = useState(0); // Set first item open by default

//   const faqs = [
//     {
//       question: "What kind of customer support do you offer?",
//       answer:
//         "We offer 24/7 customer support through live chat, email, and phone. Our dedicated support team is always ready to assist you with any questions or issues you might have.",
//     },
//     {
//       question: "How does the pricing for your web solution work?",
//       answer:
//         "Our pricing is based on a tiered subscription model. We offer monthly and annual plans with different features and capabilities. You can choose the plan that best fits your needs and budget.",
//     },
//     {
//       question: "Can I cancel my subscription at any time?",
//       answer:
//         "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You'll continue to have access to the service until the end of your billing period.",
//     },
//     {
//       question: "Can I upgrade or downgrade my subscription plan?",
//       answer:
//         "Absolutely! You can upgrade or downgrade your subscription plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate will apply at the start of your next billing cycle.",
//     },
//   ];

//   return (
//     <section className="flex flex-col min-h-screen items-center py-20 px-4">
//       <div className="text-center">
//         <h3 className="text-green-600 font-medium text-lg mb-3">FAQ</h3>
//       </div>
//       <h2 className="text-[rgba(2,10,15,1)] text-5xl font-semibold leading-[1.2] text-center max-md:text-[40px]">
//         In Case You <br /> Missed anything?
//       </h2>
//       <p className="text-[rgba(80,86,93,1)] text-[17px] font-normal leading-[1.4] text-center mt-4 mb-8">
//         We've Got Answers!
//       </p>
//       <a
//         href="#"
//         className="bg-gradient-to-b from-gray-800 to-gray-900 text-lg text-white font-normal px-[38px] py-4 rounded-[50px] mb-12 transition-transform hover:scale-105 duration-300"
//       >
//         Contact us
//       </a>
//       <div className="w-full max-w-[668px]">
//         {faqs.map((faq, index) => (
//           <FAQItem
//             key={index}
//             question={faq.question}
//             answer={faq.answer}
//             isOpen={openIndex === index}
//             onClick={() => setOpenIndex(openIndex === index ? null : index)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FaqSection;


"use client";
import React, { useState } from "react";
import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
import Title from "@/Components/ui/title";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

interface FAQ {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-t border-b border-[rgba(230,230,235,1)] py-6">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <h4 className="text-[rgba(2,10,15,1)] text-[15px] font-medium leading-[1.4]">
          {question}
        </h4>
        <div className="relative w-[11px] h-[11px]">
          <div className="bg-[rgba(2,10,15,1)] absolute top-1/2 left-0 w-full h-0.5 rounded-[64px] transition-transform duration-300" />
          <div 
            className={`bg-[rgba(2,10,15,1)] absolute top-0 left-1/2 w-0.5 h-full rounded-[64px] transition-transform duration-300 origin-center ${
              isOpen ? 'scale-y-0' : 'scale-y-100'
            }`} 
          />
        </div>
      </div>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[rgba(80,86,93,1)] text-[15px]">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      question: "What kind of customer support do you offer?",
      answer:
        "We offer 24/7 customer support through live chat, email, and phone. Our dedicated support team is always ready to assist you with any questions or issues you might have.",
    },
    {
      question: "How does the pricing for your web solution work?",
      answer:
        "Our pricing is based on a tiered subscription model. We offer monthly and annual plans with different features and capabilities. You can choose the plan that best fits your needs and budget.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You'll continue to have access to the service until the end of your billing period.",
    },
    {
      question: "Can I upgrade or downgrade my subscription plan?",
      answer:
        "Absolutely! You can upgrade or downgrade your subscription plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate will apply at the start of your next billing cycle.",
    },
  ];

  return (
    <section className="flex flex-col min-h-screen items-center py-20 px-4">
      <div className="text-center">
        <Title text="FAQ" />
      </div>
      <TextGenerateEffect words="In Case You Missed anything?" className="text-[rgba(2,10,15,1)] text-5xl font-semibold leading-[1.2] text-center max-md:text-[40px]"  />
      <p className="text-[rgba(80,86,93,1)] text-[17px] font-normal leading-[1.4] text-center mt-4 mb-8">
        We&apos;ve Got Answers!
      </p>
      {/* <a
        href="#"
        className="bg-gradient-to-b from-gray-800 to-gray-900 text-lg text-white font-normal px-[38px] py-4 rounded-[50px] mb-12 transition-transform hover:scale-105 duration-300"
      >
        Contact us
      </a> */}
      <div className="w-full max-w-[668px]">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;