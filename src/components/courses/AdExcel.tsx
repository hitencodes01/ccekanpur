export default function AdExcel() {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold text-[#38bbeb] mb-6">
                    Advanced Excel
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                    The Advanced Excel course is designed to help learners master data
                    analysis, reporting, financial modeling, dashboard creation, and
                    automation techniques. From advanced formulas and PivotTables to Power
                    Query, Power Pivot, and VBA automation, this program equips students and
                    professionals with the skills required to handle large datasets and make
                    data-driven decisions efficiently.
                </p>

                {/* Course Overview */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Course Highlights</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                            <strong>Learning Level:</strong> Beginner to Advanced
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Training Type:</strong> Practical & Project-Based
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Tools Covered:</strong> Excel 2019 / Excel 365
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Focus Areas:</strong> Analytics, Dashboards & Automation
                        </div>
                    </div>
                </section>

                {/* Module 1 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Advanced Formulae & Functions
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            Logical Functions
                            <p className="text-sm text-gray-600 mt-2">
                                IF, IFS, AND, OR, NOT, IFERROR, IFNA and Nested Functions.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Lookup Functions
                            <p className="text-sm text-gray-600 mt-2">
                                XLOOKUP, INDEX-MATCH, XMATCH, OFFSET and INDIRECT.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Dynamic Arrays
                            <p className="text-sm text-gray-600 mt-2">
                                FILTER, SORT, UNIQUE, SEQUENCE and RANDARRAY.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Module 2 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Data Management & Cleaning
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            Data Validation & Drop-down Lists
                        </div>

                        <div className="border rounded-lg p-4">
                            Advanced Sorting & Filtering
                        </div>

                        <div className="border rounded-lg p-4">
                            Flash Fill & Text to Columns
                        </div>

                        <div className="border rounded-lg p-4">
                            Duplicate Detection & Error Handling
                        </div>
                    </div>
                </section>

                {/* Module 3 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        PivotTables & Data Analysis
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            PivotTable Creation & Formatting
                        </div>

                        <div className="border rounded-lg p-4">
                            Data Grouping & Categorization
                        </div>

                        <div className="border rounded-lg p-4">
                            Calculated Fields & Running Totals
                        </div>

                        <div className="border rounded-lg p-4">
                            Interactive Slicers & Timelines
                        </div>
                    </div>
                </section>

                {/* Module 4 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Power Query & Power Pivot
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            Data Import & Transformation using Power Query
                        </div>

                        <div className="border rounded-lg p-4">
                            Data Cleaning, Merging & Appending
                        </div>

                        <div className="border rounded-lg p-4">
                            Data Modeling & Table Relationships
                        </div>

                        <div className="border rounded-lg p-4">
                            Introduction to DAX Functions
                        </div>
                    </div>
                </section>

                {/* Module 5 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Financial Analysis & Auditing
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            Goal Seek & Scenario Manager
                        </div>

                        <div className="border rounded-lg p-4">
                            One-Variable & Two-Variable Data Tables
                        </div>

                        <div className="border rounded-lg p-4">
                            Formula Auditing & Error Tracking
                        </div>
                    </div>
                </section>

                {/* Module 6 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Dashboards & Data Visualization
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            Advanced Charts & Graphs
                        </div>

                        <div className="border rounded-lg p-4">
                            Interactive Dashboards
                        </div>

                        <div className="border rounded-lg p-4">
                            Conditional Formatting Mastery
                        </div>
                    </div>
                </section>

                {/* Module 7 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Excel Automation with VBA
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            Macro Recorder & Automation
                        </div>

                        <div className="border rounded-lg p-4">
                            VBA Environment & Code Editing
                        </div>

                        <div className="border rounded-lg p-4">
                            Loops, Procedures & Custom Functions
                        </div>
                    </div>
                </section>

                {/* Practical Training */}
                <section className="mb-10">
                    <div className="bg-[#38bbeb]/10 p-6 rounded-xl">
                        <h3 className="text-2xl font-semibold mb-4">
                            Practical Learning Approach
                        </h3>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>Real-World Business Datasets</li>
                            <li>Dashboard Building Projects</li>
                            <li>Financial Modeling Exercises</li>
                            <li>Automation & Reporting Tasks</li>
                            <li>Case Studies & Data Analysis Projects</li>
                        </ul>
                    </div>
                </section>

                {/* Target Audience */}
                <section className="bg-[#38bbeb]/10 p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-4">
                        Who Should Enroll?
                    </h3>

                    <div className="grid md:grid-cols-2 gap-3">
                        <div>• Data Analysts & Business Analysts</div>
                        <div>• Financial & Accounting Professionals</div>
                        <div>• MIS Executives & Reporting Professionals</div>
                        <div>• HR, Sales & Operations Managers</div>
                        <div>• Educators & Institutional Administrators</div>
                        <div>• Entrepreneurs & Business Owners</div>
                        <div>• Students Seeking Analytical Skills</div>
                        <div>• Professionals Working with Large Datasets</div>
                    </div>
                </section>
            </div>
        </>
    )
}
