export default function CCC() {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold text-[#38bbeb] mb-6">
                    CCC (Course on Computer Concepts)
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                    The NIELIT CCC (Course on Computer Concepts) is a nationally recognized
                    digital literacy program designed to provide essential computer knowledge
                    and practical IT skills required in academic, professional, and
                    government sectors.
                </p>

                {/* Overview */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Course Overview</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                            <strong>Eligibility:</strong> No minimum educational qualification or
                            age limit.
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Duration:</strong> 80 Hours (Approx. 2–3 Months)
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Exam Fee:</strong> ₹590 (₹500 + GST)
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Certificate Validity:</strong> Lifetime
                        </div>
                    </div>
                </section>

                {/* Exam Pattern */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Exam Pattern</h3>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>Online Computer Based Test (CBT)</li>
                        <li>Conducted Every Month</li>
                        <li>100 Objective Questions</li>
                        <li>90 Minutes Duration</li>
                        <li>No Negative Marking</li>
                        <li>Bilingual Exam (Hindi & English)</li>
                        <li>No Practical Examination</li>
                        <li>Minimum 50 Marks Required to Pass</li>
                    </ul>
                </section>

                {/* Grading */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Grading System</h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border">
                            <thead className="bg-[#38bbeb] text-white">
                                <tr>
                                    <th className="p-3">Percentage</th>
                                    <th className="p-3">Grade</th>
                                    <th className="p-3">Remarks</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b">
                                    <td className="p-3">85% & Above</td>
                                    <td className="p-3">S</td>
                                    <td className="p-3">Outstanding</td>
                                </tr>

                                <tr className="border-b">
                                    <td className="p-3">75% - 84%</td>
                                    <td className="p-3">A</td>
                                    <td className="p-3">Excellent</td>
                                </tr>

                                <tr className="border-b">
                                    <td className="p-3">65% - 74%</td>
                                    <td className="p-3">B</td>
                                    <td className="p-3">Very Good</td>
                                </tr>

                                <tr className="border-b">
                                    <td className="p-3">55% - 64%</td>
                                    <td className="p-3">C</td>
                                    <td className="p-3">Good</td>
                                </tr>

                                <tr className="border-b">
                                    <td className="p-3">50% - 54%</td>
                                    <td className="p-3">D</td>
                                    <td className="p-3">Pass</td>
                                </tr>

                                <tr>
                                    <td className="p-3">Below 50%</td>
                                    <td className="p-3">F</td>
                                    <td className="p-3">Fail</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Syllabus */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Latest CCC Course Syllabus
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            Introduction to Computer
                        </div>

                        <div className="border rounded-lg p-4">
                            GUI Based Operating Systems
                        </div>

                        <div className="border rounded-lg p-4">
                            LibreOffice Writer
                        </div>

                        <div className="border rounded-lg p-4">
                            LibreOffice Calc
                        </div>

                        <div className="border rounded-lg p-4">
                            LibreOffice Impress
                        </div>

                        <div className="border rounded-lg p-4">
                            Internet & WWW
                        </div>

                        <div className="border rounded-lg p-4">
                            Email, Social Networking & e-Governance
                        </div>

                        <div className="border rounded-lg p-4">
                            Digital Financial Tools & Applications
                        </div>

                        <div className="border rounded-lg p-4">
                            Cyber Security
                        </div>

                        <div className="border rounded-lg p-4">
                            Future Skills & Artificial Intelligence
                        </div>
                    </div>
                </section>

                {/* Career Benefits */}
                <section className="bg-[#38bbeb]/10 p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-4">
                        Why Choose CCC?
                    </h3>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>Recognized by NIELIT and Government Organizations.</li>
                        <li>Required in many State and Central Government Jobs.</li>
                        <li>Improves Digital Literacy and Computer Skills.</li>
                        <li>Useful for Data Entry, Clerical and Office Work.</li>
                        <li>Lifetime Valid Certificate.</li>
                        <li>Unlimited Attempts for Grade Improvement.</li>
                    </ul>
                </section>
            </div>
        </>
    )
}
