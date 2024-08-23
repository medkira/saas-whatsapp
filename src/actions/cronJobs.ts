'use server'
import { createClient } from "@/utils/supabase/server";
import SupabaseService from "./abstarct/crud-entitie-supabse";
import { CronJobs } from "@/domain/entities/CronJobs";

const supabseTableName = 'cronJobs';

const cronJobsCrud = new SupabaseService(supabseTableName);


export const createCronJob = async (localTimeZone: string) => {

    // if the cron job get 
    // create the local timz zon of 
    // the current user
    const supabase = createClient();

    const { data, error } = await supabase
        .from(supabseTableName)
        .insert({ 'local_time_zone': localTimeZone });

    // make the post req to cron-job.org 
    // to save schedule the cron job

    // console.log("error supabse", error);

    const schedule_today = {
        timezone: localTimeZone,
        hour: '07',
        minute: '00',
        dayOfMonth: '*',
        month: '*',
        dayOfWeek: '*',
    };

    const url = process.env.BASE_URL;

    // create a cron job in 7 AM
    const res_1 = await fetch('https://api.cron-job.org/jobs', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.CRON_JOB_API_KEY}`,
        },
        body: JSON.stringify({
            job: {
                enabled: true,
                saveResponses: true,
                url: url + '/reminders?day=today',
                schedule_today,
                // httpMethod: 'GET',
            }
        }),
    });



    const schedule_tomorrow = {
        timezone: localTimeZone,
        hour: '19',
        minute: '00',
        dayOfMonth: '*',
        month: '*',
        dayOfWeek: '*',
    };

    // create a cron job in 7 PM

    const res_2 = await fetch('https://api.cron-job.org/jobs', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.CRON_JOB_API_KEY}`,
        },
        body: JSON.stringify({
            job: {
                enabled: true,
                saveResponses: true,
                url: url + '/reminders?day=tomorrow',
                schedule_tomorrow,
                // httpMethod: 'GET',
            }
        }),
    });

    // console.log("error cron job ", response);






    // if (!response.ok) {
    //     const errorData = await response.json();
    //     throw new Error(`Failed to create cron job: ${response.statusText} - ${errorData.message}`);
    // }

    // const res = await response.json();

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
