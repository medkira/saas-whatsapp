import { createClient } from "@/utils/supabase/server";

// Utility function to get the current user ID
export const getCurrentUserId = async (): Promise<string | null> => {
    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
        console.error("Failed to retrieve user:", error?.message || "No user found");
        return null;  // or throw an error, depending on your use case
    }

    return user.id;
}

// Function to get the current doctor's ID
export const getCurrentDoctorId = async (): Promise<string> => {
    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user || !user.id) {
        throw new Error("Doctor ID not found or user not authenticated");
    }

    return user.id;
};
