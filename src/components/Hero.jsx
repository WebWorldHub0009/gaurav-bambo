// src/components/HeroSection.jsx
import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import {
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import img1 from "../assets/home/bh1.jpg";
import img2 from "../assets/home/bh2.jpg";
import img3 from "../assets/home/bh3.jpg";
import img4 from "../assets/home/bbh4.jpg";
import img5 from "../assets/home/bbh6.jpg";
import img6 from "../assets/home/bbh.jpg";

// 🧠 Constants outside component (no re-render)
const colors = {
  red: "#E8452D",
  black: "#000000",
  white: "#FFFFFF",
  gold: "#F4A300",
  blue: "#234A8A",
  green: "#2BA44A",
};

const slides = [img1, img2, img3, img4, img5, img6];

const highlights = [
  {
    tag: "Exclusive Design",
    title: "Premium Bamboo Chicks",
    desc: "Handcrafted with precision, offering durability & elegance.",
  },
  {
    tag: "Eco-Friendly",
    title: "Sustainable Craftsmanship",
    desc: "Made with natural bamboo, safe for your home & the planet.",
  },
  {
    tag: "Affordable Luxury",
    title: "Best Price Guarantee",
    desc: "Top-notch quality at prices that fit your budget.",
  },
  {
    tag: "Customizable",
    title: "Tailored For You",
    desc: "Get custom sizes & styles to match your interiors.",
  },
];

const socialLinks = [
  { icon: <FaInstagram />, url: "https://www.instagram.com/Gauravbamboochickmaker/" },
  { icon: <FaTwitter />, url: "https://x.com/Gauravbamboocm" },
  { icon: <FaPinterestP />, url: "https://in.pinterest.com/Gauravbamboochickmaker/" },
  { icon: <FaYoutube />, url: "https://www.youtube.com/@Gauravbamboochickmaker" },
];

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🔹 Main Swiper */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={800}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        preloadImages={false}
        lazy={true}
        className="w-full h-full"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `url(${img})`,
                transform: "translateZ(0)",
                willChange: "transform",
              }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                style={{ color: colors.white }}
              >
                Gaurav{" "}
                <span style={{ color: colors.red }}>Bamboo</span>{" "}
                <span style={{ color: colors.green }}>Chick</span> Maker
              </h1>

              <p
                className="text-sm sm:text-lg md:text-xl mb-6 max-w-2xl text-white"
                style={{ lineHeight: "1.6" }}
              >
                Highest Quality. Affordable Price. Crafted with tradition,
                designed for modern living.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                  <button
                    className="px-6 py-3 rounded-lg font-semibold shadow-lg bg-[#234A8A] text-white hover:opacity-90 transition"
                  >
                    Explore Products
                  </button>
                </Link>
                <Link to="/contact">
                  <button
                    className="px-6 py-3 rounded-lg font-semibold shadow-lg border border-[#F4A300] text-[#F4A300] hover:bg-[#F4A300] hover:text-black transition"
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Highlights (Desktop) */}
            <div className="hidden md:grid absolute bottom-0 w-full px-16 py-6 grid-cols-4 gap-6 bg-black/70 text-left backdrop-blur-sm">
              {highlights.map((h, idx) => (
                <div key={idx} className="transition-all">
                  <p className="uppercase text-sm mb-2 tracking-wide text-[#F4A300]">
                    {h.tag}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-1">{h.title}</h3>
                  <p className="text-sm text-white/90">{h.desc}</p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔹 Social Icons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 flex flex-col gap-3 z-50">
        {socialLinks.map((s, idx) => (
          <a
            key={idx}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white text-white hover:bg-white/30 transition"
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Custom Pagination Dots */}
      <div className="custom-pagination absolute top-1/2 -translate-y-1/2 right-6 flex flex-col gap-3 z-50"></div>
    </section>
  );
};

export default memo(HeroSection);
