
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-center rounded-full bg-agri-green-light bg-opacity-10 w-16 h-16 mx-auto mb-4">
        <div className="text-agri-green">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-center text-agri-green mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
