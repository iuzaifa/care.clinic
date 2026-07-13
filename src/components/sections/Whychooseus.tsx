import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const points: string[] = [
  "Experienced and certified doctors",
  "Advanced technology and equipment",
  "Personalized treatment plans",
  "Affordable pricing and transparent process",
  "Compassionate and patient-centered care",
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white px-[5vw] py-20">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden aspect-[4/3.1]">
          <img
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=80"
            alt="Nurse caring for an elderly patient"
            className="w-full h-full object-cover block"
          />
        </div>

        <div>
          <span className="inline-block text-[13px] font-bold tracking-[0.16em] uppercase text-[#0f8ea3] mb-3">
            Why Choose Us
          </span>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold leading-tight text-slate-900 mb-6">
            We Are Here For Your Care
          </h2>

          <ul className="flex flex-col gap-4 mb-8">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="text-[#0e7a8c] text-[17px] flex-shrink-0">
                  <FaCheckCircle />
                </span>
                <span className="text-[14.5px] text-slate-700">{point}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-full border border-[#e4ecee] hover:border-[#1cb3c9] text-slate-800 hover:text-[#0e7a8c] font-semibold text-[14px] transition-colors duration-200"
          >
            Learn More <FaArrowRight className="text-[12px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;