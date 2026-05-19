import { useEffect, useRef, useState } from "react";

const SKILLS = [
  {
    name: "HTML",
    icon: "🌐",
    level: 95,
    category: "Frontend",
    color: "#e34c26",
    glow: "rgba(227,76,38,0.25)",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    desc: "Semantic markup & structure",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    level: 88,
    category: "Frontend",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.25)",
    url: "https://tailwindcss.com/",
    desc: "Utility-first CSS framework",
  },
  {
    name: "JavaScript",
    icon: "⚡",
    level: 85,
    category: "Frontend",
    color: "#f7df1e",
    glow: "rgba(247,223,30,0.2)",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    desc: "ES6+ modern scripting",
  },
  {
    name: "React.js",
    icon: "⚛",
    level: 82,
    category: "Frontend",
    color: "#61dafb",
    glow: "rgba(97,218,251,0.25)",
    url: "https://react.dev/",
    desc: "Component-based UI library",
  },
  {
    name: "Framer Motion",
    icon: "🎭",
    level: 70,
    category: "Frontend",
    color: "#bb4be4",
    glow: "rgba(187,75,228,0.25)",
    url: "https://www.framer.com/motion/",
    desc: "Production-ready animations",
  },
  {
    name: "Node.js",
    icon: "🟢",
    level: 78,
    category: "Backend",
    color: "#8cc84b",
    glow: "rgba(140,200,75,0.25)",
    url: "https://nodejs.org/",
    desc: "Server-side JavaScript runtime",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    level: 72,
    category: "Backend",
    color: "#4db33d",
    glow: "rgba(77,179,61,0.25)",
    url: "https://www.mongodb.com/",
    desc: "NoSQL document database",
  },
  {
    name: "SQL",
    icon: "🗄",
    level: 65,
    category: "Backend",
    color: "#f29111",
    glow: "rgba(242,145,17,0.25)",
    url: "https://www.w3schools.com/sql/",
    desc: "Relational database queries",
  },
  {
    name: "Git & GitHub",
    icon: "🔀",
    level: 88,
    category: "Tools",
    color: "#f05032",
    glow: "rgba(240,80,50,0.25)",
    url: "https://github.com/",
    desc: "Version control & collaboration",
  },
  {
    name: "Vercel",
    icon: "▲",
    level: 80,
    category: "Tools",
    color: "#ffffff",
    glow: "rgba(255,255,255,0.15)",
    url: "https://vercel.com/",
    desc: "Frontend cloud deployment",
  },
  {
    name: "Render",
    icon: "☁",
    level: 75,
    category: "Tools",
    color: "#46e3b7",
    glow: "rgba(70,227,183,0.25)",
    url: "https://render.com/",
    desc: "Cloud hosting platform",
  },
  {
    name: "Prompt Engineering",
    icon: "🤖",
    level: 82,
    category: "Tools",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.25)",
    url: "https://www.promptingguide.ai/",
    desc: "AI prompt design & optimization",
  },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Tools"];

function SkillCard({ skill, index, started }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
    window.open(skill.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? `rgba(11,12,16,0.95)`
          : "rgba(11,12,16,0.7)",
        border: `1px solid ${hovered ? skill.color + "55" : "rgba(139,92,246,0.15)"}`,
        borderRadius: 16,
        padding: "22px 20px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        transform: clicked
          ? "scale(0.96)"
          : hovered
          ? "translateY(-8px) scale(1.02)"
          : "translateY(0) scale(1)",
        boxShadow: hovered ? `0 20px 40px ${skill.glow}` : "none",
        opacity: started ? 1 : 0,
        animation: started
          ? `skillFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.07}s both`
          : "none",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Glow bg */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: 16,
        background: hovered
          ? `radial-gradient(circle at 30% 30%, ${skill.glow}, transparent 65%)`
          : "transparent",
        transition: "all 0.4s ease",
        pointerEvents: "none",
      }}/>

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14, position: "relative" }}>
        <div style={{
          fontSize: 26,
          filter: hovered ? "drop-shadow(0 0 8px " + skill.color + "88)" : "none",
          transition: "filter 0.3s, transform 0.3s",
          transform: hovered ? "scale(1.15) rotate(-5deg)" : "scale(1)",
          display: "inline-block",
        }}>
          {skill.icon}
        </div>

        {/* External link indicator */}
        <div style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translate(0,0)" : "translate(4px,-4px)",
          transition: "all 0.3s ease",
          color: skill.color,
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          display: "flex", alignItems: "center", gap: 4,
        }}>
          <span>VISIT</span>
          <span style={{ fontSize: 10 }}>↗</span>
        </div>
      </div>

      {/* Name */}
      <div style={{
        fontSize: "0.88rem", fontWeight: 400, letterSpacing: "0.05em",
        color: hovered ? "#fff" : "rgba(255,255,255,0.75)",
        marginBottom: 4, transition: "color 0.3s", position: "relative",
      }}>
        {skill.name}
      </div>

      {/* Desc */}
      <div style={{
        fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.08em",
        marginBottom: 16,
        transition: "color 0.3s",
        color: hovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.28)",
      }}>
        {skill.desc}
      </div>

      {/* Progress bar */}
      <div style={{
        height: 3, borderRadius: 9999,
        background: "rgba(255,255,255,0.07)",
        overflow: "hidden", position: "relative",
      }}>
        <div style={{
          height: "100%", borderRadius: 9999,
          background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
          width: started ? `${skill.level}%` : "0%",
          transition: `width 1.2s cubic-bezier(0.22,1,0.36,1) ${index * 0.07 + 0.3}s`,
          position: "relative",
        }}>
          {/* Shimmer */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: started ? "shimmer 2s ease-in-out infinite" : "none",
            animationDelay: `${index * 0.07 + 1}s`,
          }}/>
        </div>
      </div>

      {/* Level */}
      <div style={{
        display: "flex", justifyContent: "flex-end", marginTop: 6,
        fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.12em",
        color: hovered ? skill.color : "rgba(255,255,255,0.25)",
        transition: "color 0.3s",
      }}>
        {skill.level}%
      </div>

      {/* Bottom border glow on hover */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: 2,
        background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s ease",
        borderRadius: "0 0 16px 16px",
      }}/>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setStarted(true), 300);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === "All"
    ? SKILLS
    : SKILLS.filter(s => s.category === activeFilter);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <>
      <style>{`
        .skills-section {
          min-height: 100vh;
          margin-left: 230px;
          padding: 7rem 5vw 6rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          background:
            linear-gradient(rgba(11,12,16,0.80), rgba(11,12,16,0.90)),
            url('/src/assets/bg1.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: #e2e2e2;
          position: relative;
          overflow: hidden;
        }
        .skills-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            -55deg, transparent, transparent 60px,
            rgba(255,255,255,0.01) 60px, rgba(255,255,255,0.01) 61px
          );
          pointer-events: none;
        }
        .sk-mouse-glow {
          position: absolute; width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139,92,246,0.06), transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: left 0.15s ease, top 0.15s ease;
          z-index: 0;
        }
        .sk-orb {
          position: absolute; border-radius: 50%;
          filter: blur(80px); opacity: 0.1; pointer-events: none;
        }
        .sk-inner { position: relative; z-index: 1; max-width: 1100px; }
        .sk-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 300; letter-spacing: 0.3em;
          text-transform: uppercase; color: #8b5cf6; margin-bottom: 1.2rem;
        }
        .sk-label-line { width: 28px; height: 1px; background: #8b5cf6; }
        .sk-title {
          font-family: 'poppins, sans-serif', cursive;
          font-size: clamp(3rem, 5.5vw, 5.5rem);
          color: #f0ecff; line-height: 1.05; margin-bottom: 0.5rem;
        }
        .sk-divider {
          width: 60px; height: 2px;
          background: linear-gradient(90deg, #8b5cf6, transparent);
          border-radius: 2px; margin-bottom: 1rem;
        }
        .sk-subtitle {
          font-size: 0.82rem; font-weight: 300; letter-spacing: 0.08em;
          color: rgba(255,255,255,0.35); margin-bottom: 3rem;
          border-left: 2px solid rgba(139,92,246,0.3);
          padding-left: 1rem;
        }
        .sk-filters {
          display: flex; gap: 10px; flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .sk-filter-btn {
          padding: 7px 20px; border-radius: 9999px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.68rem; font-weight: 300; letter-spacing: 0.16em;
          text-transform: uppercase; cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          border: 1px solid rgba(139,92,246,0.25);
          background: transparent; color: rgba(255,255,255,0.4);
        }
        .sk-filter-btn.active {
          background: rgba(139,92,246,0.15);
          border-color: rgba(139,92,246,0.6);
          color: #c8b8ff;
          transform: scale(1.05);
        }
        .sk-filter-btn:hover:not(.active) {
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.7);
          transform: scale(1.03);
        }
        .sk-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
        }
        .sk-hint {
          margin-top: 2.5rem;
          display: flex; align-items: center; gap: 10px;
          font-size: 0.65rem; font-weight: 300; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(255,255,255,0.2);
        }
        .sk-hint-dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(139,92,246,0.5); }
        @keyframes skillFadeUp {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @media(max-width:900px){
          .skills-section { margin-left: 64px; padding: 4rem 2rem; }
          .sk-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 12px; }
        }
      `}</style>

      <section
        id="skills"
        className="skills-section"
        ref={sectionRef}
        onMouseMove={(e) => {
          const rect = sectionRef.current?.getBoundingClientRect();
          if (rect) setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
      >
        <div className="sk-mouse-glow" style={{ left: mousePos.x, top: mousePos.y }}/>

        <div className="sk-orb" style={{
          width: 350, height: 350, background: "#5b4fcf",
          top: -100, right: -80,
          animation: "abOrb 14s ease-in-out infinite",
        }}/>
        <div className="sk-orb" style={{
          width: 200, height: 200, background: "#2d9cdb",
          bottom: 50, left: "10%",
          animation: "abOrb 18s ease-in-out infinite reverse",
        }}/>
        <style>{`@keyframes abOrb{0%,100%{transform:translate(0,0);}33%{transform:translate(18px,26px);}66%{transform:translate(-12px,8px);}}`}</style>

        <div className="sk-inner">
          <div className="sk-label" style={fadeUp(0.1)}>
            <span className="sk-label-line"/>Skills
          </div>
          <h2 className="sk-title" style={fadeUp(0.2)}>What I Know</h2>
          <div className="sk-divider" style={fadeUp(0.25)}/>
          <p className="sk-subtitle" style={fadeUp(0.3)}>
            Click any skill to explore its official documentation
          </p>

          {/* Filter tabs */}
          <div className="sk-filters" style={fadeUp(0.35)}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`sk-filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="sk-grid">
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} started={started} />
            ))}
          </div>

          {/* Hint */}
          <div className="sk-hint" style={fadeUp(0.6)}>
            <div className="sk-hint-dot"/>
            <span>Click any card to visit official docs</span>
            <div className="sk-hint-dot"/>
          </div>
        </div>
      </section>
    </>
  );
}