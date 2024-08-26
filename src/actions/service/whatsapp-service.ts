interface TemplateParameter {
    type: 'text' | 'image' | 'video' | 'document';
    text?: string;
    image?: { link: string };
    video?: { link: string };
    document?: { link: string };
}

interface Component {
    type: 'header' | 'body' | 'button';
    parameters: TemplateParameter[];
}

interface SendTemplateMessageOptions {
    toPhoneNumber: string;
    templateName: string;
    languageCode?: string;
    components: Component[];
}

export class WhatsAppService {

    private static async sendTemplateMessage({
        toPhoneNumber,
        templateName,
        languageCode = 'en',
        components,
    }: SendTemplateMessageOptions): Promise<void> {
        const payload = {
            messaging_product: 'whatsapp',
            to: toPhoneNumber,
            recipient_type: 'individual',
            type: 'template',
            template: {
                // namespace: 'e3cea3d1_2c40_49b8_9ce6_6fc1a62e9068',
                name: templateName,
                language: {
                    code: languageCode,
                    policy: 'deterministic',
                },
                components: components,
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
            }
        );
        // console.log("response => ", response);
        if (!response.ok) {
            const error = await response.json();
            // throw new Error(
            //     `Failed to send WhatsApp message: ${response.status} ${response.statusText} - ${error.message}`
            // );
            // console.log(`Failed to send WhatsApp message: ${response.status} ${response.statusText} - ${error.message}`)
        }
    }


    public static async sendAppointmentCreatedSuccessfully({
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
    }): Promise<void> {
        const components: Component[] = [
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
        ];

        await this.sendTemplateMessage({
            toPhoneNumber,
            templateName: 'doctor_appointment_created_successfully',
            components,
        });

    }

    public static async sendReminderMessage({
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
    }): Promise<void> {
        const components: Component[] = [
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
        ];

        await this.sendTemplateMessage({
            toPhoneNumber,
            templateName: 'doctor_appointment_reminder',
            components,
        });
    }
}
