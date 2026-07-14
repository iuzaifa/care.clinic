import React, { useState } from "react";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photo: string;
  rating: number;
};

type TestimonialsProps = {
  badgeText?: string;
  title?: string;
  testimonials: Testimonial[];
  limit?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

const Testimonials: React.FC<TestimonialsProps> = ({
  badgeText = "Patient Testimonials",
  title = "What Our Patients Say",
  testimonials,
  limit,
  autoPlay = false,
  autoPlayInterval = 5000,
}) => {
  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;
  const [index, setIndex] = useState<number>(0);

  const goPrev = () =>
    setIndex(
      (prev) => (prev - 1 + displayedTestimonials.length) % displayedTestimonials.length
    );
  const goNext = () =>
    setIndex((prev) => (prev + 1) % displayedTestimonials.length);

  React.useEffect(() => {
    if (!autoPlay || displayedTestimonials.length <= 1) return;
    const timer = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, displayedTestimonials.length]);

  if (displayedTestimonials.length === 0) return null;

  const current = displayedTestimonials[index];

  return (
    <section className="bg-white px-[5vw] py-20 ">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-[13px] font-bold tracking-[0.16em] uppercase text-[#0f8ea3] mb-3">
              {badgeText}
            </span>
            <h2 className="text-[28px] sm:text-[32px] font-extrabold leading-tight text-slate-900">
              {title}
            </h2>
          </div>

          {displayedTestimonials.length > 1 && (
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
          )}
        </div>

        <div className="bg-[#f6fafb] rounded-2xl p-8 sm:p-10 border border-cyan-200">
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

        {displayedTestimonials.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {displayedTestimonials.map((_, i) => (
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
        )}
      </div>
    </section>
  );
};

export default Testimonials;


// how to use conponent


// // Home page — sab testimonials, manual navigation
// <Testimonials testimonials={testimonialsData} />

// // About page — sirf 2 dikhao
// <Testimonials testimonials={testimonialsData} limit={2} />

// // Auto-sliding carousel, 4 second interval
// <Testimonials testimonials={testimonialsData} autoPlay autoPlayInterval={4000} />

// // Custom heading
// <Testimonials
//   testimonials={testimonialsData}
//   title="Real Stories From Real Patients"
//   badgeText="Reviews"
// />