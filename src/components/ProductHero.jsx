// src/components/ProductHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/home/bh1.jpg";

// Brand Colors
const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

export default function ProductHero() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-end"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 pb-14 md:pb-20 lg:pl-20 text-left">
        {/* Main Title */}
        <h1
          className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg mb-4"
          style={{
            fontFamily: "Italiana, serif",
            color: colors.whitePure,
          }}
        >
          Handcrafted Bamboo  
          <span style={{ color: colors.orangeGold }}> Blinds</span> &  
          <span style={{ color: colors.leafGreen }}> Decor</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg leading-relaxed max-w-lg mb-6"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#E6E6E6",
          }}
        >
          Sustainable, elegant and long-lasting bamboo creations —
          crafted with precision to elevate your home and workspace
          with natural texture and warmth.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 mt-2">
          <Link to="/contact">
            <button
              className="cursor-pointer px-6 py-2 rounded-full text-sm md:text-base font-semibold shadow-md transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: colors.orangeGold,
                color: colors.whitePure,
                fontFamily: "Zen Dots, sans-serif",
              }}
            >
              Shop Now
            </button>
          </Link>

          <Link to="/gallery">
            <button
              className="cursor-pointer px-6 py-2 rounded-full text-sm md:text-base font-semibold border transition-all duration-300 hover:bg-white hover:text-black"
              style={{
                borderColor: colors.whitePure,
                color: colors.whitePure,
                fontFamily: "Zen Dots, sans-serif",
              }}
            >
              View Gallery
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
