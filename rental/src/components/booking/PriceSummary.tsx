
import React from 'react';
import { useLanguageStore, translations } from '@/utils/languageUtils';
import { IndianRupee } from 'lucide-react';

interface PriceSummaryProps {
  cropPrice: number;
  totalPrice: number;
}

const PriceSummary: React.FC<PriceSummaryProps> = ({ cropPrice, totalPrice }) => {
  const { language } = useLanguageStore();
  const t = translations[language];
  
  return (
    <div className="pt-4 border-t">
      <div className="flex justify-between items-center mb-4">
        <span className="font-medium">{t.pricePerAcre}</span>
        <div className="flex items-center">
          <IndianRupee className="h-4 w-4 inline mr-1" />
          <span>{cropPrice.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <span className="font-bold text-lg">{t.totalPrice}</span>
        <div className="flex items-center text-lg font-bold text-agri-green">
          <IndianRupee className="h-5 w-5 inline mr-1" />
          <span>{totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
