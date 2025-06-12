
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, PlaneTakeoff, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-agri-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <PlaneTakeoff className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">Garuda Agricluture Drones</span>
            </div>
            <p className="mb-4 text-gray-200">
              Modern aerial spraying solutions for Indian farmers. Efficient, affordable, and effective.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-amber">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-amber">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-amber">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-accent-amber">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-accent-amber">Services</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-200 hover:text-accent-amber">Pricing</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-accent-amber">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-accent-amber">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>9642322095 ,
                  9381170432
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>garudaagricluturaldrones@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>indurthi,chigurumamidi,karimnagar-505481</span>
              </li>
            </ul>
          </div>
          
          {/* Operating Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Operating Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-6 text-center text-sm text-gray-300">
          <p>© {currentYear} Garuda drone Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
