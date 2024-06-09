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


// export const useTestStore = create<testState>((set) => ({
//     name: null,
//     setName: (name: String) => set(() => ({ name })),
// }));



export const useFormStore = create<FormStore>((set) => ({
    formData: {
        phoneNumber: '',
        email: '',
        username: '',
        // Add other fields as needed (e.g., dateTime from DateTimePicker)
    },
    setFormData: (newFormData) => set((state) => ({ formData: { ...state.formData, ...newFormData } })),
}));