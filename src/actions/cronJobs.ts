'use server'
import { createClient } from "@/utils/supabase/server";
import SupabaseService from "./abstarct/crud-entitie-supabse";
import { CronJobs } from "@/domain/entities/CronJobs";

const supabseTableName = 'cronJobs';

const cronJobsCrud = new SupabaseService(supabseTableName);


export const createCronJob = async (localTimeZone: string) => {

    // create the local timz zon of 
    // the current user
    const supabase = createClient();

    const { data, error } = await supabase
        .from(supabseTableName)
        .insert({ 'local_time_zone': localTimeZone });

    // make the post req to cron-job.org 
    // to save schedule the cron job


    const schedule = {
        timezone: localTimeZone,
        hour: '07',
        minute: '00',
        dayOfMonth: '*',
        month: '*',
        dayOfWeek: '*',
    };

    const url = process.env.BASE_URL;


    const response = await fetch('https://api.cron-job.org/jobs', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.CRON_JOB_API_KEY}`,
        },
        body: JSON.stringify({
            url: url + '/reminders?day=today',
            schedule,
            enabled: true,
            httpMethod: 'GET',
        }),
    });


    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to create cron job: ${response.statusText} - ${errorData.message}`);
    }

    const res = await response.json();

}


// export const getCronJob = async (localTimeZone: string) => {
//     return await cronJobsCrud.
//         getItemsByConditions<CronJobs>({ 'local_time_zone': localTimeZone })
// }

export const isCronJobExist = async (localTimeZone: string): Promise<boolean> => {
    // I need a proper error handling ...
    try {
        const cronJobs = await cronJobsCrud.getItemsByConditions<CronJobs>({
            'local_time_zone': localTimeZone,
        });

        return cronJobs.length > 0;
    } catch (error) {
        console.error('Error checking if cron job exists:', error);
        throw new Error('Failed to check if cron job exists');
    }
};
