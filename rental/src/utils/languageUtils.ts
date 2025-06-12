
import { create } from 'zustand';

export type Language = 'english' | 'telugu' | 'hindi';

type LanguageStore = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'english',
  setLanguage: (language) => set({ language }),
}));

// Translations for all text in the app
export const translations = {
  english: {
    // Booking page
    bookingTitle: 'Book Your Drone Spray Service',
    bookingSubtitle: 'Fill out the form below to schedule your agricultural drone service. We\'ll contact you to confirm your booking.',
    
    // Booking form
    formTitle: 'Book Drone Spray Service',
    nameLabel: 'Your Name',
    namePlaceholder: 'Enter your full name',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'Enter your phone number',
    villageLabel: 'Village/Location',
    villagePlaceholder: 'Enter your village or location',
    dateLabel: 'Select Service Date',
    dateSelectPlaceholder: 'Select a date',
    acresLabel: 'Land Area (in Acres)',
    acres: 'acres',
    cropLabel: 'Select Crop Type',
    pricePerAcre: 'Price per acre:',
    totalPrice: 'Total:',
    confirmBooking: 'Confirm Booking',
    
    // Crop names
    crops: {
      default: 'General Crops',
      cotton: 'Cotton',
      maize: 'Maize',
      paddy: 'Paddy',
    },
    
    // Messages
    selectDateError: 'Please select a date for your booking',
    fillFieldsError: 'Please fill all required fields',
    bookingSuccess: 'Booking request submitted! We will contact you to confirm your booking.'
  },
  
  telugu: {
    // Booking page
    bookingTitle: 'మీ డ్రోన్ స్ప్రే సేవను బుక్ చేసుకోండి',
    bookingSubtitle: 'మీ వ్యవసాయ డ్రోన్ సేవను షెడ్యూల్ చేయడానికి దిగువ ఫారమ్‌ని పూరించండి. మీ బుకింగ్‌ని నిర్ధారించడానికి మేము మిమ్మల్ని సంప్రదిస్తాము.',
    
    // Booking form
    formTitle: 'డ్రోన్ స్ప్రే సేవను బుక్ చేయండి',
    nameLabel: 'మీ పేరు',
    namePlaceholder: 'మీ పూర్తి పేరు నమోదు చేయండి',
    phoneLabel: 'ఫోన్ నంబర్',
    phonePlaceholder: 'మీ ఫోన్ నంబర్‌ని నమోదు చేయండి',
    villageLabel: 'గ్రామం/స్థానం',
    villagePlaceholder: 'మీ గ్రామం లేదా స్థానాన్ని నమోదు చేయండి',
    dateLabel: 'సేవా తేదీని ఎంచుకోండి',
    dateSelectPlaceholder: 'తేదీని ఎంచుకోండి',
    acresLabel: 'భూమి విస్తీర్ణం (ఎకరాల్లో)',
    acres: 'ఎకరాలు',
    cropLabel: 'పంట రకాన్ని ఎంచుకోండి',
    pricePerAcre: 'ఎకరానికి ధర:',
    totalPrice: 'మొత్తం:',
    confirmBooking: 'బుకింగ్‌ని నిర్ధారించండి',
    
    // Crop names
    crops: {
      default: 'సాధారణ పంటలు',
      cotton: 'పత్తి',
      maize: 'మొక్కజొన్న',
      paddy: 'వరి',
    },
    
    // Messages
    selectDateError: 'దయచేసి మీ బుకింగ్ కోసం తేదీని ఎంచుకోండి',
    fillFieldsError: 'దయచేసి అవసరమైన అన్ని ఫీల్డ్‌లను పూరించండి',
    bookingSuccess: 'బుకింగ్ అభ్యర్థన సమర్పించబడింది! మేము మీ బుకింగ్‌ని నిర్ధారించడానికి మిమ్మల్ని సంప్రదిస్తాము.'
  },
  
  hindi: {
    // Booking page
    bookingTitle: 'अपनी ड्रोन स्प्रे सेवा बुक करें',
    bookingSubtitle: 'अपनी कृषि ड्रोन सेवा को शेड्यूल करने के लिए नीचे दिए गए फॉर्म को भरें। हम आपकी बुकिंग की पुष्टि करने के लिए आपसे संपर्क करेंगे।',
    
    // Booking form
    formTitle: 'ड्रोन स्प्रे सेवा बुक करें',
    nameLabel: 'आपका नाम',
    namePlaceholder: 'अपना पूरा नाम दर्ज करें',
    phoneLabel: 'फ़ोन नंबर',
    phonePlaceholder: 'अपना फोन नंबर दर्ज करें',
    villageLabel: 'गाँव/स्थान',
    villagePlaceholder: 'अपने गाँव या स्थान को दर्ज करें',
    dateLabel: 'सेवा तिथि का चयन करें',
    dateSelectPlaceholder: 'तिथि का चयन करें',
    acresLabel: 'भूमि क्षेत्र (एकड़ में)',
    acres: 'एकड़',
    cropLabel: 'फसल प्रकार चुनें',
    pricePerAcre: 'प्रति एकड़ मूल्य:',
    totalPrice: 'कुल:',
    confirmBooking: 'बुकिंग की पुष्टि करें',
    
    // Crop names
    crops: {
      default: 'सामान्य फसलें',
      cotton: 'कपास',
      maize: 'मक्का',
      paddy: 'धान',
    },
    
    // Messages
    selectDateError: 'कृपया अपनी बुकिंग के लिए एक तारीख चुनें',
    fillFieldsError: 'कृपया सभी आवश्यक फ़ील्ड भरें',
    bookingSuccess: 'बुकिंग अनुरोध सबमिट किया गया! हम आपकी बुकिंग की पुष्टि करने के लिए आपसे संपर्क करेंगे।'
  }
};
