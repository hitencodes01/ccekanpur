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
      <div className="flex flex-row justify-center items-center gap-10 bg-black mt-16">
        {/* logo */}
        <div>
          <img src="logo.jpeg" height={200} width={400} alt="" />
        </div>
        {/*  */}
        <div className="mt-16 flex flex-col p-4 items-center sm:items-start gap-4">
          <p className="text-purple-300 text-xl font-bold uppercase tracking-[0.15em] mb-1">
            Contact Us
          </p>
          <Link
            to="tel:+919026907907"
            className="flex items-center gap-3 text-white hover:text-[#38bbeb] text-sm transition-colors group"
          >
            <span className="p-2 rounded-full bg-white/10 group-hover:bg-purple-500/40 transition-all">
              <PhoneCallIcon size={14} />
            </span>
            +91 90269 07907
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
            className="bg-[#38bbeb]  text-white text-sm font-semibold px-5 py-2 rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Apply Now
          </button>
          <div className="flex items-start gap-3 text-white text-sm">
            <span className="p-2 rounded-full bg-white/10 mt-0.5 shrink-0">
              <MapPinIcon size={14} />
            </span>
            <span className="leading-relaxed ">
              05, Mangla Vihar, Near Ramadevi,<br />
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
