import React from "react";
import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
import Title from "@/Components/ui/title";
const Openroles = () => {
  // Engineering jobs data
  const engineeringJobs = [
    {
      title: "Senior Backend Engineer",
      location: "Remote",
      type: "Full-Time",
    },
    {
      title: "Data Engineer",
      location: "London",
      type: "Contract",
    },
    {
      title: "Mobile Engineer",
      location: "New York",
      type: "Part-Time",
    },
  ];

  // Design jobs data
  const designJobs = [
    {
      title: "Principal Product Designer",
      location: "California",
      type: "Internship",
    },
    {
      title: "Product Designer",
      location: "Cupertino",
      type: "Part-Time",
    },
    {
      title: "Mobile Designer",
      location: "London",
      type: "Full-Time",
    },
  ];

  // Arrow Icon Component (inline)
  const ArrowIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-icon"
    >
      <g clipPath="url(#clip0_arrow)">
        <path
          d="M6.02051 3.99011L10.0205 7.99011L6.02051 11.9901"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_arrow">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.0205078 -0.0098877)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  interface Job {
    title: string;
    location: string;
    type: string;
  }
  
  // Job Listing Component (inline)
  const JobListing = ({ title, location, type }: Job) => (
    <div className="grid grid-cols-[380px_380px_380px_60px] h-[65px] items-center border-t-[#E6E6EB] border-t border-solid max-md:grid-cols-[1fr_1fr_1fr_60px] max-sm:grid-cols-[1fr] max-sm:h-auto max-sm:px-0 max-sm:py-5">
      <div className="text-[#020A0F] text-sm font-normal px-5 py-6 max-sm:text-left max-sm:px-0 max-sm:py-[5px]">
        {title}
      </div>
      <div className="text-[#50565D] text-sm font-normal text-center px-5 py-6 max-sm:text-left max-sm:px-0 max-sm:py-[5px]">
        {location}
      </div>
      <div className="text-[#50565D] text-sm font-normal text-center px-5 py-6 max-sm:text-left max-sm:px-0 max-sm:py-[5px]">
        {type}
      </div>
      <div className="px-5 py-6 max-sm:text-left max-sm:px-0 max-sm:py-[5px]">
        <a
          href="#"
          className="flex items-center text-[#020A0F] text-sm font-semibold no-underline gap-1 max-sm:mt-2.5"
        >
          <span>Apply</span>
          <div>
            <ArrowIcon />
          </div>
        </a>
      </div>
    </div>
  );
  interface JobCategory {
    title: string;
    jobs: Job[];
  }
  // Job Category Component (inline)
  const JobCategory = ({ title, jobs }: JobCategory) => (
    <div className="mb-[65px]">
      <div className="text-[#020A0F] text-sm font-semibold mb-[33px]">
        {title}
      </div>
      {jobs.map((job, index) => (
        <JobListing
          key={index}
          title={job.title}
          location={job.location}
          type={job.type}
        />
      ))}
    </div>
  );

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Main content */}
      <main className="max-w-[1200px] bg-white mx-auto my-0 px-0 py-[100px] max-md:px-5 max-md:py-[60px] max-sm:px-5 max-sm:py-10">
        {/* Header section */}
        <div className="text-center mb-20 max-md:mb-[60px] max-sm:mb-10">
          <div className="mb-10">
            {/* <div className="text-[#2D6E16] text-[25px] font-semibold mb-4">
              Careers
            </div> */}
            <Title text="Careers" />
            {/* <h1 className="text-[#020A0F] md:text-5xl text-2xl font-semibold leading-none max-md:text-6xl max-sm:text-[40px]">
            OpenRoles
            </h1> */}
            <TextGenerateEffect words="Open Roles"  className="text-[#020A0F] md:text-5xl text-2xl font-semibold leading-none max-md:text-6xl max-sm:text-[40px]"/>
          </div>
          <div className="text-[#50565D] text-xl font-normal leading-[38px] max-w-[821px] mx-auto my-0 max-md:text-2xl max-md:leading-8 max-sm:text-xl max-sm:leading-7">
            Whether you&apos;re a creative thinker, a tech enthusiast, or a strategic
            problem-solver, there&apos;s a place for you here.
          </div>
        </div>

        {/* Job listings section */}
        <section className="max-w-[1200px] mx-auto my-0">
          {/* Engineering category */}
          <JobCategory title="Engineering" jobs={engineeringJobs} />

          {/* Divider */}
          {/* <div className="w-full h-px bg-[#E6E6EB] mx-0 my-[65px]" /> */}

          {/* Design category */}
          <JobCategory title="Design" jobs={designJobs} />

          {/* Final divider */}
          {/* <div className="w-full h-px bg-[#E6E6EB] mx-0 my-[65px]" /> */}
        </section>
      </main>
    </>
  );
};

export default Openroles;