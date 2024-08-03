'use client';

import React, { useEffect, useState } from 'react';
import { Button, DatePicker } from '@nextui-org/react';
import { now, getLocalTimeZone } from '@internationalized/date';
import { useFormState } from 'react-dom';

import { Commandes } from '@/domain/entities/Commandes';
import { createAappointment } from '@/actions/appointments';

export default function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  let data: Commandes[] = [];
  const query = searchParams?.query || '';

  //   data = await getCommandes();

  const [timeZone, setTimeZone] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeZone(getLocalTimeZone());
    }
  }, []);

  const [state, dispatch] = useFormState(createAappointment, {});

  return (
    <div className="flex flex-col items-center justify-center gap-12 pt-24 text-white">
      <form
        action={dispatch}
        className="flex max-h-[90vh] flex-col gap-6 overflow-y-auto"
      >
        <div className="flex w-full max-w-xl flex-row gap-4">
          {timeZone ? (
            <DatePicker
              hideTimeZone
              showMonthAndYearPickers
              defaultValue={now(timeZone)}
              label="Appointment Date"
              name="appointment_date"
              variant="bordered"
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <Button
          className="max-w-fit text-xl  font-semibold text-white"
          color="success"
          size="lg"
          type="submit"
        >
          Save
        </Button>
      </form>
    </div>
  );
}
