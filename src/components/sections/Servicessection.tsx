import React from "react";
import { FaHeartbeat, FaArrowRight } from "react-icons/fa";
import { FaBrain, FaBone, FaTooth } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FaHeartbeat />,
    title: "Cardiology",
    description: "Comprehensive heart care and treatment.",
  },
  {
    icon: <FaBrain />,
    title: "Neurology",
    description: "Expert care for brain and nervous system.",
  },
  {
    icon: <FaBone />,
    title: "Orthopedics",
    description: "Bone, joint and muscle care for better mobility.",
  },
  {
    icon: <FaChild />,
    title: "Pediatrics",
    description: "Specialized healthcare for children.",
  },
  {
    icon: <FaTooth />,
    title: "Dental Care",
    description: "Complete oral healthcare and treatment.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white px-[5vw] py-20">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_2fr] gap-10 items-start">
        <div>
          <span className="inline-block text-[13px] font-bold tracking-[0.16em] uppercase text-[#0f8ea3] mb-3">
            Our Services
          </span>
          <h2 className="text-[30px] sm:text-[34px] font-extrabold leading-tight text-slate-900 mb-4">
            Quality Care
            <br />
            For Everyone
          </h2>
          <p className="text-[14.5px] leading-relaxed text-slate-500 mb-7 max-w-[280px]">
            We offer a wide range of healthcare services to meet your needs.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-full border border-[#e4ecee] hover:border-[#1cb3c9] text-slate-800 hover:text-[#0e7a8c] font-semibold text-[14px] transition-colors duration-200"
          >
            View All Services <FaArrowRight className="text-[12px]" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#f6fafb] hover:bg-[#eaf6f8] rounded-2xl p-6 text-center transition-colors duration-200 border border-transparent hover:border-[#d3e9ec]"
            >
              <span className="w-14 h-14 mx-auto rounded-full bg-[#e7f7f9] text-[#0e7a8c] flex items-center justify-center text-[22px] mb-4">
                {s.icon}
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