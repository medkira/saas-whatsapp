'use client';

import React, { useCallback, useState } from "react";
import {
    Calendar as BigCalendar,
    dayjsLocalizer,
    View,
    Views
} from "react-big-calendar";
import dayjs from 'dayjs';
import 'react-big-calendar/lib/sass/styles.scss';
import './index.scss';
import CreatePatientModel from "../../patients/(components)/create-patient-model";

// Initialize dayjs localizer
dayjs().format();
const localizer = dayjsLocalizer(dayjs);

interface Event {
    allDay?: boolean;
    title?: string;
    start: Date;
    end: Date;
    resource?: any;
}

const styles = {
    container: {
        width: "80wh",
        height: "80vh",
        margin: "2em"
    }
};

export default function CustomCalendar({ initialEvents }: { initialEvents: Event[] }) {
    const [view, setView] = useState<View>(Views.MONTH);
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState<Event[]>(initialEvents);

    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView);
    };

    const onNavigate = useCallback(
        (newDate: Date) => {
            return setDate(newDate);
        },
        [setDate]
    );

    const handleSelectSlot = ({ start, end }: { start: Date, end: Date }) => {
        const title = window.prompt('New Event Name');
        if (title) {
            const newEvent: Event = { start, end, title };
            setEvents([...events, newEvent]);
        }
    };

    return (
        <div className="pt-20">
            <div style={styles.container}>
                <BigCalendar
                    date={date}
                    onNavigate={onNavigate}
                    localizer={localizer}
                    events={events}
                    view={view}
                    defaultView={Views.MONTH}
                    views={['month', 'week', 'day', 'agenda']}
                    showMultiDayTimes
                    onView={handleOnChangeView}
                    selectable
                    onSelectSlot={handleSelectSlot}
                />
            </div>
        </div>
    );
}

