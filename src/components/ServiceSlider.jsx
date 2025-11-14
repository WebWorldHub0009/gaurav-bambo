// src/components/Product.jsx
import React from "react";
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

const services = [
  {
    title: "Premium Bamboo Chick",
    slug: "premium-bamboo-chick",
    description:
      "Handcrafted bamboo chicks designed for long life, ventilation, and elegant home shading.",
  },
  {
    title: "Stylish Designer Chick",
    slug: "stylish-designer-chick",
    description:
      "Modern patterns with traditional bamboo craft. Perfect for balconies, farms, and shops.",
  },
  {
    title: "Anti-Pigeon Jali",
    slug: "anti-pigeon-jali",
    description:
      "Strong pigeon protection jali that ensures safety without compromising airflow.",
  },
  {
    title: "Roller Blinds",
    slug: "roller-blinds",
    description:
      "Smooth and durable roller blinds—easy to use and ideal for home, farmhouse, and offices.",
  },
  {
    title: "Bamboo Huts & Shade",
    slug: "bamboo-huts-shade",
    description:
      "Durable bamboo huts crafted for farms, gardens, terraces, and restaurants with natural aesthetics.",
  },
  {
    title: "Bird Nets & Fancy Chick",
    slug: "bird-nets-fancy-chick",
    description:
      "Eco-friendly nets and fancy bamboo chicks designed for secure poultry and stylish interiors.",
  },
];

export default function Product() {
  return (
    <section className="relative py-16 bg-whitePure font-[Poppins]">
      <div className="px-4 max-w-6xl mx-auto">

        {/* Section Heading */}
        <h2
          className="uppercase tracking-wider text-sm font-bold text-center"
          style={{ color: colors.brightRed }}
        >
          Our <span style={{ color: colors.orangeGold }}>Services</span>
        </h2>

        <h3
          className="text-3xl sm:text-5xl font-bold mt-3 text-center"
          style={{ color: colors.blackPure }}
        >
          Explore{" "}
          <span style={{ color: colors.leafGreen }}>Premium Solutions</span> for
          Your Space
        </h3>

        <p className="text-gray-600 max-w-3xl mx-auto mt-5 mb-10 text-center">
          Discover our range of high-quality bamboo products crafted with
          expertise and precision. Select any service to learn more.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-r from-[#f9f9f9] to-[#ffffff] shadow-lg border border-gray-200 rounded-2xl p-6 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <h4 className="text-xl uppercase font-bold text-gray-800 mb-3">
                {service.title}
              </h4>

              <p className="text-sm text-gray-600 mb-5 text-center">
                {service.description}
              </p>

              <Link
                to={`/products/${service.slug}`}
                className="px-6 py-2 rounded-full text-white font-semibold shadow-md"
                style={{
                  background: `linear-gradient(90deg, ${colors.deepBlue}, ${colors.darkGreen})`,
                }}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-12 text-gray-700 text-center">
          Looking for custom solutions?{" "}
          <Link
            to={"/contact"}
            className="underline font-medium"
            style={{ color: colors.brightRed }}
          >
            Get in touch
          </Link>
        </p>
      </div>
    </section>
  );
}
