export default function PLSQL() {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold text-[#38bbeb] mb-6">
                    Oracle PL/SQL Developer
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                    Oracle PL/SQL Developer is a comprehensive enterprise database
                    programming program designed to transform learners from SQL users into
                    professional database application developers. The course covers advanced
                    SQL, procedural programming, exception handling, database automation,
                    performance optimization, and enterprise-grade backend development using
                    Oracle PL/SQL. Students gain practical experience in building scalable,
                    secure, and high-performance database solutions aligned with industry
                    standards and Oracle certification pathways.
                </p>

                {/* Course Overview */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Course Overview
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                            <strong>Learning Level:</strong> Intermediate to Advanced
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Duration:</strong> 80–120 Hours
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Platform:</strong> Oracle Database & Oracle SQL Developer
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Training Type:</strong> Hands-On Labs & Enterprise Projects
                        </div>
                    </div>
                </section>

                {/* Module 1 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Advanced SQL & Database Foundations
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            Oracle Database Architecture
                            <p className="text-sm text-gray-600 mt-2">
                                Understanding relational models, schemas,
                                database structures, and Oracle architecture fundamentals.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            DDL, DML & Transaction Control
                            <p className="text-sm text-gray-600 mt-2">
                                Creating database objects, managing constraints,
                                and controlling transactions using COMMIT, ROLLBACK, and SAVEPOINT.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Advanced SQL Queries
                            <p className="text-sm text-gray-600 mt-2">
                                Complex joins, subqueries, analytical functions,
                                aggregations, and advanced data retrieval techniques.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Database Objects
                            <p className="text-sm text-gray-600 mt-2">
                                Working with sequences, views,
                                materialized views, synonyms, and indexes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Module 2 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        PL/SQL Fundamentals & Program Structure
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            PL/SQL Architecture
                            <p className="text-sm text-gray-600 mt-2">
                                Understanding PL/SQL execution,
                                SQL engine interaction, and program lifecycle.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Anonymous Blocks
                            <p className="text-sm text-gray-600 mt-2">
                                Declaration, execution, and exception sections
                                for building structured procedural code.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Variables & Data Types
                            <p className="text-sm text-gray-600 mt-2">
                                Scalar variables, constants,
                                bind variables, and data type declarations.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            %TYPE & %ROWTYPE
                            <p className="text-sm text-gray-600 mt-2">
                                Dynamic variable anchoring to database
                                columns and records for maintainable code.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Module 3 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Control Structures & Collections
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            Conditional Logic
                            <p className="text-sm text-gray-600 mt-2">
                                IF, ELSIF, CASE statements,
                                and business-rule implementation.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Looping Mechanisms
                            <p className="text-sm text-gray-600 mt-2">
                                Basic, WHILE, and FOR loops
                                for repetitive processing and automation.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Records & Collections
                            <p className="text-sm text-gray-600 mt-2">
                                Records, Associative Arrays,
                                Nested Tables, VARRAYs, and collection methods.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Module 4 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Cursors & Exception Handling
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            Cursor Management
                            <p className="text-sm text-gray-600 mt-2">
                                Implicit and explicit cursors,
                                OPEN, FETCH, CLOSE operations, and cursor attributes.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Exception Handling
                            <p className="text-sm text-gray-600 mt-2">
                                Managing Oracle exceptions,
                                custom exceptions, and error propagation.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Cursor Attributes
                            <p className="text-sm text-gray-600 mt-2">
                                Using %FOUND, %NOTFOUND,
                                %ROWCOUNT, and %ISOPEN effectively.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            User-Defined Error Management
                            <p className="text-sm text-gray-600 mt-2">
                                RAISE statements and
                                RAISE_APPLICATION_ERROR implementations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Module 5 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Stored Procedures, Functions & Packages
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            Stored Procedures
                            <p className="text-sm text-gray-600 mt-2">
                                Creating reusable procedures
                                with IN, OUT, and IN OUT parameters.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            User Defined Functions
                            <p className="text-sm text-gray-600 mt-2">
                                Building reusable business logic
                                callable directly from SQL statements.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Packages & Overloading
                            <p className="text-sm text-gray-600 mt-2">
                                Package specifications, package bodies,
                                modular architecture, and subprogram overloading.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Module 6 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Triggers & Dynamic SQL
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            Database Triggers
                            <p className="text-sm text-gray-600 mt-2">
                                Row-level, statement-level,
                                schema-level, and system triggers.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Data Auditing
                            <p className="text-sm text-gray-600 mt-2">
                                Using :OLD and :NEW references
                                to maintain audit trails and security logs.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Native Dynamic SQL
                            <p className="text-sm text-gray-600 mt-2">
                                EXECUTE IMMEDIATE statements
                                and dynamic query generation techniques.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Adaptive Database Programming
                            <p className="text-sm text-gray-600 mt-2">
                                Building flexible database frameworks
                                with dynamic cursor handling.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Module 7 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Performance Optimization & Bulk Processing
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            Bulk Operations
                            <p className="text-sm text-gray-600 mt-2">
                                BULK COLLECT and FORALL
                                for high-performance database processing.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            PL/SQL Compiler Optimization
                            <p className="text-sm text-gray-600 mt-2">
                                Compiler settings, warnings,
                                dependencies, and performance tuning.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            SQL Performance Analysis
                            <p className="text-sm text-gray-600 mt-2">
                                EXPLAIN PLAN, debugging,
                                tracing, and optimization best practices.
                            </p>
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
                            <li>Enterprise Database Programming Labs</li>
                            <li>Stored Procedure & Package Development</li>
                            <li>Trigger-Based Automation Projects</li>
                            <li>Exception Handling & Error Management Exercises</li>
                            <li>Database Performance Optimization Workshops</li>
                            <li>Bulk Processing & Data Migration Scenarios</li>
                            <li>Industry-Oriented Backend Development Projects</li>
                        </ul>
                    </div>
                </section>

                {/* Capstone Projects */}
                <section className="mb-10">
                    <div className="bg-[#38bbeb]/10 p-6 rounded-xl">
                        <h3 className="text-2xl font-semibold mb-4">
                            Capstone Projects
                        </h3>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                Banking Transaction & Audit System using Packages, Triggers,
                                Exception Handling, and Automated Interest Calculations.
                            </li>
                            <li>
                                E-Commerce Inventory & Order Tracking Engine with Dynamic
                                Stock Management and Business Rule Automation.
                            </li>
                            <li>
                                Enterprise Database Reporting & Workflow Automation Project.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Prerequisites */}
                <section className="mb-10">
                    <div className="bg-[#38bbeb]/10 p-6 rounded-xl">
                        <h3 className="text-2xl font-semibold mb-4">
                            Prerequisites
                        </h3>

                        <p>
                            Basic programming knowledge and familiarity with SQL concepts
                            such as SELECT, INSERT, UPDATE, and database fundamentals are
                            recommended. Introductory SQL concepts are reviewed during
                            the initial stages of the course.
                        </p>
                    </div>
                </section>

                {/* Career Opportunities */}
                <section className="bg-[#38bbeb]/10 p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-4">
                        Career Opportunities
                    </h3>

                    <div className="grid md:grid-cols-2 gap-3">
                        <div>• Oracle PL/SQL Developer</div>
                        <div>• Database Developer</div>
                        <div>• Backend Database Engineer</div>
                        <div>• Data Programmer</div>
                        <div>• ETL Developer</div>
                        <div>• Business Intelligence Developer</div>
                        <div>• Database Consultant</div>
                        <div>• Enterprise Application Developer</div>
                        <div>• Database Automation Specialist</div>
                        <div>• Technical Support Engineer (Database)</div>
                    </div>
                </section>
            </div>
        </>
    )
}
