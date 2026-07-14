import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronRight, FaSearch } from "react-icons/fa";

type BreadcrumbProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
  currentPage?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  title,
  subtitle,
  imageSrc,
  imageAlt = "Page banner",
  currentPage,
  showSearch = false,
  searchPlaceholder = "Search...",
  onSearch,
}) => {
  const resolvedCurrentPage = currentPage ?? title;

  return (
    <section className="relative overflow-hidden bg-slate-100 border-b-2 border-cyan-900/5">
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div className="pl-20">
            {/* Breadcrumb trail */}
            <div className="flex items-center gap-2 text-[13px] font-medium mb-5">
              <NavLink
                to="/"
                className="text-[#0e7a8c] hover:text-[#0b5f6e] transition-colors duration-200"
              >
                Home
              </NavLink>
              <FaChevronRight className="text-[9px] text-slate-400" />
              <span className="text-slate-500">{resolvedCurrentPage}</span>
            </div>

            <h1 className="text-[34px] sm:text-[42px] lg:text-[46px] font-extrabold leading-tight text-slate-900 mb-4">
              {title}
            </h1>

            {subtitle && (
              <p className="text-[15px] leading-relaxed text-slate-500 max-w-[440px] mb-7">
                {subtitle}
              </p>
            )}

            {showSearch && (
              <div className="flex items-center max-w-[420px] rounded-full bg-white border border-slate-200 shadow-[0_10px_30px_rgba(13,60,68,0.08)] overflow-hidden">
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  onChange={(e) => onSearch?.(e.target.value)}
                  className="flex-1 py-3.5 px-6 text-[13.5px] outline-none bg-transparent"
                />
                <button
                  type="button"
                  aria-label="Search"
                  className="flex items-center justify-center w-12 h-12 m-1 rounded-full bg-[#0e7a8c] hover:bg-[#0b5f6e] text-white transition-colors duration-200 flex-shrink-0"
                >
                  <FaSearch className="text-[14px]" />
                </button>
              </div>
            )}
          </div>

          {/* Right: Circular Image */}
          <div className="relative hidden lg:flex justify-end">
            <div className="relative w-full max-w-[560px] aspect-[16/11] rounded-l-full rounded-r-3xl overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden rounded-3xl overflow-hidden aspect-[16/10]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;


// // Blog page — search bar ke saath
// <Breadcrumb
//   title="Our Blog"
//   subtitle="Stay informed with the latest health tips, medical insights, and wellness advice from our healthcare experts."
//   imageSrc="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=80"
//   currentPage="Blog"
//   showSearch
//   onSearch={(q) => console.log(q)}
// />

// // About page — search ke bina
// <Breadcrumb
//   title="About CareClinic"
//   subtitle="Caring for the health and well-being of your family since 1990."
//   imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80"
//   currentPage="About Us"
// />

// // Contact page
// <Breadcrumb
//   title="Contact Us"
//   subtitle="Reach out to our team for appointments, questions, or support."
//   imageSrc="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1000&q=80"
//   currentPage="Contact"
// />