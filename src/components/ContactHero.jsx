// src/components/ContactHero.jsx
import React from "react";
import bg from "../assets/home/n2.jpg";

const colors = {
  goldSoft: "#F4A300",
  greenSoft: "#2BA44A",
  deepBlue: "#1A304A",
  white: "#FFFFFF",
};

export default function ContactHero() {
  return (
    <section className="relative w-full h-[80vh] flex items-end pb-16 font-[Inter]">
      {/* Background */}
      <img
        src={bg}
        alt="Contact Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

 

      {/* Bottom-Left Content */}
      <div className="relative z-10 px-6 md:px-14 max-w-2xl text-left">
        {/* Heading */}
        <h1
          className="text-3xl md:text-5xl font-bold leading-snug mb-4"
          style={{ fontFamily: "Italiana, serif", color: colors.white }}
        >
          Connect With
          <span style={{ color: colors.greenSoft }}> Gaurav Bamboo Chick Maker</span>
        </h1>

        {/* Description */}
        <p
          className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-xl"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Whether you need custom bamboo blinds, premium farm solutions,
          or beautifully crafted home décor — we're here to guide you with
          expert craftsmanship and eco-friendly excellence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+917838788389"
            className="px-6 py-2 rounded-full font-semibold shadow-lg text-center transition-all text-black hover:scale-105"
            style={{
              backgroundColor: colors.greenSoft,
              fontFamily: "Zen Dots, sans-serif",
            }}
          >
            📞 Call Now
          </a>

          <a
            href="mailto:Gauravbamboochikmaker@gmail.com"
            className="px-6 py-2 rounded-full font-semibold shadow-lg border text-center transition-all hover:bg-white hover:text-black hover:scale-105"
            style={{
              borderColor: colors.white,
              color: colors.white,
              fontFamily: "Zen Dots, sans-serif",
            }}
          >
            ✉️ Send Email
          </a>
        </div>
      </div>
    </section>
  );
}
