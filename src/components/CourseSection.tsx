import { Link } from "react-router-dom";

const courses = [
  "CCC",
  "DCA",
  "PGDCA",
  "O Level",
  "Python for Class 11 & 12",
  "Core Java for Class 11 & 12",
  "Full C Course for Graduation",
  "Python Full Course for Graduation",
  "Full Java Course for Graduation",
  "Oracle SQL Certification Course",
  "Tally Prime Certification Course",
  "Data Analytics",
  "Advanced Excel",
  "Hindi Typing Course",
  "English Typing Course",
  "Oracle PL/SQL Certification Course",
  "English Speaking & Personality Development",
];

const createSlug = (course : any) =>
  course
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

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

          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            Government Registered & NIELIT Approved Centre offering
            industry-relevant certification programs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={course}
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
                  {course}
                </h3>

                {/* Details */}
                <div className="mt-6 space-y-3">
                  <p className="text-sm text-slate-600">
                    Government Registered & NIELIT Approved Centre
                  </p>

                  <div className="h-px bg-slate-200" />

                  <p className="font-semibold text-[#38bbeb]">
                    Centre for Computer Education
                  </p>
                </div>
              </div>

              {/* Button */}
              <Link
                to={`/courses/${createSlug(course)}`}
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