// src/pages/Qualitative.jsx
import React from "react";
import { motion } from "framer-motion";

// --- Icons that match Quantitative style (stroke uses currentColor) ---
const commonIconProps = {
  className: "w-12 h-12",
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const FocusGroupsIcon = () => (
  <svg {...commonIconProps}>
    <path d="M22 42c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    <path d="M30 42c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    <circle cx="30" cy="26" r="6" />
    <circle cx="46" cy="26" r="6" />
    <circle cx="18" cy="30" r="6" />
    <path d="M14 42c0-4.4 3.6-8 8-8" />
    <path d="M30 16a12 12 0 0 1 10.4 6" />
    <path d="M30 16a12 12 0 0 0-10.4 6" />
  </svg>
);

const InDepthInterviewsIcon = () => (
  <svg {...commonIconProps}>
    <path d="M12 52V36h8v16" />
    <path d="M16 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <path d="M44 52V36h8v16" />
    <path d="M48 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <path d="M20 36h24v-4H20v4z" />
    <path d="M32 36v16" />
    <path d="M24 24h-8v-8h8z" />
    <path d="M48 24h-8v-8h8z" />
  </svg>
);

const PairedIDIsIcon = () => (
  <svg {...commonIconProps}>
    <path d="M32 32a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
    <path d="M22 52v-8h20v8z" />
    <path d="M22 44h20v-8a10 10 0 0 0-20 0v8z" />
    <path d="M44 26h-4v-4h4z" />
    <circle cx="16" cy="48" r="4" />
    <circle cx="48" cy="48" r="4" />
  </svg>
);

const ObservationsIcon = () => (
  <svg {...commonIconProps}>
    <path d="M32 40c12 0 22-8 22-8s-10-8-22-8-22 8-22 8 10 8 22 8z" />
    <circle cx="32" cy="32" r="6" />
    <path d="M12 32c-4-8-4-16 0-24" />
    <path d="M52 32c4-8 4-16 0-24" />
  </svg>
);

const FriendshipGroupsIcon = () => (
  <svg {...commonIconProps}>
    <path d="M22 52v-8h-4v8" />
    <path d="M20 36a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <path d="M32 52v-8h-4v8" />
    <path d="M30 36a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <path d="M42 52v-8h-4v8" />
    <path d="M40 36a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <path d="M12 24h40" />
  </svg>
);

const ShopperSafariIcon = () => (
  <svg {...commonIconProps}>
    <circle cx="32" cy="18" r="6" />
    <path d="M22 56V38h20v18" />
    <path d="M22 38l10-14 10 14" />
    <path d="M44 42h8v-8h-8z" />
    <path d="M48 34l4-8h4" />
  </svg>
);

const ConsumerImmersionIcon = () => (
  <svg {...commonIconProps}>
    <circle cx="28" cy="28" r="16" />
    <path d="M40 40l10 10" />
    <circle cx="28" cy="28" r="4" />
    <path d="M28 24v-8" />
    <path d="M28 32v8" />
    <path d="M32 28h8" />
    <path d="M24 28h-8" />
  </svg>
);

const ProductTestingIcon = () => (
  <svg {...commonIconProps}>
    <path d="M24 60v-8h16v8" />
    <path d="M24 52l-4-20h24l-4 20" />
    <path d="M20 20a12 12 0 0 1 24 0v12H20V20z" />
    <path d="M44 12h4v8h-4" />
    <path d="M48 16h4" />
  </svg>
);

const EthnographyIcon = () => (
  <svg {...commonIconProps}>
    <path d="M32 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
    <path d="M16 48v-8h32v8" />
    <path d="M20 40v-4h24v4" />
    <path d="M24 36v-8h16v8" />
    <path d="M28 32v-4h8v4" />
  </svg>
);

const qualitativeServices = [
  {
    icon: <FocusGroupsIcon />,
    title: "Focus\ngroups",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <InDepthInterviewsIcon />,
    title: "In-depth\nInterviews",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <PairedIDIsIcon />,
    title: "Paired\nIDIs",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: <ObservationsIcon />,
    title: "Observations",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <EthnographyIcon />,
    title: "Ethnography",
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: <FriendshipGroupsIcon />,
    title: "Friendship\nGroups",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: <ShopperSafariIcon />,
    title: "Shopper\nSafari",
    color: "from-violet-500 to-indigo-500",
  },
  {
    icon: <ConsumerImmersionIcon />,
    title: "Consumer\nImmersion",
    color: "from-cyan-500 to-blue-400",
  },
  {
    icon: <ProductTestingIcon />,
    title: "In-Home/\nTaste Tests",
    color: "from-emerald-500 to-green-700",
  },
];

const Qualitative = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-purple-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-pink-200 rounded-full blur-3xl"
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
            <div className="text-[180px] lg:text-[240px] leading-none font-black bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent -mt-8 -ml-4">
              1
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
                QUALITATIVE{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  INSIGHTS
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="mb-12">
              <p className="text-2xl lg:text-3xl font-light text-gray-700 mb-8 leading-relaxed">
                We manage your qualitative projects meticulously so you can
                concentrate on delivering the insights and outcomes.
              </p>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  For us, it starts when you first contact us. Our experience
                  with general consumers, hard-to-reach audiences, people who
                  may be at risk or have discreet vulnerabilities, B2B,
                  high-net-worth individuals puts us in the perfect position to
                  partner with you from the get-go, helping to shape your
                  research methodology for practical and realistic delivery of
                  deep insights.
                </p>
                <p>
                  From writing your screener, venues and staffing, delivering
                  easy-to-complete pre-tasks, multi-point respondent QC, and
                  always endeavouring to make research accessible for all –
                  everything we do is focussed on delivering honest thoughts and
                  ideas.
                </p>
                <p>
                  We're proud to project manage expert qualitative research for
                  brands, research companies and agencies across the creative
                  industry who are developing new, or improving existing
                  products and services for their customers.
                </p>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <span>Services We Offer</span>
                <motion.div
                  className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 ml-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: "32px" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {qualitativeServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    className="group relative"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden h-full">
                      {/* subtle gradient on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-5 rounded-2xl`}
                      />

                      <div className="flex items-center space-x-4 relative z-10">
                        {/* Icon container (colored square) */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}
                        >
                          {/* icon inherits currentColor (we color it by setting text-white on parent) */}
                          <div className="text-white">{service.icon}</div>
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

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="mb-6 lg:mb-0">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      Ready to Dive Deep into Qualitative Insights?
                    </h4>
                    <p className="text-gray-600">
                      Let's uncover the stories behind your data with expert
                      qualitative research.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();

                      // Try to scroll if element already exists
                      const tryScroll = () => {
                        const target = document.getElementById("contact");
                        if (target) {
                          try {
                            target.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                            // accessibility: focus after short delay so scroll finishes
                            setTimeout(() => {
                              try {
                                target.setAttribute("tabindex", "-1");
                                target.focus({ preventScroll: true });
                              } catch (err) {}
                            }, 500);
                          } catch (err) {
                            // fallback to anchor jump
                            window.location.hash = "#contact";
                          }
                          return true;
                        }
                        return false;
                      };

                      // If target is present now -> done
                      if (tryScroll()) return;

                      // If we're not on the homepage, navigate there with hash.
                      // Adjust '/' if your Hero+Contact live on a different route (e.g. '/home').
                      const homePath = "/";
                      if (window.location.pathname !== homePath) {
                        // Use location.assign so router (if any) does a navigation and picks up the hash
                        window.location.assign(homePath + "#contact");
                        return;
                      }

                      // We're on the same page but the element is not yet in DOM (maybe above fold lazy load).
                      // Update URL hash and poll for the element to appear (max ~3s).
                      try {
                        window.history.replaceState(
                          null,
                          "",
                          window.location.pathname + "#contact"
                        );
                      } catch (err) {
                        window.location.hash = "#contact";
                      }

                      let attempts = 0;
                      const maxAttempts = 30; // 30 * 100ms = 3000ms
                      const interval = setInterval(() => {
                        attempts += 1;
                        if (tryScroll() || attempts >= maxAttempts) {
                          clearInterval(interval);
                          if (attempts >= maxAttempts) {
                            // Last-resort fallback: hard navigate to same path + hash to let browser handle it
                            try {
                              window.location.assign(
                                window.location.pathname + "#contact"
                              );
                            } catch (err) {}
                          }
                        }
                      }, 100);
                    }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-xl hover:shadow-xl transition-all duration-300 shadow-lg cursor-pointer"
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

export default Qualitative;
