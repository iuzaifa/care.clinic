import React from "react";
import {
  FiCalendar,
  FiHeart,
  FiShield,
  FiClock,
  FiUser,
  FiPhone,
  FiFileText,
  FiChevronDown,
  FiArrowRight,
  FiUsers,
} from "react-icons/fi";

/**
 * CareClinic Hero Section
 * -------------------------------------------------
 * Fully responsive hero for a healthcare/clinic landing page.
 *
 * - Mobile / Tablet (< lg): simple stacked layout, image in a rounded card.
 * - Desktop (>= lg): the reference design — a large curved white shape
 *   bleeds from the left behind the text content and overlaps the
 *   full-bleed photo on the right, with the booking card floating
 *   over the bottom-right corner of the photo.
 *
 * Requires: react-icons  (npm install react-icons)
 * Styling:  Tailwind CSS utility classes
 *
 * Replace `heroImageSrc` with your own doctor/clinic photo.
 */

const heroImageSrc =
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1400&auto=format&fit=crop";

interface FeatureItem {
  icon: React.ReactNode;
  label: string;
}

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const features: FeatureItem[] = [
  { icon: <FiCalendar size={22} />, label: "Easy Appointment" },
  { icon: <FiHeart size={22} />, label: "Expert Doctors" },
  { icon: <FiShield size={22} />, label: "Quality Treatment" },
  { icon: <FiClock size={22} />, label: "24/7 Support" },
];

const stats: StatItem[] = [
  { icon: <FiUsers size={22} />, value: "10+", label: "Years of Experience" },
  { icon: <FiUser size={22} />, value: "50+", label: "Expert Doctors" },
  { icon: <FiUsers size={22} />, value: "15k+", label: "Happy Patients" },
];

/** Shared text content (eyebrow, heading, copy, feature icons, CTAs, stats) */
const TextContent: React.FC = () => (
  <>
    <p className="text-sm font-semibold tracking-widest text-teal-500">
      WELCOME TO CARECLINIC
    </p>

    <h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl xl:text-6xl">
      Your Health,
      <br />
      Our <span className="text-teal-500">Priority</span>
    </h1>

    <p className="mt-5 max-w-md text-base text-slate-500 sm:text-lg">
      We provide exceptional healthcare services with compassion and
      excellence.
    </p>

    <div className="mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
      {features.map((feature) => (
        <div key={feature.label} className="flex flex-col gap-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-500">
            {feature.icon}
          </span>
          <span className="text-sm font-medium leading-snug text-slate-700">
            {feature.label}
          </span>
        </div>
      ))}
    </div>

    <div className="mt-9 flex flex-wrap items-center gap-4">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
      >
        Book Appointment
        <FiArrowRight size={16} />
      </button>
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
      >
        Learn More
      </button>
    </div>

    <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 sm:gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-center gap-3">
          <span className="hidden h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 sm:flex">
            {stat.icon}
          </span>
          <div>
            <p className="text-xl font-bold text-slate-900 sm:text-2xl">
              {stat.value}
            </p>
            <p className="text-xs text-slate-500 sm:text-sm">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

interface FormFieldProps {
  icon: React.ReactNode;
  placeholder: string;
  trailingIcon?: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
  icon,
  placeholder,
  trailingIcon,
}) => (
  <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-500 transition focus-within:border-teal-500">
    <span className="flex-shrink-0 text-slate-400">{icon}</span>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full min-w-0 bg-transparent text-slate-700 placeholder:text-slate-400 focus:outline-none"
    />
    {trailingIcon && (
      <span className="flex-shrink-0 text-slate-400">{trailingIcon}</span>
    )}
  </div>
);

const BookingCard: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={`rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-100 sm:p-7 ${className}`}
  >
    <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
      Book Your Appointment
    </h3>

    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
      <FormField icon={<FiUser size={16} />} placeholder="Your Name" />
      <FormField icon={<FiPhone size={16} />} placeholder="Phone Number" />
      <FormField
        icon={<FiFileText size={16} />}
        placeholder="Select Department"
        trailingIcon={<FiChevronDown size={16} />}
      />
      <FormField
        icon={<FiUser size={16} />}
        placeholder="Select Doctor"
        trailingIcon={<FiChevronDown size={16} />}
      />
      <FormField icon={<FiCalendar size={16} />} placeholder="Select Date" />
      <FormField icon={<FiClock size={16} />} placeholder="Select Time" />
    </div>

    <button
      type="button"
      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
    >
      Book Now
      <FiArrowRight size={16} />
    </button>
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* ============ MOBILE / TABLET (< lg) — simple stacked layout ============ */}
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:hidden">
        <TextContent />

        <div className="relative mt-12">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-[2rem] sm:aspect-[16/10]">
            <img
              src={heroImageSrc}
              alt="Doctor with medical staff in a clinic hallway"
              className="h-full w-full object-cover"
            />
          </div>
          <BookingCard className="relative z-10 mx-auto -mt-16 w-[92%] sm:-mt-20 sm:w-[85%]" />
        </div>
      </div>

      {/* ============ DESKTOP (>= lg) — curved background bleeding into photo ============ */}
      <div className="relative hidden min-h-[680px] lg:block xl:min-h-[760px]">
        {/* Full-bleed photo, right side of the section */}
        <div className="absolute inset-y-0 right-0 w-full">
          <img
            src={heroImageSrc}
            alt="Doctor with medical staff in a clinic hallway"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Large curved white shape bleeding in from the left, overlapping the photo */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-1/2 h-[230%] w-[64%] -translate-x-[10%] -translate-y-1/2 rounded-full bg-white xl:w-[58%]"
        />

        {/* Text content, sitting on top of the curved white shape */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 py-16 xl:px-10">
          <div className="max-w-lg xl:max-w-xl">
            <TextContent />
          </div>
        </div>

        {/* Booking card, floating over the bottom-right corner of the photo */}
        <div className="absolute bottom-10 right-8 z-20 w-[420px] xl:right-16 xl:w-[460px]">
          <BookingCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;