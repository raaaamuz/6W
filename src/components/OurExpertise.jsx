import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaCar, FaUniversity, FaBuilding, FaBroadcastTower, FaMobileAlt, FaShoppingBag, FaSmoking, FaPlane, FaStore, FaTv, FaShieldAlt } from 'react-icons/fa';

const expertiseList = [
  'Director involvement on every project',
  'Dedicated project manager on every project',
  'Trusted network of over 300 interviewers and recruiters',
  'Nationwide coverage',
  'Flexible working hours',
  'Pre-checking of participants',
  'Screening-out of professional respondents',
  'Validation and quality checks on data as standard',
  'Fast turnaround on projects',
  'On-time delivery',
];

const industryIcons = [
  { icon: <FaHeartbeat /> }, { icon: <FaCar /> }, { icon: <FaUniversity /> }, { icon: <FaBuilding /> },
  { icon: <FaBroadcastTower /> }, { icon: <FaMobileAlt /> }, { icon: <FaShoppingBag /> }, { icon: <FaSmoking /> },
  { icon: <FaPlane /> }, { icon: <FaStore /> }, { icon: <FaTv /> }, { icon: <FaShieldAlt /> }
];

const OurExpertise = () => {
  return (
    <section id="our-expertise" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text & List */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-4">
              <span className="text-cyan-500">Whatever your field, we get it.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our network and experience ensure a winning formula for your project.
            </p>
            <ul className="space-y-3">
              {expertiseList.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center"
                >
                  <div className="w-2.5 h-2.5 bg-gray-800 rounded-sm mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Icons & Text */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="grid grid-cols-4 gap-6 text-gray-500 mb-8">
              {industryIcons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: index * 0.08 }}
                  className="text-4xl flex justify-center items-center"
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
            <p className="text-center text-lg text-gray-700">
              We deliver across a wide range of industries making us the perfect choice to support your needs. You're in safe hands...
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;