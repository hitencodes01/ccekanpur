export default function HindiEnglishTyping() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-[#38bbeb] mb-6">
          Hindi & English Typing
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          This professional typing course is designed to develop speed, accuracy,
          and confidence in both English and Hindi typing. The curriculum covers
          English Touch Typing along with Hindi Typing in Mangal (Unicode) and
          Krutidev layouts, helping students prepare for government examinations,
          clerical positions, data entry roles, and office administration jobs.
        </p>

        {/* Course Overview */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Course Overview</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <strong>Duration:</strong> 2–3 Months
            </div>

            <div className="p-4 border rounded-lg">
              <strong>Training Type:</strong> Practical Lab-Based Learning
            </div>

            <div className="p-4 border rounded-lg">
              <strong>English Target:</strong> 35–45+ WPM with High Accuracy
            </div>

            <div className="p-4 border rounded-lg">
              <strong>Hindi Target:</strong> 30–35+ WPM with High Accuracy
            </div>
          </div>
        </section>

        {/* English Typing */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">
            English Touch Typing
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">
                Finger Positioning & Keyboard Mastery
              </h4>

              <p>
                Home row positioning, upper row and bottom row navigation,
                muscle memory development, and proper use of Shift keys.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">
                Speed Building & Accuracy Training
              </h4>

              <p>
                Word drills, sentence practice, paragraph typing,
                typing tests, and continuous speed improvement exercises.
              </p>
            </div>
          </div>
        </section>

        {/* Krutidev */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">
            Hindi Typing – Krutidev
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">
                Keyboard Layout & Character Mapping
              </h4>

              <p>
                Complete Krutidev keyboard layout, consonants, vowels,
                matras, half characters, and typing rules.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">
                Government Exam Typing Practice
              </h4>

              <p>
                Practical exercises based on typing tests commonly used in
                state government and clerical recruitment examinations.
              </p>
            </div>
          </div>
        </section>

        {/* Mangal */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">
            Hindi Typing – Mangal (Unicode)
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">
                Remington GAIL Layout
              </h4>

              <p>
                Unicode typing using the popular Remington layout widely
                adopted in competitive examinations and offices.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">
                InScript Keyboard Layout
              </h4>

              <p>
                Government-standard Unicode keyboard layout with
                systematic vowel and consonant placement.
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 border rounded-lg bg-gray-50">
            <strong>Topics Covered:</strong> Unicode typing, compound
            characters, halant usage, matras, punctuation, and Hindi numerals.
          </div>
        </section>

        {/* Accuracy & Exam Preparation */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">
            Professional Accuracy & Exam Preparation
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              Backspace Restriction Practice
            </div>

            <div className="border rounded-lg p-4">
              Real Examination Simulation Tests
            </div>

            <div className="border rounded-lg p-4">
              Bilingual Typing Adaptability Training
            </div>
          </div>
        </section>

        {/* Practical Training */}
        <section className="mb-10">
          <div className="bg-[#38bbeb]/10 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Practical Learning Methodology
            </h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>Daily Typing Practice Sessions</li>
              <li>Speed & Accuracy Improvement Drills</li>
              <li>Mock Typing Examinations</li>
              <li>English & Hindi Paragraph Typing Tests</li>
              <li>Government Exam Pattern Practice</li>
              <li>Performance Tracking & Progress Reports</li>
            </ul>
          </div>
        </section>

        {/* Suitable For */}
        <section className="mb-10">
          <div className="bg-[#38bbeb]/10 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Suitable For
            </h3>

            <p>
              Students preparing for SSC, Railways, Banking, High Court,
              UP Police, CPCT, BELTRON, Secretariat, Data Entry Operator,
              Computer Operator, and other government or private-sector jobs
              requiring professional typing skills.
            </p>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="bg-[#38bbeb]/10 p-6 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">
            Career Opportunities
          </h3>

          <div className="grid md:grid-cols-2 gap-3">
            <div>• Data Entry Operator</div>
            <div>• Computer Operator</div>
            <div>• Office Assistant</div>
            <div>• Clerical Executive</div>
            <div>• Back Office Executive</div>
            <div>• Documentation Assistant</div>
            <div>• Government Typist</div>
            <div>• Administrative Support Staff</div>
          </div>
        </section>
      </div>
    </>
  )
}
