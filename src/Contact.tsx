import { useState } from "react";
import EnrollmentForm from "./components/EnrollmentForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <Navbar />
      {/* middle card */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 bg-black mt-16 px-4 py-10">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="logo.jpeg"
            alt="Centre for Computer Education Logo"
            className="w-48 sm:w-72 md:w-80 h-auto object-contain"
          />
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-left">
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", }} className="text-[#38bbeb] text-xl font-bold uppercase tracking-[0.15em]">
            Contact Us
          </p>

          <Link
            to="tel:+919026907907"
            className="flex items-center gap-3 text-white hover:text-[#38bbeb] text-sm transition-colors group"
          >
            <span className="p-2 rounded-full bg-white/10 group-hover:bg-purple-500/40 transition-all">
              <PhoneCallIcon size={14} />
            </span>
            +91 9026-907-907
          </Link>
          <Link
            to="tel:+917309807907"
            className="flex items-center gap-3 text-white hover:text-[#38bbeb] text-sm transition-colors group"
          >
            <span className="p-2 rounded-full bg-white/10 group-hover:bg-purple-500/40 transition-all">
              <PhoneCallIcon size={14} />
            </span>
            +91 7309-807-907
          </Link>

          <Link
            to="mailto:cceknp@gmail.com"
            className="flex items-center gap-3 text-white hover:text-[#38bbeb] text-sm transition-colors group"
          >
            <span className="p-2 rounded-full bg-white/10 group-hover:bg-purple-500/40 transition-all">
              <MailIcon size={14} />
            </span>
            cceknp@gmail.com
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="bg-[#38bbeb] text-white text-sm font-semibold px-5 py-2 rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Apply Now
          </button>

          <div className="flex items-start gap-3 text-white text-sm max-w-xs">
            <span className="p-2 rounded-full bg-white/10 mt-0.5 shrink-0">
              <MapPinIcon size={14} />
            </span>

            <span className="leading-relaxed">
              05, Mangla Vihar, Near Ramadevi,
              <br />
              Kanpur, UP – 208015
            </span>
          </div>
        </div>
      </div>
      <Footer />
      <EnrollmentForm open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
