
import React from 'react';
import { useLanguageStore, translations } from '@/utils/languageUtils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface AcreageSelectorProps {
  acres: number;
  setAcres: (acres: number) => void;
}

const AcreageSelector: React.FC<AcreageSelectorProps> = ({ acres, setAcres }) => {
  const { language } = useLanguageStore();
  const t = translations[language];
  
  return (
    <div className="space-y-2">
      <Label htmlFor="acres">{t.acresLabel}</Label>
      <div className="flex items-center space-x-2">
        <Input
          type="number"
          id="acres"
          min={1}
          value={acres}
          onChange={(e) => setAcres(parseInt(e.target.value) || 0)}
          required
        />
        <span className="text-muted-foreground">{t.acres}</span>
      </div>
    </div>
  );
};

export default AcreageSelector;
