// src/components/HowItWorks.jsx
import React from "react";
import { FaCogs, FaPenFancy, FaLeaf, FaSyncAlt } from "react-icons/fa";

const colors = {
  primary: "#1B5E20",
  accent: "#A5D6A7",
  white: "#ffffff",
};

const steps = [
  {
    id: 1,
    title: "Understanding Your Vision",
    description:
      "We understand your goals, space, and bamboo requirements to ensure the best outcome.",
    icon: <FaPenFancy size={20} />,
  },
  {
    id: 2,
    title: "Concept & Design Strategy",
    description:
      "We craft a personalized bamboo design blueprint with aesthetics and durability.",
    icon: <FaCogs size={20} />,
  },
  {
    id: 3,
    title: "Eco Craft & Installation",
    description:
      "We use sustainable methods to install strong and visually pleasing bamboo structures.",
    icon: <FaLeaf size={20} />,
  },
  {
    id: 4,
    title: "Support & Maintenance",
    description:
      "We provide after-service support and guidance for long-lasting performance.",
    icon: <FaSyncAlt size={20} />,
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative py-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, #F0FFF4, #E8F8EC, #F6FFF9)",
      }}
    >
      {/* Background Glow Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-5 left-5 w-40 h-40 bg-green-300 opacity-15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-5 right-10 w-48 h-48 bg-green-200 opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-4 px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wide">
          Our <span className="text-green-700">Process</span>
        </h2>
        <p className="mt-1 text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
          A compact 4-step process for premium bamboo interior and construction work.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="border-l-2 border-green-500/30 ml-4 md:ml-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative mb-3 md:mb-14 pl-6 md:pl-10 group"
            >
              {/* Dot */}
              <div className="absolute -left-3 md:-left-5 top-1 w-6 h-6 bg-white rounded-full shadow border-2 border-green-600 flex items-center justify-center text-green-700 text-sm">
                {step.icon}
              </div>

              {/* Glass Card */}
              <div
                className="
                  backdrop-blur-xl bg-white/20 border border-white/30 
                  rounded-xl p-2 md:p-4 shadow 
                  transition-all duration-300 
                  group-hover:bg-white/30 group-hover:shadow-xl
                "
              >
                <h3 className=" font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
