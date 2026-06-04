import { useParams } from "react-router-dom";
import { courses } from "./lib/courses";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function CourseDetails() {
    const { courseId } = useParams();

    const course = courses.find(
        c => c.id === courseId
    );

    if (!course) {
        return (
            <div className="text-center py-20">
                Course Not Found
            </div>
        );
    }

    return (
        <>
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold">
                {course.title}
            </h1>

            <p className="mt-4 text-lg text-gray-600">
                {course.description}
            </p>

            <div className="mt-8">
                <span className="px-4 py-2 rounded-full bg-[#38bbeb]/10 text-[#38bbeb]">
                    Duration: {course.duration}
                </span>
            </div>
        </div>
        <Footer/>
        </>
    );
}