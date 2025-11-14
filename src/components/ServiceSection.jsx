// src/components/Product.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import bambooJafhari from "../assets/product/jaf.jpg";
import dwali from "../assets/product/dchick.jpg";
import kabutar from "../assets/product/pigeon.jpg";
import roller from "../assets/home/bh2.jpg";
import bambo from "../assets/product/hut.jpg";
import fchick from "../assets/product/fchick.jpg";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const products = [
  {
    title: "Bamboo Jafhari",
    slug: "bamboo-jafhari",
    imgSrc: bambooJafhari,
    description:
      "Premium-grade bamboo jafhari designed for long-lasting outdoor and indoor coverage with exceptional durability.",
  },
  {
    title: "Design Wali Chick",
    slug: "design-wali-chick",
    imgSrc: dwali,
    description:
      "Stylish designer bamboo chicks crafted for homes, balconies, and shops for privacy and aesthetic appeal.",
  },
  {
    title: "Kabutar Jali",
    slug: "kabutar-jali",
    imgSrc: kabutar,
    description:
      "Strong kabutar jali designed to protect open spaces from birds while allowing full ventilation.",
  },
  {
    title: "Roller Blind",
    slug: "roller-blind",
    imgSrc: roller,
    description:
      "Modern roller blinds suitable for windows, offices, and balconies with premium shading quality.",
  },
  {
    title: "Bamboo Huts",
    slug: "bamboo-huts",
    imgSrc: bambo,
    description:
      "Naturally insulated bamboo huts perfect for farmhouses, resorts, and outdoor setups.",
  },
  {
    title: "Bird Net & Fancy Chick Maker",
    slug: "bird-net-fancy-chick-maker",
    imgSrc: fchick,
    description:
      "High-quality bird nets and fancy chick blinds crafted for safety, durability, and professional use.",
  },
];

export default function Product() {
  return (
    <section className="relative py-14 text-center bg-white">
      <div className="relative z-10 px-4 max-w-7xl mx-auto">

        {/* Heading */}
        <h2
          className="uppercase tracking-wider text-sm font-bold"
          style={{ color: colors.brightRed }}
        >
          Our <span style={{ color: colors.orangeGold }}>Products</span>
        </h2>

        <h3
          className="text-3xl sm:text-5xl font-bold mt-3 leading-snug"
          style={{ color: colors.blackPure }}
        >
          Premium{" "}
          <span style={{ color: colors.leafGreen }}>Bamboo Solutions</span> by
          Gaurav Bamboo Chick Maker.
        </h3>

        <p className="text-gray-700 max-w-3xl mx-auto mt-4 mb-12">
          Explore our complete range of handcrafted bamboo products designed for
          durability, beauty, and long-term performance.
        </p>

        {/* PRODUCT GRID – NEW CLEAN LAYOUT */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => (
            <Link
              to={`/products/${product.slug}`}
              key={idx}
              className="group relative w-full h-72 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={product.imgSrc}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 bg-white/70 p-2 rounded-full shadow-md backdrop-blur-md">
                <FaArrowRight className="text-gray-800 text-[18px]" />
              </div>

              {/* Text Content */}
              <div className="absolute left-5 bottom-5 text-left max-w-[80%]">
                <h4 className="text-2xl font-bold text-white drop-shadow-xl">
                  {product.title}
                </h4>
                <p className="text-white text-sm mt-2 drop-shadow-xl line-clamp-2">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom text */}
        <p className="mt-10 text-gray-700">
          Need any custom bamboo work?{" "}
          <Link
            to={"/contact"}
            className="underline font-medium"
            style={{ color: colors.brightRed }}
          >
            Contact Us
          </Link>
        </p>
      </div>
    </section>
  );
}
