import React from "react";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

type CtaSectionProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const CtaSection: React.FC<CtaSectionProps> = ({
  title = "Need Medical Consultation?",
  subtitle = "Book your appointment today and take the first step towards a healthier life.",
  buttonText = "Book Appointment",
  onButtonClick,
}) => {
  return (
    <section className="px-[5vw] py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-8 py-8 shadow-xl md:flex-row md:px-12">
          {/* Left */}
          <div className="flex items-center gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
              <FaCalendarAlt className="text-4xl text-cyan-600" />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white">
                {title}
              </h2>

              <p className="mt-2 max-w-lg text-sm leading-7 text-cyan-100">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Right */}
          <button
            onClick={onButtonClick}
            className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-semibold text-cyan-700 transition hover:bg-slate-100"
          >
            {buttonText}
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;