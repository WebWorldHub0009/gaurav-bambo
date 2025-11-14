// src/components/GalleryHero.jsx
import React, { useState, useEffect } from "react";
import bg from "../assets/home/cer1.jpg";
import { Link } from "react-router-dom";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

export default function GalleryHero() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bg;
    img.loading = "lazy";
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <section
      className="relative w-full h-[80vh] flex items-end overflow-hidden transition-all duration-700"
      style={{
        backgroundImage: bgLoaded ? `url(${bg})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#000",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Area */}
      <div className="relative z-10 px-6 pb-14 md:pb-20 lg:pl-20 max-w-4xl text-left">
        
        {/* Title */}
        <h1
          className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-xl mb-4"
          style={{
            fontFamily: "Italiana, serif",
            color: colors.whitePure,
          }}
        >
          Explore Our  
          <span style={{ color: colors.orangeGold }}> Finest Bamboo Work</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg max-w-lg leading-relaxed mb-6"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#E6E6E6",
          }}
        >
          Discover a curated collection of premium bamboo blinds, chicks, 
          and handcrafted décor designed to bring natural warmth and 
          elegance into your living spaces.
        </p>

        {/* CTA Button */}
        <div>
          <Link
            to="/contact"
            className="inline-block px-6 py-2 rounded-full text-sm md:text-base font-semibold border transition-all duration-300 hover:bg-white hover:text-black"
            style={{
              borderColor: colors.orangeGold,
              color: colors.orangeGold,
              fontFamily: "Zen Dots, sans-serif",
            }}
          >
            Get a Custom Quote
          </Link>
        </div>
      </div>

      {/* Hidden Lazy Loader */}
      <img src={bg} alt="background" loading="lazy" className="hidden" />
    </section>
  );
}
