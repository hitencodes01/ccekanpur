import { Link } from "react-router-dom";

export default function AboutUs() {
    const courses = [
        { id: "oLevel", label: "O Level", icon: "🎓", category: "Government Certified" },
        { id: "dca", label: "DCA", icon: "💻", category: "Government Certified" },
        { id: "pgdca", label: "PGDCA", icon: "🏫", category: "Government Certified" },
        { id: "ccc", label: "CCC", icon: "📋", category: "Government Certified" },
        { id: "advancedExcel", label: "Advanced Excel", icon: "📊", category: "Office & Tools" },
        { id: "oracle", label: "Oracle", icon: "🗄️", category: "Database" },
        { id: "python", label: "Python", icon: "🐍", category: "Programming" },
        { id: "java", label: "Java", icon: "☕", category: "Programming" },
        { id: "tally", label: "Tally", icon: "🧾", category: "Accounting" },
        { id: "englishSpeaking", label: "English Speaking", icon: "🗣️", category: "Communication" },
        { id: "graphicDesigning", label: "Graphic Designing", icon: "🎨", category: "Creative" },
        { id: "dataAnalytics", label: "Data Analytics", icon: "📈", category: "Tech" },
    ];

    const stats = [
        { value: "5000+", label: "Students Trained" },
        { value: "2019", label: "Established" },
        { value: "12+", label: "Courses Offered" },
        { value: "100%", label: "Job-Ready Focus" },
    ];

    return (
        <div
            style={{
                fontFamily: "'Nunito', 'Segoe UI', sans-serif",
                background: "linear-gradient(160deg, #f8faff 0%, #ffffff 50%, #f3f7f2 100%)",
                minHeight: "100vh",
                color: "#1a1a2e",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');

        .cce-hero-badge {
          display: inline-block;
          background: linear-gradient(135deg, #0f6e56 0%, #1d9e75 100%);
          color: white;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 18px;
          border-radius: 50px;
          margin-bottom: 24px;
        }

        .cce-stat-card {
          background: white;
          border-radius: 20px;
          padding: 28px 20px;
          text-align: center;
          border: 1.5px solid #e8f5f0;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .cce-stat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #1d9e75, #0f6e56);
          border-radius: 20px 20px 0 0;
        }
        .cce-stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(15,110,86,0.12);
        }

        .cce-course-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          background: white;
          border: 1.5px solid #e2efe9;
          border-radius: 14px;
          padding: 14px 18px;
          transition: all 0.22s ease;
          cursor: default;
        }
        .cce-course-chip:hover {
          background: #f0faf6;
          border-color: #1d9e75;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(15,110,86,0.10);
        }
        .cce-course-chip:hover .chip-label {
          color: #0f6e56;
        }

        .cce-value-card {
          background: white;
          border-radius: 18px;
          padding: 28px 24px;
          border: 4px solid #0f6e56;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: box-shadow 0.25s ease;
        }
        .cce-value-card:hover {
          box-shadow: 0 12px 32px rgba(0,0,0,0.07);
        }

        .cce-section-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #1d9e75;
          margin-bottom: 10px;
        }

        .cce-cta-btn {
          display: inline-block;
          background: linear-gradient(135deg, #0f6e56 0%, #1d9e75 100%);
          color: white;
          font-weight: 800;
          font-size: 15px;
          padding: 16px 38px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .cce-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(15,110,86,0.30);
        }

        .cce-outline-btn {
          display: inline-block;
          background: white;
          color: #0f6e56;
          font-weight: 700;
          font-size: 15px;
          padding: 15px 36px;
          border-radius: 50px;
          border: 2px solid #1d9e75;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .cce-outline-btn:hover {
          background: #f0faf6;
        }

        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.07;
          pointer-events: none;
        }
      `}</style>

            {/* ── HERO ── */}
            <section
                style={{
                    position: "relative",
                    overflow: "hidden",
                    padding: "80px 24px 72px",
                    maxWidth: 1080,
                    margin: "0 auto",
                }}
            >
                {/* decorative blobs */}
                <div className="decorative-circle" style={{ width: 420, height: 420, background: "#1d9e75", top: -140, right: -80 }} />
                <div className="decorative-circle" style={{ width: 280, height: 280, background: "#0f6e56", bottom: -80, left: -60 }} />

                <div className="cce-hero-badge">Kanpur's Trusted Learning Hub</div>

                <h1
                    style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(34px, 6vw, 60px)",
                        fontWeight: 700,
                        lineHeight: 1.15,
                        color: "#0a2e24",
                        margin: "0 0 20px",
                        maxWidth: 700,
                    }}
                >
                    Learn Today,{" "}
                    <em style={{ color: "#1d9e75", fontStyle: "italic" }}>Lead Tomorrow.</em>
                </h1>

                <p
                    style={{
                        fontSize: "clamp(15px, 2vw, 18px)",
                        color: "#4a6b5d",
                        lineHeight: 1.75,
                        maxWidth: 620,
                        margin: "0 0 40px",
                    }}
                >
                    At <strong style={{ color: "#0a2e24" }}>CCE — Centre for Computer Education</strong>, 05, Mangla Vihar, Near Ramadevi, Kanpur, UP – 208015. We
                    believe every learner deserves an affordable path to a career they love. Since 2019,
                    we've been equipping students with industry-relevant skills that open real doors.
                </p>
            </section>

            {/* ── STATS ── */}
            <section
                style={{
                    background: "linear-gradient(135deg, #0a2e24 0%, #0f6e56 100%)",
                    padding: "52px 24px",
                }}
            >
                <div
                    style={{
                        maxWidth: 1080,
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                        gap: 20,
                    }}
                >
                    {stats.map((s) => (
                        <div className="cce-stat-card" key={s.value}>
                            <div
                                style={{
                                    fontSize: "clamp(28px, 5vw, 38px)",
                                    fontWeight: 900,
                                    color: "#0f6e56",
                                    lineHeight: 1.1,
                                    marginBottom: 6,
                                }}
                            >
                                {s.value}
                            </div>
                            <div style={{ fontSize: 13, fontWeight: 600, color: "#5f7a6e", letterSpacing: "0.5px" }}>
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── WHO WE ARE ── */}
            <section style={{ maxWidth: 1080, margin: "0 auto", padding: "72px 24px 0" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 48,
                        alignItems: "start",
                    }}
                >
                    <div>
                        <div className="cce-section-label">Who We Are</div>
                        <h2
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(26px, 4vw, 36px)",
                                fontWeight: 700,
                                color: "#0a2e24",
                                lineHeight: 1.3,
                                margin: "0 0 18px",
                            }}
                        >
                            Affordable excellence, one student at a time.
                        </h2>
                        <p style={{ fontSize: 15, color: "#4a6b5d", lineHeight: 1.8, margin: "0 0 16px" }}>
                            We started with a simple belief: quality computer education should not be a
                            privilege. Located in the heart of Kanpur, CCE is a place where curiosity meets
                            career — where a student from any background can walk in and walk out ready for
                            the industry.
                        </p>
                        <p style={{ fontSize: 15, color: "#4a6b5d", lineHeight: 1.8 }}>
                            Our trainers bring real-world experience to every class, blending practical
                            projects with certification prep so students graduate both <em>skilled</em> and{" "}
                            <em>hirable</em>.
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {[
                            { title: "Career-first curriculum", desc: "Every course is designed around what employers are actually hiring for right now." },
                            { title: "Fees that never hold you back", desc: "We keep our pricing accessible so cost is never a barrier to upskilling." },
                            { title: "Personal attention", desc: "Small batches mean every student gets hands-on guidance, not just lectures." },
                        ].map((v) => (
                            <div className="cce-value-card" key={v.title}>
                                <div style={{ fontWeight: 700, fontSize: 15, color: "#0a2e24" }}>{v.title}</div>
                                <div style={{ fontSize: 14, color: "#5f7a6e", lineHeight: 1.65 }}>{v.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── COURSES ── */}
            <section style={{ maxWidth: 1080, margin: "0 auto", padding: "72px 24px" }}>
                <div style={{ textAlign: "center", marginBottom: 44 }}>
                    <div className="cce-section-label" style={{ textAlign: "center" }}>What We Teach</div>
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(26px, 4vw, 36px)",
                            fontWeight: 700,
                            color: "#0a2e24",
                            margin: "0 0 14px",
                        }}
                    >
                        Courses built for real careers
                    </h2>
                    <p style={{ fontSize: 15, color: "#4a6b5d", maxWidth: 500, margin: "0 auto" }}>
                        From government-certified programmes to in-demand tech skills — we have a course
                        for every goal and every stage.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                        gap: 14,
                    }}
                >
                    {courses.map((c) => (
                        <div className="cce-course-chip sm:border-4 border-[#0f6e56]" key={c.id}>
                            <div>
                                <div className="chip-label" style={{ fontWeight: 700, fontSize: 14, color: "#0a2e24", transition: "color 0.2s" }}>
                                    {c.label}
                                </div>
                                <div style={{ fontSize: 11, color: "#8aab9b", fontWeight: 600 }}>{c.category}</div>
                                <button style={{ fontWeight: 700, fontSize: 14, backgroundColor: "#0f6e56", transition: "color 0.2s" }} className="px-2 text-white cursor-pointer rounded-2xl"><Link to={`/course/${c.id}`}>View</Link></button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section style={{ padding: "0 24px 80px" }}>
                <div
                    style={{
                        maxWidth: 1080,
                        margin: "0 auto",
                        background: "linear-gradient(135deg, #0a2e24 0%, #0f6e56 60%, #1d9e75 100%)",
                        borderRadius: 28,
                        padding: "56px 40px",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 28,
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <div className="decorative-circle" style={{ width: 300, height: 300, background: "white", top: -120, right: 40 }} />
                    <div>
                        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "2px", color: "#9fe1cb", textTransform: "uppercase", marginBottom: 10 }}>
                            Join 5000+ Alumni
                        </div>
                        <h2
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(22px, 4vw, 32px)",
                                fontWeight: 700,
                                color: "white",
                                margin: 0,
                                maxWidth: 460,
                                lineHeight: 1.3,
                            }}
                        >
                            Ready to upskill and land your dream job?
                        </h2>
                    </div>
                    <button
                        className="cce-cta-btn"
                        style={{ background: "white", color: "#0f6e56", flexShrink: 0 }}
                    >
                        <Link to={"/form"}> Start Your Journey →</Link>
                    </button>
                </div>
            </section>
        </div>
    );
}