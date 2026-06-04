export default function CLang() {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold text-[#38bbeb] mb-6">
                    C Programming Language
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                    C Programming Language is the foundation of modern software development
                    and computer science education. Widely taught in BCA, B.Tech, and
                    engineering programs, C helps students develop strong problem-solving
                    abilities, understand memory management, learn algorithmic thinking, and
                    build a solid programming foundation before progressing to advanced
                    technologies such as Data Structures, Java, Python, and System
                    Programming. This course combines programming fundamentals, memory
                    architecture, file handling, and practical coding projects to prepare
                    learners for academic excellence and industry requirements.
                </p>

                {/* Course Overview */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Course Overview
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                            <strong>Learning Level:</strong> Beginner to Intermediate
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Duration:</strong> 2–3 Months
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Platform:</strong> GCC Compiler / Turbo C / Code::Blocks / VS Code
                        </div>

                        <div className="p-4 border rounded-lg">
                            <strong>Training Type:</strong> Theory, Practical Labs & Coding Exercises
                        </div>
                    </div>
                </section>

                {/* Module 1 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Logic Building & Programming Fundamentals
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            Algorithms & Flowcharts
                            <p className="text-sm text-gray-600 mt-2">
                                Designing solutions using algorithms, flowcharts,
                                decision structures, and process diagrams.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Program Compilation Process
                            <p className="text-sm text-gray-600 mt-2">
                                Understanding preprocessing, compilation,
                                assembling, linking, loading, and execution.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Data Types & Tokens
                            <p className="text-sm text-gray-600 mt-2">
                                Variables, constants, identifiers, keywords,
                                escape sequences, and format specifiers.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Operators & Expressions
                            <p className="text-sm text-gray-600 mt-2">
                                Arithmetic, relational, logical, assignment,
                                bitwise, and conditional operators.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Module 2 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Control Structures & Decision Making
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            Conditional Statements
                            <p className="text-sm text-gray-600 mt-2">
                                if, if-else, nested if-else,
                                switch-case, and branching logic.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Looping Structures
                            <p className="text-sm text-gray-600 mt-2">
                                for, while, do-while loops,
                                iteration control, and nested loops.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Jump Statements
                            <p className="text-sm text-gray-600 mt-2">
                                break, continue, goto concepts,
                                and best programming practices.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Module 3 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Functions & Modular Programming
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            Function Design
                            <p className="text-sm text-gray-600 mt-2">
                                Function declaration, definition,
                                prototypes, parameters, and return values.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Parameter Passing
                            <p className="text-sm text-gray-600 mt-2">
                                Call by Value and Call by Reference
                                implementation techniques.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Recursion
                            <p className="text-sm text-gray-600 mt-2">
                                Recursive programming using factorial,
                                Fibonacci series, and Tower of Hanoi.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Storage Classes
                            <p className="text-sm text-gray-600 mt-2">
                                auto, register, static, and extern
                                variables with scope and lifetime analysis.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Module 4 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Arrays & String Processing
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            One-Dimensional Arrays
                            <p className="text-sm text-gray-600 mt-2">
                                Array declaration, traversal,
                                searching, and sorting techniques.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Two-Dimensional Arrays
                            <p className="text-sm text-gray-600 mt-2">
                                Matrix operations, multiplication,
                                transpose, and diagonal calculations.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            String Handling
                            <p className="text-sm text-gray-600 mt-2">
                                Character arrays, string functions,
                                concatenation, comparison, and manipulation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Module 5 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Pointers & Dynamic Memory Allocation
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            Pointer Fundamentals
                            <p className="text-sm text-gray-600 mt-2">
                                Address operators, dereferencing,
                                memory locations, and pointer basics.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Advanced Pointer Concepts
                            <p className="text-sm text-gray-600 mt-2">
                                Pointer arithmetic, pointer-to-pointer,
                                null, wild, void, and dangling pointers.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Dynamic Memory Allocation
                            <p className="text-sm text-gray-600 mt-2">
                                malloc(), calloc(), realloc(),
                                free(), and memory management strategies.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Memory Optimization
                            <p className="text-sm text-gray-600 mt-2">
                                Avoiding memory leaks and
                                understanding runtime memory allocation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Module 6 */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">
                        Structures, Unions & File Handling
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                            Structures
                            <p className="text-sm text-gray-600 mt-2">
                                Creating custom data types,
                                arrays of structures, and record management.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            Unions
                            <p className="text-sm text-gray-600 mt-2">
                                Shared memory allocation,
                                memory optimization, and union operations.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            File Handling
                            <p className="text-sm text-gray-600 mt-2">
                                Reading, writing, updating, and
                                managing text and binary files.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            File Stream Operations
                            <p className="text-sm text-gray-600 mt-2">
                                fopen(), fclose(), fprintf(),
                                fscanf(), fread(), fwrite(), and fseek().
                            </p>
                        </div>
                    </div>
                </section>

                {/* Practical Learning */}
                <section className="mb-10">
                    <div className="bg-[#38bbeb]/10 p-6 rounded-xl">
                        <h3 className="text-2xl font-semibold mb-4">
                            Practical Learning Approach
                        </h3>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>Algorithm & Flowchart Design Exercises</li>
                            <li>Console-Based Programming Projects</li>
                            <li>Pattern Printing & Logic Building Challenges</li>
                            <li>Array, Matrix & String Manipulation Programs</li>
                            <li>Pointer & Memory Management Labs</li>
                            <li>File Handling & Data Processing Assignments</li>
                            <li>University Practical Exam Preparation</li>
                        </ul>
                    </div>
                </section>

                {/* High-Yield Programs */}
                <section className="mb-10">
                    <div className="bg-[#38bbeb]/10 p-6 rounded-xl">
                        <h3 className="text-2xl font-semibold mb-4">
                            Core Programming Practice Set
                        </h3>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>Prime Number Verification</li>
                            <li>Palindrome Number & String Checking</li>
                            <li>Armstrong Number Programs</li>
                            <li>Binary Search Implementation</li>
                            <li>Matrix Multiplication & Transpose</li>
                            <li>String Reversal Without Built-in Functions</li>
                            <li>Vowel & Consonant Counting</li>
                            <li>Pointer-Based Variable Swapping</li>
                            <li>Student Record Management Using Structures</li>
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
                            No prior programming experience is required. Basic computer
                            knowledge and logical reasoning skills are sufficient to begin.
                            The course starts from programming fundamentals and gradually
                            progresses toward memory management and advanced concepts.
                        </p>
                    </div>
                </section>

                {/* Career Opportunities */}
                <section className="bg-[#38bbeb]/10 p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-4">
                        Career Opportunities
                    </h3>

                    <div className="grid md:grid-cols-2 gap-3">
                        <div>• Software Developer (Entry Level)</div>
                        <div>• Junior Programmer</div>
                        <div>• Embedded Systems Developer</div>
                        <div>• System Programming Trainee</div>
                        <div>• Application Support Engineer</div>
                        <div>• QA Automation Beginner</div>
                        <div>• Technical Support Executive</div>
                        <div>• Backend Programming Trainee</div>
                        <div>• Data Structures & Algorithms Learner</div>
                        <div>• Computer Science Foundation Candidate</div>
                    </div>
                </section>
            </div>
        </>
    )
}
