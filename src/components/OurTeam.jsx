import React from 'react';
import { motion } from 'framer-motion';

// --- IMPORTANT ---
// Create a folder src/assets/team/ and save your 9 team member images there.
// If you have different image names, update the array below.
import member1 from '../assets/team/member-1.png';
import member2 from '../assets/team/member-2.png';
import member3 from '../assets/team/member-3.jpg';
import member4 from '../assets/team/member-4.jpg';
import member5 from '../assets/team/member-5.jpg';
import member6 from '../assets/team/member-6.jpg';
import member7 from '../assets/team/member-7.jpg';
import member8 from '../assets/team/member-8.png';
import member9 from '../assets/team/member-9.jpg';

const teamMembers = [member1, member2, member3, member4, member5, member6, member7, member8, member9];

const OurTeam = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } }
  };

  return (
    <section id="our-team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-6">
              <span className="text-cyan-500">We're agile and accurate with our recruitment,</span> persistently engaging and determined to deliver unparalleled projects every time.
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-700 font-semibold mb-4">
              Our team is headed-up by:<br/>
              <span className="text-xl text-gray-900">Mohamed Al Asadi, Head of Operations</span>
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed">
              With three thriving fieldwork disciplines (Core Projects, Special Projects and International Projects), and the addition of our recruitment brand, Give Opinions, our talented team bring a wealth of multi-sector knowledge and experience to the table.
            </motion.p>
          </motion.div>

          {/* Right Column: Image Grid & CTA */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {teamMembers.map((member, index) => (
                <motion.div key={index} variants={imageVariants}>
                  <img src={member} alt={`Team member ${index + 1}`} className="w-full h-auto object-cover rounded-lg shadow-md" loading="lazy" />
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg p-8 text-center text-white shadow-lg">
              <h3 className="text-2xl font-bold tracking-wider mb-2">INTERESTED IN JOINING OUR TEAM?</h3>
              <a href="mailto:Syed.Mahmood@6wstrategies.com" className="text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                <span>SEND US YOUR CV</span>
                <span>&rarr;</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;