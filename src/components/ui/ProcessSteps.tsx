import React from "react";
import { FaCalendarCheck, FaStethoscope, FaFileMedical, FaHeartbeat } from "react-icons/fa";

type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ProcessStepsProps = {
  badgeText?: string;
  title?: string;
  steps?: Step[];
};

const defaultSteps: Step[] = [
  {
    icon: <FaCalendarCheck />,
    title: "Book Appointment",
    description: "Schedule your visit online or by phone at a time that works for you.",
  },
  {
    icon: <FaStethoscope />,
    title: "Consultation",
    description: "Meet with our specialist for a thorough examination and discussion.",
  },
  {
    icon: <FaFileMedical />,
    title: "Diagnosis & Plan",
    description: "Receive a personalized treatment plan based on your specific needs.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Treatment & Recovery",
    description: "Get expert care and ongoing support throughout your recovery journey.",
  },
];

const ProcessSteps: React.FC<ProcessStepsProps> = ({
  badgeText = "How It Works",
  title = "Your Care Journey In 4 Simple Steps",
  steps = defaultSteps,
}) => {
  return (
    <section className="bg-white px-[5vw] py-20 sm:py-24">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-16 max-w-[560px] mx-auto">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.18em] uppercase text-[#0e7a8c] mb-4 px-4 py-1.5 rounded-full bg-[#e7f7f9] border border-[#cdeef2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0e7a8c]" />
            {badgeText}
          </span>
          <h2 className="text-[30px] sm:text-[36px] font-extrabold leading-tight text-slate-900">
            {title}
          </h2>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {/* Connector line - desktop only */}
          <div className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#cdeef2] via-[#0e7a8c]/30 to-[#cdeef2]" />

          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="relative w-[72px] h-[72px] mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0e7a8c] to-[#0f8ea3] flex items-center justify-center text-white text-[26px] shadow-[0_10px_25px_rgba(14,122,140,0.3)]">
                  {step.icon}
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-[#0e7a8c] text-[#0e7a8c] text-[11px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-[16px] font-bold text-slate-900 mb-2.5">
                {step.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-500 max-w-[220px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;