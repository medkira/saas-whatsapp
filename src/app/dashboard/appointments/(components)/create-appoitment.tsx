'use client';

import React, { useEffect, useState } from 'react';
import { Autocomplete, AutocompleteItem, Button, Calendar, Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react';
import { now, getLocalTimeZone, today } from '@internationalized/date';
import { useFormState, useFormStatus } from 'react-dom';
import { Commandes } from '@/domain/entities/Commandes';
import { createAppointment } from '@/actions/appointments';
import { Patients } from '@/domain/entities/Patients';
import { Appointments } from '@/domain/entities/Appointments';
import ErrorMessage from '@/components/validation/error-message';
import toast from 'react-hot-toast';
import { UsageLimitWrapper } from './usage-limit-wrapper';
import Link from 'next/link';

export default function CreateAppointment({
    patients, appointments, isPlanReachedLimit
}: {
    patients: Patients[];
    appointments: Appointments[];
    isPlanReachedLimit: Boolean;
}) {

    const [userId, setUserId] = useState<number>();
    const [timeZone, setTimeZone] = useState<string | null>(null);

    // to get th etime the moment the component loads in the client side
    useEffect(() => {
        if (typeof window !== 'undefined') { // to prevent the code from running in the sever
            setTimeZone(getLocalTimeZone());
        }
    }, []);

    const appointmentTimes: string[] = [
        "08:30", "09:00", "09:30", "10:00", "10:30",
        "11:00", "11:30", "12:00", "12:30",
        "13:00", "13:30", "14:00", "14:30",
        "15:00", "15:30", "16:00", "16:30", "17:00"
    ];

    const [date, setDate] = useState(today(getLocalTimeZone()));
    // const todayDate = today(getLocalTimeZone()).toString(); // Convert CalendarDate to string

    const [selectedTime, setSelectedTime] = useState<string>("");

    const selectedPatient = patients!.find(obj => obj.id === userId)

    const dateTimecreateAappointment = createAppointment.bind(null, selectedTime, date.toString(), selectedPatient!)
    const [state, dispatch] = useFormState(dateTimecreateAappointment, null);

    useEffect(() => {
        if (state != null)
            toast.success(
                `Appointment created successfully for ${selectedPatient?.name}`,
                { duration: 5000 },
            );

    }, [state])

    const handleTimeSelection = (event: React.MouseEvent<HTMLButtonElement>, time: string) => {
        event.preventDefault();
        setSelectedTime(time);
    };


    // ***** Handle appointment ***** //

    const getDateFromAppointment = (appointmentDate: string): string => {
        const date = new Date(appointmentDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };

    const getTimeFromAppointment = (appointmentDate: string): string => {
        const date = new Date(appointmentDate);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        // const seconds = String(date.getSeconds()).padStart(2, '0');


        return `${hours}:${minutes}`;
    };


    const isTimeTaken = (time: string) => {
        const isTaken = appointments.some(appointment => { // some
            const appointmentDate = getDateFromAppointment(appointment.appointment_date);

            const selectedDate = `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`;
            // console.log(time, getTimeFromAppointment(appointmentDate))
            // console.log("(time === getTimeFromAppointment(appointmentDate))", (time === getTimeFromAppointment(appointmentDate)))
            if ((appointmentDate === selectedDate) && (time === getTimeFromAppointment(appointment.appointment_date))) {
                return true
            } else false


        });

        return isTaken
    };


    return (
        <div className="flex flex-col items-center  justify-center gap-12  p-5 ">
            <form
                action={dispatch}
                className="flex flex-col gap-6 overflow-y-auto"
            >
                <Card className='p-4 bg-zinc-900 overflow-y-auto' >

                    <div className="flex w-full flex-row gap-4">

                        {timeZone ? (
                            <div className='flex flex-wrap justify-center items-center gap-6'>
                                <Calendar
                                    color='success'
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
                                            className={`px-4 py-2  transition-colors duration-200 
                                                ${selectedTime === time ? 'bg-green-500 text-white' : ' text-white hover:bg-slate-600'}`}
                                            variant='bordered'
                                            color={isTimeTaken(time) ? 'danger' : 'default'}
                                            disabled={isTimeTaken(time) ? true : false}

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
                    <div className='p-3'>
                        <ErrorMessage message={state?.appointment_time} />
                    </div>
                    <Divider className='my-5' />

                    {!isPlanReachedLimit ?
                        <div className="w-full max-w-md mx-auto p-6 bg-yellow-50 border border-yellow-200 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <h2 className="text-lg font-semibold text-yellow-800">Usage Limit Reached</h2>
                            </div>
                            <p className="text-yellow-700 mb-4">
                                You have reached your reminder limit. Upgrade your plan to create more reminders and unlock additional features.
                            </p>
                            <Link href="/upgrade-plan" className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Upgrade Plan
                            </Link>
                        </div>
                        : <CardFooter className='flex items-center justify-between gap-6'>

                            <CreateButton setTime={setSelectedTime} />
                            <Autocomplete
                                className="max-w-[250px]"
                                label="Search patient"
                                placeholder="Type a patient name"
                                onSelectionChange={(id) => { setUserId(id !== null ? +id : 0) }}   // console.log("user id", patients!.find(obj => obj.id === +value!)) 

                                errorMessage={state?.patient?.[0] ?? ""}
                                isInvalid={state?.patient ? true : false}
                            >
                                {patients!.map((patient) => (
                                    <AutocompleteItem key={patient.id}>
                                        {patient.name}

                                    </AutocompleteItem>
                                ))}
                            </Autocomplete>
                        </CardFooter>
                    }


                </Card>

            </form>
        </div>

    );
}

function CreateButton({ setTime }: { setTime: any }) {
    const status = useFormStatus();
    status.pending === true && setTime("");
    return (
        <Button
            className="max-w-fit p-2 text-xl font-semibold text-white"
            color="success"
            size="lg"
            type="submit"
            // disabled={!isFormValid}  // Disable the button if the form is not valid
            isLoading={status.pending}
        >
            Save
        </Button>
    )

}
