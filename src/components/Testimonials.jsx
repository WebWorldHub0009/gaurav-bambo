// src/components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// 🎨 Brand Colors
const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

// 🌿 Updated Testimonials (Completely New)
const testimonials = [
  {
    name: "Karan Vats",
    title: "Villa Owner, Udaipur",
    text: "Their bamboo chicks are not only beautiful but also extremely efficient at blocking harsh sunlight. My living room now stays cool and cozy throughout the day.",
  },
  {
    name: "Divya Arora",
    title: "Interior Consultant, Gurgaon",
    text: "I trust them for all my eco-friendly projects. The texture, finish, and durability of their bamboo blinds stand out every single time.",
  },
  {
    name: "Mukesh Sondhi",
    title: "Restaurant Partner, Panipat",
    text: "We wanted an earthy ambience without losing comfort. Their bamboo work gave our restaurant the perfect rustic vibe guests love.",
  },
  {
    name: "Tanya Fernandes",
    title: "Eco Architect, Goa",
    text: "We chose their products for a sustainable construction project. The installation was seamless and the final look was incredibly natural.",
  },
  {
    name: "Irfan Ali",
    title: "Boutique Owner, Mussoorie",
    text: "The bamboo shades bring in soft filtered light that adds a premium touch to my store. Completely changed the look of the interior.",
  },
  {
    name: "Nisha Chauhan",
    title: "Teacher & Planner, Indore",
    text: "Lightweight, affordable, and aesthetic! The bamboo chicks gave my classroom a pleasant warmth and a cleaner environment.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="relative w-full py-14 bg-gradient-to-b from-white via-[#FDFDFD] to-[#F7F7F7] px-4 md:px-10 font-[Raleway] overflow-hidden">

      {/* ✨ Background Overlays */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `linear-gradient(90deg, ${colors.leafGreen}20, transparent, ${colors.deepBlue}20)`,
          }}
        ></div>

        <div
          className="absolute top-10 right-20 w-64 h-64 blur-3xl rounded-full animate-pulse"
          style={{ backgroundColor: `${colors.leafGreen}40` }}
        ></div>

        <div
          className="absolute bottom-10 left-20 w-72 h-72 blur-2xl rounded-full animate-pulse"
          style={{ backgroundColor: `${colors.deepBlue}25` }}
        ></div>
      </div>

      {/* 🌟 Updated Heading */}
      <div className="relative max-w-6xl mx-auto text-center mb-16 z-10">
        <h2
          className="text-3xl md:text-5xl font-extrabold tracking-tight"
          style={{
            fontFamily: "Italiana, serif",
            color: colors.blackPure,
            letterSpacing: "-1px",
          }}
        >
          Voices of Our{" "}
          <span style={{ color: colors.leafGreen }}>Satisfied Clients</span>
        </h2>

        <p
          className="italic mt-4 text-base md:text-lg max-w-3xl mx-auto opacity-90"
          style={{
            fontFamily: "Raleway, sans-serif",
            color: colors.deepBlue,
          }}
        >
          “Real experiences from people who transformed their spaces with
          natural, handcrafted bamboo solutions.”
        </p>
      </div>

      {/* 🌿 Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative rounded-2xl p-8 h-full bg-white 
              border border-gray-200 text-[#1C1C1C] shadow-md
              hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Updated Badge */}
              <span
                className="absolute -top-5 left-5 text-[10px] font-bold px-3 py-1 rounded-xl shadow-md tracking-wide"
                style={{
                  backgroundColor: colors.orangeGold,
                  color: colors.whitePure,
                  fontFamily: "Raleway, sans-serif",
                }}
              >
                ✔ Trusted Review
              </span>

              {/* Updated Quote Icon */}
              <FaQuoteLeft
                className="text-4xl mb-4 opacity-80"
                style={{
                  color: colors.brightRed,
                  filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.15))",
                }}
              />

              {/* Updated Text */}
              <p
                className="mb-6 leading-relaxed"
                style={{
                  fontFamily: "Raleway, sans-serif",
                  color: "#4A4A4A",
                  fontSize: "0.95rem",
                }}
              >
                {item.text}
              </p>

              {/* Client Info */}
              <div>
                <p
                  className="font-semibold text-lg"
                  style={{ color: colors.leafGreen }}
                >
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
