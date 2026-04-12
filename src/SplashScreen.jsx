import { useEffect, useState } from "react";
import logo from "../src/assets/images/logo.png"

export default function SplashScreen({ onFinish }) {
    const [phase, setPhase] = useState("logo");

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("text"), 2000);
        const t2 = setTimeout(() => setPhase("line"), 3200);
        const t3 = setTimeout(() => setPhase("done"), 4800);
        const t4 = setTimeout(() => onFinish?.(), 5300);
        return () => [t1, t2, t3, t4].forEach(clearTimeout);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0a0f2c",
                opacity: phase === "done" ? 0 : 1,
                transition: "opacity 0.5s ease",
                pointerEvents: phase === "done" ? "none" : "all",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>

                {/* Logo — spins twice then floats */}
                <img
                    src={logo}
                    alt="Ommitech logo"
                    style={{
                        width: 76,
                        height: 76,
                        animation: "spinThenFloat 3.5s ease-in-out infinite",
                    }}
                />

                {/* Name + underline */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                        style={{
                            fontFamily: "'Segoe UI', sans-serif",
                            fontSize: 38,
                            fontWeight: 700,
                            letterSpacing: "0.02em",
                            color: "#2DD4BF",
                            opacity: phase === "logo" ? 0 : 1,
                            transform: phase === "logo" ? "translateX(-24px)" : "translateX(0)",
                            transition: "opacity 0.6s ease, transform 0.6s ease",
                            whiteSpace: "nowrap",
                        }}
                    >
                    
                    </span>

                    {/* Sweeping underline */}
                    <span
                        style={{
                            display: "block",
                            height: 2,
                            borderRadius: 2,
                            background: "linear-gradient(90deg, #2DD4BF, #0d9488)",
                            marginTop: 6,
                            width: phase === "line" || phase === "done" ? "100%" : "0%",
                            transition: "width 0.55s ease",
                        }}
                    />
                </div>
            </div>

            <style>{`
        @keyframes spinThenFloat {
          0%   { transform: rotate(0deg) scale(1); }
          18%  { transform: rotate(360deg) scale(1.12); }
          35%  { transform: rotate(720deg) scale(1); }
          50%  { transform: rotate(720deg) translateY(-10px) scale(1.06); }
          65%  { transform: rotate(720deg) translateY(0px) scale(1); }
          80%  { transform: rotate(720deg) translateY(10px) scale(1.06); }
          100% { transform: rotate(720deg) translateY(0px) scale(1); }
        }
      `}</style>
        </div>
    );
}