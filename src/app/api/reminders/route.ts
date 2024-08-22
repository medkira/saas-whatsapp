import { Appointments } from '@/domain/entities/Appointments';
import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const day = searchParams.get('day'); // 'today' or 'tomorrow'
  let reminders;
  if (day === 'tomorrow') {
    reminders = await getUnsentRemindersForTomorrow();

    for (const reminder of reminders) {
      await sendReminder(reminder);
    }

  } else if (day == 'today') {
    reminders = await getUnsentRemindersOfToday();
    for (const reminder of reminders) {
      await sendReminder(reminder);
    }
  }

  return new NextResponse('sucess')
}


// the Reminders
async function getUnsentRemindersOfToday() {
  const supabase = createClient();

  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const { data,
    error } = await supabase
      .from('appointments')
      .select('*')
      .eq('reminder_sent', false)
      .gte('appointment_date', startOfDay.toISOString())
      .lte('appointment_date', endOfDay.toISOString());

  if (error) {
    throw new Error(`Failed to fetch unsent reminders: ${error.message}`);
  }

  return data;
}



async function getUnsentRemindersForTomorrow() {
  // const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  const startOfDay = new Date();
  startOfDay.setDate(startOfDay.getDate() + 1); // Move to tomorrow
  startOfDay.setHours(0, 0, 0, 0); // Set to start of the day (00:00:00)
  console.log("startOfDay", startOfDay)

  const endOfDay = new Date();
  endOfDay.setDate(endOfDay.getDate() + 1); // Move to tomorrow
  endOfDay.setHours(23, 59, 59, 999); // Set to end of the day (23:59:59)
  console.log("endOfDay", endOfDay)

  const supabase = createClient();

  const { data, error } = await supabase
    .from('appointments')
    .select('*')
    .eq('reminder_sent', false)
    // .eq('appointment_date::date', today); // Assuming 'reminder_date' is the column storing the date
    .gte('appointment_date', startOfDay.toISOString()) // Start of day
    .lte('appointment_date', endOfDay.toISOString()); //

  if (error) {
    throw new Error(`Failed to fetch unsent reminders: ${error.message}`);
  }

  return data;
}




// using the whats app service
async function sendReminder(appointment: Appointments) {
  // Logic to send reminder
  // Example: Send an email, push notification, etc.

  // Send WhatsApp message
  const phoneNumber = appointment.phone_number;
  // get data from doctor
  // await this.whatsappService.sendRemindMessage({
  await sendRemindMessage({
    toPhoneNumber: phoneNumber,
    appointmentDate: 'azhha',
    appointmentTime: 'ajha',
    doctorName: 'mohamed',
    patientName: 'ahehaiu',
  });

  const supabase = createClient();
  // After sending the reminder, update the reminder_sent to true.
  const { error } = await supabase
    .from('appointments')
    .update({ reminder_sent: true })
    .eq('id', appointment.id);
  if (error) {
    throw new Error(error.message);
  }
}




// a whatsapp service 
async function sendRemindMessage({
  toPhoneNumber,
  patientName,
  doctorName,
  appointmentDate,
  appointmentTime,
}: {
  toPhoneNumber: string;
  patientName: string;
  doctorName: string;
  appointmentDate: string;
  appointmentTime: string;
}) {
  const payload = {
    messaging_product: 'whatsapp',
    to: toPhoneNumber,
    recipient_type: 'individual',
    type: 'template',
    template: {
      namespace: '56c0438f_ddf8_4ce9_9046_bfaea8928bee',
      name: 'doctor_appointment_reminder',
      language: {
        code: 'en_us',
        policy: 'deterministic',
      },
      components: [
        {
          type: 'header',
          parameters: [
            {
              type: 'text',
              text: doctorName,
            },
          ],
        },
        {
          type: 'body',
          parameters: [
            {
              type: 'text',
              text: patientName,
            },
            {
              type: 'text',
              text: doctorName,
            },
            {
              type: 'text',
              text: appointmentDate,
            },
            {
              type: 'text',
              text: appointmentTime,
            },
          ],
        },
      ],
    },
  };

  const response = await fetch(
    `https://graph.facebook.com/v20.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.META_ACCESS_TOKEN_SYSTEM_ADMIN}`,
      },
      body: JSON.stringify(payload),
    },
  );
  console.log(response);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      `Failed to send WhatsApp message: ${response.status} ${response.statusText} - ${error.message}`,
    );
  }
}




