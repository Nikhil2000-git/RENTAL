
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PlaneTakeoff } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <PlaneTakeoff className="h-8 w-8 text-agri-green mr-2" />
              <span className="text-xl font-bold text-agri-green">Garuda Agricultural Drones</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-agri-green px-3 py-2 rounded-md font-medium">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-agri-green px-3 py-2 rounded-md font-medium">Services</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-agri-green px-3 py-2 rounded-md font-medium">Pricing</Link>
              <Link to="/about" className="text-gray-700 hover:text-agri-green px-3 py-2 rounded-md font-medium">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-agri-green px-3 py-2 rounded-md font-medium">Contact</Link>
              <Button asChild className="bg-accent-amber hover:bg-amber-500 text-black">
                <Link to="/book">Book Now</Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-agri-green hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:text-agri-green px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/services" className="block text-gray-700 hover:text-agri-green px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link to="/pricing" className="block text-gray-700 hover:text-agri-green px-3 py-2 rounded-md text-base font-medium">Pricing</Link>
            <Link to="/about" className="block text-gray-700 hover:text-agri-green px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-agri-green px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <Button asChild className="w-full bg-accent-amber hover:bg-amber-500 text-black mt-2">
              <Link to="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
