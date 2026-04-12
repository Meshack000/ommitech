import { useEffect, useRef, useState } from "react";
import logo from "../src/assets/images/logo.png";

export default function SplashScreen({ onFinish }) {
    const canvasRef = useRef(null);
    const animFrameRef = useRef(null);
    const [phase, setPhase] = useState("init");

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let W = canvas.offsetWidth;
        let H = canvas.offsetHeight;
        canvas.width = W;
        canvas.height = H;

        const particles = Array.from({ length: 90 }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.5 + 0.3,
            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4,
            alpha: Math.random() * 0.5 + 0.1,
        }));

        function drawParticles() {
            ctx.clearRect(0, 0, W, H);
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(45,212,191,${p.alpha})`;
                ctx.fill();
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > W) p.dx *= -1;
                if (p.y < 0 || p.y > H) p.dy *= -1;
            });
            animFrameRef.current = requestAnimationFrame(drawParticles);
        }
        drawParticles();

        const t1 = setTimeout(() => setPhase("ring"), 300);
        const t2 = setTimeout(() => setPhase("logo"), 900);
        const t3 = setTimeout(() => setPhase("text"), 1600);
        const t4 = setTimeout(() => setPhase("tagline"), 2300);
        const t5 = setTimeout(() => setPhase("line"), 2800);
        const t6 = setTimeout(() => setPhase("exit"), 4200);
        const t7 = setTimeout(() => onFinish?.(), 5000);

        return () => {
            [t1, t2, t3, t4, t5, t6, t7].forEach(clearTimeout);
            cancelAnimationFrame(animFrameRef.current);
        };
    }, []);

    const isExit = phase === "exit";

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                backgroundColor: "#0a0f2c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                transform: isExit ? "scaleY(0)" : "scaleY(1)",
                transformOrigin: "top center",
                transition: isExit ? "transform 0.7s cubic-bezier(0.76,0,0.24,1)" : "none",
            }}
        >
            {/* Particle canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                }}
            />

            {/* Horizontal scan line */}
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, #2DD4BF44, transparent)",
                    top: "50%",
                    opacity: phase === "init" ? 0 : 0.6,
                    transition: "opacity 1s ease",
                }}
            />

            {/* Center content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 0,
                }}
            >
                {/* Logo with ring */}
                <div style={{ position: "relative", width: 90, height: 90, marginBottom: 32 }}>
                    <svg
                        viewBox="0 0 90 90"
                        style={{ position: "absolute", inset: 0, width: 90, height: 90 }}
                    >
                        <circle
                            cx="45"
                            cy="45"
                            r="40"
                            fill="none"
                            stroke="#2DD4BF"
                            strokeWidth="1.5"
                            strokeDasharray="251"
                            strokeDashoffset={phase === "init" ? 251 : 0}
                            style={{
                                transform: "rotate(-90deg)",
                                transformOrigin: "45px 45px",
                                transition: "stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)",
                            }}
                        />
                    </svg>
                    <div
                        style={{
                            position: "absolute",
                            inset: 10,
                            borderRadius: "50%",
                            background: "#111a3e",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transform: ["logo", "text", "tagline", "line", "exit"].includes(phase)
                                ? "scale(1)"
                                : "scale(0)",
                            transition: "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",
                        }}
                    >
                        <img src={logo} alt="Ommitech" style={{ width: 40, height: 40, objectFit: "contain" }} />
                    </div>
                </div>

                {/* Brand name */}
                <div style={{ overflow: "hidden", height: 52 }}>
                    <h1
                        style={{
                            fontFamily: "'Segoe UI', sans-serif",
                            fontSize: 42,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            color: "#ffffff",
                            margin: 0,
                            textTransform: "uppercase",
                            transform: ["text", "tagline", "line", "exit"].includes(phase)
                                ? "translateY(0)"
                                : "translateY(60px)",
                            transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                        }}
                    >
                        OMMITECH
                    </h1>
                </div>

                {/* Tagline */}
                <div style={{ overflow: "hidden", height: 24, marginTop: 6 }}>
                    <p
                        style={{
                            fontFamily: "'Segoe UI', sans-serif",
                            fontSize: 11,
                            fontWeight: 400,
                            letterSpacing: "0.28em",
                            color: "#2DD4BF",
                            margin: 0,
                            textTransform: "uppercase",
                            transform: ["tagline", "line", "exit"].includes(phase)
                                ? "translateY(0)"
                                : "translateY(28px)",
                            transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                        }}
                    >
                        Software & IT Solutions · Ghana
                    </p>
                </div>

                {/* Sweeping line */}
                <div
                    style={{
                        marginTop: 20,
                        height: 1,
                        background: "linear-gradient(90deg, transparent, #2DD4BF, transparent)",
                        width: ["line", "exit"].includes(phase) ? 220 : 0,
                        transition: "width 0.7s cubic-bezier(0.16,1,0.3,1)",
                    }}
                />
            </div>

            {/* Corner brackets */}
            {["tl", "tr", "bl", "br"].map((pos) => (
                <div
                    key={pos}
                    style={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        borderColor: "#2DD4BF",
                        borderStyle: "solid",
                        borderWidth: 0,
                        borderTopWidth: pos.startsWith("t") ? 1 : 0,
                        borderBottomWidth: pos.startsWith("b") ? 1 : 0,
                        borderLeftWidth: pos.endsWith("l") ? 1 : 0,
                        borderRightWidth: pos.endsWith("r") ? 1 : 0,
                        top: pos.startsWith("t") ? 32 : "auto",
                        bottom: pos.startsWith("b") ? 32 : "auto",
                        left: pos.endsWith("l") ? 32 : "auto",
                        right: pos.endsWith("r") ? 32 : "auto",
                        opacity: ["text", "tagline", "line", "exit"].includes(phase) ? 0.5 : 0,
                        transition: "opacity 0.8s ease",
                    }}
                />
            ))}
        </div>
    );
}