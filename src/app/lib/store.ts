import { AnyDateTime, startOfWeek, startOfMonth, getLocalTimeZone, today } from "@internationalized/date";
import { create } from 'zustand';

interface DateState {
    globalDate: AnyDateTime | null;
    setGlobalDate: (date: AnyDateTime) => void;
}


interface FormData {
    phoneNumber: string;
    email: string;
    username: string;
    // Add other fields as needed (e.g., dateTime from DateTimePicker)
}

interface FormStore {
    formData: FormData;
    setFormData: (newFormData: Partial<FormData>) => void;
}
export const useDateStore = create<DateState>((set) => ({
    globalDate: null,
    setGlobalDate: (globalDate: AnyDateTime) => set({ globalDate }),
}));



export const useFormStore = create<FormStore>((set) => ({
    formData: {
        phoneNumber: '',
        email: '',
        username: '',
    },
    setFormData: (newFormData) => set((state) => ({ formData: { ...state.formData, ...newFormData } })),
}));





interface ContactUsFormData {
    name: string;
    business: string;
    email: string;
    phoneNumber: string;
    description: string;
}


interface ContactUsFormStore {
    contactUsFormData: ContactUsFormData;
    setContactsUsForm: (newFormData: Partial<ContactUsFormData>) => void
}

export const useContactUsFormStore = create<ContactUsFormStore>((set) => ({
    contactUsFormData: {
        name: "",
        business: "",
        email: "",
        phoneNumber: "",
        description: "",
    },

    setContactsUsForm: (newFormData) => set((state) => ({ contactUsFormData: { ...state.contactUsFormData, ...newFormData } })),
}));