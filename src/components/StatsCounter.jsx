// src/components/StatsSection.jsx
import React, { useEffect, useState } from "react";
import { FaLeaf, FaSmile, FaRegSun, FaUsers } from "react-icons/fa";
import logo from "../assets/galogo.png";

// Color Palette
const colors = {
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGray: "#555555",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

// Counter StatCard Component
const StatCard = ({ icon: Icon, label, target, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cleanTarget = target.trim().toUpperCase();
    let multiplier = 1;
    if (cleanTarget.includes("K")) multiplier = 1000;
    if (cleanTarget.includes("M")) multiplier = 1000000;

    const numericPart = parseFloat(cleanTarget.replace(/[^\d.]/g, ""));
    const finalTarget = Math.floor(numericPart * multiplier);
    const duration = 2000;
    const increment = finalTarget / (duration / 10);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= finalTarget) {
        current = finalTarget;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, 10);

    return () => clearInterval(interval);
  }, [target]);

  const formatCount = () => {
    const plus = target.includes("+") ? "+" : "";
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M${plus}`;
    if (count >= 1000) return `${Math.floor(count / 1000)}K${plus}`;
    return `${count}${plus}`;
  };

  return (
    <div className="flex flex-col items-center py-8 px-6 hover:shadow-xl transition-all duration-300">
      <div
        className="w-16 h-16 flex items-center justify-center rounded-full mb-4"
        style={{ backgroundColor: color + "22" }}
      >
        <Icon className="text-3xl" style={{ color }} />
      </div>
      <div
        className="text-3xl font-bold"
        style={{ fontFamily: "Zen Dots, sans-serif", color: colors.blackPure }}
      >
        {formatCount()}
      </div>
      <p
        className="text-sm mt-2 text-center"
        style={{ fontFamily: "Orbitron, sans-serif", color: colors.darkGray }}
      >
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-10 px-6 md:px-20 bg-gray-50">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-5">
        <h2
          className="text-sm tracking-widest uppercase mb-3"
          style={{
            fontFamily: "Orbitron, sans-serif",
            color: colors.brightRed,
          }}
        >
          Gaurav Bamboo Chick Maker
        </h2>
        <h3
          className="text-4xl md:text-5xl font-bold leading-snug mb-5"
          style={{
            fontFamily: "Italiana, serif",
            color: colors.blackPure,
          }}
        >
          Redefining{" "}
          <span style={{ color: colors.leafGreen }}>Sustainability</span> with{" "}
          <span style={{ color: colors.orangeGold }}>Elegance</span>
        </h3>
        <p
          className="text-base md:text-lg italic"
          style={{
            fontFamily: "Orbitron, sans-serif",
            color: colors.darkGray,
          }}
        >
          Handcrafted bamboo chicks designed to add comfort, style, and a touch of
          nature to your living spaces.
        </p>
      </div>

      {/* Brand Highlight */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-10 max-w-6xl mx-auto">
        <div className="text-left">
          <h2
            className="text-6xl mb-4"
            style={{
              fontFamily: "Zen Dots, sans-serif",
              color: colors.orangeGold,
            }}
          >
            20+
          </h2>
          <p
            className="leading-relaxed text-lg"
            style={{
              fontFamily: "Orbitron, sans-serif",
              color: colors.darkGray,
            }}
          >
            For over{" "}
            <span className="font-semibold" style={{ color: colors.blackPure }}>
              two decades
            </span>
            , <b style={{ color: colors.brightRed }}>Gaurav Bamboo Chick Maker</b> has
            been delivering trusted, durable, and beautiful bamboo products that
            reflect both{" "}
            <span style={{ color: colors.leafGreen }}>craftsmanship</span> and{" "}
            <span style={{ color: colors.orangeGold }}>quality</span>.
          </p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <img
            src={logo}
            alt="Company Logo"
            className="w-24 h-24 rounded-full shadow-xl border-2"
            style={{ borderColor: colors.orangeGold }}
          />
          <div>
            <p
              className="font-semibold text-xl"
              style={{ fontFamily: "Italiana, serif", color: colors.blackPure }}
            >
              Gaurav Bamboo
            </p>
            <p
              className="text-sm"
              style={{
                fontFamily: "Orbitron, sans-serif",
                color: colors.darkGray,
              }}
            >
              Chick Maker
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        <StatCard
          icon={FaLeaf}
          label="Eco-Friendly Products"
          target="100+"
          color={colors.leafGreen}
        />
        <StatCard
          icon={FaSmile}
          label="Happy Clients"
          target="1200+"
          color={colors.orangeGold}
        />
        <StatCard
          icon={FaRegSun}
          label="Custom Designs"
          target="150+"
          color={colors.brightRed}
        />
        <StatCard
          icon={FaUsers}
          label="Skilled Artisans"
          target="40+"
          color={colors.blackPure}
        />
      </div>
    </section>
  );
};

export default StatsSection;
