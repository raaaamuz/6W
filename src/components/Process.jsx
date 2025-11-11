import React from 'react';
import { motion } from 'framer-motion';
// UPDATED: New icons relevant to the fieldwork process
import { FaClipboardCheck, FaUserCheck, FaLaptop, FaShieldAlt, FaDatabase } from 'react-icons/fa';

const OurApproach = () => {
  // REFACTORED: The timeline now reflects a pure fieldwork process
  const timelineSteps = [
    {
      phase: "Briefing",
      icon: <FaClipboardCheck className="text-white" size={18} />,
      title: "Project Kick-off & Briefing",
      description: "We start by thoroughly reviewing the project scope, screener criteria, and research objectives to ensure our team is perfectly aligned.",
      activities: ["Methodology Review", "Screener Analysis", "Team Briefing"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      phase: "Recruitment",
      icon: <FaUserCheck className="text-white" size={18} />,
      title: "Targeted Participant Recruitment",
      description: "Our core strength. We execute precision recruitment using our robust networks and validation processes to find the exact participants you need.",
      activities: ["Database Screening", "Validation Calls", "Scheduling"],
      color: "from-purple-500 to-pink-500"
    },
    {
      phase: "Execution",
      icon: <FaLaptop className="text-white" size={18} />,
      title: "Fieldwork & Data Collection",
      description: "Seamless execution of data collection, whether it's through online surveys, or moderated in-person sessions, managed by our experienced field staff.",
      activities: ["Interviewing", "Survey Deployment", "Logistics Management"],
      color: "from-green-500 to-emerald-500"
    },
    {
      phase: "Quality",
      icon: <FaShieldAlt className="text-white" size={18} />,
      title: "In-Field Quality Assurance",
      description: "We implement rigorous, real-time quality control checks to ensure data integrity, respondent authenticity, and adherence to project specifications.",
      activities: ["Live Monitoring", "Back-Checking", "Data Validation"],
      color: "from-orange-500 to-red-500"
    },
    {
      phase: "Delivery",
      icon: <FaDatabase className="text-white" size={18} />,
      title: "Clean Data Handover",
      description: "Our job concludes with the delivery of a meticulously cleaned, well-structured dataset, ready for your analysis and reporting teams.",
      activities: ["Data Cleaning", "Final QC", "Secure Transfer"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="approach" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* UPDATED: Title and subtitle are now fieldwork-focused */}
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Our Fieldwork <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A reliable, transparent process for delivering high-quality, actionable data from the field.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/30 to-blue-500/30"></div>
              
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex items-start space-x-6 mb-12 last:mb-0 group"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      {step.icon}
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl"
                    ></motion.div>
                  </div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:border-white/30 transition-all duration-500"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                        {step.phase}
                      </span>
                      <span className="text-cyan-300 text-sm font-mono">Step {index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-100 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.activities.map((activity, activityIndex) => (
                        <span
                          key={activityIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/10"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Side Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-64 bg-gray-800 border border-purple-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              {/* UPDATED: Side panel text */}
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-bold text-lg">Expert-Led Fieldwork</h4>
                <p className="text-gray-300 text-sm">Every project is managed by our experienced field specialists.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <h4 className="text-xl font-bold mb-4 text-white">Our Commitment</h4>
              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our structured process guarantees data reliability and consistency, giving your analysis team a solid foundation to build upon.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">24-48h</div>
                    <div className="text-xs text-gray-400">Quote Turnaround</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">100%</div>
                    <div className="text-xs text-gray-400">Data Integrity</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 text-center"
            >
              <h4 className="text-lg font-bold mb-2 text-white">Need a Fieldwork Partner?</h4>
              <p className="text-cyan-100 text-sm mb-4">
                Let's discuss the specifics of your next project.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-cyan-600 font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Launch Your Fieldwork
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;