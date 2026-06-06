// Replace GOOGLE_REVIEW_URL with your actual Google review link
const GOOGLE_REVIEW_URL = "https://share.google/mDZcLZB7y0aSoIRWj";

const REVIEWS = [
    { name: "Rahul Sharma", rating: 5, text: "Best computer institute in Kanpur. Faculty is very supportive and course content is up to date.", time: "2 months ago" },
    { name: "Priya Singh", rating: 5, text: "Excellent teaching methods. Got placed right after completing my course. Highly recommended!", time: "3 months ago" },
    { name: "Amit Kumar", rating: 5, text: "ISO certified institute with great infrastructure. The practical sessions are very helpful.", time: "1 month ago" },
    { name: "Neha Gupta", rating: 5, text: "Very professional staff and clean environment. Learned a lot in a short time.", time: "4 months ago" },
    { name: "Saurabh Verma", rating: 4, text: "Good courses and affordable fees. Would definitely recommend to friends and family.", time: "5 months ago" },
    { name: "Pooja Mishra", rating: 5, text: "Centre for Computer Education changed my career. The DCA course was very practical and job-oriented.", time: "2 weeks ago" },
];

function Stars({ count }: { count: number }) {
    return (
        <div style={{ display: "flex", gap: 2 }}>
            {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i <= count ? "#38bbeb" : "rgba(255,255,255,0.15)"}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

function Avatar({ name }: { name: string }) {
    const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
    const colors = ["#38bbeb", "#0e8fb5", "#1a6fa8", "#2580c3", "#0fa3b1", "#3d9abf"];
    const color = colors[name.charCodeAt(0) % colors.length];
    return (
        <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: color, display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 14, fontWeight: 700,
            color: "#000", flexShrink: 0, letterSpacing: "0.02em"
        }}>{initials}</div>
    );
}

export default function ReviewSection() {
    return (
        <>
            <style>{`
        .rv-section {
          background: #000;
          padding: clamp(64px,10vh,100px) clamp(20px,6vw,80px);
          overflow: hidden;
        }

        /* Header */
        .rv-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: clamp(40px,6vw,64px);
          gap: 12px;
        }
        .rv-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #38bbeb;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 300;
        }
        .rv-tag-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #38bbeb;
          animation: rvDot 2.4s ease-in-out infinite;
        }
        @keyframes rvDot {
          0%,100%{opacity:1;transform:scale(1)}
          50%{opacity:0.3;transform:scale(0.6)}
        }
        .rv-title {
          font-size: clamp(2rem,4vw,3rem);
          font-weight: 900;
          color: #fff;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .rv-title span { color: #38bbeb; }
        .rv-sub {
          font-size: clamp(13px,1.5vw,15px);
          color: rgba(255,255,255,0.45);
          font-weight: 300;
          max-width: 460px;
          line-height: 1.7;
          margin: 0;
        }

        /* Rating summary bar */
        .rv-summary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: clamp(32px,5vw,52px);
          flex-wrap: wrap;
        }
        .rv-big-score {
          font-size: clamp(3rem,6vw,4.5rem);
          font-weight: 900;
          color: #38bbeb;
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .rv-summary-right {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .rv-summary-stars {
          display: flex;
          gap: 3px;
        }
        .rv-summary-stars svg { width: 20px; height: 20px; }
        .rv-count {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          font-weight: 300;
          letter-spacing: 0.04em;
        }
        .rv-divider-h {
          width: 1px;
          height: 52px;
          background: rgba(255,255,255,0.1);
        }
        .rv-google-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border: 1px solid rgba(56,187,235,0.2);
          border-radius: 8px;
        }
        .rv-google-badge svg { width: 20px; height: 20px; }
        .rv-google-badge span {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* Cards grid */
        .rv-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%,300px), 1fr));
          gap: clamp(14px,2.5vw,20px);
          margin-bottom: clamp(40px,6vw,60px);
        }
        .rv-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(56,187,235,0.1);
          border-radius: 12px;
          padding: clamp(16px,2.5vw,22px);
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: border-color 0.25s, background 0.25s;
          position: relative;
          overflow: hidden;
        }
        .rv-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(56,187,235,0.4), transparent);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .rv-card:hover {
          border-color: rgba(56,187,235,0.3);
          background: rgba(56,187,235,0.04);
        }
        .rv-card:hover::before { opacity: 1; }

        .rv-card-top {
          display: flex;
          align-items: center;
          gap: 11px;
        }
        .rv-card-meta { display: flex; flex-direction: column; gap: 2px; }
        .rv-card-name {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.01em;
        }
        .rv-card-time {
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          font-weight: 300;
        }
        .rv-card-text {
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          line-height: 1.68;
          font-weight: 300;
          margin: 0;
          flex: 1;
        }
        .rv-quote {
          font-size: 40px;
          color: rgba(56,187,235,0.12);
          line-height: 1;
          font-weight: 900;
          margin-top: -8px;
          align-self: flex-end;
        }

        /* CTA */
        .rv-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
        }
        .rv-cta-text {
          font-size: clamp(13px,1.5vw,15px);
          color: rgba(255,255,255,0.4);
          font-weight: 300;
          max-width: 380px;
          line-height: 1.65;
          margin: 0;
        }
        .rv-cta-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #38bbeb;
          color: #000;
          font-weight: 700;
          font-size: 13px;
          padding: 14px 28px;
          border-radius: 6px;
          text-decoration: none;
          overflow: hidden;
          transition: color 0.28s;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }
        .rv-cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #000;
          border: 1px solid #38bbeb;
          transform: translateX(-102%);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
          z-index: 0;
        }
        .rv-cta-btn:hover::before { transform: translateX(0); }
        .rv-cta-btn:hover { color: #38bbeb; }
        .rv-cta-btn > * { position: relative; z-index: 1; }
        .rv-cta-btn svg { transition: transform 0.25s cubic-bezier(0.22,1,0.36,1); }
        .rv-cta-btn:hover svg { transform: translateX(4px); }

        /* Divider line */
        .rv-line {
          width: 48px; height: 2px;
          background: #38bbeb;
          border-radius: 2px;
          margin: 0 auto 16px;
        }

        @media (max-width: 480px) {
          .rv-divider-h { display: none; }
          .rv-google-badge { display: none; }
        }
      `}</style>

            <section className="rv-section">

                {/* Header */}
                <div className="rv-header">
                    <div className="rv-tag">
                        <span className="rv-tag-dot" />
                        Student Reviews
                    </div>
                    <h2 className="rv-title">
                        What Our <span>Students</span> Say
                    </h2>
                    <p className="rv-sub">
                        Real experiences from real students. See why hundreds choose Centre for Computer Education.
                    </p>
                </div>

                {/* Rating summary */}
                <div className="rv-summary">
                    <div className="rv-big-score">4.9</div>
                    <div className="rv-summary-right">
                        <div className="rv-summary-stars">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} viewBox="0 0 24 24" fill="#38bbeb">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                        </div>
                        <span className="rv-count">Based on Google Reviews</span>
                    </div>
                    <div className="rv-divider-h" />
                    <div className="rv-google-badge">
                        {/* Google G icon */}
                        <svg viewBox="0 0 24 24" fill="none">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <span>Google</span>
                    </div>
                </div>

                {/* Review cards */}
                <div className="rv-grid">
                    {REVIEWS.map((r, i) => (
                        <div className="rv-card" key={i}>
                            <div className="rv-card-top">
                                <Avatar name={r.name} />
                                <div className="rv-card-meta">
                                    <span className="rv-card-name">{r.name}</span>
                                    <Stars count={r.rating} />
                                </div>
                                <span className="rv-card-time" style={{ marginLeft: "auto" }}>{r.time}</span>
                            </div>
                            <p className="rv-card-text">{r.text}</p>
                            <span className="rv-quote">"</span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="rv-cta">
                    <div className="rv-line" />
                    <p className="rv-cta-text">
                        Had a great experience? Help others find us by leaving a review on Google.
                    </p>
                    <a
                        href={GOOGLE_REVIEW_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rv-cta-btn"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="currentColor" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" />
                        </svg>
                        <span>Rate Us on Google</span>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

            </section>
        </>
    );
}