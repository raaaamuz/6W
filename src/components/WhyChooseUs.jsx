// src/components/WhyChooseUs.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // <-- IMPORTED
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// ... (accordionItems array is fine) ...

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  // ... (This component is fine as is) ...
};

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="py-20 bg-light-bg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark-text mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're not just a supplier; we're a partner invested in your success. Here’s what sets us apart.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {/* ... (The accordion map logic is fine as is) ... */}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;