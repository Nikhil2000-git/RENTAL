
import React from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguageStore, translations } from '@/utils/languageUtils';

interface DateSelectorProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ date, setDate }) => {
  const { language } = useLanguageStore();
  const t = translations[language];
  
  return (
    <div className="space-y-2">
      <Label htmlFor="date">{t.dateLabel}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>{t.dateSelectPlaceholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 pointer-events-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
            disabled={(date) => {
              // Disable dates in the past
              return date < new Date(new Date().setHours(0, 0, 0, 0));
            }}
            className="pointer-events-auto"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateSelector;
