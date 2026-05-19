import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Projects", value: 5, suffix: "+", icon: "⬡" },
  { label: "Certificates", value: 3, suffix: "+", icon: "✦" },
  { label: "Tech Stack", value: 10, suffix: "+", icon: "◈" },
  { label: "Available", value: null, suffix: "", icon: "⚛", text: "Yes" },
];

const tags = [
  "JavaScript ES6+",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Git & GitHub",
  "Fast Learner",
];

const terminalLines = [
  { key: "name", val: '"Revathi G"', color: "#fbbf24" },
  { key: "role", val: '"MERN Stack Dev"', color: "#fbbf24" },
  { key: "passion", val: "true", color: "#fb7185" },
  { key: "available", val: "true", color: "#fb7185" },
  { key: "location", val: '"Chennai, India"', color: "#fbbf24" },
];

function useCountUp(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started || target === null) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

function StatCard({ stat, started, delay }) {
  const count = useCountUp(stat.value, 1600, started);
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? "rgba(139,92,246,0.1)" : "rgba(11,12,16,0.7)",
        border: `1px solid ${hover ? "rgba(139,92,246,0.55)" : "rgba(139,92,246,0.18)"}`,
        borderRadius: 14,
        padding: "20px 18px",
        cursor: "default",
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hover
          ? "translateY(-6px) scale(1.03)"
          : "translateY(0) scale(1)",
        backdropFilter: "blur(10px)",
        animationDelay: `${delay}s`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {hover && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 14,
            background:
              "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.15), transparent 70%)",
            pointerEvents: "none",
          }}
        />
      )}
      <div style={{ fontSize: 20, marginBottom: 10 }}>{stat.icon}</div>
      <div
        style={{
          fontSize: "1.7rem",
          fontWeight: 500,
          background: "linear-gradient(135deg,#c8b8ff,#7ee8fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1,
        }}
      >
        {stat.text ?? `${count}${stat.suffix}`}
      </div>
      <div
        style={{
          fontSize: "0.6rem",
          fontWeight: 300,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)",
          marginTop: 6,
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

function TerminalTyper({ started }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (!started) return;
    if (visibleLines >= terminalLines.length) return;
    const line = terminalLines[visibleLines];
    const full = `${line.key}: ${line.val},`;
    if (charIdx < full.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 28);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setCharIdx(0);
      }, 80);
      return () => clearTimeout(t);
    }
  }, [started, visibleLines, charIdx]);

  return (
    <div
      style={{
        background: "rgba(8,9,13,0.9)",
        border: "1px solid rgba(139,92,246,0.2)",
        borderRadius: 14,
        padding: "20px 22px",
        fontFamily: "'Courier New', monospace",
        fontSize: 13,
        lineHeight: 1.9,
        backdropFilter: "blur(14px)",
        marginBottom: 28,
      }}
    >
      <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
        {["#ff5f57", "#ffbd2e", "#28c840"].map((c, i) => (
          <div
            key={i}
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: c,
            }}
          />
        ))}
      </div>
      <div style={{ color: "#e2e2e2" }}>
        <span style={{ color: "#8b5cf6" }}>const</span>{" "}
        <span style={{ color: "#c8b8ff" }}>developer</span>{" "}
        <span style={{ color: "#e2e2e2" }}>= {"{"}</span>
      </div>
      {terminalLines.map((line, i) => {
        if (i > visibleLines) return null;
        const full = `${line.key}: ${line.val},`;
        const isCurrent = i === visibleLines;
        const text = isCurrent ? full.slice(0, charIdx) : full;
        const keyPart = line.key;
        const rest = text.slice(keyPart.length);
        return (
          <div key={line.key} style={{ paddingLeft: 20 }}>
            <span style={{ color: "#7ee8fa" }}>{keyPart}</span>
            <span style={{ color: "#e2e2e2" }}>{rest.slice(0, 2)}</span>
            <span style={{ color: line.color }}>{rest.slice(2)}</span>
            {isCurrent && charIdx <= full.length && (
              <span
                style={{
                  display: "inline-block",
                  width: 7,
                  height: 13,
                  background: "#8b5cf6",
                  marginLeft: 2,
                  verticalAlign: "middle",
                  animation: "termBlink 0.65s step-end infinite",
                }}
              />
            )}
          </div>
        );
      })}
      {visibleLines >= terminalLines.length && (
        <div style={{ color: "#e2e2e2" }}>{"}"}</div>
      )}
      <style>{`@keyframes termBlink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);
  const [hoveredTag, setHoveredTag] = useState(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setStatsStarted(true), 600);
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <>
      <style>{`
        .about-section {
          min-height: 100vh;
          margin-left: 230px;
          padding: 7rem 5vw 5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          background:
            linear-gradient(rgba(11,12,16,0.78), rgba(11,12,16,0.88)),
            url('/src/assets/bg1.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: #e2e2e2;
          position: relative;
          overflow: hidden;
        }
        .about-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -55deg, transparent, transparent 60px,
            rgba(255,255,255,0.012) 60px, rgba(255,255,255,0.012) 61px
          );
          pointer-events: none;
        }
        .ab-mouse-glow {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139,92,246,0.08), transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: left 0.12s ease, top 0.12s ease;
          z-index: 0;
        }
        .ab-floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.12;
          pointer-events: none;
        }
        .ab-inner { position: relative; z-index: 1; }
        .ab-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 300; letter-spacing: 0.3em;
          text-transform: uppercase; color: #8b5cf6; margin-bottom: 1.2rem;
        }
        .ab-label-line { width: 28px; height: 1px; background: #8b5cf6; }
        .ab-title {
          font-family: 'poppins, sans-serif', cursive;
          font-size: clamp(3rem, 5.5vw, 5.5rem);
          color: #f0ecff; line-height: 1.05; margin-bottom: 0.5rem;
        }
        .ab-divider {
          width: 60px; height: 2px;
          background: linear-gradient(90deg, #8b5cf6, transparent);
          border-radius: 2px; margin-bottom: 3.5rem;
        }
        .ab-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          max-width: 1060px;
        }
        .ab-bio {
          font-size: 0.88rem; font-weight: 300; line-height: 1.85;
          color: rgba(255,255,255,0.42);
          border-left: 2px solid rgba(139,92,246,0.35);
          padding-left: 1rem; margin-bottom: 1.4rem;
          transition: border-color 0.3s;
        }
        .ab-bio:hover { border-color: rgba(139,92,246,0.7); }
        .ab-highlight { color: #c8b8ff; font-weight: 400; }
        .ab-stats {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 24px;
        }
        .ab-tags-box {
          background: rgba(11,12,16,0.65);
          border: 1px solid rgba(139,92,246,0.18);
          border-radius: 14px; padding: 22px;
          margin-bottom: 20px; backdrop-filter: blur(10px);
          transition: border-color 0.3s;
        }
        .ab-tags-box:hover { border-color: rgba(139,92,246,0.4); }
        .ab-tags-title {
          font-size: 0.6rem; font-weight: 300; letter-spacing: 0.24em;
          text-transform: uppercase; color: rgba(255,255,255,0.28);
          margin-bottom: 14px; font-family: 'Courier New', monospace;
        }
        .ab-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .ab-tag {
          padding: 6px 15px; border-radius: 9999px;
          font-size: 0.7rem; font-weight: 300; letter-spacing: 0.1em;
          cursor: default; transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
          display: inline-block;
        }
        .ab-tag:nth-child(3n+1) {
          background: rgba(139,92,246,0.08);
          border: 1px solid rgba(139,92,246,0.28); color: #c8b8ff;
        }
        .ab-tag:nth-child(3n+2) {
          background: rgba(45,156,219,0.08);
          border: 1px solid rgba(45,156,219,0.28); color: #7ee8fa;
        }
        .ab-tag:nth-child(3n) {
          background: rgba(251,191,36,0.08);
          border: 1px solid rgba(251,191,36,0.25); color: #fde68a;
        }
        .ab-tag.hovered {
          transform: translateY(-4px) scale(1.08);
          box-shadow: 0 8px 20px rgba(139,92,246,0.2);
        }
        .ab-tag:nth-child(3n+2).hovered {
          box-shadow: 0 8px 20px rgba(45,156,219,0.2);
        }
        .ab-cta {
          width: 100%; padding: 14px;
          border-radius: 9999px;
          border: 1px solid rgba(139,92,246,0.4);
          background: rgba(139,92,246,0.07);
          color: #c8b8ff;
          font-family: 'Poppins', sans-serif;
          font-size: 0.75rem; font-weight: 300;
          letter-spacing: 0.2em; text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
          position: relative; overflow: hidden;
        }
        .ab-cta::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #7c3aed, #2d9cdb);
          border-radius: 9999px;
          transform: translateX(-105%);
          transition: transform 0.5s cubic-bezier(0.76,0,0.24,1);
        }
        .ab-cta:hover::before { transform: translateX(0); }
        .ab-cta:hover { color: #fff; border-color: transparent; }
        .ab-cta span { position: relative; z-index: 1; }
        .ab-cta-arrow { display: inline-block; transition: transform 0.3s; }
        .ab-cta:hover .ab-cta-arrow { transform: translateX(6px); }
        .ab-progress-bar {
          height: 3px; border-radius: 9999px;
          background: rgba(255,255,255,0.06);
          margin-top: 8px; overflow: hidden;
        }
        .ab-progress-fill {
          height: 100%; border-radius: 9999px;
          background: linear-gradient(90deg, #8b5cf6, #7ee8fa);
          transition: width 1.4s cubic-bezier(0.22,1,0.36,1);
        }
        .ab-skill-row {
          margin-bottom: 14px;
        }
        .ab-skill-header {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 6px;
        }
        .ab-skill-name {
          font-size: 0.72rem; font-weight: 300; letter-spacing: 0.1em;
          color: rgba(255,255,255,0.55);
        }
        .ab-skill-pct {
          font-size: 0.65rem; font-weight: 300;
          color: rgba(139,92,246,0.8); letter-spacing: 0.08em;
        }
        .ab-section-divider {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent);
          margin: 2.5rem 0;
        }
        @media(max-width:900px){
          .about-section { margin-left: 64px; padding: 4rem 2rem; }
          .ab-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>

      <section
        id="about"
        className="about-section"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
      >
        {/* Mouse glow */}
        <div
          className="ab-mouse-glow"
          style={{ left: mousePos.x, top: mousePos.y }}
        />

        {/* Floating orbs */}
        <div
          className="ab-floating-orb"
          style={{
            width: 400,
            height: 400,
            background: "#5b4fcf",
            top: -120,
            right: -100,
            animation: "abOrb 12s ease-in-out infinite",
          }}
        />
        <div
          className="ab-floating-orb"
          style={{
            width: 250,
            height: 250,
            background: "#2d9cdb",
            bottom: -60,
            left: "15%",
            animation: "abOrb 16s ease-in-out infinite reverse",
          }}
        />

        <style>{`
          @keyframes abOrb {
            0%,100% { transform: translate(0,0); }
            33% { transform: translate(20px, 30px); }
            66% { transform: translate(-15px, 10px); }
          }
          @keyframes abPulse {
            0%,100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          @keyframes abShimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
        `}</style>

        <div className="ab-inner">
          <div className="ab-label" style={fadeUp(0.1)}>
            <span className="ab-label-line" />
            About Me
          </div>
          <h2 className="ab-title" style={fadeUp(0.2)}>
            Who Am I
          </h2>
          <div className="ab-divider" style={fadeUp(0.3)} />

          <div className="ab-grid" style={fadeUp(0.4)}>
            {/* ── LEFT COLUMN ── */}
            <div>
              <TerminalTyper started={statsStarted} />

              <p className="ab-bio">
                I am a passionate{" "}
                <span className="ab-highlight">MERN Stack Developer</span>{" "}
                dedicated to building high-performance web applications from
                scratch. With a strong command over{" "}
                <span className="ab-highlight">JavaScript (ES6+)</span>, I
                specialize in sculpting dynamic frontends with{" "}
                <span className="ab-highlight">React</span> and wiring them to
                robust, secure backends using{" "}
                <span className="ab-highlight">Node.js & Express</span>.
              </p>

              <p className="ab-bio">
                I love solving complex data challenges in{" "}
                <span className="ab-highlight">MongoDB</span> and always look
                for ways to optimize speed and UX. Ready to bring my dedication,
                clean coding habits, and fast-learning mindset to a{" "}
                <span className="ab-highlight">
                  collaborative development team
                </span>
                .
              </p>

              <div className="ab-section-divider" />

              {/* Skill bars */}
              {[
                { label: "React / Frontend", pct: 85 },
                { label: "Node.js / Express", pct: 78 },
                { label: "MongoDB / Databases", pct: 72 },
                { label: "REST APIs / Integration", pct: 80 },
              ].map((skill) => (
                <div key={skill.label} className="ab-skill-row">
                  <div className="ab-skill-header">
                    <span className="ab-skill-name">{skill.label}</span>
                    <span className="ab-skill-pct">
                      {statsStarted ? skill.pct : 0}%
                    </span>
                  </div>
                  <div className="ab-progress-bar">
                    <div
                      className="ab-progress-fill"
                      style={{ width: statsStarted ? `${skill.pct}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div>
              <div className="ab-stats">
                {stats.map((s, i) => (
                  <StatCard
                    key={s.label}
                    stat={s}
                    started={statsStarted}
                    delay={i * 0.1}
                  />
                ))}
              </div>

              <div className="ab-tags-box">
                <div className="ab-tags-title">{"// tech_stack"}</div>
                <div className="ab-tags">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`ab-tag ${hoveredTag === i ? "hovered" : ""}`}
                      onMouseEnter={() => setHoveredTag(i)}
                      onMouseLeave={() => setHoveredTag(null)}
                      style={{
                        transitionDelay: statsStarted ? `${i * 0.06}s` : "0s",
                        opacity: statsStarted ? 1 : 0,
                        transform: statsStarted
                          ? hoveredTag === i
                            ? "translateY(-4px) scale(1.08)"
                            : "translateY(0) scale(1)"
                          : "translateY(10px)",
                        transition: `opacity 0.5s ease ${i * 0.06}s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 18px",
                  background: "rgba(34,197,94,0.07)",
                  border: "1px solid rgba(34,197,94,0.22)",
                  borderRadius: 10,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 0 0 rgba(34,197,94,0.4)",
                    animation: "abPulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 300,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(34,197,94,0.8)",
                  }}
                >
                  Open to new opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
