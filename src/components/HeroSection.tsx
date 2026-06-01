import { Link } from "react-router-dom";
import Threads from "./Threads";

export default function HeroSection({ mounted }: { mounted: boolean }) {
    return (<>
        <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 100%; }
        }
        .anim-tag     { animation: slideRight 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .anim-rule    { animation: lineGrow   0.9s cubic-bezier(0.22,1,0.36,1) 0.25s both; }
        .anim-heading { animation: fadeUp     0.75s cubic-bezier(0.22,1,0.36,1) 0.3s both; }
        .anim-sub     { animation: fadeUp     0.7s cubic-bezier(0.22,1,0.36,1) 0.5s both; }
        .anim-btns    { animation: fadeUp     0.7s cubic-bezier(0.22,1,0.36,1) 0.7s both; }

        /* About Us underline reveal */
        .btn-about::before,
        .btn-about::after {
          content: ''; position: absolute; bottom: 0; left: 0; height: 1.5px;
        }
        .btn-about::before { width: 100%; background: rgba(255,255,255,0.2); }
        .btn-about::after  { width: 0; background: #f59e0b; transition: width 0.35s cubic-bezier(0.22,1,0.36,1); }
        .btn-about:hover::after { width: 100%; }

        /* View Courses sweep */
        .btn-courses::before {
          content: ''; position: absolute; inset: 0;
          background: #000; transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1); z-index: 0;
        }
        .btn-courses:hover::before { transform: translateX(0); }
        .btn-courses:hover { color: #f59e0b !important; }
        .btn-courses > * { position: relative; z-index: 1; }
        .btn-courses svg { transition: transform 0.25s cubic-bezier(0.22,1,0.36,1); }
        .btn-courses:hover svg { transform: translateX(4px); }
      `}</style>
      <div className="relative w-full h-150 bg-black overflow-hidden">
        <div className="absolute inset-0">
            <Threads amplitude={1} distance={0} enableMouseInteraction />
        </div>
        <div className="w-full absolute top-1/2 -translate-y-1/2 left-6 sm:left-16 right-6 sm:right-16 max-w-xl flex flex-col gap-4 z-10">

            {/* eyebrow */}
            <p className={`text-amber-400 text-xs tracking-[0.25em] uppercase font-light opacity-0 ${mounted ? 'anim-tag' : ''}`}>
                Be alive with learn
            </p>

            {/* decorative rule */}
            <div className={`h-px bg-gradient-to-r from-amber-400 to-transparent w-0 opacity-0 max-w-[200px] ${mounted ? 'anim-rule' : ''}`} />

            {/* heading */}
            <h1 className={`text-white font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl opacity-0 ${mounted ? 'anim-heading' : ''}`}>
                Centre for<br />
                <span className="text-amber-400">Computer</span><br />
                Education
            </h1>

            {/* subtext */}
            <p className={`text-white/55 text-base font-light leading-relaxed max-w-sm opacity-0 ${mounted ? 'anim-sub' : ''}`}>
                Empowering the next generation of digital thinkers — from foundational skills to advanced computing.
            </p>

            {/* buttons */}
            <div className={`flex items-center gap-7 mt-1 opacity-0 ${mounted ? 'anim-btns' : ''}`}>

                {/* View Courses */}
                <Link
                    to="/courses"
                    className="btn-courses relative inline-flex items-center gap-2 bg-amber-400 text-black font-medium text-sm px-5 py-2.5 rounded-md border border-amber-400 overflow-hidden no-underline"
                >
                    <span>View Courses</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>

                {/* About Us */}
                <Link
                    to="/about"
                    className="btn-about relative text-white font-medium text-sm pb-1 no-underline hover:text-amber-400 transition-colors duration-200"
                >
                    About Us
                </Link>

            </div>
        </div>
        </div>
    </>
    )
}
