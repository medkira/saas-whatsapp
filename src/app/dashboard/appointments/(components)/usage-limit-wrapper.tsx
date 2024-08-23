import { IsPlanReachedLimit } from "@/actions/plan";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ReactNode } from "react";

export async function UsageLimitWrapper({ children }: { children: ReactNode }) {
    const isWithinLimit = await IsPlanReachedLimit();

    if (isWithinLimit) {
        return <>{children}</>;
    } else {
        return (
            <div className="w-full max-w-md mx-auto p-6 bg-yellow-50 border border-yellow-200 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h2 className="text-lg font-semibold text-yellow-800">Usage Limit Reached</h2>
                </div>
                <p className="text-yellow-700 mb-4">
                    You have reached your reminder limit. Upgrade your plan to create more reminders and unlock additional features.
                </p>
                <Button as={Link} href="/upgrade-plan" className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Upgrade Plan
                </Button>
            </div>
        );
    }
}