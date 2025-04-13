// "use client";
// import { useEffect } from "react";
// import { motion, stagger, useAnimate } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const TextGenerateEffect = ({
//   words,
//   className,
//   filter = true,
//   duration = 0.5,
// }: {
//   words: string;
//   className?: string;
//   filter?: boolean;
//   duration?: number;
// }) => {
//   const [scope, animate] = useAnimate();
//   const wordsArray = words.split(" ");
//   useEffect(() => {
//     animate(
//       "span",
//       {
//         opacity: 1,
//         filter: filter ? "blur(0px)" : "none",
//       },
//       {
//         duration: duration ? duration : 1,
//         delay: stagger(0.2),
//       }
//     );
//   }, [scope.current]);

//   const renderWords = () => {
//     return (
//       <motion.div ref={scope}>
//         {wordsArray.map((word, idx) => {
//           return (
//             <motion.span
//               key={word + idx}
//               className="dark:text-white text-black opacity-0"
//               style={{
//                 filter: filter ? "blur(10px)" : "none",
//               }}
//             >
//               {word}{" "}
//             </motion.span>
//           );
//         })}
//       </motion.div>
//     );
//   };

//   return (
//     <div className={cn("font-bold", className)}>
//       <div className="mt-4">
//         <div className=" dark:text-white text-black  leading-snug tracking-wide">
//           {renderWords()}
//         </div>
//       </div>
//     </div>
//   );
// };


"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TextGenerateEffect = ({
  words,
  as: Tag = "div",
  className = "",
  duration = 0.5,
}: {
  words: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
}) => {
  const wordsArray = words.split(" ");
  const ref = useRef(null);
const isInView = useInView(ref, { once: false, margin: "-50px" });

return (
    <Tag ref={ref} className={`font-bold ${className}`}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration, delay: idx * 0.1 }} // Staggered effect
          className="dark:text-white"
        >
          {word}{" "}
        </motion.span>
      ))}
    </Tag>
  );
};