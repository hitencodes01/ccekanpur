import CourseSection from "./components/CourseSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function Courses() {
  return (
    <div>
      <Navbar />
      <div className="mt-16 text-center py-10">
        <span className="inline-block px-4 py-1 text-sm font-semibold tracking-wider uppercase rounded-full bg-sky-100 text-sky-700 border border-sky-200">
          Academic Excellence
        </span>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
          Courses & Programs
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
          Explore industry-focused undergraduate and postgraduate programs
          designed to build strong foundations, practical skills, and successful careers.
        </p>

        <div className="mt-6 flex justify-center">
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" />
        </div>
      </div>
      <CourseSection/>
      <Footer />
    </div>
  )
}
