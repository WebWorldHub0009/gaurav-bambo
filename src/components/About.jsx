// src/components/About.jsx
import React from "react";
import { FaLeaf, FaHammer, FaPaintBrush, FaGlobeAsia } from "react-icons/fa";
import aboutImg from "../assets/home/na1.jpg";
import { Link } from "react-router-dom";

export default function About() {
  const features = [
    {
      icon: <FaLeaf className="text-2xl text-green-600" />,
      title: "Eco-Conscious Crafting",
      desc: "Sustainably sourced bamboo treated for long life.",
    },
    {
      icon: <FaHammer className="text-2xl text-yellow-500" />,
      title: "Master Artisan Work",
      desc: "Built with precision by trained professionals.",
    },
    {
      icon: <FaPaintBrush className="text-2xl text-red-500" />,
      title: "Tailored Aesthetics",
      desc: "Designed to complement every modern interior.",
    },
    {
      icon: <FaGlobeAsia className="text-2xl text-blue-700" />,
      title: "Nationwide Service",
      desc: "Reliable delivery & installation across India.",
    },
  ];

  return (
    <section className="relative bg-[#f5ede3] py-10 px-6 md:px-16 font-[Raleway] overflow-hidden">

      {/* Watermark */}
      <h1 className="absolute top-24 inset-0 text-[6rem] md:text-[9rem] font-extrabold tracking-widest opacity-5 text-black text-center pointer-events-none">
        Gaurav
      </h1>

      <div className="relative z-20 max-w-7xl mx-auto space-y-16">

        {/* Center Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#234A8A] font-['Italiana']">
            Redefining Spaces with Natural Bamboo Artistry
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-black font-['Zen_Dots']">
            Premium handcrafted bamboo blinds designed to elevate homes,
            commercial spaces, and architectural interiors with timeless
            elegance.
          </p>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="About Us"
              className="rounded-xl shadow-2xl w-full md:w-[90%] h-[370px] md:h-[500px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h3 className="text-3xl font-semibold text-[#E8452D] font-['Orbitron']">
              Our Commitment to Excellence
            </h3>

            <p className="mt-2 text-[#000] leading-relaxed">
              Gaurav Bamboo Chick Maker stands for quality, craftsmanship, and
              trust. Every blind we create is the result of refined skills,
              high-grade bamboo selection, and a dedication to delivering
              long-lasting solutions that add both functionality and beauty to
              your space. Our expertise combined with a customer-first approach
              has made us a reliable name in the bamboo blinds industry.
            </p>

            <Link to="/about">
              <button className="mt-3 px-7 py-3 bg-[#234A8A] text-white rounded-md shadow-md font-['Orbitron'] hover:bg-blue-800 transition">
                Learn More
              </button>
            </Link>

            {/* Features → 2 Per Row Grid */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3"
                >
                  {item.icon}
                  <div>
                    <p className="font-semibold text-black">{item.title}</p>
                    <p className="text-[#333] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
