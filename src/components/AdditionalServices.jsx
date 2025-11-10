import React from 'react';
import { motion } from 'framer-motion';

const CheckIcon = () => (
    <svg className="w-6 h-6 flex-shrink-0 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const serviceItems = [
    'Moderation and Facilitation',
    'Transcription and Note Taking',
    'Incentive Management',
    'Translation and Simultaneous translation',
    'Venue booking and hosting',
];

const AdditionalServices = () => {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-teal-50 relative overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-teal-200 rounded-full blur-3xl"
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
            <div className="text-[180px] lg:text-[240px] leading-none font-black bg-gradient-to-br from-cyan-600 to-teal-600 bg-clip-text text-transparent -mt-8 -ml-4">
              3
            </div>
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
                ADDITIONAL <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">SERVICES</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></div>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="mb-12">
              <p className="text-2xl lg:text-3xl font-light text-cyan-700 mb-8 leading-relaxed">
                We take the ‘search’ out of research, with end-to-end delivery of everything you need for project excellence.
              </p>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  We provide a wide range of additional fieldwork services to compliment our qualitative and quantitative fieldwork project delivery. These additional services are focussed on ensuring positive and memorable respondent experiences, and success in result delivery and achieving your research goals.
                </p>
                <p>
                  We deliver these extra ‘cherries on the top’ in-house and in partnerships with trusted partners as an extension of our team. We always remain your single point of contact, meaning we remove the worry from any research project so you can concentrate on what you do best, whilst we take care of the rest.
                </p>
              </div>
            </motion.div>

            {/* Services List */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <span>Services we offer</span>
                <motion.div
                  className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 ml-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: "32px" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </h3>

              <ul className="space-y-4">
                {serviceItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <CheckIcon />
                    <span className="ml-3 text-xl text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-100">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="mb-6 lg:mb-0 text-center lg:text-left">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      Need help managing project logistics?
                    </h4>
                    <p className="text-gray-600">
                      Let us handle the details so you can focus on the insights.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold py-3 px-8 rounded-xl hover:shadow-xl transition-all duration-300 shadow-lg cursor-pointer"
                    // --- FIX APPLIED HERE ---
                    onClick={(e) => {
                      e.preventDefault();
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        // Fallback in case the contact section is not on the same page
                        window.location.href = '/#contact';
                      }
                    }}
                  >
                    Get in Touch
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

export default AdditionalServices;
