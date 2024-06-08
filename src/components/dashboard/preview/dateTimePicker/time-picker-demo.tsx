'use client';

import * as React from 'react';
import { Clock } from 'lucide-react';

import { TimePickerInput } from './time-picker-input';

import { Label } from '@/components/ui/label';

interface TimePickerDemoProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

export function TimePickerDemo({ date, setDate }: TimePickerDemoProps) {
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);
  const secondRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-end gap-2">
      <div className="grid gap-1 text-center">
        <Label className="text-xs" htmlFor="hours">
          Hours
        </Label>
        <TimePickerInput
          ref={hourRef}
          date={date}
          picker="hours"
          setDate={setDate}
          onRightFocus={() => minuteRef.current?.focus()}
        />
      </div>
      <div className="grid gap-1 text-center">
        <Label className="text-xs" htmlFor="minutes">
          Minutes
        </Label>
        <TimePickerInput
          ref={minuteRef}
          date={date}
          picker="minutes"
          setDate={setDate}
          onLeftFocus={() => hourRef.current?.focus()}
          onRightFocus={() => secondRef.current?.focus()}
        />
      </div>
      <div className="grid gap-1 text-center">
        <Label className="text-xs" htmlFor="seconds">
          Seconds
        </Label>
        <TimePickerInput
          ref={secondRef}
          date={date}
          picker="seconds"
          setDate={setDate}
          onLeftFocus={() => minuteRef.current?.focus()}
        />
      </div>
      <div className="flex h-10 items-center">
        <Clock className="ml-2 h-4 w-4" />
      </div>
    </div>
  );
}
