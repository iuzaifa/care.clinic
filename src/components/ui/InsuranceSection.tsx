import React from "react";

type Insurance = {
  name: string;
  logo?: string;
};

type InsuranceSectionProps = {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  providers: Insurance[];
};

const InsuranceSection: React.FC<InsuranceSectionProps> = ({
  badgeText = "Insurance",
  title = "We Accept All Major Insurance Providers",
  subtitle = "Not sure if your plan is covered? Contact our billing team for a quick verification.",
  providers,
}) => {
  return (
    <section className="bg-[#0e7a8c] px-[5vw] py-16">
      <div className="max-w-[1320px] mx-auto text-center">
        <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.18em] uppercase text-white/90 mb-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/20">
          {badgeText}
        </span>
        <h2 className="text-[24px] sm:text-[28px] font-extrabold text-white mb-2">
          {title}
        </h2>
        <p className="text-[13.5px] text-[#d6f0f3] mb-10 max-w-[480px] mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="px-7 py-4 rounded-2xl bg-white/10 border border-white/15 text-white font-semibold text-[14px] hover:bg-white/20 transition-colors duration-200"
            >
              {provider.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;