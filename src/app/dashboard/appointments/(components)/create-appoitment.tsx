'use client';

import React, { useEffect, useState } from 'react';
import { Autocomplete, AutocompleteItem, Button, Calendar, Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react';
import { now, getLocalTimeZone, today } from '@internationalized/date';
import { useFormState } from 'react-dom';
import { Commandes } from '@/domain/entities/Commandes';
import { createAappointment } from '@/actions/appointments';
import { Patients } from '@/domain/entities/Patients';

export default function CreateAppointment({
    patients,
}: {
    patients?: Patients[];
}) {

    const [userId, setUserId] = useState<number>();
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

    const [date, setDate] = React.useState(today(getLocalTimeZone()));
    // const todayDate = today(getLocalTimeZone()).toString(); // Convert CalendarDate to string

    const [selectedTime, setSelectedTime] = useState<string>("");

    const selectedPatient = patients!.find(obj => obj.id === userId)

    const dateTimecreateAappointment = createAappointment.bind(null, selectedTime, date.toString(), selectedPatient!)
    const [state, dispatch] = useFormState(dateTimecreateAappointment, {});


    const handleTimeSelection = (event: React.MouseEvent<HTMLButtonElement>, time: string) => {
        event.preventDefault();
        setSelectedTime(time);
    };

    // const isFormValid = value && selectedTime;




    return (
        <div className="flex flex-col items-center justify-center gap-12 pt-24 p-5 text-white">
            <form
                action={dispatch}
                className="flex max-h-[90vh] flex-col gap-6 overflow-y-auto"
            >
                <Card className='p-4 bg-zinc-900' >

                    <div className="flex w-full flex-row gap-4">

                        {timeZone ? (
                            <div className='flex flex-wrap justify-center items-center gap-6'>
                                <Calendar
                                    aria-label="Date (Controlled)"
                                    value={date}
                                    defaultValue={today(getLocalTimeZone())}
                                    onChange={setDate}
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
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <Divider className='my-5' />
                    <CardFooter className='flex items-center justify-between gap-6'>
                        <Button
                            className="max-w-fit p-2 text-xl font-semibold text-white"
                            color="success"
                            size="lg"
                            type="submit"
                        // disabled={!isFormValid}  // Disable the button if the form is not valid
                        >
                            Save
                        </Button>

                        <Autocomplete
                            className="max-w-xs"
                            // defaultFilter={() => true}
                            label="Search patient"
                            placeholder="Type a patient name"
                            // onInputChange={(value) => { console.log("onInputChange", value) }}
                            onSelectionChange={(id) => { setUserId(id !== null ? +id : 0) }}   // console.log("user id", patients!.find(obj => obj.id === +value!)) 
                        >
                            {patients!.map((patient) => (
                                <AutocompleteItem key={patient.id}>
                                    {patient.name}

                                </AutocompleteItem>
                            ))}
                        </Autocomplete>

                    </CardFooter>

                </Card>

            </form>
        </div>

    );
}
