'use client';

import React, { useState } from 'react';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Card, CardBody } from '@nextui-org/card';

export default function DemoPage() {
  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [notification, setNotification] = useState(null);

  const handleAddAppointment = () => {
    if (patientName && appointmentDate) {
      const newAppointment = { patientName, appointmentDate };
      setAppointments([...appointments, newAppointment]);
      setPatientName('');
      setAppointmentDate('');
      showNotification('Appointment added successfully!');
    }
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const sendReminder = (index) => {
    showNotification(`Reminder sent to ${appointments[index].patientName}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          WhatsApp Appointment Manager Demo
        </h1>

        <Card className="mb-8">
          <CardBody>
            <h2 className="text-xl font-semibold mb-4">Add New Appointment</h2>
            <div className="space-y-4">
              <Input
                label="Patient Name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Enter patient name"
              />
              <Input
                label="Appointment Date"
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
              />
              <Button color="primary" onClick={handleAddAppointment}>
                Add Appointment
              </Button>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h2 className="text-xl font-semibold mb-4">Appointments</h2>
            {appointments.length === 0 ? (
              <p className="text-gray-500">No appointments scheduled yet.</p>
            ) : (
              <ul className="space-y-4">
                {appointments.map((appointment, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{appointment.patientName}</p>
                      <p className="text-sm text-gray-500">{appointment.appointmentDate}</p>
                    </div>
                    <Button color='primary' onClick={() => sendReminder(index)}>
                      Send Reminder
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </CardBody>
        </Card>

        {notification && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
}