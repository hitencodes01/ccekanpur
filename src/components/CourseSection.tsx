import { Link } from "react-router-dom";

export const courses = [{ id: "ccc", name: "CCC", image: "CCC.png" }, { id: "olevel", name: "O Level", image: "OLevel.png" }, { id: "dca", name: "DCA", image: "DCA.png" }, { id: "pgdca", name: "PGDCA", image: "PGDCA.png" }, { id: "python12", name: "Python for Class 11 & 12", image: "Python.png" }, { id: "java12", name: "Core Java for Class 11 & 12", image: "Java.jpeg" }, { id: "c", name: "Full C Course for Graduation", image: "C.png" }, { id: "python", name: "Python Full Course for Graduation", image: "PythonBCA.png" }, { id: "java", name: "Full Java Course for Graduation", image: "JavaBCA.png" }, { id: "oracleSQL", name: "Oracle SQL Certification Course", image: "Oracle.png" }, { id: "tally", name: "Tally Prime Certification Course", image: "Tally.png" }, { id: "dataAnalytics", name: "Data Analytics", image: "DataAnalytics.png" }, { id: "advExcel", name: "Advanced Excel", image: "AdvancedExcel2.png" }, { id: "hindiEnglishTyping", name: "English Typing Course", image: "HindiEnglish.png" }, { id: "oraclePL", name: "Oracle PL/SQL Certification Course", image: "PLSQL.png" }, { id: "pdp", name: "English Speaking & Personality Development", image: "EnglishSpeaking.png" }, { id: "graphic", name: "Graphic Designing", image: "GraphicDesign.png" },{ id: "website", name: "Website Designing", image: "Website.png" }
];

export default function CourseSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#eef9fd] via-white to-[#eef9fd]">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#38bbeb]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#38bbeb]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-[#38bbeb]/10 text-[#38bbeb] font-semibold text-sm">
            Centre for Computer Education
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-slate-900">
            Our Certification Courses
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-slate-600">
            Industry-recognized certification programs designed to enhance practical
            skills, improve employability, and prepare students for professional
            success. All courses are offered under a quality-driven learning framework
            with recognized standards and government-supported initiatives.
          </p>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8">
            {/* ISO */}
            <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-6 py-4 shadow-sm">
              <img
                src="/iso.png"
                alt="ISO 9001:2015 Certified Institute"
                className="h-16 w-auto"
              />
              <div className="text-left">
                <h3 className="font-semibold text-slate-900">
                  ISO 9001:2015 Certified
                </h3>
                <p className="text-sm text-slate-600">
                  Quality Management System Certified Institute
                </p>
              </div>
            </div>

            {/* MSME */}
            <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-6 py-4 shadow-sm">
              <img
                src="/msme.png"
                alt="MSME Registered"
                className="h-16 w-auto"
              />
              <div className="text-left">
                <h3 className="font-semibold text-slate-900">
                  MSME Registered
                </h3>
                <p className="text-sm text-slate-600">
                  Ministry of Micro, Small & Medium Enterprises, Govt. of India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="
                group
                relative
                bg-white
                rounded-3xl
                border
                border-[#38bbeb]/20
                p-6
                min-h-[300px]
                flex
                flex-col
                justify-between
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-[#38bbeb]/20
                hover:border-[#38bbeb]
              "
            >
              {/* Number Badge */}
              <div className="absolute top-4 right-4">
                <div className="h-10 w-10 rounded-full bg-[#38bbeb]/10 flex items-center justify-center text-[#38bbeb] font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div>
                {/* Top Line */}
                <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  Certification Course
                </div>

                {/* Course Name */}
                <h3 className="mt-5 text-xl font-bold leading-snug text-slate-900">
                  {course.name}
                </h3>

                {/* Details */}
                <div className=" mt-2 space-y-3">
                  <img className="rounded-2xl" src={`/${course.image}`} height={200} width={150} alt="" />
                  <div className="h-px bg-slate-200" />
                  <p className="font-semibold text-[#38bbeb]">
                    Centre for Computer Education
                  </p>
                </div>
              </div>

              {/* Button */}
              <Link
                to={`/courses/${course.id}`}
                className="
                  mt-8
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  border-2
                  border-[#38bbeb]
                  py-3
                  font-semibold
                  text-[#38bbeb]
                  transition-all
                  duration-300
                  hover:bg-[#38bbeb]
                  hover:text-white
                "
              >
                View Course
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}