
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguageStore, translations } from '@/utils/languageUtils';
import { useIsMobile } from '@/hooks/use-mobile';

const BookingPage = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-8 md:py-16 bg-cream flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end mb-4">
            <LanguageSelector />
          </div>
          <div className="text-center mb-6 md:mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-agri-green mb-2 md:mb-4">{t.bookingTitle}</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t.bookingSubtitle}
            </p>
          </div>
          
          <div className={`${isMobile ? 'max-w-full' : 'max-w-lg'} mx-auto`}>
            <BookingForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BookingPage;
