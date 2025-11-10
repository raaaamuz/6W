// src/components/TechAndTalent.jsx
import React from 'react';
import { motion } from 'framer-motion';
// This component uses expertise.jpg
import expertiseImage from '../assets/technology.jpg';

const TechAndTalent = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98, x: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="tech-and-talent"
      className="bg-gray-50 py-20 sm:py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <motion.div
            variants={imageVariants}
            className="relative group"
            aria-hidden="false"
          >
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src={expertiseImage}
                alt="6W Strategies team collaborating on a data strategy"
                className="w-full h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* soft gradient overlay */}
              <div
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(99,102,241,0.06) 0%, rgba(99,102,241,0.02) 40%, rgba(0,0,0,0.12) 100%)',
                }}
              />
            </div>

            {/* subtle caption for smaller screens */}
            <div className="mt-4 sm:hidden text-sm text-gray-500 text-center">
              Our field teams use modern tools and stringent QA to deliver consistent, reliable results.
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div variants={itemVariants}>
            <h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
              style={{ lineHeight: 1.02 }}
            >
              Leading with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technology
              </span>{' '}
              and Talent
            </h2>

            <div
              className="space-y-5 text-gray-700 text-[1.03rem]"
              style={{ lineHeight: 1.7 }}
            >
              <p>
                6W Strategies stands at the cutting edge of data collection, leveraging the full capabilities of the NIPO
                suite to uphold the highest standards in recruitment, sampling integrity, fraud prevention, and data quality.
              </p>

              <p>
                Our field force of <strong className="text-indigo-600">150+ trained interviewers</strong> — both male and female —
                includes industry-specific specialists strategically positioned across the Kingdom of Saudi Arabia.
              </p>

              <p>
                A disciplined employee engagement framework—centered on performance management and incentivization—drives
                consistent, high-quality project execution across all study types.
              </p>

              <p>
                We maintain deep relationships with senior consultants and clients throughout KSA, partnering on project design
                and sample strategy to ensure dependable, actionable insights.
              </p>
            </div>

            {/* small CTA row (optional) */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Speak to Our Team
              </a>

              <a
                href="#why-6w-strategies"
                className="inline-block text-indigo-700 font-medium py-3 px-4 rounded-full border border-indigo-100 hover:bg-indigo-50 transition-colors duration-200"
              >
                See Our Expertise
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechAndTalent;