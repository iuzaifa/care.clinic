import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  badgeText?: string;
  title?: string;
  faqs: FaqItem[];
};

const defaultFaqs: FaqItem[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment online through our website, by calling our clinic directly, or by walking in during our operating hours.",
  },
  {
    question: "Do you accept health insurance?",
    answer:
      "Yes, we accept most major health insurance providers. Please contact our billing team to confirm your specific plan coverage.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records.",
  },
  {
    question: "Is emergency care available on Sundays?",
    answer:
      "Yes, our emergency department operates 24/7, including Sundays and public holidays.",
  },
];

const FaqSection: React.FC<FaqSectionProps> = ({
  badgeText = "FAQ",
  title = "Frequently Asked Questions",
  faqs = defaultFaqs,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f6fafb] px-[5vw] py-20">
      <div className="max-w-[820px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.18em] uppercase text-[#0e7a8c] mb-4 px-4 py-1.5 rounded-full bg-white border border-[#cdeef2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0e7a8c]" />
            {badgeText}
          </span>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold leading-tight text-slate-900">
            {title}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-[14.5px] font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-[#0e7a8c] text-[13px] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[13.5px] leading-relaxed text-slate-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;