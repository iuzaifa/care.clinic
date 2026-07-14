import React from "react";
import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaTooth,
  FaChild,
  FaEye,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  image: string;
};

type ServiceCardProps = {
  service: Service;
  onClick?: (id: string) => void;
};

const iconMap: Record<string, React.ReactNode> = {
  heartbeat: <FaHeartbeat />,
  brain: <FaBrain />,
  bone: <FaBone />,
  tooth: <FaTooth />,
  child: <FaChild />,
  eye: <FaEye />,
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(13,60,68,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(13,60,68,0.18)] hover:-translate-y-1.5 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[4/2.4] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

        {/* Icon badge */}
        <div className="absolute -bottom-6 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0e7a8c] to-[#0f8ea3] flex items-center justify-center text-white text-[22px] shadow-lg">
          {iconMap[service.icon] ?? <FaHeartbeat />}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-10">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-[18px] font-bold text-slate-900">
            {service.title}
          </h3>
          <span className="flex-shrink-0 text-[12px] font-semibold text-[#0e7a8c] bg-[#e7f7f9] px-3 py-1 rounded-full">
            {service.price}
          </span>
        </div>

        <p className="text-[13.5px] leading-relaxed text-slate-500 mb-5">
          {service.description}
        </p>

        <ul className="flex flex-col gap-2.5 mb-6">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2.5 text-[13px] text-slate-600"
            >
              <FaCheckCircle className="text-[#0e7a8c] text-[13px] flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => onClick?.(service.id)}
          className="w-full flex items-center justify-center gap-2 rounded-full border border-[#e4ecee] group-hover:border-[#0e7a8c] group-hover:bg-[#0e7a8c] text-slate-700 group-hover:text-white font-semibold text-[13.5px] py-3.5 transition-all duration-300"
        >
          Learn More <FaArrowRight className="text-[11px]" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;