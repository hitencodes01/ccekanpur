"use client";

import { verifyStudent, type StudentData } from "@/hooks/useCertificateSheet";
import { useState } from "react";

const fields: { label: string; key: keyof StudentData }[] = [
  { label: "Father's Name", key: "Father Name" },
  { label: "Mother's Name", key: "Mother Name" },
  { label: "Date of Birth", key: "DOB" },
  { label: "Course", key: "Course" },
  { label: "Duration", key: "Duration Of Course" },
  { label: "Start Date", key: "Start Date" },
  { label: "End Date", key: "End Date" },

];

export default function Form() {
  const [enrollment, setEnrollment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [student, setStudent] = useState<StudentData | null>(null);

  const dateFields = ["Start Date", "End Date" , "DOB"]
  const handleInput = async () => {
    if (!enrollment.trim()) return;
    setLoading(true);
    setError(null);
    setStudent(null);

    const result = await verifyStudent(enrollment.trim().toUpperCase());
    if (result.success) {
      setStudent(result.data);
    } else {
      setError("No student found with this enrollment number.");
    }
    setLoading(false);
  };

  const handleReset = () => {
    setStudent(null);
    setError(null);
    setEnrollment("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      {/* Subtle bg pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#38bbeb15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative w-full max-w-lg">

        {!student && (
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-200/80 overflow-hidden">
            {/* Logo header */}
            <div className="bg-white border-b border-gray-100 px-8 pt-8 pb-6 flex flex-col items-center">
              <img
                src="/logo.jpeg"
                alt="Center for Computer Education"
                width={320}
                height={120}
                className="object-contain w-64 h-auto"
              />
              <div className="mt-4 w-full border-t border-dashed border-[#38bbeb]/30" />
              <p className="mt-3 text-gray-500 text-sm">Enter enrollment number to verify Certificate</p>
            </div>

            {/* Form body */}
            <div className="px-8 py-6">
              <label className="block text-[10px] font-bold text-[#38bbeb] uppercase tracking-[0.2em] mb-2">
                Enrollment Number
              </label>
              <input
                type="text"
                placeholder="e.g. EN2024XXXX"
                value={enrollment}
                onChange={(e) => { setEnrollment(e.target.value); setError(null); }}
                onKeyDown={(e) => e.key === "Enter" && handleInput()}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-[#38bbeb]/30 focus:border-[#38bbeb] transition-all duration-200"
              />

              {error && (
                <div className="mt-3 flex items-center gap-2 bg-red-50 border border-red-200 text-red-500 text-sm px-4 py-3 rounded-xl">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126Z" />
                  </svg>
                  {error}
                </div>
              )}

              <button
                onClick={handleInput}
                disabled={!enrollment.trim() || loading}
                className="mt-4 w-full bg-[#38bbeb] hover:bg-[#2aaed8] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm tracking-wide py-3 px-6 rounded-xl transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-[#38bbeb]/20"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Verifying...
                  </>
                ) : (
                  <>
                    Verify Student
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {student && (
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-200/80 overflow-hidden">
            {/* Logo header */}
            <div className="bg-white border-b border-gray-100 px-8 pt-6 pb-4 flex justify-center">
              <img
                src="/logo.jpeg"
                alt="Center for Computer Education"
                width={280}
                height={100}
                className="object-contain w-56 h-auto"
              />
            </div>

            {/* Verified banner */}
            <div className="bg-[#38bbeb]/8 border-b border-[#38bbeb]/15 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#38bbeb]/15 border border-[#38bbeb]/25 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#38bbeb]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#38bbeb] font-bold text-sm">Verified</p>
                  <p className="text-gray-400 text-xs">Student record found</p>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="text-gray-400 hover:text-[#38bbeb] transition-colors duration-150 text-xs flex items-center gap-1.5 border border-gray-200 hover:border-[#38bbeb]/40 rounded-lg px-3 py-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                New Search
              </button>
            </div>

            {/* Name hero */}
            <div className="px-6 pt-5 pb-4 border-b border-gray-100">
              <p className="text-[10px] font-bold text-[#38bbeb] uppercase tracking-[0.2em] mb-1">Student</p>
              <h2 className="text-2xl font-bold text-gray-900">{student.Name}</h2>
              <span className="inline-block mt-2 text-xs font-mono text-gray-500 bg-gray-100 border border-gray-200 rounded-lg px-3 py-1">
                {student["Enrollment No"]}
              </span>
            </div>

            {/* Info rows */}
            <div className="p-5 grid grid-cols-1 gap-2">
              {fields.map(({ label, key }) => (
                <div
                  key={key}
                  className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
                >
                  <span className="text-black text-xs font-medium">{label}</span>
                  <span className="text-[#38bbeb] text-sm font-semibold text-right max-w-[55%] truncate">
                    {dateFields.includes(key) ? new Date(student[key]).toLocaleDateString("en-IN") : student[key] || "—"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="text-center text-gray-400 text-xs mt-4">
          Having trouble? Contact your institution's admin.
        </p>
      </div>
    </div>
  );
}