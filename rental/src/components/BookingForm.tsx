
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { useLanguageStore, translations } from '@/utils/languageUtils';
import { crops, sendNotification } from '@/utils/cropUtils';
import FarmerInfoFields from '@/components/booking/FarmerInfoFields';
import CropSelector from '@/components/booking/CropSelector';
import DateSelector from '@/components/booking/DateSelector';
import AcreageSelector from '@/components/booking/AcreageSelector';
import PriceSummary from '@/components/booking/PriceSummary';

interface BookingFormProps {
  defaultCrop?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ defaultCrop = 'default' }) => {
  const { language } = useLanguageStore();
  const t = translations[language];
  
  const [date, setDate] = useState<Date>();
  const [acres, setAcres] = useState<number>(5);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [village, setVillage] = useState<string>('');
  const [selectedCrop, setSelectedCrop] = useState<string>(defaultCrop);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Get the price for the selected crop
  const cropPrice = crops[selectedCrop]?.pricePerAcre || crops.default.pricePerAcre;
  
  // Calculate the total price
  const totalPrice = acres * cropPrice;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast.error(t.selectDateError);
      return;
    }
    
    if (!name || !phone || !village) {
      toast.error(t.fillFieldsError);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare booking data with additional details
      const bookingData = {
        name,
        phone,
        village,
        crop: selectedCrop,
        cropName: t.crops[selectedCrop as keyof typeof t.crops] || selectedCrop,
        date: date?.toISOString(),
        formattedDate: date ? format(date, 'PPP') : '',
        acres,
        totalPrice,
        cropPrice,
        currency: "INR",
        submittedAt: new Date().toISOString(),
        messageForWhatsApp: `New booking from ${name}! ${acres} acres of ${selectedCrop} scheduled for ${date ? format(date, 'PPP') : ''}. Contact: ${phone}`,
        messageForSMS: `New booking received: ${name} (${phone}) booked ${acres} acres of ${selectedCrop} for ${date ? format(date, 'PPP') : ''}`,
        messageForEmail: `<h1>New Drone Service Booking</h1><p><strong>Farmer:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Village:</strong> ${village}</p><p><strong>Crop:</strong> ${selectedCrop}</p><p><strong>Acres:</strong> ${acres}</p><p><strong>Date:</strong> ${date ? format(date, 'PPP') : ''}</p><p><strong>Total Amount:</strong> ₹${totalPrice}</p>`
      };
    
      // Send notification using our utility function
      const notificationSent = await sendNotification(bookingData);
    
      // Show success message
      toast.success(t.bookingSuccess);
    
      if (!notificationSent) {
        toast.error("There was an issue sending the notification. Our team will still contact you.");
      }
    
      // Reset form
      setDate(undefined);
      setAcres(5);
      setName('');
      setPhone('');
      setVillage('');
      setSelectedCrop(defaultCrop);
    } catch (error) {
      toast.error("An error occurred while processing your booking");
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-agri-green mb-6">{t.formTitle}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <FarmerInfoFields 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          village={village}
          setVillage={setVillage}
        />
        
        <CropSelector 
          selectedCrop={selectedCrop}
          setSelectedCrop={setSelectedCrop}
        />
        
        <DateSelector 
          date={date}
          setDate={setDate}
        />
        
        <AcreageSelector 
          acres={acres}
          setAcres={setAcres}
        />
        
        <PriceSummary 
          cropPrice={cropPrice}
          totalPrice={totalPrice}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-agri-green hover:bg-agri-green-light"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : t.confirmBooking}
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
