// src/components/Footer.jsx
import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-purple-400 mb-4">6W strategies Fieldwork</h3>
            <p className="text-gray-400">
              Your trusted partner for high-quality market research fieldwork, delivering precise data and reliable participants for your projects.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#what-we-do" className="hover:text-purple-400">About Us</a></li>
              <li><a href="#services" className="hover:text-purple-400">Services</a></li>
              <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </div>
          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400"><FaTwitter size={24} /></a>
              <a href="https://www.linkedin.com/company/110011026/admin/dashboard/" className="text-gray-400 hover:text-purple-400"><FaLinkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-purple-400"><FaFacebook size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 6W strategies Fieldwork Clone. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
