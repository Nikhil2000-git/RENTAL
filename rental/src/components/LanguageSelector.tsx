
import React from 'react';
import { useLanguageStore, Language } from '@/utils/languageUtils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguageStore();
  
  const languageNames: Record<Language, string> = {
    english: 'English',
    telugu: 'తెలుగు',
    hindi: 'हिंदी'
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span>{languageNames[language]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuItem onClick={() => setLanguage('english')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('telugu')}>
          తెలుగు (Telugu)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('hindi')}>
          हिंदी (Hindi)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
