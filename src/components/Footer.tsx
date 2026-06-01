import { MailIcon, PhoneCallIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SoftAurora from "./SoftAurora";
export default function Footer() {
  return (
    <footer className="relative bg-black  overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center p-16 gap-10 ">
        <div>
          <img src="logo.jpeg" height={100} width={100} alt="" />
        </div>
        <div>
          <p className="text-gray-600 font-bold text-center text-xs mb-2">Quick Navigation</p>
          <ul className="flex flex-row md:flex-col gap-2 text-center underline text-white">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/contact">Contact </Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-white font-bold hover:text-[#0f6e56]">
            <Link to="tel:+919026907907">
              <PhoneCallIcon className="inline" /> +919026907907
            </Link>
          </h1>

          <h1 className="text-white font-bold hover:text-[#0f6e56]">
            <Link to="mailto:cceknp@gmail.com">
              <MailIcon className="inline" /> cceknp@gmail.com
            </Link>
          </h1>

          <p>
            <Link
              to="https://www.instagram.com/cceonline"
              className="text-white hover:text-[#0f6e56]"
            >
              Instagram
            </Link>
          </p>
        </div>
      </div>
      <h1 className="text-white font-semibold text-center text-sm">05, Mangla Vihar, Near Ramadevi, Kanpur, UP – 208015</h1>
      <h1 className="text-white font-semibold text-center text-sm">Copyright @2026 CCE</h1>
    </footer>
  );
}