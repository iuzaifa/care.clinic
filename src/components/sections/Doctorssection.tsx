import React from "react";
import { FaStar, FaArrowRight, FaRegBookmark } from "react-icons/fa";

interface Doctor {
  name: string;
  specialty: string;
  rating: number;
  photo: string;
}

const doctors: Doctor[] = [
  {
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Sarah Taylor",
    specialty: "Neurologist",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1594824388853-d0c2d4e5a7c1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Michael Brown",
    specialty: "Orthopedic Surgeon",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Emily Davis",
    specialty: "Pediatrician",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
];

const DoctorsSection: React.FC = () => {
  return (
    <section className="bg-[#eaf6f8] px-[5vw] py-20">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-[13px] font-bold tracking-[0.16em] uppercase text-[#0f8ea3] mb-3">
              Our Doctors
            </span>
            <h2 className="text-[28px] sm:text-[32px] font-extrabold leading-tight text-slate-900">
              Meet Our Expert Doctors
            </h2>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 text-[#0e7a8c] font-semibold text-[14px] hover:text-[#0b5f6e] transition-colors duration-200"
          >
            View All Doctors <FaArrowRight className="text-[12px]" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
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