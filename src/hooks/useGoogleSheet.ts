const SHEET_URL = "https://script.google.com/macros/s/AKfycbyGpPO9LY8RWsLju0Vh4JLGXqGCovnGHMom-7YyFKi7PYYuNQggU8eIpOg64IHsN-cDTg/exec";

export interface EnrollmentData {
    name: string;
    email: string;
    contact: string;
    interestedCourse: string;
}

export async function submitToSheet(data: EnrollmentData): Promise<void> {
    await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
}