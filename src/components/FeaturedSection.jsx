// src/components/FeaturedSection.jsx
import React from "react";
import product from "../assets/home/na2.jpg";
import { Link } from "react-router-dom";

// Horizon Projects Color Palette
const colors = {
  darkBlue: "#0A1626",
  accentGold: "#FACC15",
  graySoft: "#4A4A4A",
  white: "#FFFFFF",
};

const FeaturedSection = () => {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-[#f5ede3]">
      
      {/* Soft Gradient Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-[#FACC15] opacity-[0.10] blur-[180px] -top-20 -left-20"></div>
        <div className="absolute w-[600px] h-[600px] bg-[#ffffff] opacity-[0.08] blur-[160px] bottom-0 right-0"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        
        {/* Left Image - Premium Look */}
        <div className="w-full max-w-md">
          <div className="relative">
            <img
              src={product}
              alt="Luxury Interior Design"
              className="rounded-3xl h-[380px] w-full object-cover shadow-[0px_0px_40px_rgba(250,204,21,0.20)]"
            />

            {/* Gold Floating Tag */}
            <div className="absolute -bottom-4 -right-4 bg-[#FACC15] text-black font-bold px-6 py-2 rounded-xl shadow-xl text-sm tracking-wide uppercase">
              Interior Luxury
            </div>
          </div>
        </div>

        {/* Right Text Block */}
        <div className="max-w-xl text-center lg:text-left">

          {/* Tagline */}
          <h3
            className="text-lg tracking-wide mb-4"
            style={{
              color: colors.accentGold,
              fontFamily: "Italiana, serif",
            }}
          >
            “Luxury Crafted • Spaces Elevated”
          </h3>

          {/* Main Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold leading-snug mb-6"
            style={{
              color: colors.darkBlue,
              fontFamily: "Italiana, serif",
            }}
          >
            Transforming Spaces with  
            <span style={{ color: colors.accentGold }}> Precision</span> &  
            <span style={{ color: colors.graySoft }}> Elegance</span>
          </h2>

          {/* Description */}
          <p
            className="text-base md:text-lg leading-relaxed mb-10"
            style={{
              color: "#383838",
              fontFamily: "Inter, sans-serif",
            }}
          >
            At <b style={{ color: colors.accentGold }}>Horizon Projects</b>,
            we design and build interiors that represent luxury, depth,
            and timeless architecture. Every space is carefully crafted
            with premium materials, modern design, and exclusive detailing —
            ensuring your environment reflects sophistication and long-lasting beauty.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5">
            <Link to="/projects">
              <button
                className="px-8 py-3 rounded-full border-2 font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: colors.accentGold,
                  color: colors.darkBlue,
                  fontFamily: "Orbitron, sans-serif",
                }}
              >
                View Our Projects
              </button>
            </Link>

            <Link to="/contact">
              <button
                className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: colors.accentGold,
                  color: colors.darkBlue,
                  fontFamily: "Orbitron, sans-serif",
                }}
              >
                Get a Consultation
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
