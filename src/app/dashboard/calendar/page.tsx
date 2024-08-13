import { Machines } from '@/domain/entities/Machines';
import DashboardMachines from '@/app/dashboard/machines/(components)/dahboard-machines';
import { getAllMachines, getMachine, searchMachines } from '@/actions/machines';
import CustomCalendar from './(components)/CostumCalendar';
import { getAppointments } from '@/actions/appointments';
import { Appointments } from '@/domain/entities/Appointments';

export default async function Page({
  // searchParams,
}: {
    // searchParams?: { query?: string; page?: string };
  }) {
  // let data: Machines[] = [];
  // const query = searchParams?.query || '';

  // if (query.length === 0) {
  //   data = await getAllMachines();
  // } else if (query.length !== 0) {
  //   data = await searchMachines(query);

  //   const ref = data.find(
  //     (machine) => machine.reference === query.toUpperCase(),
  //   );

  //   if (ref) {
  //     data = [ref];
  //   }
  // } else if (data.length === 0) {
  //   data = [];
  // }

  // const machines: Machines[] = data;




  interface Event {
    allDay?: boolean;
    title?: string;
    start: Date;
    end: Date;
    resource?: any;
  }

  function mapAppointmentToEvent(appointment: Appointments): Event {
    return {
      title: `Patient ${appointment.patient_name} - Scheduled Consultation`,
      start: new Date(appointment.appointment_date),
      end: new Date(appointment.appointment_date),  // Assuming the appointment is for a specific time
      resource: {
        id: appointment.id,
        patientId: appointment.patient_id,
        doctorId: appointment.doctor_id,
        phoneNumber: appointment.phone_number,
        reminderSent: appointment.reminder_sent,
      },
    };
  }

  const apointments = await getAppointments();
  const event = apointments.map<Event>((appointment) => {
    return mapAppointmentToEvent(appointment);
  })
  // console.log(event)

  return (
    <>
      <CustomCalendar initialEvents={event} />
    </>
  );
}
