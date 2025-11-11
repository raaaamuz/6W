import React from 'react';
import { motion } from 'framer-motion';
import { FaCompass, FaUsers, FaChartLine,FaShieldAlt   } from 'react-icons/fa';

const approachSteps = [
  {
    icon: <FaCompass size={32} />,
    title: 'Strategy & Discovery',
    description: 'We begin with in-depth client discussions to understand your brand, goals, and aims, ensuring our strategy is perfectly aligned with your vision.',
    color: 'from-emerald-500 to-green-500'
  },
  {
    icon: <FaUsers size={32} />,
    title: 'Execution & Fieldwork',
    description: 'We find the ideal demographic respondents for your research, whether it’s for feedback on a new product or building statistical evidence for a concept.',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: <FaShieldAlt   size={32} />,
    title: 'Quality Control & Delivery',
    description: 'We deliver raw data validated by our advanced AI-powered Quality Control system. This automated process meticulously checks all source files for integrity and accuracy, providing you with a reliable, clean dataset ready for immediate use.',
    color: 'from-sky-500 to-blue-500'
  },
  
];

const OurApproach = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      id="approach" // This ID is the target for your Navbar link
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden"
    >
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-emerald-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-green-200 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-x-12">
          {/* Big number */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <div className="text-[180px] lg:text-[240px] leading-none font-black bg-gradient-to-br from-emerald-600 to-green-600 bg-clip-text text-transparent -mt-8 -ml-4">
              1
            </div> */}
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                OUR <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">APPROACH</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="mb-12">
              <p className="text-2xl lg:text-3xl font-light text-gray-700 mb-8 leading-relaxed">
                We focus on delivering the perfect strategized approach, optimised to our client’s goals and aims and conducted with an experienced and personal touch.
              </p>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Whether you’re looking to get honest, real feedback in response to a fresh product or service, or you’re looking to build a body of statistical research around an idea or concept, we help create and execute the ideal strategic approach.
                </p>
                <p>
                  From initial client brand discussions and meeting to finding the ideal demographic respondents and collating results, and absolutely everything in between, we make sure things go as smoothly and effectively as possible.
                </p>
              </div>
            </motion.div>

            {/* Process Steps */}
            <motion.div variants={containerVariants}>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <span>Our Process in Three Steps</span>
                <motion.div
                  className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 ml-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: "32px" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {approachSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center mb-4 shadow-md`}>
                      {step.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="mb-6 lg:mb-0 text-center lg:text-left">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      Ready to build your strategy?
                    </h4>
                    <p className="text-gray-600">
                      Let's create the ideal research plan for your project.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.location.href = '/#contact';
                      }
                    }}
                    className="bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-3 px-8 rounded-xl hover:shadow-xl transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    Discuss Your Project
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;