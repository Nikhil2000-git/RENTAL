
import React from 'react';
import { useLanguageStore, translations } from '@/utils/languageUtils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface FarmerInfoFieldsProps {
  name: string;
  setName: (name: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  village: string;
  setVillage: (village: string) => void;
}

const FarmerInfoFields: React.FC<FarmerInfoFieldsProps> = ({
  name, setName, phone, setPhone, village, setVillage
}) => {
  const { language } = useLanguageStore();
  const t = translations[language];
  
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="name">{t.nameLabel}</Label>
        <Input
          id="name"
          placeholder={t.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">{t.phoneLabel}</Label>
        <Input
          id="phone"
          placeholder={t.phonePlaceholder}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          type="tel"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="village">{t.villageLabel}</Label>
        <Input
          id="village"
          placeholder={t.villagePlaceholder}
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          required
        />
      </div>
    </>
  );
};

export default FarmerInfoFields;
