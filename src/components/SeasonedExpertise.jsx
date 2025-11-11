// src/components/SeasonedExpertise.jsx
import React from 'react';
import { motion } from 'framer-motion';

// This is an assumed import for the image. Replace with your actual image path.
import expertiseImage from '../assets/expertise.jpg'; 

const SeasonedExpertise = () => {
  return (
    <section id="#why-6w-strategies" className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6"
              style={{ lineHeight: 1.02 }}
            >
              Seasoned Expertise
            </h2>

            <div
              className="space-y-5 text-gray-700 text-[1.03rem]"
              style={{ lineHeight: 1.7 }}
            >
              <p>
                6W Strategies was established to meet the comprehensive primary data collection demands—both quantitative and qualitative—across B2C and B2B market research, serving clients locally and globally.
              </p>
              <p>
                As an independent agency, our leadership team brings over 40+ years of experience from top-tier research consultancies in the Middle East.
              </p>
              <p>
                We operate in full alignment with ISO standards and maintain rigorous vendor compliance protocols.
              </p>
              <p>
                Our delivery process is powered by automation and governed by robust quality assurance and control systems to ensure precision and reliability at every stage.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src={expertiseImage} // Make sure to import this image
                alt="A professional in traditional Saudi attire analyzing complex data visualizations"
                className="w-full h-[320px] md:h-[360px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SeasonedExpertise;