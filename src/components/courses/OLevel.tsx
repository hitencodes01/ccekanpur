export default function OLevel() {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold text-[#38bbeb] mb-6">
                    O Level (NIELIT)
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                    The NIELIT O Level certification is a highly recognized foundation-level
                    IT course offered under the Ministry of Electronics and Information
                    Technology, Government of India. It provides practical knowledge of web
                    development, programming, networking, and IoT, making it valuable for
                    both government and private sector careers.
                </p>

                {/* Overview */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Course Overview</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                            <strong>Eligibility:</strong> 10+2 Passed or 1-Year ITI Certificate
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Duration:</strong> 520 Hours (Approx. 1 Year)
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Exam Sessions:</strong> January & July
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Project:</strong> Mandatory for Final Certification
                        </div>
                    </div>
                </section>

                {/* Modules */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Course Modules (R5.1)
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                                M1-R5.1: IT Tools & Network Basics
                            </h4>
                            <p>
                                Computer Fundamentals, Windows/Linux, Word Processing,
                                Spreadsheets, Presentations and Cyber Security.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                                M2-R5.1: Web Designing & Publishing
                            </h4>
                            <p>
                                HTML5, CSS3, JavaScript, AngularJS, Photo Editing and Web
                                Publishing.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                                M3-R5.1: Programming with Python
                            </h4>
                            <p>
                                Python Fundamentals, Data Types, Loops, Functions and File
                                Handling.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                                M4-R5.1: IoT & Applications
                            </h4>
                            <p>
                                Sensors, Actuators, Arduino, Raspberry Pi and IoT Application
                                Development.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Exam Pattern */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Examination Pattern</h3>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>4 Theory Examinations (100 Marks Each)</li>
                        <li>4 Practical Examinations (100 Marks Each)</li>
                        <li>Project Submission is Mandatory</li>
                        <li>Both Theory & Practical Must Be Passed</li>
                        <li>Exams Conducted Twice Every Year</li>
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
                                    <th className="p-3">Performance</th>
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

                {/* Career Benefits */}
                <section className="bg-[#38bbeb]/10 p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-4">
                        Career Opportunities & Benefits
                    </h3>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Recognized qualification for various Government Job examinations.
                        </li>
                        <li>
                            Useful for RO/ARO, Computer Operator, Clerk and Administrative Posts.
                        </li>
                        <li>
                            Career opportunities as Web Designer and Junior Web Developer.
                        </li>
                        <li>
                            Foundation for Python Programming and Software Development.
                        </li>
                        <li>
                            Exposure to emerging technologies like Internet of Things (IoT).
                        </li>
                        <li>
                            Valuable certification for both Government and Private Sector jobs.
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}
