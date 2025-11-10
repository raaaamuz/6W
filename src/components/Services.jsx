// src/components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaComments, FaLaptop, FaUsersCog, FaConciergeBell } from 'react-icons/fa'; // UPDATED: Replaced FaGlobe with FaConciergeBell

// UPDATED: The services array has been modified
const services = [
  { icon: <FaComments size={35} />, title: 'Qualitative', description: 'Focus Groups, In-depth Interviews (IDIs), Ethnography, and Usability Testing.', link: '/qualitative' },
  { icon: <FaLaptop size={35} />, title: 'Quantitative', description: 'Online Surveys, Computer-Assisted Telephone Interviewing (CATI), and Hall Tests.', link: '/quantitative' },
  { icon: <FaConciergeBell size={35} />, title: 'Additional Services', description: 'Incentive management, moderation, transcription, translation, and venue booking.', link: '/additional-services' },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  // NOTE: This component's structure is adjusted to render 3 items gracefully.
  return (
    <motion.section
      id="services"
      className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20 relative">
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-yellow-400 rounded-full" />
          <h2 className="text-5xl font-black text-purple-600 mb-6 relative">
            OUR SERVICES
            <motion.div initial={{ width: 0 }} whileInView={{ width: "120px" }} transition={{ delay: 0.5, duration: 0.8 }} className="h-1 bg-yellow-400 mx-auto mt-4" />
          </h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to deliver exceptional results across all research methodologies
          </motion.p>
        </motion.div>
        {/* UPDATED: Added justify-center to center the 3 cards */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -15, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }} className="relative group">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="absolute -inset-4 bg-gradient-to-br from-purple-500/5 to-yellow-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 relative overflow-hidden h-full flex flex-col">
                <div className="relative z-10 flex-grow flex flex-col">
                   <motion.div whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }} className="flex justify-center mb-6">
                    <div className="relative">
                      <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.8 }} className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-500 shadow-lg">
                        <div className="text-white group-hover:text-purple-800 transition-colors duration-500">{service.icon}</div>
                      </motion.div>
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-purple-600 mb-4 group-hover:text-purple-700 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg flex-grow">{service.description}</p>
                  
                  <Link to={service.link} className="mt-5 font-semibold text-purple-600 group-hover:text-yellow-600 transition-colors duration-300">
                    Learn More &rarr;
                  </Link>
                  
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "60px" }} transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }} className="h-0.5 bg-yellow-400 mt-4 mx-auto" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;