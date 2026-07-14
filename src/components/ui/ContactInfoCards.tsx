import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

type ContactInfo = {
  icon: React.ReactNode;
  title: string;
  value: string;
  subValue?: string;
};

type ContactInfoCardsProps = {
  items?: ContactInfo[];
};

const defaultItems: ContactInfo[] = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Our Location",
    value: "123 Health Street, New Delhi",
    subValue: "Delhi NCR, India 110001",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone Number",
    value: "+91 98765 43210",
    subValue: "Mon-Sat, 8am - 8pm",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Address",
    value: "info@careclinic.com",
    subValue: "We reply within 24 hours",
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    value: "Mon - Sat: 8:00 - 20:00",
    subValue: "Sunday: Emergency Only",
  },
];

const ContactInfoCards: React.FC<ContactInfoCardsProps> = ({
  items = defaultItems,
}) => {
  return (
    <section className="bg-white px-[5vw] pt-20">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="group bg-[#f6fafb] hover:bg-white rounded-3xl p-7 border border-transparent hover:border-[#cdeef2] hover:shadow-[0_20px_45px_-15px_rgba(13,60,68,0.15)] transition-all duration-300 hover:-translate-y-1.5"
          >
            <div className="relative w-14 h-14 mb-5">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0e7a8c] to-[#0f8ea3] opacity-90 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
              <span className="relative w-14 h-14 flex items-center justify-center text-white text-[20px]">
                {item.icon}
              </span>
            </div>
            <h3 className="text-[13px] font-bold uppercase tracking-wide text-[#0e7a8c] mb-2">
              {item.title}
            </h3>
            <p className="text-[15px] font-semibold text-slate-900 leading-snug">
              {item.value}
            </p>
            {item.subValue && (
              <p className="text-[13px] text-slate-500 mt-1">
                {item.subValue}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfoCards;