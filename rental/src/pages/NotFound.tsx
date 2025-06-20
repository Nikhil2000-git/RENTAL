
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-cream py-16">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-agri-green mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Oops! Page not found</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Button asChild size="lg" className="bg-agri-green hover:bg-agri-green-light">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
