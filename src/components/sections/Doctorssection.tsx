import React from "react";
import { FaStar, FaArrowRight, FaRegBookmark } from "react-icons/fa";

type Doctor = {
  name: string;
  specialty: string;
  rating: number;
  photo?: string;
};

type DoctorsProps = {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  doctors: Doctor[];
  limit?: number;
  columns?: 2 | 3 | 4;
  hideViewAllText?: boolean
  showViewAll?: boolean;
  viewAllText?: string;
  onViewAllClick?: () => void;
};

const columnClasses: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

const DoctorsSection: React.FC<DoctorsProps> = ({
  badgeText = "Our Doctors",
  title = "Meet Our Expert Doctors",
  subtitle,
  doctors,
  limit,
  columns = 4,
  showViewAll = true,
    // viewAllText removed (unused)
  hideViewAllText = false,
  onViewAllClick,
}) => {
  const displayedDoctors = limit ? doctors.slice(0, limit) : doctors;

  return (
    <section className="bg-[#eaf6f8] px-[5vw] py-20">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-[13px] font-bold tracking-[0.16em] uppercase text-[#0f8ea3] mb-3">
              {badgeText}
            </span>
            <h2 className="text-[28px] sm:text-[32px] font-extrabold leading-tight text-slate-900">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 max-w-xl text-[15px] text-gray-600">
                {subtitle}
              </p>
            )}
          </div>

          {showViewAll && (
  <button
    type="button"
    onClick={onViewAllClick}
    className="inline-flex items-center gap-2 text-[#0e7a8c] font-semibold text-[14px] hover:text-[#0b5f6e] transition-colors duration-200"
  >
    {!hideViewAllText && (<>View All Doctors <FaArrowRight className="text-[12px]" /></>)} 
  </button>
)}
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${columnClasses[columns]} gap-6`}
        >
          {displayedDoctors.map((doc) => (
            <div
              key={doc.name}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(13,60,68,0.06)]"
            >
              <div className="aspect-[4/3.4] overflow-hidden">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="w-full h-full object-cover block"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-bold text-slate-900 mb-1">
                  {doc.name}
                </h3>
                <p className="text-[13px] text-[#0e7a8c] font-medium mb-3">
                  {doc.specialty}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-[#f5b400] text-[13px]">
                    {Array.from({ length: doc.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <button
                    type="button"
                    aria-label="Save doctor"
                    className="text-slate-300 hover:text-[#0e7a8c] text-[14px] transition-colors duration-200"
                  >
                    <FaRegBookmark />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;