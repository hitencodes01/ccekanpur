import { useState } from "react"
import { Link } from "react-router-dom"
import EnrollmentForm from "./EnrollmentForm"

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-white backdrop-blur-md  border-b-2 border-[#38bbeb]">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <div>
                        <img src="/logo.jpeg" height={48} width={48} alt="CCE Logo" className="rounded-sm sm:h-15 sm:w-30" />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {["Home", "About", "Courses", "Contact"].map((item) => (
                            <Link
                                key={item}
                                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="text-black hover:text-[#38bbeb] text-sm  md:text-lg md:font-bold md:text-shadow-2xs text-blue-red-600 font-medium tracking-wide transition-colors duration-200 hover:text-[#38bbeb]"
                            >
                                {item}
                            </Link>

                        ))}
                        <Link
                            to={"/certificateVerification"}
                            className="text-black hover:text-[#38bbeb] text-sm  md:text-lg md:font-bold md:text-shadow-2xs text-blue-red-600 font-medium tracking-wide transition-colors duration-200 hover:text-[#38bbeb]"
                        >
                            Certificate Verification
                        </Link>
                    </div>

                    {/* Apply Button + Mobile Menu */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setOpen(true)}
                            className="bg-[#38bbeb]  text-white text-sm font-semibold px-5 py-2 rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
                        >
                            Apply Now
                        </button>

                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden text-white p-1"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <div className="w-5 h-0.5 bg-black mb-1 transition-all" />
                            <div className="w-5 h-0.5 bg-black mb-1 transition-all" />
                            <div className="w-5 h-0.5 bg-black transition-all" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-black/90 border-t border-white/10 px-4 py-4 flex flex-col gap-4">
                        {["Home", "About", "Courses", "Contact"].map((item) => (
                            <Link
                                key={item}
                                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="text-white/80 hover:text-[#38bbeb] text-sm font-medium transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            to={"/certificateVerification"}
                            className="text-white/80 hover:text-[#38bbeb] text-sm  md:text-lg md:font-bold md:text-shadow-2xs text-blue-red-600 font-medium tracking-wide transition-colors duration-200 hover:text-[#38bbeb]"
                        >
                            Certificate Verification
                        </Link>
                    </div>
                )}
            </nav>

            <EnrollmentForm open={open} onClose={() => setOpen(false)} />
        </>
    )
}