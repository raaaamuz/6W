import React from 'react';

// Import all the sections that make up your home page
import Hero from '../components/Hero';
import AboutIntro from '../components/AboutIntro'; 
import TechAndTalent from '../components/TechAndTalent';
import VisionMission from '../components/VisionMission';
import OurApproach from '../components/OurApproach';
import OurTeam from '../components/OurTeam'; // 1. Import OurTeam
import OurExpertise from '../components/OurExpertise'; // 2. Import OurExpertise
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutIntro /> 
      <TechAndTalent />
      <VisionMission />
      <OurApproach />
       
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;