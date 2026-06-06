import { Link } from "react-router-dom";
import { courses } from "@/lib/courses";
import ReviewSection from "@/Review";

export default function AboutUs() {


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
                color: "#38bbeb",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');

        .cce-hero-badge {
          display: inline-block;
          background: linear-gradient(135deg, #38bbeb 0%, #1d9e75 100%);
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
          border: 1.5px solid #38bbeb;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .cce-stat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #1d9e75, #38bbeb);
          border-radius: 20px 20px 0 0;
        }
        .cce-stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px hex(#38bbeb);
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
          border-color: #38bbeb;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(15,110,86,0.10);
        }
        .cce-course-chip:hover .chip-label {
          color: #38bbeb;
        }

        .cce-value-card {
          background: white;
          border-radius: 18px;
          padding: 28px 24px;
          border: 4px solid #38bbeb;
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
          color: #38bbeb;
          margin-bottom: 10px;
        }

        .cce-cta-btn {
          display: inline-block;
          background: linear-gradient(135deg, #38bbeb 0%, #1d9e75 100%);
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
          color: #38bbeb;
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
                <div className="decorative-circle" style={{ width: 420, height: 420, background: "#38bbeb", top: -140, right: -80 }} />
                <div className="decorative-circle" style={{ width: 280, height: 280, background: "#38bbeb", bottom: -80, left: -60 }} />

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
                    <em style={{ color: "#38bbeb", fontStyle: "italic" }}>Lead Tomorrow.</em>
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

                <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8">
                    {/* ISO */}
                    <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-6 py-4 shadow-sm">
                        <img
                            src="/iso.png"
                            alt="ISO 9001:2015 Certified Institute"
                            className="h-16 w-auto"
                        />
                        <div className="text-left">
                            <h3 className="font-semibold text-slate-900">
                                ISO 9001:2015 Certified
                            </h3>
                            <p className="text-sm text-slate-600">
                                Quality Management System Certified Institute
                            </p>
                        </div>
                    </div>

                    {/* MSME */}
                    <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-6 py-4 shadow-sm">
                        <img
                            src="/msme.png"
                            alt="MSME Registered"
                            className="h-16 w-auto"
                        />
                        <div className="text-left">
                            <h3 className="font-semibold text-slate-900">
                                MSME Registered
                            </h3>
                            <p className="text-sm text-slate-600">
                                Ministry of Micro, Small & Medium Enterprises, Govt. of India
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATS ── */}
            <section
                style={{
                    background: "linear-gradient(135deg, #0a2e24 0%, #38bbeb 100%)",
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
                                    color: "#38bbeb",
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

                {/* Grid */}

                <div className="grid p-2 rounded-2xl mt-5 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ background: "linear-gradient(135deg,#38bbeb  0%, #0a2e24 100%)", }}>
                    {courses.map((course, index) => (
                        <div
                            key={course.id}
                            className="
                                group
                                relative
                                bg-white
                                rounded-3xl
                                border
                                border-[#38bbeb]/20
                                p-6
                                min-h-[300px]
                                flex
                                flex-col
                                justify-between
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:shadow-2xl
                                hover:shadow-[#38bbeb]/20
                                hover:border-[#38bbeb]
                              "
                        >
                            {/* Number Badge */}
                            <div className="absolute top-4 right-4">
                                <div className="h-10 w-10 rounded-full bg-[#38bbeb]/10 flex items-center justify-center text-[#38bbeb] font-bold">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                            </div>

                            <div>
                                {/* Top Line */}
                                <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                                    Certification Course
                                </div>

                                {/* Course Name */}
                                <h3 className="mt-5 text-xl font-bold leading-snug text-slate-900">
                                    {course.name}
                                </h3>

                                {/* Details */}
                                <div className=" mt-2 space-y-3">
                                    <img className="rounded-2xl" src={`/${course.image}`} height={200} width={150} alt="" />
                                    <div className="h-px bg-slate-200" />
                                    <p className="font-semibold text-[#38bbeb]">
                                        Centre for Computer Education
                                    </p>
                                </div>
                            </div>

                            {/* Button */}
                            <Link
                                to={`/courses/${course.id}`}
                                className="
                                  mt-8
                                  flex
                                  items-center
                                  justify-center
                                  rounded-xl
                                  border-2
                                  border-[#38bbeb]
                                  py-3
                                  font-semibold
                                  text-[#38bbeb]
                                  transition-all
                                  duration-300
                                  hover:bg-[#38bbeb]
                                  hover:text-white
                                "
                            >
                                View Course
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* review */}
            <ReviewSection />
            {/* ── CTA BANNER ── */}
            <section className="mt-5" style={{ padding: "0 24px 80px" }}>
                <div
                    style={{
                        maxWidth: 1080,
                        margin: "0 auto",
                        background: "linear-gradient(135deg, #0a2e24 0%, #38bbeb 60%, #1d9e75 100%)",
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
                        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "2px", color: "#0f4254", textTransform: "uppercase", marginBottom: 10 }}>
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
                        style={{ background: "white", color: "#38bbeb", flexShrink: 0 }}
                    >
                        <Link to={"/contact"}> Start Your Journey →</Link>
                    </button>
                </div>
            </section>
        </div>
    );
}