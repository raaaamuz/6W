import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronRight, FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaFacebook, FaUsers, FaRocket, FaLightbulb } from 'react-icons/fa';

const MenuModal = ({ closeMenu }) => {
  const [activeSection, setActiveSection] = useState(null);

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    setTimeout(() => {
      // Attempt to find element on current page
      const element = document.querySelector(href);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        // If not found, navigate to home and append the hash
        window.location.href = `/${href}`;
      }
    }, 400);
  };

  const menuSections = [
    {
      title: "ABOUT US",
      icon: FaUsers,
      color: "from-green-500 to-emerald-500",
      links: [
        // UPDATED: Changed href to a page route
        { name: "Our Team", href: "/our-team", description: "Meet the experts behind our success", icon: "👥" },
        // UPDATED: Changed href to a page route
        { name: "Our Expertise", href: "/our-expertise", description: "Industries and capabilities we cover", icon: "🏆" },
      ]
    },
    {
      title: "OUR APPROACH",
      icon: FaRocket,
      color: "from-blue-500 to-cyan-500",
      links: [
        { name: "Methodology", href: "#approach", description: "Our high-level framework", icon: "📊" },
        { name: "Process", href: "/process", description: "See our step-by-step workflow", icon: "⚡" },
      ]
    },
    {
      title: "SERVICES",
      icon: FaLightbulb,
      color: "from-orange-500 to-red-500",
      links: [
        { name: "All Services", href: "#services", description: "Complete service portfolio", icon: "🛠️" },
        { name: "Testimonials", href: "#testimonials", description: "Client success stories", icon: "💬" },
      ]
    }
  ];

  const contactInfo = {
    address: "8442, Khalid Ibn Al Waleed Postal 22234, Jeddah, KSA",
    email: "Syed.Mahmood@6wstrategies.com",
    phone: "00966542688978"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-start justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-pink-900/80 backdrop-blur-lg"
        onClick={closeMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative bg-gradient-to-b from-white to-gray-50 h-full w-full max-w-4xl ml-auto overflow-y-auto shadow-2xl"
      >
        <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <motion.div variants={itemVariants} className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"><span className="text-xl font-black text-white">6W</span></div>
                <h2 className="text-3xl font-black bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">6W Strategies</h2>
              </motion.div>
              <motion.button variants={itemVariants} onClick={closeMenu} whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} className="p-3 hover:bg-white/20 rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20"><FaTimes className="text-2xl" /></motion.button>
            </div>
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              {[
                { icon: FaMapMarkerAlt, text: contactInfo.address },
                { icon: FaEnvelope, text: contactInfo.email, href: `mailto:${contactInfo.email}` },
                { icon: FaPhone, text: contactInfo.phone, href: `tel:${contactInfo.phone}` }
              ].map((item) => (
                <motion.div key={item.text} whileHover={{ scale: 1.02, y: -2 }} className="flex items-start space-x-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <item.icon className="text-yellow-400 flex-shrink-0 text-lg mt-1" />
                  {item.href ? (<a href={item.href} className="hover:text-yellow-400 transition-colors break-all">{item.text}</a>) : (<span className="break-words">{item.text}</span>)}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {menuSections.map((section, sectionIndex) => (
              <motion.div key={section.title} variants={itemVariants} className="group relative" onMouseEnter={() => setActiveSection(sectionIndex)} onMouseLeave={() => setActiveSection(null)}>
                <div className={`p-6 rounded-2xl bg-gradient-to-r ${section.color} text-white mb-4 shadow-lg transition-all duration-500 group-hover:shadow-xl`}>
                  <div className="flex items-center space-x-3"><section.icon className="text-2xl" /><h3 className="text-xl font-black">{section.title}</h3></div>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => {
                    const isPageLink = link.href.startsWith('/');
                    const commonClasses = "flex items-start space-x-4 p-4 rounded-xl bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 border border-gray-100 hover:border-purple-200 shadow-sm hover:shadow-md transition-all duration-300 group/link";
                    const linkContent = (
                      <><span className="text-2xl mt-1">{link.icon}</span><div className="flex-1"><div className="flex items-center justify-between"><span className="font-bold text-gray-900 group-hover/link:text-purple-700 transition-colors duration-300">{link.name}</span><FaChevronRight className="text-purple-600 opacity-0 group-hover/link:opacity-100 transform -translate-x-2 group-hover/link:translate-x-0 transition-all duration-300" /></div><p className="text-sm text-gray-600 mt-1 group-hover/link:text-gray-700">{link.description}</p></div></>
                    );
                    return (
                      <motion.li key={link.name} initial={false} animate={{ scale: activeSection === sectionIndex ? 1.02 : 1, transition: { delay: linkIndex * 0.1 } }}>
                        {isPageLink ? (
                          <Link to={link.href} onClick={closeMenu} className={commonClasses}>{linkContent}</Link>
                        ) : (
                          <a href={link.href} onClick={(e) => handleAnchorClick(e, link.href)} className={commonClasses}>{linkContent}</a>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center space-x-3"><span>Connect With Us</span><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div></h3>
              <div className="flex space-x-4">
                {[
                  { icon: FaLinkedin, href: "https://www.linkedin.com/company/110011026/", color: "bg-blue-600 hover:bg-blue-700", name: "LinkedIn" },
                  { icon: FaTwitter, href: "#", color: "bg-sky-500 hover:bg-sky-600", name: "Twitter" },
                  { icon: FaFacebook, href: "#", color: "bg-blue-800 hover:bg-blue-900", name: "Facebook" }
                ].map((social) => (
                  <motion.a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -4 }} whileTap={{ scale: 0.95 }} className={`w-14 h-14 ${social.color} text-white rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group`} aria-label={social.name}>
                    <social.icon size={20} /><span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-black mb-4">Ready to Get Started?</h3>
              <p className="text-purple-100 mb-6">Let's discuss how we can help with your research needs.</p>
              <div className="space-y-3">
                <motion.a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} whileHover={{ scale: 1.02, x: 5 }} whileTap={{ scale: 0.98 }} className="block bg-white text-purple-600 font-bold py-4 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 text-center shadow-lg">Get in Touch</motion.a>
                <motion.a href="#approach" onClick={(e) => handleAnchorClick(e, '#approach')} whileHover={{ scale: 1.02, x: 5 }} whileTap={{ scale: 0.98 }} className="block border-2 border-white text-white font-bold py-4 px-6 rounded-xl hover:bg-white/10 transition-all duration-300 text-center">Learn Our Approach</motion.a>
              </div>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { number: "50+", label: "Projects" }, { number: "15+", label: "Years Experience" }, { number: "100%", label: "Client Satisfaction" }, { number: "24/7", label: "Support" }
            ].map((stat) => (
              <motion.div key={stat.label} whileHover={{ scale: 1.05, y: -2 }} className="bg-white rounded-xl p-4 text-center shadow-lg border border-gray-100">
                <div className="text-2xl font-black text-purple-600">{stat.number}</div><div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="bg-gradient-to-r from-gray-900 to-purple-900 text-white p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 mb-4">Transforming market research with innovative strategies and cutting-edge methodology</p>
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} 6W Strategies Fieldwork. All rights reserved.</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    };
  }, [isMenuOpen]);

  const navBg = isMenuOpen || isScrolled ? 'bg-white/95 shadow-2xl backdrop-blur-xl' : 'bg-transparent';
  const textColor = isMenuOpen || isScrolled ? 'text-gray-900' : 'text-white';
  const hoverColor = isMenuOpen || isScrolled ? 'hover:text-purple-600' : 'hover:text-yellow-300';

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navBg} border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="flex-shrink-0">
              <Link to="/" className={`text-2xl font-black transition-all duration-300 ${textColor} ${hoverColor} flex items-center space-x-2`}>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">6W</span></div>
                <span>6W Strategies</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <button onClick={() => setIsMenuOpen(true)} className={`flex items-center space-x-3 text-lg font-semibold uppercase tracking-wider focus:outline-none transition-all duration-300 ${textColor} ${hoverColor} group bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/20`} aria-label="Open menu">
                <span>Menu</span>
                <motion.div animate={{ rotate: isMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }} className="group-hover:rotate-90 transition-transform duration-300"><FaBars size={18} className="group-hover:text-current" /></motion.div>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence mode="wait">
        {isMenuOpen && (<MenuModal closeMenu={() => setIsMenuOpen(false)} />)}
      </AnimatePresence>
    </>
  );
};

export default Navbar;