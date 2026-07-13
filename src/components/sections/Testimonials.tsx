import React, { useState } from "react";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  photo: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "CareClinic provided me with exceptional care and support throughout my treatment. The staff is very professional and friendly. I highly recommend their services!",
    name: "Emily Johnson",
    role: "Happy Patient",
    photo:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    quote:
      "The doctors here genuinely listen and take the time to explain everything. I felt cared for at every step, not just treated as another appointment.",
    name: "Daniel Reyes",
    role: "Happy Patient",
    photo:
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    quote:
      "Booking was effortless and the follow-up care after my surgery was outstanding. CareClinic has become my go-to for the whole family.",
    name: "Priya Nair",
    role: "Happy Patient",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const goPrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goNext = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="bg-white px-[5vw] py-20">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-[13px] font-bold tracking-[0.16em] uppercase text-[#0f8ea3] mb-3">
              Patient Testimonials
            </span>
            <h2 className="text-[28px] sm:text-[32px] font-extrabold leading-tight text-slate-900">
              What Our Patients Say
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#e4ecee] hover:border-[#1cb3c9] text-slate-600 hover:text-[#0e7a8c] flex items-center justify-center transition-colors duration-200"
            >
              <FaArrowLeft className="text-[13px]" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#e4ecee] hover:border-[#1cb3c9] text-slate-600 hover:text-[#0e7a8c] flex items-center justify-center transition-colors duration-200"
            >
              <FaArrowRight className="text-[13px]" />
            </button>
          </div>
        </div>

        <div className="bg-[#f6fafb] rounded-2xl p-8 sm:p-10">
          <span className="text-[#bfe3e9] text-[28px] block mb-4">
            <FaQuoteLeft />
          </span>
          <p className="text-[15px] leading-relaxed text-slate-700 mb-8">
            {current.quote}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <img
                src={current.photo}
                alt={current.name}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <div className="text-[14.5px] font-bold text-slate-900">
                  {current.name}
                </div>
                <div className="text-[12.5px] text-slate-500">{current.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-0.5 text-[#f5b400] text-[14px]">
              {Array.from({ length: current.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === index ? "w-6 bg-[#0e7a8c]" : "w-2 bg-[#d3e9ec]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;