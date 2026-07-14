// import React from "react";
// import ServiceCard, { type Service } from "./ServiceCard";

// type ServicesGridProps = {
//   badgeText?: string;
//   title?: string;
//   subtitle?: string;
//   services: Service[];
//   limit?: number;
//   columns?: 2 | 3;
//   onServiceClick?: (id: string) => void;
// };

// const columnClasses: Record<number, string> = {
//   2: "lg:grid-cols-2",
//   3: "lg:grid-cols-3",
// };

// const ServicesGrid: React.FC<ServicesGridProps> = ({
//   badgeText = "What We Offer",
//   title = "Our Medical Services",
//   subtitle = "From routine checkups to specialized treatments, our expert team delivers care tailored to your needs.",
//   services,
//   limit,
//   columns = 3,
//   onServiceClick,
// }) => {
//   const displayed = limit ? services.slice(0, limit) : services;

//   return (
//     <section className="bg-[#f6fafb] px-[5vw] py-20 sm:py-24">
//       <div className="max-w-[1320px] mx-auto">
//         <div className="text-center mb-14 max-w-[560px] mx-auto">
//           <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.18em] uppercase text-[#0e7a8c] mb-4 px-4 py-1.5 rounded-full bg-white border border-[#cdeef2]">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#0e7a8c]" />
//             {badgeText}
//           </span>
//           <h2 className="text-[30px] sm:text-[36px] font-extrabold leading-tight text-slate-900 mb-4">
//             {title}
//           </h2>
//           <p className="text-[14.5px] leading-relaxed text-slate-500">
//             {subtitle}
//           </p>
//         </div>

//         <div
//           className={`grid grid-cols-1 sm:grid-cols-2 ${columnClasses[columns]} gap-6 lg:gap-8`}
//         >
//           {displayed.map((service) => (
//             <ServiceCard
//               key={service.id}
//               service={service}
//               onClick={onServiceClick}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesGrid;