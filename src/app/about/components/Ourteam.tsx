// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
// import Image from "next/image";

// const OurTeam = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       imageUrl: "/assets/Robot2.png",
//       quote: "The Meat Lover’s Feast is everything a carnivore dreams of.",
//       name: "Mohan Kumar",
//       position: "Founder & CEO",
//     },
//     {
//       id: 2,
//       imageUrl: "/team2.png",
//       quote: "Simplicity, when done right, is unforgettable.",
//       name: "Bharanidharan N R",
//       position: "Senior UI/UX Designer",
//     },
//     {
//       id: 3,
//       imageUrl: "/team3.png",
//       quote: "This is a pizza that tells a story in every bite.",
//       name: "Agnel Joshua Raj",
//       position: "Senior Product Designer",
//     },
//     {
//       id: 4,
//       imageUrl: "/team4.png",
//       quote: "BBQ Blaze redefines fast-casual flavors.",
//       name: "Emma Gallagher",
//       position: "Food Writer, London Eats",
//     },
//     {
//       id: 5,
//       imageUrl: "/team5.png",
//       quote: "Creative and bold — love in every slice!",
//       name: "Liam Robertson",
//       position: "Pizza Critic",
//     },
//     {
//       id: 6,
//       imageUrl: "/team6.png",
//       quote: "Passion shows in every slice.",
//       name: "Sophia Bennett",
//       position: "FoodSpot Reviewer",
//     },
//     {
//       id: 7,
//       imageUrl: "/team7.png",
//       quote: "Innovation meets taste — every time.",
//       name: "Noah Williams",
//       position: "Culinary Blogger",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const carouselRef = useRef(null);

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
//   };

//   useEffect(() => {
//     if (carouselRef.current) {
//       const cardWidth = carouselRef.current?.querySelector("div")?.offsetWidth || 0;
//       const gap = 20;
//       carouselRef.current?.scrollTo({
//         left: (cardWidth + gap) * activeIndex,
//         behavior: "smooth",
//       });
//     }
//   }, [activeIndex]);

//   const TeamMemberCard = ({ imageUrl, quote, name, position, isActive }) => (
//     <div
//       className={`w-[320px] h-[480px] shrink-0 relative rounded-2xl overflow-hidden bg-[linear-gradient(to_bottom,_#ffffff,_#b3b3b3)] text-white p-4 transition-opacity duration-300 ${
//         isActive ? "opacity-100" : "opacity-100"
//       }`}
//     >
//       <Image
//       width={500}
//         height={500}
//         src={imageUrl}
//         alt={name}
//         className="w-full h-2/3 object-cover rounded-xl mb-4"
//       />
//       <blockquote className="italic text-sm mb-3 text-white">{quote}</blockquote>
//       <h3 className="font-semibold text-lg">{name}</h3>
//       {position && <p className="text-sm text-white">{position}</p>}
//     </div>
//   );

//   const CarouselButton = ({ direction, onClick }) => (
//     <button
//       onClick={onClick}
//       className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center text-white"
//     >
//       {direction === "prev" ? (
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//           <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" />
//         </svg>
//       ) : (
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//           <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" />
//         </svg>
//       )}
//     </button>
//   );

//   return (
//     <section className="bg-gray-900 py-20 px-5 min-h-screen text-center">
//       <div className="mb-12">
//         {/* <h2 className="text-white text-4xl font-bold mb-4">Meet Our Team</h2> */}
//         <TextGenerateEffect words="Meet Our Team" className="text-white text-4xl font-bold mb-4"/>
//         <p className="text-gray-300 max-w-xl mx-auto">
//           Our team of innovators, designers, and strategists collaborate to craft digital experiences.
//         </p>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         <div
//           ref={carouselRef}
//           className="flex gap-5 overflow-x-auto scroll-smooth hide-scrollbar px-4"
//         >
//           {teamMembers.map((member, index) => (
//             <TeamMemberCard
//               key={member.id}
//               imageUrl={member.imageUrl}
//               quote={member.quote}
//               name={member.name}
//               position={member.position}
//               isActive={index === activeIndex}
//             />
//           ))}
//         </div>

//         {/* Arrows */}
//         <div className="absolute top-1/2 left-0 right-0 flex justify-between px-6 -translate-y-1/2 pointer-events-none">
//           <div className="pointer-events-auto">
//             <CarouselButton direction="prev" onClick={handlePrev} />
//           </div>
//           <div className="pointer-events-auto">
//             <CarouselButton direction="next" onClick={handleNext} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurTeam;





"use client";
import React, { useState, useRef, useEffect } from "react";
import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
import Image from "next/image";

interface TeamMember {
  id: number;
  imageUrl: string;
  name: string;
}

interface TeamMemberCardProps {
  imageUrl: string;
  name: string;
  isActive: boolean;
}

interface CarouselButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imageUrl, name, isActive }) => (
  <div
    className={`w-[320px] h-[480px] shrink-0 relative rounded-2xl overflow-hidden bg-[linear-gradient(to_bottom,_#ffffff,_#b3b3b3)] text-white  transition-opacity duration-300 scrollbar-none team-member-card ${isActive ? "opacity-100" : "opacity-100"
      }`}
  >
    <Image
      width={500}
      height={500}
      src={imageUrl}
      alt={name}
      className="w-full h-[480px] object-cover rounded-xl"
    />
    {/* <blockquote className="italic text-sm mb-3 text-white">{quote}</blockquote> */}
    <h3 className="text-2xl relative -top-20 w-full h-20 bg-gradient-to-b from-black/10 pt-5 font-bold  via-black to-gray-900 ">{name}</h3>
    {/* {position && <p className="text-sm text-white">{position}</p>} */}
  </div>
);

const CarouselButton: React.FC<CarouselButtonProps> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center text-white"
  >
    {direction === "prev" ? (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" />
      </svg>
    ) : (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" />
      </svg>
    )}
  </button>
);

const OurTeam: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744419982/Bharanidharan_N_R_qtxjny.jpg",
      name: "Bharanidharan N R",
    },
    {
      id: 2,
      imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744421479/MKM_ij2vkp.jpg",
      name: "Mohan Kumar",
    },
    {
      id: 3,
      imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744421114/Agnel_sjolku.jpg",
      name: "Agnel David",
    },
    {
      id: 4,
      imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744419976/Dinesh_wztiy5.jpg",
      name: "Dinesh Siva",
    },
    {
      id: 5,
      imageUrl: "https://res.cloudinary.com/do7dw5dwq/image/upload/v1744419976/Elanchezhiyan_Mahendiran_x4bvu5.jpg",
      name: "Elanchezhiyan Mahendiran",
    }
  ];


  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current?.querySelector("div")?.offsetWidth || 0;
      const gap = 20;
      carouselRef.current?.scrollTo({
        left: (cardWidth + gap) * activeIndex,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);


  return (
    <section className="bg-gray-900 py-20 px-5 min-h-screen text-center">
      <div className="mb-12">
        <TextGenerateEffect words="Meet Our Founders" className="text-white text-4xl font-bold mb-4" />
        <p className="text-gray-300 max-w-xl mx-auto">
          Our team of innovators, designers, and strategists collaborate to craft digital experiences.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
         
          }}
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto scroll-smooth hide-scrollbar px-4"
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              imageUrl={member.imageUrl}
              name={member.name}
              isActive={index === activeIndex}
            />
          ))}
        </div>

        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-6 -translate-y-1/2 pointer-events-none">
          <div className="pointer-events-auto">
            <CarouselButton direction="prev" onClick={handlePrev} />
          </div>
          <div className="pointer-events-auto">
            <CarouselButton direction="next" onClick={handleNext} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;