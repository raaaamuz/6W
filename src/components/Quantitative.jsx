// src/components/Quantitative.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- Enhanced Icon Components with Animation ---
const commonIconProps = {
  className: "w-12 h-12",
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const HomePlacementIcon = () => ( <svg {...commonIconProps}> <path d="M20 54V38h-8v16" /> <path d="M40 22h-8v-6l-6-6-6 6v6h-8l14-14 14 14z" /> <path d="M28 42h8v12h-8z" /> <rect x="44" y="38" width="12" height="16" rx="2" /> <path d="M48 42h4" /> <path d="M48 46h4" /> <path d="M48 50h4" /> </svg> );
const ExitInterviewIcon = () => ( <svg {...commonIconProps}> <path d="M40 54V10H20v44" /> <path d="M28 22h4" /> <path d="M20 54h20" /> <path d="M40 38 l18-4 -6-12" /> <circle cx="48" cy="18" r="4" /> </svg> );
const CentralLocationTestIcon = () => ( <svg {...commonIconProps}> <path d="M12 42l4-16h4l4 16" /> <path d="M14 34h8" /> <circle cx="20" cy="16" r="4" /> <path d="M52 42l-4-16h-4l-4 16" /> <path d="M48 34h-8" /> <circle cx="44" cy="16" r="4" /> <path d="M24 38h16v8H24z" /> <path d="M32 38v-8" /> </svg> );
const ShopperAisleInterviewIcon = () => ( <svg {...commonIconProps}> <circle cx="20" cy="52" r="4" /> <circle cx="44" cy="52" r="4" /> <path d="M16 52h-4L8 20h32l-4 16H20" /> <path d="M56 12v40" /> <path d="M52 16h8" /> <path d="M52 24h8" /> <path d="M52 32h8" /> </svg> );
const MarketScanIcon = () => ( <svg {...commonIconProps}> <circle cx="38" cy="26" r="16" /> <path d="M26 50l-8 8" /> <path d="M30 30v-8h-4v8" /> <path d="M38 30v-16h-4v16" /> <path d="M46 30v-12h-4v12" /> </svg> );
const StreetInterceptIcon = () => ( <svg {...commonIconProps}> <path d="M24 54l-4-16h-4l-4 16" /> <circle cx="16" cy="16" r="4" /> <path d="M14 30h4" /> <path d="M40 54l4-16h4l4 16" /> <circle cx="48" cy="16" r="4" /> <path d="M50 30h-4" /> <path d="M48 34l0 0" /> </svg> );
const MysteryShoppingIcon = () => ( <svg {...commonIconProps}> <path d="M12 54v-8l12-4 12 4v8" /> <path d="M16 22a12 12 0 0 1 24 0" /> <rect x="12" y="14" width="32" height="8" rx="4" /> <circle cx="44" cy="44" r="10" /> <path d="M51 51l6 6" /> </svg> );
const DoorToDoorIcon = () => ( <svg {...commonIconProps}> <path d="M28 54V10H8v44" /> <path d="M16 32h4" /> <path d="M40 54l-4-16h-4l-4 16" /> <path d="M38 30h4" /> <circle cx="36" cy="16" r="4" /> </svg> );
const MallInterceptIcon = () => ( <svg {...commonIconProps}> <path d="M28 44h24l4-12H28" /> <path d="M28 44v10" /> <path d="M18 44h-8v-20l4-4h8l4 4v20h-8" /> <circle cx="28" cy="24" r="10" /> </svg> );

const quantitativeServices = [
    { icon: <HomePlacementIcon />, title: "Home\nplacement", color: "from-blue-500 to-cyan-500" },
    { icon: <ExitInterviewIcon />, title: "Exit\nInterview", color: "from-purple-500 to-pink-500" },
    { icon: <CentralLocationTestIcon />, title: "Central\nLocation Test", color: "from-green-500 to-emerald-500" },
    { icon: <ShopperAisleInterviewIcon />, title: "Shopper\nAisle Interview", color: "from-orange-500 to-red-500" },
    { icon: <MarketScanIcon />, title: "Market\nScan", color: "from-indigo-500 to-purple-500" },
    { icon: <StreetInterceptIcon />, title: "Street\nIntercept", color: "from-teal-500 to-cyan-500" },
    { icon: <MysteryShoppingIcon />, title: "Mystery\nShopping", color: "from-rose-500 to-pink-500" },
    { icon: <DoorToDoorIcon />, title: "Door\nTo Door", color: "from-amber-500 to-orange-500" },
    { icon: <MallInterceptIcon />, title: "Mall\nIntercept", color: "from-lime-500 to-green-500" },
];

const Logo = () => (
    <motion.div 
        className="flex items-center justify-end"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
    >
        <motion.svg 
            width="48" 
            height="55" 
            viewBox="0 0 48 55" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="mr-3 h-10 w-auto"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <path d="M24 0L47.6274 13.75V41.25L24 55L0.372603 41.25V13.75L24 0Z" fill="url(#logoGradient)"/>
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
            </defs>
        </motion.svg>
        <div className="text-left">
            <h1 className="text-2xl font-black text-gray-800">
                <span>6W</span>
                <span className="font-medium tracking-wider ml-1">STRATEGIES</span>
            </h1>
            <p className="text-xs text-gray-500 mt-1">AI Powered, Human-Centered.</p>
        </div>
    </motion.div>
);

const Quantitative = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="absolute -top-32 -left-32 w-64 h-64 bg-blue-100 rounded-full blur-3xl"
                />
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-100 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <Logo />

                <div className="flex flex-col lg:flex-row items-start gap-x-12 mt-12">
                    {/* Large Number Section */}
                    <motion.div 
                        className="flex-shrink-0"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-[180px] lg:text-[240px] leading-none font-black bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent -mt-8 -ml-4">
                            2
                        </div>
                    </motion.div>
                    
                    {/* Content Section */}
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
                                QUANTITATIVE <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">RESEARCH</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        </motion.div>

                        {/* Main Description */}
                        <motion.div variants={itemVariants} className="mb-12">
                            <p className="text-2xl lg:text-3xl font-light text-gray-700 mb-8 leading-relaxed">
                                Quantitative fieldwork delivery requires a plan. More importantly, it requires preparation for almost unthinkable eventualities during the research project.
                            </p>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                That's why we prepare, prepare and prepare again, ensuring seamless project delivery in spite of any challenges that may arise. We can handle everything, interviewer scheduling, briefing and deployment to data delivery. We also partner with some of the 'best in the business' when your qual project requires too. Our flexible, project-specific approach means we're always with you on every step of the data-path.
                            </p>
                        </motion.div>

                        {/* Services Section */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                                <span>Services We Offer</span>
                                <motion.div 
                                    className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 ml-4"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "32px" }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                />
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {quantitativeServices.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ 
                                            y: -5,
                                            scale: 1.02,
                                            transition: { type: "spring", stiffness: 300 }
                                        }}
                                        className="group relative"
                                    >
                                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden h-full">
                                            {/* Gradient Background on Hover */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-5 rounded-2xl`}
                                            />
                                            
                                            <div className="flex items-center space-x-4 relative z-10">
                                                {/* Icon Container */}
                                                <motion.div
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}
                                                >
                                                    <div className="text-white">
                                                        {service.icon}
                                                    </div>
                                                </motion.div>
                                                
                                                {/* Title */}
                                                <h4 className="text-lg font-semibold text-gray-800 whitespace-pre-line leading-tight group-hover:text-gray-900 transition-colors duration-300">
                                                    {service.title}
                                                </h4>
                                            </div>
                                            
                                            {/* Bottom Accent */}
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "40px" }}
                                                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                                                className={`h-1 bg-gradient-to-r ${service.color} rounded-full mt-4`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA Section */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-12 pt-8 border-t border-gray-200"
                        >
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                                <div className="flex flex-col lg:flex-row items-center justify-between">
                                    <div className="mb-6 lg:mb-0">
                                        <h4 className="text-2xl font-bold text-gray-900 mb-2">
                                            Ready to Start Your Quantitative Research?
                                        </h4>
                                        <p className="text-gray-600">
                                            Let's discuss how we can deliver precise data for your project.
                                        </p>
                                    </div>

                                    {/* Robust Start Project button (scrolls to #contact or navigates) */}
                                    {/* Robust Start Project button (route + sessionStorage handshake) */}
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={(e) => {
    e.preventDefault();

    // If contact exists on current page, scroll immediately
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        try {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        } catch {}
      }, 500);
      return;
    }

    // Otherwise, set a short-lived flag so the home page will scroll after navigation/mount
    try {
      sessionStorage.setItem("scrollToContact", "1");
    } catch {}

    // Navigate to home with hash; the Hero effect will pick up the flag and scroll once mounted
    const homePath = "/"; // change if your home route is different
    try {
      // Use assign so router picks up navigation if needed
      window.location.assign(homePath + "#contact");
    } catch (err) {
      window.location.href = homePath + "#contact";
    }
  }}
  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 px-8 rounded-xl hover:shadow-xl transition-all duration-300 shadow-lg cursor-pointer"
>
  Start Project
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

export default Quantitative;

