// src/components/MapSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLeaf } from "react-icons/fa";

const colors = {
  leafGreen: "#2BA44A",
  golden: "#F4A300",
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  lightText: "#EDEDED",
};

export default function MapSection() {
  return (
    <section className="relative w-full py-20 px-6 bg-[#0A0A0A] overflow-hidden">

      {/* 🔥 Soft Glow Background */}
      <div className="absolute inset-0">
        <div
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-30 top-10 left-10"
          style={{ backgroundColor: colors.leafGreen }}
        ></div>
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-20 bottom-10 right-10"
          style={{ backgroundColor: colors.deepBlue }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center z-10">

        {/* 🌿 Left Side Text */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2
            className="text-4xl md:text-5xl font-bold leading-snug"
            style={{
              fontFamily: "Italiana, serif",
              color: colors.golden,
            }}
          >
            Visit Our  
            <span className="block text-white">Workshop & Store</span>
          </h2>

          <p
            className="text-lg text-gray-300 max-w-lg leading-relaxed"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Discover handcrafted <span className="text-green-400 font-semibold">Bamboo Chicks, Blinds,</span> 
            and eco-friendly décor solutions—made with precision and care.  
            Step into our workshop to explore materials, custom designs, and live craftsmanship.
          </p>

          {/* ⭐ Feature Highlights */}
          <div className="space-y-4">
            {[
              "Premium handcrafted bamboo products",
              "Customization available on all orders",
              "On-site fitting & installation support",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <FaLeaf className="text-green-400 text-xl" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>

          {/* 📞 Contact Details */}
          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-3 text-gray-200">
              <FaMapMarkerAlt className="text-green-400 text-2xl" />
              <span className="leading-tight">
                22, Aims Green Avenue, G-506, Bhangel,  
                <br /> Greater Noida, Ghaziabad, Uttar Pradesh 201318
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-200">
              <FaPhoneAlt className="text-green-400 text-xl" />
              <span>+91 7838788389</span>
            </div>

            <div className="flex items-center gap-3 text-gray-200">
              <FaEnvelope className="text-green-400 text-xl" />
              <span>support@bamboochickmaker.in</span>
            </div>
          </div>
        </motion.div>

        {/* 🗺️ Right Side Map */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-2xl border-[6px]"
          style={{ borderColor: colors.leafGreen }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112088.0973459814!2d77.36820789197947!3d28.60718459255291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cef0009621ea9%3A0xf1d5337d7cdcf903!2s22%2C%20Aims%20Green%20Avenue%2C%20G%20506%2C%20Bhangel%2C%20Greater%20Noida%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201318!3m2!1d28.6072095!2d77.4506093!5e0!3m2!1sen!2sin!4v1759393852601!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: "none" }}
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
