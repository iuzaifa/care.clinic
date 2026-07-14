import React from "react";
import type { IconType } from "react-icons";

interface Step {
  icon: IconType;
  number: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  badge: string;
  title: string;
  steps: Step[];
}

const HowItWorks: React.FC<HowItWorksProps> = ({
  badge,
  title,
  steps,
}) => {
  return (
    <section className="bg-white px-[5vw] py-20">
      <div className="mx-auto max-w-[1320px] text-center">
        <span className="mb-3 inline-block text-[13px] font-bold uppercase tracking-[0.16em] text-[#0f8ea3]">
          {badge}
        </span>

        <h2 className="mb-14 text-[28px] font-extrabold leading-tight text-slate-900 sm:text-[32px]">
          {title}
        </h2>

        <div className="relative grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.slice(0, 4).map((step, i) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center"
              >
                {i < Math.min(steps.length, 4) - 1 && (
                  <span className="absolute left-1/2 top-7 z-0 hidden h-px w-full border-t border-dashed border-[#cfe6ea] lg:block" />
                )}

                <div className="relative z-10 mb-5">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e7f7f9] text-[24px] text-[#0e7a8c]">
                    <Icon />
                  </span>

                  <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#0e7a8c] text-[11px] font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-2 text-[15.5px] font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="max-w-[210px] text-[13px] leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;