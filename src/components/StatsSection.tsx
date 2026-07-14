import React from "react";

type Stat = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

type StatsSectionProps = {
  badgeText?: string;
  title?: string;
  stats: Stat[];
};

const StatsSection: React.FC<StatsSectionProps> = ({
  badgeText,
  title,
  stats,
}) => {
  return (
    <section className="relative px-[5vw] py-20 overflow-hidden bg-gradient-to-br from-[#0b5f6e] via-[#0e7a8c] to-[#0f8ea3]">
      {/* Decorative glow blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-[380px] h-[380px] rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-[#bfe3e9]/10 blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto">
        {(badgeText || title) && (
          <div className="text-center mb-14">
            {badgeText && (
              <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.18em] uppercase text-white/90 mb-4 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                {badgeText}
              </span>
            )}
            {title && (
              <h2 className="text-[28px] sm:text-[34px] font-extrabold text-white leading-tight">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative rounded-3xl bg-white/[0.07] backdrop-blur-sm border border-white/15 px-6 py-9 text-center transition-all duration-300 hover:bg-white/[0.12] hover:-translate-y-1.5 hover:border-white/30"
            >
              {stat.icon && (
                <span className="inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-white/10 text-white text-[20px] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </span>
              )}

              <h3 className="text-[34px] sm:text-[42px] font-extrabold text-white leading-none tracking-tight">
                {stat.value}
              </h3>

              <div className="mx-auto mt-3 mb-3 h-[2px] w-8 rounded-full bg-white/30 group-hover:w-12 group-hover:bg-white/60 transition-all duration-300" />

              <p className="text-[13px] font-medium tracking-wide text-[#d6f0f3] uppercase">
                {stat.label}
              </p>

              {/* Corner number watermark */}
              <span className="absolute top-3 right-4 text-[11px] font-bold text-white/25 tabular-nums">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;