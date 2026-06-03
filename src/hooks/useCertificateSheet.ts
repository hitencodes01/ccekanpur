const SHEET_URL =
    "https://script.google.com/macros/s/AKfycbwQIZVk4Y0fg-gm0phBEjawH4GPtC_KswnXo24CKyzM34rgBGmvNE7WofsoHDx-IIkdvQ/exec";

export interface StudentData {
    "Enrollment No": string;
    Name: string;
    "Father Name": string;
    "Mother Name": string;
    DOB: string;
    Course: string;
    "Duration Of Course": string;
    "Start Date": string;
    "End Date": string
}

export type VerifyResult =
    | { success: true; data: StudentData }
    | { success: false; data: null };

export async function verifyStudent(enrollmentNo: string): Promise<VerifyResult> {
    const response = await fetch(
        `${SHEET_URL}?enrollmentNo=${encodeURIComponent(enrollmentNo)}`
    );
    return await response.json();
}