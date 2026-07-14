import React from "react";
import type { IconType } from "react-icons";
import { FaEye, FaBullseye, FaHeartbeat } from "react-icons/fa";

type MissionVisionItem = {
  icon: IconType;
  title: string;
  description: string;
};

type MissionVisionProps = {
  badge?: string;
  title?: string;
  items?: MissionVisionItem[];
  centerIcon?: IconType;
};

const defaultItems: MissionVisionItem[] = [
  {
    icon: FaEye,
    title: "Our Mission",
    description:
      "To provide exceptional healthcare services with compassion, innovation and excellence to improve the quality of life.",
  },
  {
    icon: FaBullseye,
    title: "Our Vision",
    description:
      "To become the most trusted healthcare provider through innovation, patient care, and medical excellence.",
  },
];

const MissionVision: React.FC<MissionVisionProps> = ({
  badge = "Mission & Vision",
  title = "Driven By Care, Guided By Excellence",
  items = defaultItems,
  centerIcon = FaHeartbeat,
}) => {
  const [mission, vision] = items;

  const MissionIcon = mission.icon;
  const VisionIcon = vision.icon;
  const CenterIcon = centerIcon;

  return (
    <section className="bg-slate-50 px-[5vw] py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            {badge}
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
            {title}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="group rounded-3xl border border-slate-100 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-2xl text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
              <MissionIcon />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              {mission.title}
            </h3>

            <p className="leading-8 text-slate-600">
              {mission.description}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-600 to-cyan-500 p-10 text-center shadow-xl">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5" />

            <div className="relative z-10">
              <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-white text-5xl text-cyan-600 shadow-lg">
                <CenterIcon />
              </div>

              <h3 className="mb-3 text-3xl font-bold text-white">
                Caring For Life
              </h3>

              <p className="leading-8 text-cyan-100">
                Every patient deserves compassionate care backed by modern
                technology and experienced medical professionals.
              </p>
            </div>
          </div>

          <div className="group rounded-3xl border border-slate-100 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-2xl text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
              <VisionIcon />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              {vision.title}
            </h3>

            <p className="leading-8 text-slate-600">
              {vision.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;