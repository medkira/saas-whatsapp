'use client';

import React, { useEffect, useState } from 'react';
import { Button, Calendar, Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react';
import { now, getLocalTimeZone, today } from '@internationalized/date';
import { useFormState } from 'react-dom';
import Image from 'next/image';
import { Commandes } from '@/domain/entities/Commandes';
import { createAappointment } from '@/actions/appointments';
import { parseDate } from "@internationalized/date";

export default function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  let data: Commandes[] = [];
  const query = searchParams?.query || '';

  const [timeZone, setTimeZone] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeZone(getLocalTimeZone());
    }
  }, []);

  const appointmentTimes: string[] = [
    "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "12:00", "12:30",
    "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const [value, setValue] = React.useState(today(getLocalTimeZone()));
  const todayDate = today(getLocalTimeZone()).toString(); // Convert CalendarDate to string
  // const [value, setValue] = useState<string>(todayDate);

  const [selectedTime, setSelectedTime] = useState<string>("");



  const dateTimecreateAappointment = createAappointment.bind(null, selectedTime, value.toString())
  const [state, dispatch] = useFormState(dateTimecreateAappointment, {});


  const handleTimeSelection = (event: React.MouseEvent<HTMLButtonElement>, time: string) => {
    event.preventDefault();
    setSelectedTime(time);
  };

  // const isFormValid = value && selectedTime;

  return (
    <div className="flex flex-col items-center justify-center gap-12 pt-24 text-white">
      <form
        action={dispatch}
        className="flex max-h-[90vh] flex-col gap-6 overflow-y-auto"
      >
        <Card className='p-4 bg-zinc-900' >

          <div className="flex w-full flex-row gap-4">

            {timeZone ? (
              <>
                <Calendar
                  aria-label="Date (Controlled)"
                  value={value}
                  defaultValue={today(getLocalTimeZone())}
                  onChange={setValue}
                />
                <div className="grid grid-cols-3 gap-4">
                  {appointmentTimes.map((time, index) => (
                    <Button
                      key={index}
                      onClick={(e) => handleTimeSelection(e, time)}
                      className={`px-4 py-2  transition-colors duration-200 ${selectedTime === time ? 'bg-green-500 text-white' : ' text-white hover:bg-slate-600'
                        }`}
                      variant='bordered'
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <Divider className='my-5' />
          <CardFooter>
            <Button
              className="max-w-fit p-2 text-xl font-semibold text-white"
              color="success"
              size="lg"
              type="submit"
            // disabled={!isFormValid}  // Disable the button if the form is not valid
            >
              Save
            </Button>
          </CardFooter>

        </Card>

      </form>
    </div>

  );
}
