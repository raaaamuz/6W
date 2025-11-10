import React from 'react';
import { motion } from 'framer-motion';
import visionMissionGraphic from '../assets/vision-mission-graphic.png'; // Make sure you've saved the image here

// Reusable Icon components for clarity
const VisionIcon = () => (
  <svg width="60" height="42" viewBox="0 0 64 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
    <path d="M1 21C1 21 10.6 3 32 3C53.4 3 63 21 63 21C63 21 53.4 39 32 39C10.6 39 1 21 1 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 27C35.3137 27 38 24.3137 38 21C38 17.6863 35.3137 15 32 15C28.6863 15 26 17.6863 26 21C26 24.3137 28.6863 27 32 27Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="20" y1="1" x2="20" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="44" y1="1" x2="44" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="9" x2="12" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="52" y1="11" x2="56" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MissionIcon = () => (
  <svg width="60" height="52" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
    <path d="M42 26V10H62L56 18L62 26H42Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M42 50V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 30L34 10L42 26L32 26L22 50H2L22 30Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const VisionMission = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const graphicVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="vision-mission"
      className="relative bg-white py-20 sm:py-24 overflow-hidden" // `relative` is for the 6W tag
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div variants={textVariants} className="space-y-16">
            {/* Vision Block */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 pt-1">
                <VisionIcon />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight mb-4">
                  Vision 360°
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the most trusted source of actionable intelligence, empowering
                  organizations to make smarter, faster, and more human-centred decisions.
                </p>
              </div>
            </div>

            {/* Mission Block */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 pt-1">
                <MissionIcon />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight mb-4">
                  Mission 6W Strategies
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To deliver deep, real-time data through innovative technology and
                  human expertise — answering the six essential questions that drive
                  understanding, action, and growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Graphic */}
          <motion.div variants={graphicVariants}>
            <img
              src={visionMissionGraphic}
              alt="A stylized hand tracing an upward trending business growth chart"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      {/* 6W Tag in the bottom-left corner */}
      <div className="absolute bottom-0 left-0 bg-blue-900 text-white font-bold py-2 px-8 text-lg">
        6W
      </div>
    </motion.section>
  );
};

export default VisionMission;