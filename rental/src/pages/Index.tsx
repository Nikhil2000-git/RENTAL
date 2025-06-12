
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { IndianRupee, Sprout, Clock, Calendar, BarChart, Shield, PlaneTakeoff } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import BookingForm from '@/components/BookingForm';
import TestimonialCard from '@/components/TestimonialCard';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguageStore, translations } from '@/utils/languageUtils';
import { crops } from '@/utils/cropUtils';

const Index = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  
  // Get price for default crop
  const pricePerAcre = crops.default.pricePerAcre;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-agri-green to-tech-blue py-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end mb-4">
            <LanguageSelector />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Modern Drone Spraying Solutions for Indian Farmers
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Rent agricultural spray drones at affordable prices. Save time, reduce costs, and increase crop yields.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="bg-accent-amber hover:bg-amber-500 text-black">
                  <Link to="/book">Book Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-agri-green">
                  <Link to="/services">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-white bg-opacity-10 rounded-full absolute animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="w-64 h-64 md:w-80 md:h-80 bg-white bg-opacity-20 rounded-full absolute animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                <div className="animate-float">
                  <PlaneTakeoff size={200} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-agri-green mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Renting our agricultural drones is simple, quick, and efficient
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-agri-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-agri-green mb-3">1. Book Online</h3>
              <p className="text-gray-600">
                Select your date, time, and acreage through our easy-to-use online booking system
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-agri-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PlaneTakeoff className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-agri-green mb-3">2. We Arrive</h3>
              <p className="text-gray-600">
                Our trained technicians arrive at your farm with the drone equipment ready to spray
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-agri-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sprout className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-agri-green mb-3">3. Enjoy Results</h3>
              <p className="text-gray-600">
                Watch as your crops receive precise, efficient treatment at a fraction of the manual cost
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-agri-green mb-4">Affordable Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our drone spraying services are competitively priced to provide maximum value
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-agri-green max-w-md w-full">
              <h3 className="text-2xl font-bold text-agri-green mb-4">Standard Package</h3>
              <div className="flex items-center mb-6">
                <IndianRupee className="h-8 w-8 text-agri-green mr-2" />
                <span className="text-4xl font-bold text-agri-green">{pricePerAcre}</span>
                <span className="text-gray-600 ml-2">per acre</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-agri-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Precise aerial spraying</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-agri-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Coverage of up to 30 acres per day</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-agri-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Uniformity in pesticide application</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-agri-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Reduces water consumption by 90%</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-agri-green hover:bg-agri-green-light">
                <Link to="/book">Book Now</Link>
              </Button>
            </div>
            
            <div className="bg-agri-green text-white rounded-lg shadow-lg p-8 border-t-4 border-accent-amber max-w-md w-full transform md:scale-105">
              <div className="absolute -top-4 right-4 bg-accent-amber text-black px-3 py-1 rounded-full text-sm font-bold">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Season Package</h3>
              <div className="flex items-center mb-6">
                <IndianRupee className="h-8 w-8 mr-2" />
                <span className="text-4xl font-bold">{pricePerAcre - 100}</span>
                <span className="ml-2">per acre</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>All features of Standard Package</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Multiple scheduled visits</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Priority booking during peak seasons</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Agricultural consultation included</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-accent-amber hover:bg-amber-500 text-black">
                <Link to="/book">Book Season Package</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-agri-green mb-4">Why Choose Our Drone Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of using our agricultural drone spraying technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Clock size={32} />}
              title="Time Saving"
              description="Drone spraying is 50-60 times faster than manual spraying, saving you valuable time during critical growing seasons."
            />
            <ServiceCard 
              icon={<BarChart size={32} />}
              title="Cost Efficient"
              description="Reduce your pesticide usage by up to 30% with precise application, lowering your overall farming costs."
            />
            <ServiceCard 
              icon={<Shield size={32} />}
              title="Safer Operation"
              description="Eliminate direct exposure to chemicals for farm workers by using remote drone application."
            />
            <ServiceCard 
              icon={<Calendar size={32} />}
              title="Flexible Scheduling"
              description="Book our services according to your farm's specific needs and schedule."
            />
            <ServiceCard 
              icon={<Sprout size={32} />}
              title="Improved Crop Health"
              description="Achieve more uniform coverage and better penetration of chemicals for healthier crops."
            />
            <ServiceCard 
              icon={<IndianRupee size={32} />}
              title="Affordable Pricing"
              description="Pay only for what you need with transparent per-acre pricing and no hidden fees."
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-agri-green mb-4">రైతుల అనుభవాలు</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
మన డ్రోన్ స్ప్రేయింగ్ సేవల ప్రయోజనాలను అనుభవించిన రైతుల మాటల్లోనే వినండి
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="ఈ డ్రోన్ సర్వీస్‌ వల్ల నాకు మూడురోజుల మానవ శ్రమను ఆదా చేయగలిగింది చేతితో చేయడంలో సాధ్యమయ్యేది కన్నా ఇది ఎంతో సమానమైన కవరేజ్‌ను ఇచ్చింది నా తదుపరి పంట కోసం తప్పకుండా మళ్లీ ఉపయోగిస్తాను"
              name="Burra Kumarswamy"
              role="Rice Farmer"
              location="indurthi,karimnagar"
            />
            <TestimonialCard 
              quote="మొదట నాకు కొంత అనుమానం ఉంది, కానీ డ్రోన్ నా 25 ఎకరాల వ్యవసాయ భూమిని కొన్ని గంటల్లోనే ఎంత సమర్థవంతంగా కవర్ చేసిందో చూసాక, ఇది భారతదేశంలో వ్యవసాయానికి భవిష్యత్తు అనే విషయంలో నన్ను నమ్మించేసింది."
              name="Peddi Venkanna "
              role="Rice Farmer"
              location="Mudimanikyam,karimnagar"
            />
            <TestimonialCard 
               quote="పెస్టిసైడ్లపై డబ్బు ఆదా చేయడమే కాదు, డ్రోన్ సాయంతో చేసిన ఖచ్చితమైన స్ప్రే వల్ల పక్కనే ఉన్న నీటి మూలాలకి రసాయనాల కలిశే ప్రమాదం తక్కువైంది. ఇది అందరికీ మేలైనదే."
              name="Kuna peddanna"
              role="Rice Farmer"
              location="indurthi,karimnagar"
            />
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section className="py-16 bg-gradient-to-r from-tech-blue to-agri-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Book Your Drone Service Now</h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Simple, quick booking process for your agricultural drone spraying needs
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <BookingForm defaultCrop="default" />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
