// src/components/AboutHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Colors
const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

// Background image
import bg from "../assets/home/bbh4.jpg"; // Replace with your image

export default function AboutHero() {
  return (
    <section className="relative w-full h-[100vh] md:h-[80vh] flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src={bg}
        alt="About Gaurav Bamboo Chick Maker"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.6) 100%)",
        }}
      ></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-6 lg:px-20">
        {/* LEFT CONTENT */}
        <div className="w-full md:w-3/5 text-left">
          <h1
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{
              fontFamily: "Italiana, serif",
              color: colors.whitePure,
              lineHeight: "1.2",
            }}
          >
            <span style={{ color: colors.orangeGold }}>
              Gaurav Bamboo Chick Maker
            </span>
          </h1>

          <p
            className="text-sm md:text-xl leading-relaxed mb-4"
            style={{
              fontFamily: "Orbitron, sans-serif",
              color: colors.whitePure,
            }}
          >
            For generations, we’ve been crafting{" "}
            <span style={{ color: colors.leafGreen }}>eco-friendly bamboo chicks</span>{" "}
            that blend{" "}
            <span style={{ color: colors.deepBlue }}>heritage craftsmanship</span> with{" "}
            <span style={{ color: colors.brightRed }}>modern design</span>.  
            Our mission is to bring warmth, elegance, and sustainability into every
            home and space we touch.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/gallery"
              className="px-8 py-3 rounded-full font-semibold border-2 transition-transform hover:scale-105"
              style={{
                borderColor: colors.leafGreen,
                color: colors.leafGreen,
                fontFamily: "Zen Dots, sans-serif",
              }}
            >
              View Our Craft
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
              style={{
                backgroundColor: colors.orangeGold,
                color: colors.whitePure,
                fontFamily: "Zen Dots, sans-serif",
              }}
            >
              Let’s Work Together
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-2/5 mt-10 md:mt-0 flex flex-col items-center md:items-end text-center md:text-right">
          {/* Social Icons */}
          <div className="flex items-center gap-5 mb-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all hover:scale-110"
              style={{ borderColor: colors.orangeGold, color: colors.orangeGold }}
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all hover:scale-110"
              style={{ borderColor: colors.leafGreen, color: colors.leafGreen }}
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all hover:scale-110"
              style={{ borderColor: colors.brightRed, color: colors.brightRed }}
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>

          {/* Paragraph under icons */}
          <p
            className="max-w-sm  text-sm md:text-lg leading-relaxed"
            style={{
              color: colors.whitePure,
              fontFamily: "Orbitron, sans-serif",
            }}
          >
            Join our growing community of satisfied clients and design enthusiasts
            who trust Gaurav Bamboo Chick Maker for authentic craftsmanship and
            sustainable living.
          </p>
        </div>
      </div>
    </section>
  );
}
