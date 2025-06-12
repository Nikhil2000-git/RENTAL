
import React from 'react';
import { useLanguageStore, translations } from '@/utils/languageUtils';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CropSelectorProps {
  selectedCrop: string;
  setSelectedCrop: (crop: string) => void;
}

const CropSelector: React.FC<CropSelectorProps> = ({ selectedCrop, setSelectedCrop }) => {
  const { language } = useLanguageStore();
  const t = translations[language];
  
  return (
    <div className="space-y-2">
      <Label htmlFor="crop">{t.cropLabel}</Label>
      <Select
        value={selectedCrop}
        onValueChange={setSelectedCrop}
      >
        <SelectTrigger id="crop" className="w-full">
          <SelectValue placeholder={t.crops.default} />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="default">{t.crops.default}</SelectItem>
          <SelectItem value="cotton">{t.crops.cotton}</SelectItem>
          <SelectItem value="maize">{t.crops.maize}</SelectItem>
          <SelectItem value="paddy">{t.crops.paddy}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CropSelector;
