import React, { useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

type ContactFormSectionProps = {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  mapEmbedUrl?: string;
  onSubmit?: (data: Record<string, string>) => void;
};

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  badgeText = "Get In Touch",
  title = "Send Us A Message",
  subtitle = "Have a question or need to schedule a visit? Fill out the form and our team will get back to you shortly.",
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3!2d77.2!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
  onSubmit,
}) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record <string, string>;
    onSubmit?.(data);
    setSubmitted(true);
  };

  return (
    <section className="bg-white px-[5vw] py-20">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Form */}
        <div>
          <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.18em] uppercase text-[#0e7a8c] mb-4 px-4 py-1.5 rounded-full bg-[#e7f7f9] border border-[#cdeef2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0e7a8c]" />
            {badgeText}
          </span>
          <h2 className="text-[28px] sm:text-[34px] font-extrabold leading-tight text-slate-900 mb-3">
            {title}
          </h2>
          <p className="text-[14.5px] leading-relaxed text-slate-500 mb-8 max-w-[480px]">
            {subtitle}
          </p>

          {submitted ? (
            <div className="rounded-2xl bg-[#eaf6f8] border border-[#cdeef2] p-8 text-center">
              <span className="inline-flex w-14 h-14 items-center justify-center rounded-full bg-[#0e7a8c] text-white text-[22px] mb-4">
                <FaCheckCircle />
              </span>
              <h3 className="text-[17px] font-bold text-slate-900 mb-2">
                Message Sent!
              </h3>
              <p className="text-[13.5px] text-slate-500">
                Thank you for reaching out. Our team will contact you within
                24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-slate-200 p-3.5 text-[13.5px] outline-none focus:border-[#1cb3c9]"
                />
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-slate-200 p-3.5 text-[13.5px] outline-none focus:border-[#1cb3c9]"
                />
              </div>

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-200 p-3.5 text-[13.5px] outline-none focus:border-[#1cb3c9]"
              />

              <select
                name="subject"
                required
                defaultValue=""
                className="w-full rounded-xl border border-slate-200 p-3.5 text-[13.5px] text-slate-500 outline-none focus:border-[#1cb3c9]"
              >
                <option value="" disabled>
                  Select Subject
                </option>
                <option>General Inquiry</option>
                <option>Book Appointment</option>
                <option>Billing Question</option>
                <option>Feedback / Complaint</option>
              </select>

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl border border-slate-200 p-3.5 text-[13.5px] outline-none focus:border-[#1cb3c9] resize-none"
              />

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#0e7a8c] hover:bg-[#0b5f6e] text-white font-semibold text-[14px] py-4 px-8 transition-colors duration-200 sm:w-fit"
              >
                Send Message <FaArrowRight className="text-[12px]" />
              </button>
            </form>
          )}
        </div>

        {/* Right: Map */}
        <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(13,60,68,0.15)] h-full min-h-[420px]">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "420px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;