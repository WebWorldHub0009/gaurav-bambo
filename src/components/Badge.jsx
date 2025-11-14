// src/components/WeSecureBadge.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaLeaf,
  FaStar,
  FaPagelines,
  FaCheckCircle,
} from "react-icons/fa";

export default function WeSecureBadge() {
  return (
    <section className="w-full bg-gradient-to-br from-[#050505] via-[#0b0b0b] to-[#050505] py-10 px-6 md:px-16 font-[Poppins] relative overflow-hidden">

      {/* Premium Glow Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-64 h-64 bg-[#b4ff58] blur-[120px] rounded-full top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-[#7cff4f] blur-[150px] rounded-full bottom-10 right-10"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between bg-[#0f0f0f]/80 border border-[#aaff66]/20 shadow-[0_0_40px_#1a1a1a] rounded-3xl px-10 py-10 backdrop-blur-xl relative z-10 gap-12">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left max-w-3xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-[#beff6c] flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">

            <span className="flex items-center gap-2">
              <FaShieldAlt className="text-[#beff6c]" />
              Durable
            </span>

            <span className="hidden sm:block">•</span>

            <span className="flex items-center gap-2">
              <FaLeaf className="text-[#beff6c]" />
              Eco-Friendly
            </span>

            <span className="hidden sm:block">•</span>

            <span className="flex items-center gap-2">
              <FaStar className="text-[#beff6c]" />
              Premium Craft
            </span>
          </h3>

          <p className="text-gray-300 text-sm sm:text-lg leading-relaxed font-light">
            Welcome to{" "}
            <span className="text-[#beff6c] font-semibold">
              Gaurav Bamboo Chicks Maker
            </span>
            — where craftsmanship meets sustainability.  
            Each bamboo chick, net, and hut is built with{" "}
            <span className="text-[#beff6c] font-semibold">precision</span>,{" "}
            <span className="text-[#beff6c] font-semibold">strength</span>, and{" "}
            <span className="text-[#beff6c] font-semibold">
              long-lasting durability
            </span>.
            <br /><br />
            Our products are trusted by homes, offices, restaurants, showrooms,
            and premium eco-living spaces across India.  
            We focus on creating timeless designs that elevate your interiors
            while protecting nature.
          </p>
        </div>

        {/* CTA BUTTON */}
        <div className="flex w-full lg:w-auto justify-center lg:justify-end">
          <Link
            to="/contact"
            className="px-10 py-3 text-lg font-semibold rounded-full 
            bg-gradient-to-r from-[#beff6c] to-[#9aff4d] text-black
            shadow-[0_8px_25px_rgba(150,255,100,0.5)]
            hover:shadow-[0_12px_35px_rgba(150,255,100,0.7)]
            hover:scale-[1.05] transition-all duration-300"
          >
            Get Your Bamboo Solution
          </Link>
        </div>
      </div>
    </section>
  );
}
