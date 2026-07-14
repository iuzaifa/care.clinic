import React from "react";
import { FaHeartbeat, FaArrowRight, FaChild } from "react-icons/fa";
import { FaBrain, FaBone, FaTooth } from "react-icons/fa6";

type ServiceData = {
  icon: string;
  title: string;
  description: string;
};

type ServicesSectionProps = {
  badgeText?: string;
  title?: React.ReactNode;
  subtitle?: string;
  services: ServiceData[];
  limit?: number;
  columns?: 2 | 3 | 4 | 5;
  showViewAll?: boolean;
  viewAllText?: string;
  onViewAllClick?: () => void;
};

// Map icon keys (from JSON) to actual icon components
const iconMap: Record<string, React.ReactNode> = {
  heartbeat: <FaHeartbeat />,
  brain: <FaBrain />,
  bone: <FaBone />,
  child: <FaChild />,
  tooth: <FaTooth />,
};

const columnClasses: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

const ServicesSection: React.FC<ServicesSectionProps> = ({
  badgeText = "Our Services",
  title = (
    <>
      Quality Care
      <br />
      For Everyone
    </>
  ),
  subtitle = "We offer a wide range of healthcare services to meet your needs.",
  services,
  limit,
  columns = 5,
  showViewAll = true,
  viewAllText = "View All Services",
  onViewAllClick,
}) => {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="bg-white px-[5vw] py-20">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_2fr] gap-10 items-start">
        <div>
          <span className="inline-block text-[13px] font-bold tracking-[0.16em] uppercase text-[#0f8ea3] mb-3">
            {badgeText}
          </span>
          <h2 className="text-[30px] sm:text-[34px] font-extrabold leading-tight text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-[14.5px] leading-relaxed text-slate-500 mb-7 max-w-[280px]">
            {subtitle}
          </p>
          {showViewAll && (
            <button
              type="button"
              onClick={onViewAllClick}
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full border border-[#e4ecee] hover:border-[#1cb3c9] text-slate-800 hover:text-[#0e7a8c] font-semibold text-[14px] transition-colors duration-200"
            >
              {viewAllText} <FaArrowRight className="text-[12px]" />
            </button>
          )}
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-3 ${columnClasses[columns]} gap-5`}
        >
          {displayedServices.map((s) => (
            <div
              key={s.title}
              className="bg-[#f6fafb] hover:bg-[#eaf6f8] rounded-2xl p-6 text-center transition-colors duration-200 border border-cyan-200/50 hover:border-[#d3e9ec]"
            >
              <span className="w-14 h-14 mx-auto rounded-full bg-[#e7f7f9] text-[#0e7a8c] flex items-center justify-center text-[22px] mb-4">
                {iconMap[s.icon] ?? <FaHeartbeat />}
              </span>
              <h3 className="text-[15px] font-bold text-slate-900 mb-2">
                {s.title}
              </h3>
              <p className="text-[12.5px] leading-relaxed text-slate-500">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


// uses
// // Home page — sirf 5 dikhao
// <ServicesSection services={servicesData} limit={5} />

// // About page — 4 dikhao, 4 columns
// <ServicesSection services={servicesData} limit={4} columns={4} />

// // Services page — sab dikhao (8), view all button hide
// <ServicesSection services={servicesData} showViewAll={false} columns={4} />

// // Custom title/subtitle
// <ServicesSection
//   services={servicesData}
//   limit={6}
//   title="Departments We Cover"
//   subtitle="Specialized treatment across every major medical field."
// />