'use client';

import * as React from 'react';
import { add, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useEffect } from 'react';

import { TimePickerDemo } from './time-picker-demo';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useDateStore } from '@/app/lib/store';

export function DateTimePicker() {
  // const { setGlobalDate } = useDateStore();
  const [date, setDate] = React.useState<Date>();

  /**
   * carry over the current time when a user clicks a new day
   * instead of resetting to 00:00
   */
  const handleSelect = (newDay: Date | undefined): void => {
    if (!newDay) return;
    if (!date) {
      setDate(newDay);
      // setGlobalDate(newDay);
      // console.log(newDay);

      return;
    }
    const diff = newDay.getTime() - date.getTime();
    const diffInDays = diff / (1000 * 60 * 60 * 24);
    const newDateFull = add(date, { days: Math.ceil(diffInDays) });

    setDate(newDateFull);
    // setGlobalDate(newDateFull);
  };

  // // Optional: if you want to perform some side-effect whenever `date` changes
  // useEffect(() => {
  //   if (date) {
  //     setGlobalDate(date);
  //   }
  // }, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
          variant={'outline'}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP HH:mm:ss') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="overflow-hidden bg-black">
          <Calendar
            // initialFocus
            mode="single"
            selected={date}
            onSelect={(d) => handleSelect(d)}
          />
          <div className="border-border border-t p-3">
            <TimePickerDemo date={date} setDate={setDate} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
