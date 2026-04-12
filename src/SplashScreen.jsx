import { useEffect, useState } from "react";
import logo from "../src/assets/images/logo.png";

export default function SplashScreen({ onFinish }) {
    const [phase, setPhase] = useState("init");

    useEffect(() => {
        const timers = [
            setTimeout(() => setPhase("logo"), 300),
            setTimeout(() => setPhase("text"), 1000),
            setTimeout(() => setPhase("line"), 1800),
            setTimeout(() => setPhase("exit"), 3200),
            setTimeout(() => onFinish?.(), 3900),
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    const show = (...phases) => phases.includes(phase);

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
                opacity: show("exit") ? 0 : 1,
                transition: "opacity 0.8s ease",
                pointerEvents: show("exit") ? "none" : "all",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 0,
                }}
            >
                {/* Logo */}
                <img
                    src={logo}
                    alt="Ommitech"
                    style={{
                        width: 64,
                        height: 64,
                        objectFit: "contain",
                        marginBottom: 24,
                        opacity: show("logo", "text", "line") ? 1 : 0,
                        transform: show("logo", "text", "line")
                            ? "translateY(0) scale(1)"
                            : "translateY(12px) scale(0.85)",
                        transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                    }}
                />

                {/* Brand name */}
                <div style={{ overflow: "hidden", height: 48 }}>
                    <h1
                        style={{
                            fontFamily: "'Segoe UI', sans-serif",
                            fontSize: 38,
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            color: "#ffffff",
                            margin: 0,
                            textTransform: "uppercase",
                            transform: show("text", "line") ? "translateY(0)" : "translateY(52px)",
                            transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1)",
                        }}
                    >
                        OMMITECH
                    </h1>
                </div>

                {/* Tagline */}
                <div style={{ overflow: "hidden", height: 22, marginTop: 6 }}>
                    <p
                        style={{
                            fontFamily: "'Segoe UI', sans-serif",
                            fontSize: 10,
                            fontWeight: 400,
                            letterSpacing: "0.3em",
                            color: "#2DD4BF",
                            margin: 0,
                            textTransform: "uppercase",
                            transform: show("text", "line") ? "translateY(0)" : "translateY(26px)",
                            transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.1s",
                        }}
                    >
                        Software & IT Solutions · Ghana
                    </p>
                </div>

                {/* Sweeping line */}
                <div
                    style={{
                        marginTop: 24,
                        height: 1,
                        borderRadius: 1,
                        background: "#2DD4BF",
                        width: show("line") ? 200 : 0,
                        opacity: show("line") ? 0.5 : 0,
                        transition: "width 0.8s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease",
                    }}
                />
            </div>
        </div>
    );
}