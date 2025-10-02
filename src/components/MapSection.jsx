// src/components/MapSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="relative w-full bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold tracking-wide text-[#D73C24] uppercase">
            Gaurav Bamboo Chick Maker
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            We specialize in premium quality **Bamboo Chicks & Blinds**, crafted 
            with care to add natural elegance to your spaces. Visit us at our 
            location and experience top-notch craftsmanship.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-200">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-500 text-xl" />
              <span>
                22, Aims Green Avenue, G 506, Bhangel, Greater Noida, Ghaziabad, Uttar Pradesh 201318
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-500 text-xl" />
              <span> +91 7838788389</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-500 text-xl" />
              <span>info@gauravbamboochickmaker.com</span>
            </div>
          </div>
        </motion.div>

        {/* Right Google Map */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#3CB371]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112088.0973459814!2d77.36820789197947!3d28.60718459255291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cef0009621ea9%3A0xf1d5337d7cdcf903!2s22%2C%20Aims%20Green%20Avenue%2C%20G%20506%2C%20Bhangel%2C%20Greater%20Noida%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201318!3m2!1d28.6072095!2d77.4506093!5e0!3m2!1sen!2sin!4v1759393852601!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
