import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    img: "/logo.jpeg",
    tag: "ISO 9001:2015 Certified",
    heading: ["Centre for", "Computer", "Education"],
    accentIdx: 1,
    sub: "Empowering the next generation of digital thinkers — from foundational skills to advanced computing.",
  },
  {
    img: "/cce4.webp",
    tag: "Our Community",
    heading: ["Learn,", "Grow &", "Succeed"],
    accentIdx: 2,
    sub: "A thriving community of students, educators, and achievers building tomorrow's digital future together.",
  },
];

export default function HeroSection({ mounted }: { mounted: boolean }) {
  const [active, setActive] = useState(0);
  const [animState, setAnimState] = useState<"in" | "out">("in");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (idx: number) => {
    if (idx === active) return;
    setAnimState("out");
    setTimeout(() => {
      setActive(idx);
      setAnimState("in");
    }, 420);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((active + 1) % SLIDES.length);
    }, 4000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active]);

  const slide = SLIDES[active];

  return (
    <>
      <style>{`
        :root {
          --accent: #38bbeb;
          --bg: #000;
          --text: #fff;
        }

        .hero-root {
          position: relative;
          width: 100%;
          min-height: 100svh;
          background: var(--bg);
          overflow: hidden;
          display: flex;
          align-items: stretch;
        }

        /* ── Desktop: two-column ── */
        .hero-left {
          width: 50%;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .hero-right {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(40px,6vw,90px) clamp(28px,5vw,72px);
          position: relative;
          z-index: 2;
        }

        /* Image */
        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: opacity 0.42s ease, transform 0.42s ease;
        }
        .hero-img.out { opacity: 0; transform: scale(1.04); }
        .hero-img.in  { opacity: 1; transform: scale(1); }

        /* Image overlay gradient */
        .hero-left::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right,
            transparent 55%, rgba(0,0,0,0.7) 100%);
          z-index: 1;
          pointer-events: none;
        }

        /* Accent vertical bar between columns */
        .hero-divider {
          position: absolute;
          top: 12%; bottom: 12%;
          left: 50%;
          width: 1.5px;
          background: linear-gradient(to bottom,
            transparent, var(--accent), transparent);
          z-index: 5;
          opacity: 0.5;
        }

        /* ── Text content ── */
        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--accent);
          font-size: clamp(10px,1.4vw,12px);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 300;
          margin-bottom: 14px;
        }
        .hero-tag-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
          animation: dotPulse 2.4s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.3; transform:scale(0.6); }
        }

        .hero-rule {
          width: 48px; height: 2px;
          background: var(--accent);
          margin-bottom: 20px;
          border-radius: 2px;
        }

        .hero-h1 {
          font-size: clamp(2.4rem,4.5vw,4rem);
          font-weight: 900;
          line-height: 1.07;
          color: var(--text);
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }
        .hero-h1 .accent { color: var(--accent); }

        .hero-sub {
          font-size: clamp(13px,1.4vw,15px);
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          line-height: 1.75;
          max-width: 380px;
          margin: 0 0 36px;
        }

        /* Text slide transitions */
        .text-wrap {
          transition: opacity 0.38s ease, transform 0.38s ease;
        }
        .text-wrap.out { opacity: 0; transform: translateY(14px); }
        .text-wrap.in  { opacity: 1; transform: translateY(0); }

        /* Buttons */
        .hero-btns {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
        }
        .btn-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--accent);
          color: #000;
          font-weight: 700;
          font-size: clamp(12px,1.3vw,13px);
          padding: 12px 24px;
          border-radius: 5px;
          text-decoration: none;
          overflow: hidden;
          transition: color 0.3s;
          white-space: nowrap;
          letter-spacing: 0.02em;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #fff;
          transform: translateX(-102%);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
          z-index: 0;
        }
        .btn-primary:hover::before { transform: translateX(0); }
        .btn-primary:hover { color: var(--accent); }
        .btn-primary > * { position: relative; z-index: 1; }
        .btn-primary svg { transition: transform 0.25s cubic-bezier(0.22,1,0.36,1); }
        .btn-primary:hover svg { transform: translateX(4px); }

        .btn-ghost {
          position: relative;
          color: rgba(255,255,255,0.55);
          font-size: clamp(12px,1.3vw,13px);
          font-weight: 400;
          text-decoration: none;
          padding-bottom: 3px;
          transition: color 0.22s;
          white-space: nowrap;
        }
        .btn-ghost::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1.5px;
          background: var(--accent);
          transition: width 0.32s cubic-bezier(0.22,1,0.36,1);
        }
        .btn-ghost:hover { color: var(--accent); }
        .btn-ghost:hover::after { width: 100%; }

        /* Dots */
        .hero-dots {
          display: flex;
          gap: 8px;
          margin-top: 36px;
        }
        .hero-dot {
          width: 28px; height: 3px;
          border-radius: 2px;
          background: rgba(255,255,255,0.18);
          cursor: pointer;
          transition: background 0.25s, width 0.25s;
          border: none;
          padding: 0;
        }
        .hero-dot.active {
          background: var(--accent);
          width: 44px;
        }

        /* Progress bar */
        .hero-progress {
          position: absolute;
          bottom: 0; left: 0;
          height: 2px;
          background: var(--accent);
          opacity: 0.6;
          z-index: 10;
          animation: progress 4s linear;
          transform-origin: left;
        }
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .hero-root {
            flex-direction: column;
            min-height: 100svh;
          }
          .hero-left {
            width: 100%;
            height: 52vw;
            min-height: 220px;
            max-height: 320px;
          }
          .hero-left::after {
            background: linear-gradient(to bottom,
              transparent 50%, rgba(0,0,0,0.75) 100%);
          }
          .hero-right {
            width: 100%;
            padding: 28px 22px 48px;
          }
          .hero-divider { display: none; }
          .hero-h1 { font-size: clamp(2rem,8vw,2.8rem); }
          .hero-sub { max-width: 100%; }
        }
      `}</style>

      <div className="hero-root">
        {/* Progress bar — resets on slide change */}
        <div key={`pb-${active}`} className="hero-progress" />

        {/* Vertical divider (desktop) */}
        <div className="hero-divider" />

        {/* LEFT — image */}
        <div className="hero-left">
          <img
            key={`img-${active}`}
            src={slide.img}
            alt=""
            aria-hidden="true"
            className={`hero-img ${animState}`}
            loading="eager"
            decoding="async"
          />
        </div>

        {/* RIGHT — text */}
        <div className="hero-right">
          <div className={`text-wrap ${animState}`} key={`txt-${active}`}>

            <div className="hero-tag">
              <span className="hero-tag-dot" />
              {slide.tag}
            </div>

            <div className="hero-rule" />

            <h1 className="hero-h1">
              {slide.heading.map((line, i) => (
                <span key={i}>
                  {i === slide.accentIdx
                    ? <span className="accent">{line}</span>
                    : line}
                  {i < slide.heading.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="hero-sub">{slide.sub}</p>

            <div className="hero-btns">
              <Link to="/courses" className="btn-primary">
                <span>View Courses</span>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
                    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link to="/about" className="btn-ghost">About Us</Link>
            </div>
          </div>

          {/* Dots */}
          <div className="hero-dots" role="tablist" aria-label="Slides">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`hero-dot${active === i ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                role="tab"
                aria-selected={active === i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}