import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';

const features = [
  { 
    icon: <FaUsers size={30} />, 
    title: 'Participant Recruitment', 
    description: 'We excel in finding the right people for your research, from general consumers to niche B2B professionals.',
    accent: 'bg-orange-500',
    pattern: 'bg-orange-100'
  },
  { 
    icon: <FaLightbulb size={30} />, 
    title: 'Methodology Expertise', 
    description: 'Whether it\'s focus groups, IDIs, or online surveys, we have the expertise to manage your chosen methodology seamlessly.',
    accent: 'bg-teal-500',
    pattern: 'bg-teal-100'
  },
  { 
    icon: <FaChartLine size={30} />, 
    title: 'Project Management', 
    description: 'Our dedicated project managers ensure your fieldwork runs smoothly, on time, and within budget.',
    accent: 'bg-indigo-500',
    pattern: 'bg-indigo-100'
  }
];

const WhatWeDo = () => {
  return (
    <motion.section
      id="what-we-do"
      className="py-20 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-orange-100 rounded-lg rotate-45"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 right-20 w-16 h-16 bg-teal-100 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/4 w-12 h-12 bg-indigo-100 rounded-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* UPDATED: Added font-serif to apply 'Playfair Display' and changed font-black to font-extrabold for consistency */}
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            What <span className="text-orange-500">We</span> Do
          </h2>
          <div className="flex justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            6W Strategies Fieldwork delivers expert market research services with precision and professionalism.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 relative overflow-hidden h-full">
                
                <div className={`absolute top-0 left-0 w-full h-2 ${feature.accent}`}></div>
                
                <div className={`absolute -right-10 -bottom-10 w-40 h-40 ${feature.pattern} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`w-20 h-20 ${feature.accent} rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
                        <div className="text-white transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="absolute -inset-4 border-2 border-gray-200 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
                    </div>
                  </div>
                  
                  {/* UPDATED: Added font-serif to apply 'Playfair Display' and changed font-black to font-extrabold */}
                  <h3 className="font-serif text-2xl font-extrabold text-gray-900 text-center mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                  
                  <div className="flex justify-center space-x-2 mt-6">
                    <div className={`w-2 h-2 ${feature.accent} rounded-full`}></div>
                    <div className={`w-2 h-2 ${feature.accent} rounded-full`}></div>
                    <div className={`w-2 h-2 ${feature.accent} rounded-full`}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhatWeDo;