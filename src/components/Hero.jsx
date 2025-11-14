// src/components/HeroSection.jsx
import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import {
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import img1 from "../assets/home/n1.jpg";
import img2 from "../assets/home/n2.jpg";
import img3 from "../assets/home/n3.jpg";
// import img4 from "../assets/home/bbh4.jpg";
import img5 from "../assets/home/n4.jpg";
import img6 from "../assets/home/na5.jpg";

const colors = {
  red: "#E8452D",
  black: "#000000",
  white: "#FFFFFF",
  gold: "#F4A300",
  blue: "#234A8A",
  green: "#2BA44A",
};

const slides = [img1, img2, img3, img6, img5, ];

const socialLinks = [
  { icon: <FaInstagram />, url: "https://www.instagram.com/Gauravbamboochickmaker/" },
  { icon: <FaTwitter />, url: "https://x.com/Gauravbamboocm" },
  { icon: <FaPinterestP />, url: "https://in.pinterest.com/Gauravbamboochickmaker/" },
  { icon: <FaYoutube />, url: "https://www.youtube.com/@Gauravbamboochickmaker" },
];

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden font-[Poppins]">

      {/* SWIPER BACKGROUND */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={900}
        autoplay={{ delay: 3500 }}
        className="w-full h-full"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            {/* Image Background */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* LEFT-BOTTOM CONTENT */}
            <div className="absolute bottom-14 left-12 sm:left-20 max-w-xl text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
                Gaurav{" "}
                <span style={{ color: colors.red }}>Bamboo</span>{" "}
                <span style={{ color: colors.green }}>Chick</span> Maker
              </h1>

              <p
                className="text-sm sm:text-lg max-w-md text-white/90 leading-relaxed mb-6"
              >
                Premium handcrafted bamboo chicks designed for elegance,
                durability, and modern spaces.
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <Link to="/services">
                  <button
                    className="px-7 py-3 rounded-lg font-semibold bg-[#234A8A] text-white hover:opacity-90 transition"
                  >
                    Explore Products
                  </button>
                </Link>

                <Link to="/contact">
                  <button
                    className="px-7 py-3 rounded-lg font-semibold border border-[#F4A300] text-[#F4A300] hover:bg-[#F4A300] hover:text-black transition"
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TOP-RIGHT SOCIAL ICONS */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {socialLinks.map((s, idx) => (
          <a
            key={idx}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 transition"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default memo(HeroSection);
