import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

type AboutStoryProps = {
  badgeText?: string;
  title?: string;
  description?: string;
  image: string;
  imageAlt?: string;
  points?: string[];
  showButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
};

const AboutStory: React.FC<AboutStoryProps> = ({
  badgeText = "About CareClinic",
  title = "A Legacy Of Trusted Care, Built Over Decades",
  description = "Since 1990, CareClinic has been dedicated to delivering compassionate, patient-first healthcare across the community. What began as a single clinic has grown into a trusted network of specialists, diagnostic centers, and emergency care units.",
  image,
  imageAlt = "CareClinic doctors",
  points = [
    "Board-certified doctors across 20+ specialties",
    "State-of-the-art diagnostic and imaging equipment",
    "24/7 emergency and telehealth support",
  ],
  showButton = true,
  buttonText = "Learn More About Us",
  onButtonClick,
}) => {
  return (
    <section className="bg-white px-[5vw] py-20">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden aspect-[4/3.4]">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover block"
          />
        </div>

        <div>
          <span className="inline-block text-[13px] font-bold tracking-[0.16em] uppercase text-[#0f8ea3] mb-3">
            {badgeText}
          </span>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold leading-tight text-slate-900 mb-5">
            {title}
          </h2>
          <p className="text-[14.5px] leading-relaxed text-slate-500 mb-7 max-w-[520px]">
            {description}
          </p>

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

          {showButton && (
            <button
              type="button"
              onClick={onButtonClick}
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full border border-[#e4ecee] hover:border-[#1cb3c9] text-slate-800 hover:text-[#0e7a8c] font-semibold text-[14px] transition-colors duration-200"
            >
              {buttonText} <FaArrowRight className="text-[12px]" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutStory;