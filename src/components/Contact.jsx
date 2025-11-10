import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
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
    <motion.section
      id="contact" // This ID is the target for your navigation links
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-200 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-x-12">
          {/* Big number */}
         

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
                GET IN <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">TOUCH</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-12 leading-relaxed">
              Have a project in mind or just want to learn more about our services? We'd love to hear from you. Reach out to us using the details below or fill out the contact form.
            </motion.p>

            {/* Contact Details & Form Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side: Contact Details */}
              <motion.div variants={itemVariants} className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-800">Contact Information</h3>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Our Office</h4>
                    <p className="text-gray-600">8442, Khalid Ibn Al Waleed Postal 22234, Jeddah, KSA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">00966542688978</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">Syed.Mahmood@6wstrategies.com</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Side: Contact Form */}
              <motion.form variants={itemVariants} className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows="5" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>
                <div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300 shadow-lg"
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;