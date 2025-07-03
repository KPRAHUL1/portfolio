// import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// interface StatItem {
//   title: number;
//   suffix: string;
//   subtitle: string;
// }

// export const StatsSection: React.FC = () => {
//   const stats: StatItem[] = [
//     { title: 6, suffix: "", subtitle: "Months of experience" },
//     { title: 10, suffix: "+", subtitle: "DSA problems" },
//     { title: 10, suffix: "+", subtitle: "Total projects" }
//   ];

//   return (
//     <div className="flex md:flex-row flex-col gap-10 lg:gap-52 w-full">
//       {stats.map((item, index) => (
//         <Counter key={index} title={item.title} suffix={item.suffix} subtitle={item.subtitle} delay={index * 0.2} />
//       ))}
//     </div>
//   );
// };

// interface CounterProps {
//   title: number;
//   suffix: string;
//   subtitle: string;
//   delay: number;
// }

// const Counter: React.FC<CounterProps> = ({ title, suffix, subtitle, delay }) => {
//   const countRef = useRef(null);
//   const isInView = useInView(countRef, { once: true });

//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.floor(latest));

//   useEffect(() => {
//     if (isInView) {
//       count.set(0); // Reset to 0 when in view
//       count.animate(title, { duration: 2, ease: "easeOut" });
//     }
//   }, [isInView, title, count]);

//   return (
//     <motion.div
//       ref={countRef}
//       className="flex flex-col gap-2"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       viewport={{ once: true }}
//     >
//       <h1 className="text-5xl font-semibold">
//         {rounded.get()} {suffix}
//       </h1>
//       <p className="font-medium">{subtitle}</p>
//     </motion.div>
//   );
// };
