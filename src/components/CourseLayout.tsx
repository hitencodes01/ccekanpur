import Navbar from "./Navbar";
import Footer from "./Footer";

export default function CourseLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="mt-15">{children}</main>
            <Footer />
        </>
    );
}