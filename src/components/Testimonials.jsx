// src/components/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialsData = [
    {
      quote: "6W strategies Fieldwork has been an invaluable partner. Their recruitment is always spot-on, and their project management is second to none. They make the complex simple.",
      author: "Sarah L.",
      title: "Research Director, Innovate MR"
    },
    {
      quote: "The quality of participants we get from 6W strategies is consistently high. They understand our niche requirements and always deliver.",
      author: "David Chen",
      title: "UX Research Lead, TechCorp"
    },
    {
      quote: "Fast, reliable, and communicative. The 6W strategies team is a pleasure to work with and a key part of our research process.",
      author: "Maria Rodriguez",
      title: "Senior Insights Manager, Global Consumer Goods"
    }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setCurrent(prev => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      id="testimonials"
      className="py-20 bg-light-bg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FaQuoteLeft size={40} className="text-primary mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-dark-text mb-8">What Our Clients Say</h2>
        
        <div className="relative h-48 overflow-hidden">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: index === current ? 1 : 0, y: index === current ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
            >
                <p className="text-xl italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-dark-text">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonialsData.map((_, index) => (
             <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === current ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
             />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
