// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const gradientText =
    "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent bg-[length:200%_auto]";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/70 to-indigo-900/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* --- MAIN LOGO --- */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <motion.h1
            className={`text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] font-black mb-8 tracking-tight ${gradientText}`}
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.02em",
              textShadow: "0 0 20px rgba(100, 100, 255, 0.15)"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            6W STRATEGIES
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-[3px] bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10 rounded-full"
          />
        </motion.div>

        {/* --- TAGLINE --- */}
        <motion.h2
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-2xl md:text-4xl lg:text-5xl font-light mb-8 leading-relaxed max-w-4xl mx-auto"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <span className="text-blue-300 font-semibold">Strategic insights</span> and{' '}
          <span className="text-purple-300 font-semibold">data-driven solutions</span> for{' '}
          <span className="text-indigo-300 font-semibold">business excellence</span>
        </motion.h2>

        {/* --- DESCRIPTION --- */}
        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300 font-normal"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Premier market research fieldwork delivering precision data collection and exceptional participant recruitment across global markets.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
