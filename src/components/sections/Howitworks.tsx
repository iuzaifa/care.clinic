import React from "react";
import { FaCalendarAlt, FaUserMd, FaClipboardList, FaHeartbeat } from "react-icons/fa";

interface Step {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <FaCalendarAlt />,
    number: "01",
    title: "Book Appointment",
    description: "Choose a doctor and schedule your appointment easily.",
  },
  {
    icon: <FaUserMd />,
    number: "02",
    title: "Meet Your Doctor",
    description: "Consult with our expert doctors and share your concerns.",
  },
  {
    icon: <FaClipboardList />,
    number: "03",
    title: "Get Treatment",
    description: "Receive the best treatment plan tailored to your condition.",
  },
  {
    icon: <FaHeartbeat />,
    number: "04",
    title: "Get Better",
    description: "Follow up and recover with our continuous support and care.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white px-[5vw] py-20">
      <div className="max-w-[1320px] mx-auto text-center">
        <span className="inline-block text-[13px] font-bold tracking-[0.16em] uppercase text-[#0f8ea3] mb-3">
          How It Works
        </span>
        <h2 className="text-[28px] sm:text-[32px] font-extrabold leading-tight text-slate-900 mb-14">
          Simple Steps To Get Your Solution
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 relative">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center">
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-7 left-1/2 w-full h-px border-t border-dashed border-[#cfe6ea] z-0" />
              )}

              <div className="relative z-10 mb-5">
                <span className="w-16 h-16 rounded-full bg-[#e7f7f9] text-[#0e7a8c] flex items-center justify-center text-[24px]">
                  {step.icon}
                </span>
                <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[#0e7a8c] text-white text-[11px] font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              <h3 className="text-[15.5px] font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-500 max-w-[210px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;