export default function Hero() {
    return (
        <>
            <style>{`
        .hero-section {
          background-color: #ffffff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 24px;
        }

        .hero-ctas {
          display: flex;
          flex-direction: row;
          gap: 12px;
          width: 100%;
          margin-bottom: 0;
        }

        .hero-ctas a {
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          font-family: 'Segoe UI', sans-serif;
          text-align: center;
          display: block;
          box-sizing: border-box;
        }

        .btn-primary {
          background-color: #2DD4BF;
          color: #0a0f2c;
          font-weight: 700;
        }

        .btn-outline {
          border: 1px solid #2DD4BF;
          color: #2DD4BF;
          background: transparent;
        }

        @media (max-width: 767px) {
          .hero-section {
            padding-top: 100px;
            justify-content: flex-start;
          }

          .hero-ctas {
            flex-direction: column;
            max-width: 100%;
          }

          .hero-ctas a {
            width: 100%;
          }
        }

        @media (min-width: 768px) {
          .hero-ctas {
            flex-direction: row;
            width: auto;
          }

          .hero-ctas a {
            width: auto;
          }
        }
      `}</style>

            <section className="hero-section">
                {/* Headline */}
                <h1
                    style={{
                        color: "#0a0f2c",
                        fontSize: "clamp(36px, 6vw, 72px)",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        maxWidth: 800,
                        margin: "0 auto 24px",
                        fontFamily: "'Segoe UI', sans-serif",
                    }}
                >
                    Innovation{" "}
                    <span style={{ color: "#2DD4BF" }}>Engineered</span>{" "}
                    for the Future
                </h1>

                {/* Subtext */}
                <p
                    style={{
                        color: "#64748b",
                        fontSize: "clamp(15px, 2vw, 18px)",
                        maxWidth: 560,
                        lineHeight: 1.7,
                        margin: "0 auto 40px",
                        fontFamily: "'Segoe UI', sans-serif",
                    }}
                >
                    We build high-performance digital products — from sleek interfaces
                    to robust systems — that move businesses forward.
                </p>

                {/* CTAs */}
                <div className="hero-ctas">
                    <a href="#work" className="btn-primary">See Our Work</a>
                    <a href="#contact" className="btn-outline">Get in Touch</a>
                </div>

                {/* Stats */}
                <div
                    style={{
                        display: "flex",
                        gap: "clamp(32px, 6vw, 80px)",
                        marginTop: 80,
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {[
                        { value: "50+", label: "Projects Delivered" },
                        { value: "100%", label: "Client Satisfaction" },
                        { value: "3+", label: "Years Experience" },
                    ].map((stat) => (
                        <div key={stat.label} style={{ textAlign: "center" }}>
                            <div
                                style={{
                                    color: "#2DD4BF",
                                    fontSize: "clamp(28px, 4vw, 42px)",
                                    fontWeight: 700,
                                    fontFamily: "'Segoe UI', sans-serif",
                                }}
                            >
                                {stat.value}
                            </div>
                            <div
                                style={{
                                    color: "#64748b",
                                    fontSize: 13,
                                    marginTop: 4,
                                    letterSpacing: "0.05em",
                                    textTransform: "uppercase",
                                    fontFamily: "'Segoe UI', sans-serif",
                                }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}