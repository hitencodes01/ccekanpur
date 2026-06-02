import { MailIcon, PhoneCallIcon, MapPinIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SoftAurora from "./SoftAurora";
import { FacebookIcon, InstagramIcon } from "@/lib/icons";

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={1}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          mouseInfluence={0.25}
        />
      </div>

      {/* Top divider accent */}
      <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">

          {/* Brand block */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <div className="flex items-center gap-4">
              <img
                src="logo.jpeg"
                height={72}
                width={72}
                className="shadow-lg"
                alt="CCE Logo"
              />
              <div>
                <p className="text-white font-bold text-base tracking-wide leading-tight">CCE</p>
                <p className="text-purple-300 text-[10px] font-semibold uppercase tracking-widest mt-0.5">
                  ISO 9001:2015 Certified
                </p>
              </div>
            </div>
            <p className="text-white text-xs leading-relaxed text-center sm:text-left max-w-xs">
              Empowering students with quality education and industry-recognized certifications.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              <Link
                to="https://www.instagram.com/cceonline"
                className="p-2 rounded-full bg-white/10 hover:bg-purple-500/40 text-white hover:text-[#38bbeb] transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </Link>
              <Link
                to="https://www.facebook.com/cceknp"
                className="p-2 rounded-full bg-white/10 hover:bg-purple-500/40 text-white hover:text-[#38bbeb] transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </Link>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-col items-center justify-between sm:items-start gap-3">
            <p className="text-purple-300 text-[11px] font-bold uppercase tracking-[0.15em] mb-1">
              Quick Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Courses", to: "/courses" },
                { label: "Contact", to: "/contact" },
                { label: "Certificate Verification", to: "/certificateVerification" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white hover:text-[#38bbeb] text-sm transition-colors duration-150 hover:pl-1 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <p className="text-purple-300 text-[11px] font-bold uppercase tracking-[0.15em] mb-1">
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

        {/* Bottom divider + copyright */}
        <div className="mt-12 pt-5 border-t border-white flex flex-col sm:flex-row justify-between items-center gap-2 text-white text-xs">
          <span>© 2026 CCE. All rights reserved.</span>
          <Link to={"https://ccekanpur.in/sitemap.xml"}>Sitemap</Link>
          <span className="text-purple-400/60 font-medium tracking-wide">ISO 9001:2015 Certified Institute</span>
        </div>
      </div>
    </footer>
  );
}