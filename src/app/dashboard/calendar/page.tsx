"use client"
import {
  Calendar as BigCalendar,
  Calendar,
  dayjsLocalizer,
  momentLocalizer,
  View,
  Views
} from "react-big-calendar";
import moment from "moment";
import dayjs from 'dayjs'
// import "react-big-calendar/lib/css/react-big-calendar.css";
import 'react-big-calendar/lib/sass/styles.scss';
import './index.scss'
import { useCallback, useState } from "react";

// moment.locale("en-GB");
//momentLocalizer(moment);

// const events = [
//   {
//     id: 0,
//     title: "Board meeting",
//     start: new Date(2018, 0, 29, 9, 0, 0),
//     end: new Date(2018, 0, 29, 13, 0, 0),
//     resourceId: 1
//   },
//   {
//     id: 1,
//     title: "MS training",
//     allDay: true,
//     start: new Date(2018, 0, 29, 14, 0, 0),
//     end: new Date(2018, 0, 29, 16, 30, 0),
//     resourceId: 2
//   },
//   {
//     id: 2,
//     title: "Team lead meeting",
//     start: new Date(2018, 0, 29, 8, 30, 0),
//     end: new Date(2018, 0, 29, 12, 30, 0),
//     resourceId: 3
//   },
//   {
//     id: 11,
//     title: "Birthday Party",
//     start: new Date(2018, 0, 30, 7, 0, 0),
//     end: new Date(2018, 0, 30, 10, 30, 0),
//     resourceId: 4
//   }
// ];

const resourceMap = [
  { resourceId: 1, resourceTitle: "Board room" },
  { resourceId: 2, resourceTitle: "Training room" },
  { resourceId: 3, resourceTitle: "Meeting room 1" },
  { resourceId: 4, resourceTitle: "Meeting room 2" }
];

const styles = {
  container: {
    width: "80wh",
    height: "80vh",
    margin: "2em"
  }
};




const events = [
  {
    start: new Date('2024-05-20'),
    end: new Date('2024-05-25'),
    title: 'Some title'
  },
  {
    title: 'DTS STARTS',
    start: new Date(2024, 4, 13, 11, 0, 0),
    end: new Date(2024, 4, 14, 2, 0, 0)
  }
]

dayjs().format()

const localizer = dayjsLocalizer(dayjs)



export default function CustomCalendar() {
  const [view, setView] = useState<View>(Views.MONTH)

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView)
  }

  const [date, setDate] = useState(new Date())
  const onNavigate = useCallback(
    (newDate: Date) => {
      return setDate(newDate)
    },
    [setDate]
  )



  // const handleSelectSlot = ({ start, end }) => {
  //   alert(`Clicked on: ${moment(start).format('YYYY-MM-DD')}`);
  //   // Here you can add logic to handle the selection, e.g., add an event
  //   const title = window.prompt('New Event name');
  //   if (title) {
  //     setEvents([...events, { start, end, title }]);
  //   }
  // };

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
        // onSelectSlot={handleSelectSlot}
        />
        {/* <BigCalendar
          localizer={localizer}
          events={events}
          // startAccessor="start"
          // endAccessor="end"
          style={{ height: 500 }}
        /> */}
      </div>
    </div>

  );
}
