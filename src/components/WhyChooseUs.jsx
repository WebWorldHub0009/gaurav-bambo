// src/components/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaRecycle,
  FaHome,
  FaMoneyCheckAlt,
  FaTruck,
} from "react-icons/fa";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  green: "#2BA44A",
  orange: "#F4A300",
  gray: "#6B7280",
};

const reasons = [
  {
    id: 1,
    icon: <FaRecycle className="text-3xl mb-3" style={{ color: colors.green }} />,
    title: "Eco-Friendly Craftsmanship",
    desc: "Each bamboo blind is handcrafted using natural materials ensuring sustainability and long-term durability.",
  },
  {
    id: 2,
    icon: <FaTruck className="text-3xl mb-3" style={{ color: colors.deepBlue }} />,
    title: "Fast & Reliable Delivery",
    desc: "We provide smooth, fast and doorstep delivery across all major cities with utmost care.",
  },
  {
    id: 3,
    icon: <FaMoneyCheckAlt className="text-3xl mb-3" style={{ color: colors.orange }} />,
    title: "Honest & Affordable Pricing",
    desc: "Premium quality at affordable rates — complete transparency without hidden charges.",
  },
  {
    id: 4,
    icon: <FaHome className="text-3xl mb-3" style={{ color: colors.brightRed }} />,
    title: "Premium Custom Designs",
    desc: "Traditional to modern — our custom bamboo chick designs enhance interior beauty instantly.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-10 px-6 md:px-16 overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif", background: "#ffffff" }}
    >
      {/* Background SVG Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="waves" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path
              d="M0 50 Q 50 0 100 50 T 200 50"
              stroke="#c8c8c8"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0 150 Q 50 100 100 150 T 200 150"
              stroke="#c8c8c8"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-7">
          {/* Left Title */}
          <div>
            <h2
              className="text-[32px] font-bold leading-none mb-2"
              style={{
                fontFamily: "Italiana, serif",
                color: colors.brightRed,
              }}
            >
              GBCM
            </h2>

            <h3
              className="text-3xl md:text-6xl font-semibold uppercase tracking-wide"
              style={{ color: colors.deepBlue }}
            >
              Why Choose Us
            </h3>
          </div>

          {/* Intro Text */}
          <div className="max-w-2xl text-gray-700 leading-relaxed text-[15px]">
            At{" "}
            <span style={{ color: colors.green, fontWeight: "600" }}>
              Gaurav Bamboo Chick Maker
            </span>
            , we merge traditional craftsmanship with innovative design to
            create premium bamboo blinds that elevate your home and workspace.
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.id}
              className="
                group 
                relative 
                overflow-hidden 
                p-6 
               
                hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]
                transition-all duration-500 cursor-pointer
              "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#e8452d15] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Icon */}
              <div className="mb-3 relative z-10">{reason.icon}</div>

              {/* Title */}
              <h4
                className="
                  text-xl 
                  font-semibold 
                  mb-3 
                  relative 
                  z-10 
                  group-hover:text-green-700 
                  transition-colors duration-300
                "
                style={{ fontFamily: "Italiana, serif", color: colors.brightRed }}
              >
                {reason.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-700 leading-relaxed relative z-10">
                {reason.desc}
              </p>
            </motion.div>
          ))}
         
        </div>
      </div>
      <hr />
    </section>
  );
}
