// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; 
import AdditionalServices from './components/AdditionalServices';
import Process from './components/Process';
import OurTeam from './components/OurTeam';
import OurExpertise from './components/OurExpertise';
// Import Page Components
import HomePage from './pages/HomePage';
import Quantitative from './components/Quantitative'; // Assuming this is now in components
import Qualitative from './components/Qualitative'; // Import the new component

function App() {
  return (
    <Router>
      <div className="font-sans text-dark-text">
        <Navbar />
        <ScrollToTop />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quantitative" element={<Quantitative />} />
            <Route path="/process" element={<Process />}/>
            {/* Add the new route for the qualitative page */}
            <Route path="/qualitative" element={<Qualitative />} />
            <Route path="/additional-services" element={<AdditionalServices />} />
            <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-expertise" element={<OurExpertise />} />
            
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
