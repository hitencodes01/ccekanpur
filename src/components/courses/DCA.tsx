export default function DCA() {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold text-[#38bbeb] mb-6">
                    DCA (Diploma in Computer Applications)
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                    The Diploma in Computer Applications (DCA) is a comprehensive
                    undergraduate diploma designed to build strong computer fundamentals,
                    office automation skills, accounting proficiency through Tally Prime,
                    database management, and web designing capabilities. The course combines
                    theoretical knowledge with practical training to prepare students for
                    modern administrative and IT-related careers.
                </p>

                {/* Course Overview */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Course Overview</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                            <strong>Course Level:</strong> Undergraduate Diploma
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Duration:</strong> 1 Year (2 Semesters)
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Eligibility:</strong> 10th or 12th Pass from any recognized
                            board
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Mode:</strong> Theory + Practical + Viva + Project Work
                        </div>
                    </div>
                </section>

                {/* Semester I */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Semester I – Computer Fundamentals & Office Automation
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                                Computer Fundamentals & Operating Systems
                            </h4>

                            <p>
                                Hardware, CPU, Memory, Storage Devices, Windows, Linux, DOS
                                Commands and Computer Basics.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                                Office Automation Tools
                            </h4>

                            <p>
                                MS Word, Excel, PowerPoint, Mail Merge, Advanced Formulas,
                                Presentations and Productivity Tools.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                                Internet & Digital Awareness
                            </h4>

                            <p>
                                Networking Basics, Internet, E-Mail, Cloud Services, UPI, BHIM,
                                Aadhaar and E-Governance Services.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                        <strong>Practical Lab:</strong> Windows & DOS Operations, MS Office
                        Practice, English & Hindi Typing.
                    </div>
                </section>

                {/* Semester II */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Semester II – Accounting & Advanced Applications
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                                Financial Accounting with Tally Prime
                            </h4>

                            <p>
                                Ledger Creation, Voucher Entries, Inventory Management, GST,
                                Balance Sheet and Profit & Loss Reports.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                                Database Management Systems
                            </h4>

                            <p>
                                Database Concepts, Tables, Forms, Queries, Relationships and Basic
                                SQL using MS Access or MySQL.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                                Web Designing Fundamentals
                            </h4>

                            <p>
                                HTML5, CSS3, Website Structure, Domain Concepts and Basic Web
                                Publishing.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                        <strong>Practical Lab:</strong> Tally Projects, Database Design,
                        Static Website Development and Project Work.
                    </div>
                </section>

                {/* Examination Pattern */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Evaluation & Examination Pattern
                    </h3>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>70 Marks External Theory Examination</li>
                        <li>30 Marks Internal Assessment & Practical Work</li>
                        <li>Minimum 40% Required in Theory Papers</li>
                        <li>Minimum 40% Required in Practical Assessments</li>
                        <li>Minimum 45% Aggregate Required to Pass</li>
                        <li>Semester-End Viva and Project Evaluation</li>
                    </ul>
                </section>

                {/* Project */}
                <section className="mb-10">
                    <div className="bg-[#38bbeb]/10 p-6 rounded-xl">
                        <h3 className="text-2xl font-semibold mb-4">
                            Final Project Requirement
                        </h3>

                        <p>
                            Students must complete a practical project during Semester II. This
                            may include a Tally-based accounting portfolio, inventory management
                            system, database application, or a basic website project, followed by
                            a viva examination.
                        </p>
                    </div>
                </section>

                {/* Career Opportunities */}
                <section className="bg-[#38bbeb]/10 p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-4">
                        Career Opportunities
                    </h3>

                    <div className="grid md:grid-cols-2 gap-3">
                        <div>• Computer Operator</div>
                        <div>• MIS Executive</div>
                        <div>• Accounts Assistant</div>
                        <div>• Tally Executive</div>
                        <div>• Office Automation Assistant</div>
                        <div>• Data Entry Operator</div>
                        <div>• Administrative Assistant</div>
                        <div>• Junior Web Designer</div>
                    </div>
                </section>
            </div>
        </>
    )
}
