// src/components/CertificateHero.jsx
import React from "react";
import certBg from "../assets/home/cer.jpg";

export default function CertificateHero() {
  return (
    <section
      className="relative w-full h-[75vh] text-white overflow-hidden flex items-end"
      style={{
        backgroundImage: `url(${certBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ✨ Top-Right Quote Box */}
      <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 max-w-xs shadow-xl hidden md:block">
        <p
          className="text-sm leading-relaxed"
          style={{ fontFamily: "Italiana, serif" }}
        >
          “Authenticity is our signature —  
          every certified piece reflects  
          <span className="text-[#FFD24C] font-semibold">true craftsmanship</span>  
          and <span className="text-[#FFD24C] font-semibold">natural elegance.</span>”
        </p>
      </div>

      {/* Bottom-Left Content */}
      <div className="relative z-10 p-6 pb-14 md:pl-16 md:pb-20 max-w-3xl">
        {/* Title */}
        <h1
          className="text-3xl md:text-5xl font-bold leading-tight mb-4"
          style={{ fontFamily: "Italiana, serif" }}
        >
          Certified Excellence in  
          <span className="text-[#FFD24C]"> Bamboo Craft</span>
        </h1>

        {/* Description */}
        <p
          className="text-base md:text-lg max-w-xl text-gray-200 leading-relaxed mb-6"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Every bamboo blind and handcrafted product we create meets  
          strict quality standards — verified, approved, and trusted by  
          residential & commercial spaces across India.
        </p>

        {/* CTA */}
        <a
          href="/contact"
          className="inline-block px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 
          bg-gradient-to-r from-[#FFD24C] to-[#B8860B] text-black shadow-lg hover:scale-105 hover:shadow-2xl"
          style={{ fontFamily: "Zen Dots, sans-serif" }}
        >
          Verify Certification
        </a>
      </div>
    </section>
  );
}
