import { useEffect, useRef, useState } from "react";

const MAIN_PROJECTS = [
  {
    id: 1,
    title: "Movie Review",
    desc: "A full-stack movie review platform where users can browse films, write reviews, and rate movies. Features search, filtering by genre, and user authentication.",
    tags: ["React.js", "Node.js", "MongoDB", "Express", "REST API"],
    category: "Full Stack",
    links: [
      { label: "Live", url: "https://cute-horse-43fe0e.netlify.app/", icon: "↗" },
      { label: "GitHub", url: "https://github.com/revathiganeshinfo-cpu/Project-1.git", icon: "⌥" },
    ],
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.2)",
    preview: "movie",
  },
  {
    id: 2,
    title: "Invoice Builder",
    desc: "A professional invoice generation tool that lets users create, customize, and export invoices as PDF. Includes client management and itemized billing.",
    tags: ["React.js", "Node.js", "MongoDB", "PDF Export"],
    category: "Full Stack",
    links: [
      { label: "Live", url: "https://invoiceappbuild.netlify.app/", icon: "↗" },
      { label: "GitHub", url: "https://github.com/revathiganeshinfo-cpu/Project_2.git", icon: "⌥" },
    ],
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.2)",
    preview: "invoice",
  },
  {
    id: 3,
    title: "Restaurant Platform",
    desc: "A complete restaurant reservation and review platform. Users can book tables, browse menus, leave reviews and ratings. Full MERN stack with live deployment.",
    tags: ["React.js", "Node.js", "MongoDB", "Vercel", "Render"],
    category: "Full Stack",
    links: [
      { label: "Live", url: "https://fsd-project-frontend.vercel.app/", icon: "↗" },
      { label: "API", url: "https://fsd-project-backend-n2dp.onrender.com/", icon: "⚙" },
    ],
    accent: "#22d3ee",
    glow: "rgba(34,211,238,0.2)",
    preview: "restaurant",
  },
];

const MINI_PROJECTS = [
  {
    title: "Recipe App",
    desc: "A culinary guide to search, filter, and discover diverse recipes with step-by-step cooking instructions.",
    tags: ["React", "Tailwind"],
    accent: "#f87171",
    icon: "🍳",
    live: "https://recipes-app-3w4z.onrender.com/",
    github: "https://github.com/revathiganeshinfo-cpu/Recipes-App.git",
  },
  {
    title: "Router Task",
    desc: "A multi-page React application demonstrating smooth client-side routing, nested routes, and dynamic navigation.",
    tags: ["React"],
    accent: "#38bdf8",
    icon: "🚦",
    live: "https://aesthetic-dolphin-130b52.netlify.app/",
    github: "https://github.com/revathiganeshinfo-cpu/Task_8.git",
  },
  {
    title: "Authentication & Authorization",
    desc: "Secure user login and registration system featuring JWT authentication, password hashing, and protected API routes.",
    tags: ["MongoDB", "Node.js", "Express"],
    accent: "#10b981",
    icon: "🔐",
    live: "https://authentication-and-authorization-with-ith1.onrender.com/",
    github: "https://github.com/revathiganeshinfo-cpu/Authentication-and-Authorization-with-Bearer-Token.git",
  },
  {
    title: "Movie Searching App",
    desc: "Real-time movie discovery platform powered by an external API with instant search, ratings, and genre filtering.",
    tags: ["React", "Tailwind"],
    accent: "#f59e0b",
    icon: "🎬",
    live: "https://elaborate-basbousa-02f89c.netlify.app/",
    github: "https://github.com/revathiganeshinfo-cpu/Movie-Searching-App.git",
  },
  {
    title: "E-Commerce Cart System",
    desc: "A dynamic shopping cart experience featuring product listings, quantity adjustments, and real-time price calculations.",
    tags: ["React", "Context API"],
    accent: "#ec4899",
    icon: "🛒",
    live: "https://aesthetic-dolphin-130b52.netlify.app/",
    github: "https://github.com/revathiganeshinfo-cpu/Task_8.git",
  },
  {
    title: "Todo App",
    desc: "A clean and minimal task manager with income & expense calculator. Add, complete, and delete todos with real-time balance tracking.",
    tags: ["React", "JavaScript"],
    accent: "#a78bfa",
    icon: "✅",
    live: "https://polite-sherbet-be61e7.netlify.app/",
    github: "https://github.com/revathiganeshinfo-cpu/Task-4-Todo-App--Income-Expense-Calculator.git",
  },
  {
    title: "HTML/CSS Landing Page Task",
    desc: "A fully responsive, pixel-perfect modern landing page crafted with clean semantic structure and beautiful layouts.",
    tags: ["HTML", "CSS"],
    accent: "#8b5cf6",
    icon: "🌐",
    live: "https://frolicking-conkies-788457.netlify.app/",
    github: "https://github.com/revathiganeshinfo-cpu/Task-1-HTML-CSS.git",
  },
];

/* ── SVG Previews ── */
function MoviePreview() {
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect width="320" height="180" fill="#0d0d1a"/>
      <rect x="0" y="0" width="320" height="180" fill="url(#movieBg)"/>
      <defs>
        <linearGradient id="movieBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a0a2e"/>
          <stop offset="100%" stopColor="#0d1117"/>
        </linearGradient>
      </defs>
      {[0,1,2,3,4,5,6,7].map(i => (
        <g key={i}>
          <rect x={i*40} y="0" width="36" height="10" rx="1" fill="#1a1a2e" stroke="#333" strokeWidth="0.5"/>
          <rect x={i*40+4} y="2" width="8" height="6" rx="1" fill="#0a0a15"/>
          <rect x={i*40+16} y="2" width="8" height="6" rx="1" fill="#0a0a15"/>
          <rect x={i*40+28} y="2" width="8" height="6" rx="1" fill="#0a0a15"/>
        </g>
      ))}
      {[0,1,2,3,4,5,6,7].map(i => (
        <g key={i}>
          <rect x={i*40} y="170" width="36" height="10" rx="1" fill="#1a1a2e" stroke="#333" strokeWidth="0.5"/>
          <rect x={i*40+4} y="172" width="8" height="6" rx="1" fill="#0a0a15"/>
          <rect x={i*40+16} y="172" width="8" height="6" rx="1" fill="#0a0a15"/>
          <rect x={i*40+28} y="172" width="8" height="6" rx="1" fill="#0a0a15"/>
        </g>
      ))}
      <rect x="20" y="22" width="55" height="78" rx="4" fill="#1e1b4b"/>
      <rect x="22" y="24" width="51" height="52" rx="3" fill="#312e81"/>
      <rect x="25" y="28" width="45" height="44" rx="2" fill="#4c1d95"/>
      <circle cx="47" cy="50" r="12" fill="#7c3aed" opacity="0.9"/>
      <polygon points="44,45 44,55 54,50" fill="#f0ecff"/>
      <rect x="22" y="80" width="30" height="3" rx="1" fill="#a78bfa"/>
      <rect x="22" y="86" width="20" height="2" rx="1" fill="#6b7280"/>
      {[0,1,2,3,4].map(i=>(
        <polygon key={i} points={`${22+i*9},94 ${23.5+i*9},90 ${25+i*9},94`} fill={i<4?"#f59e0b":"#374151"}/>
      ))}
      <rect x="90" y="22" width="55" height="78" rx="4" fill="#1a1a2e"/>
      <rect x="92" y="24" width="51" height="52" rx="3" fill="#1f2937"/>
      <rect x="95" y="28" width="45" height="44" rx="2" fill="#111827"/>
      <circle cx="117" cy="50" r="14" fill="#dc2626" opacity="0.8"/>
      <rect x="111" y="47" width="12" height="6" rx="1" fill="#fff"/>
      <rect x="92" y="80" width="30" height="3" rx="1" fill="#f87171"/>
      <rect x="92" y="86" width="22" height="2" rx="1" fill="#6b7280"/>
      {[0,1,2,3,4].map(i=>(
        <polygon key={i} points={`${92+i*9},94 ${93.5+i*9},90 ${95+i*9},94`} fill={i<3?"#f59e0b":"#374151"}/>
      ))}
      <rect x="160" y="22" width="55" height="78" rx="4" fill="#1a2e1a"/>
      <rect x="162" y="24" width="51" height="52" rx="3" fill="#14532d"/>
      <rect x="165" y="28" width="45" height="44" rx="2" fill="#052e16"/>
      <circle cx="187" cy="50" r="14" fill="#16a34a" opacity="0.8"/>
      <text x="182" y="55" fontSize="14" fill="#fff" fontWeight="bold">★</text>
      <rect x="162" y="80" width="28" height="3" rx="1" fill="#4ade80"/>
      <rect x="162" y="86" width="18" height="2" rx="1" fill="#6b7280"/>
      {[0,1,2,3,4].map(i=>(
        <polygon key={i} points={`${162+i*9},94 ${163.5+i*9},90 ${165+i*9},94`} fill={i<5?"#f59e0b":"#374151"}/>
      ))}
      <rect x="16" y="112" width="200" height="24" rx="12" fill="#1f2937" stroke="#374151" strokeWidth="0.5"/>
      <circle cx="30" cy="124" r="5" fill="none" stroke="#6b7280" strokeWidth="1.5"/>
      <line x1="34" y1="128" x2="37" y2="131" stroke="#6b7280" strokeWidth="1.5"/>
      <rect x="42" y="121" width="60" height="3" rx="1" fill="#374151"/>
      <rect x="230" y="20" width="70" height="140" rx="8" fill="#0f0f1a" stroke="#1f2937" strokeWidth="0.5"/>
      <rect x="238" y="30" width="54" height="3" rx="1" fill="#7c3aed"/>
      {[["All",30],["Action",48],["Drama",44],["Sci-Fi",42],["Horror",50],["Comedy",46],["Romance",54]].map(([g,w],i)=>(
        <rect key={g} x="238" y={42+i*16} width={w} height="2.5" rx="1" fill={i===0?"#a78bfa":"#2d3748"}/>
      ))}
    </svg>
  );
}

function InvoicePreview() {
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect width="320" height="180" fill="#0b0c10"/>
      <defs>
        <linearGradient id="invBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a0a2e"/>
          <stop offset="100%" stopColor="#0d0d1a"/>
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#invBg)"/>
      <rect x="20" y="14" width="200" height="155" rx="8" fill="#111827" stroke="#1f2937" strokeWidth="0.5"/>
      <rect x="20" y="14" width="200" height="36" rx="8" fill="#1e1b4b"/>
      <rect x="20" y="36" width="200" height="14" fill="#1e1b4b"/>
      <rect x="30" y="22" width="50" height="4" rx="2" fill="#a78bfa"/>
      <rect x="30" y="30" width="35" height="2.5" rx="1" fill="#6d28d9" opacity="0.7"/>
      <rect x="170" y="20" width="40" height="22" rx="4" fill="#7c3aed" opacity="0.3"/>
      <rect x="175" y="25" width="30" height="3" rx="1" fill="#c4b5fd"/>
      <rect x="178" y="31" width="24" height="2.5" rx="1" fill="#a78bfa" opacity="0.6"/>
      <rect x="30" y="58" width="25" height="2" rx="1" fill="#6b7280"/>
      <rect x="30" y="64" width="55" height="3" rx="1" fill="#e5e7eb"/>
      <rect x="30" y="70" width="45" height="2" rx="1" fill="#4b5563"/>
      <rect x="30" y="75" width="38" height="2" rx="1" fill="#4b5563"/>
      <rect x="28" y="88" width="184" height="14" rx="3" fill="#1f2937"/>
      <rect x="32" y="93" width="40" height="2" rx="1" fill="#6b7280"/>
      <rect x="120" y="93" width="25" height="2" rx="1" fill="#6b7280"/>
      <rect x="160" y="93" width="20" height="2" rx="1" fill="#6b7280"/>
      <rect x="192" y="93" width="15" height="2" rx="1" fill="#6b7280"/>
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="28" y={108+i*14} width="184" height="12" rx="2" fill={i%2===0?"#111827":"#0f172a"}/>
          <rect x="32" y={112+i*14} width={35+i*8} height="2" rx="1" fill="#d1d5db"/>
          <rect x="122" y={112+i*14} width="18" height="2" rx="1" fill="#9ca3af"/>
          <rect x="163" y={112+i*14} width="14" height="2" rx="1" fill="#9ca3af"/>
          <rect x="194" y={112+i*14} width="14" height="2" rx="1" fill="#a78bfa"/>
        </g>
      ))}
      <line x1="28" y1="150" x2="212" y2="150" stroke="#374151" strokeWidth="0.5"/>
      <rect x="155" y="154" width="25" height="2.5" rx="1" fill="#6b7280"/>
      <rect x="185" y="154" width="20" height="2.5" rx="1" fill="#8b5cf6"/>
      <rect x="234" y="14" width="72" height="155" rx="8" fill="#0f172a" stroke="#1f2937" strokeWidth="0.5"/>
      <rect x="242" y="24" width="56" height="3" rx="1" fill="#7c3aed"/>
      {["Client","Date","Due","Status"].map((l,i)=>(
        <g key={l}>
          <rect x="242" y={36+i*22} width="22" height="2" rx="1" fill="#4b5563"/>
          <rect x="242" y={41+i*22} width={l==="Status"?28:32} height="3" rx="1" fill={l==="Status"?"#a78bfa":"#9ca3af"}/>
        </g>
      ))}
      <rect x="242" y="128" width="56" height="18" rx="9" fill="#7c3aed"/>
      <rect x="252" y="134" width="28" height="2.5" rx="1" fill="#fff"/>
      <rect x="258" y="138" width="16" height="1.5" rx="1" fill="#c4b5fd"/>
    </svg>
  );
}

function RestaurantPreview() {
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="restBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d1f1a"/>
          <stop offset="100%" stopColor="#0b0c10"/>
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#restBg)"/>
      <rect x="0" y="0" width="320" height="28" fill="#0a1a14" opacity="0.9"/>
      <rect x="14" y="10" width="30" height="3" rx="1" fill="#22d3ee"/>
      <rect x="14" y="16" width="20" height="2" rx="1" fill="#0e9f6e" opacity="0.6"/>
      {["Menu","Reserve","Reviews"].map((n,i)=>(
        <rect key={n} x={180+i*40} y="12" width="28" height="2.5" rx="1" fill={i===1?"#22d3ee":"#374151"}/>
      ))}
      <rect x="0" y="28" width="320" height="60" fill="#052e16" opacity="0.4"/>
      <rect x="0" y="28" width="320" height="60" fill="url(#restHero)"/>
      <defs>
        <linearGradient id="restHero" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#064e3b" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#0b0c10" stopOpacity="0.9"/>
        </linearGradient>
      </defs>
      <circle cx="280" cy="50" r="35" fill="#22d3ee" opacity="0.05"/>
      <circle cx="40" cy="35" r="20" fill="#16a34a" opacity="0.08"/>
      <rect x="30" y="36" width="120" height="5" rx="2" fill="#f0fdf4" opacity="0.9"/>
      <rect x="30" y="46" width="80" height="3" rx="1" fill="#6ee7b7" opacity="0.7"/>
      <rect x="30" y="60" width="55" height="14" rx="7" fill="#22d3ee"/>
      <rect x="36" y="65" width="43" height="2.5" rx="1" fill="#fff"/>
      <rect x="96" y="60" width="55" height="14" rx="7" fill="none" stroke="#22d3ee" strokeWidth="1"/>
      <rect x="102" y="65" width="43" height="2.5" rx="1" fill="#22d3ee"/>
      <rect x="14" y="100" width="68" height="72" rx="6" fill="#111827" stroke="#1f2937" strokeWidth="0.5"/>
      <rect x="14" y="100" width="68" height="35" rx="6" fill="#065f46"/>
      <rect x="14" y="118" width="68" height="17" fill="#065f46"/>
      <circle cx="48" cy="117" r="10" fill="#10b981" opacity="0.6"/>
      <text x="44" y="121" fontSize="10" fill="#fff">🍜</text>
      <rect x="20" y="141" width="40" height="3" rx="1" fill="#d1fae5"/>
      <rect x="20" y="148" width="28" height="2" rx="1" fill="#6b7280"/>
      <rect x="20" y="154" width="20" height="2" rx="1" fill="#22d3ee"/>
      <rect x="46" y="153" width="28" height="8" rx="4" fill="#22d3ee"/>
      <rect x="50" y="156" width="20" height="2" rx="1" fill="#fff"/>
      <rect x="90" y="100" width="68" height="72" rx="6" fill="#111827" stroke="#1f2937" strokeWidth="0.5"/>
      <rect x="90" y="100" width="68" height="35" rx="6" fill="#7c2d12"/>
      <rect x="90" y="118" width="68" height="17" fill="#7c2d12"/>
      <circle cx="124" cy="117" r="10" fill="#ef4444" opacity="0.6"/>
      <text x="120" y="121" fontSize="10" fill="#fff">🍕</text>
      <rect x="96" y="141" width="40" height="3" rx="1" fill="#fecdd3"/>
      <rect x="96" y="148" width="28" height="2" rx="1" fill="#6b7280"/>
      <rect x="96" y="154" width="22" height="2" rx="1" fill="#f87171"/>
      <rect x="122" y="153" width="28" height="8" rx="4" fill="#dc2626"/>
      <rect x="126" y="156" width="20" height="2" rx="1" fill="#fff"/>
      <rect x="172" y="95" width="132" height="78" rx="8" fill="#0f2a20" stroke="#14532d" strokeWidth="0.5"/>
      <rect x="180" y="103" width="60" height="3" rx="1" fill="#22d3ee"/>
      <rect x="180" y="111" width="116" height="14" rx="4" fill="#1f2937"/>
      <rect x="185" y="116" width="50" height="2.5" rx="1" fill="#4b5563"/>
      <rect x="180" y="129" width="52" height="14" rx="4" fill="#1f2937"/>
      <rect x="185" y="134" width="35" height="2.5" rx="1" fill="#4b5563"/>
      <rect x="236" y="129" width="52" height="14" rx="4" fill="#1f2937"/>
      <rect x="241" y="134" width="35" height="2.5" rx="1" fill="#4b5563"/>
      <rect x="180" y="148" width="108" height="18" rx="9" fill="#0e9f6e"/>
      <rect x="208" y="155" width="52" height="3" rx="1" fill="#fff"/>
    </svg>
  );
}

const PREVIEWS = { movie: MoviePreview, invoice: InvoicePreview, restaurant: RestaurantPreview };

function MainCard({ project, index, started }) {
  const [hovered, setHovered] = useState(false);
  const Preview = PREVIEWS[project.preview];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(11,12,16,0.8)",
        border: `1px solid ${hovered ? project.accent + "55" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 18,
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: hovered ? `0 30px 60px ${project.glow}` : "none",
        opacity: started ? 1 : 0,
        animation: started ? `projFade 0.7s ease ${index * 0.15}s both` : "none",
        backdropFilter: "blur(12px)",
      }}
    >
      <div style={{ height: 180, overflow: "hidden", position: "relative", background: "#0b0c10" }}>
        <Preview />
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to top, rgba(11,12,16,0.95) 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0.6,
          transition: "opacity 0.4s",
        }}/>
        <div style={{
          position: "absolute", top: 12, right: 12,
          padding: "4px 12px", borderRadius: 9999,
          background: "rgba(11,12,16,0.8)",
          border: `1px solid ${project.accent}44`,
          fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.14em",
          textTransform: "uppercase", color: project.accent,
          backdropFilter: "blur(8px)",
        }}>
          {project.category}
        </div>
      </div>

      <div style={{ padding: "22px 24px" }}>
        <h3 style={{
          fontSize: "1.05rem", fontWeight: 500, letterSpacing: "0.04em",
          color: hovered ? "#fff" : "#e2e2e2",
          marginBottom: 10, transition: "color 0.3s",
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: "0.78rem", fontWeight: 300, lineHeight: 1.7,
          color: "rgba(255,255,255,0.4)", marginBottom: 18,
        }}>
          {project.desc}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              padding: "3px 10px", borderRadius: 9999,
              fontSize: "0.62rem", fontWeight: 300, letterSpacing: "0.1em",
              background: `${project.accent}11`,
              border: `1px solid ${project.accent}33`,
              color: project.accent,
            }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          {project.links.map(link => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "8px 18px", borderRadius: 9999,
                fontSize: "0.7rem", fontWeight: 300, letterSpacing: "0.14em",
                textDecoration: "none", textTransform: "uppercase",
                background: link.label === "Live"
                  ? `linear-gradient(135deg, ${project.accent}cc, ${project.accent}88)`
                  : `${project.accent}11`,
                border: `1px solid ${project.accent}44`,
                color: link.label === "Live" ? "#000" : project.accent,
                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow = `0 4px 16px ${project.glow}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div style={{
        height: 2,
        background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s",
      }}/>
    </div>
  );
}

/* ── GitHub SVG Icon ── */
function GithubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

function MiniCard({ project, index, started }) {
  const [hovered, setHovered] = useState(false);
  const hasLinks = project.live || project.github;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(11,12,16,0.75)",
        border: `1px solid ${hovered ? project.accent + "44" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 14,
        padding: "22px 20px",
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: hovered ? `0 16px 32px ${project.accent}22` : "none",
        opacity: started ? 1 : 0,
        animation: started ? `projFade 0.6s ease ${0.4 + index * 0.08}s both` : "none",
        backdropFilter: "blur(10px)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Radial glow bg */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: 14,
        background: hovered
          ? `radial-gradient(circle at 30% 30%, ${project.accent}12, transparent 65%)`
          : "transparent",
        transition: "all 0.4s",
        pointerEvents: "none",
      }}/>

      {/* Icon */}
      <div style={{
        fontSize: 22, marginBottom: 14,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 44, height: 44, borderRadius: 10,
        background: `${project.accent}14`,
        border: `1px solid ${project.accent}33`,
        transition: "transform 0.3s, box-shadow 0.3s",
        transform: hovered ? "rotate(-5deg) scale(1.1)" : "none",
        boxShadow: hovered ? `0 4px 16px ${project.accent}33` : "none",
        position: "relative",
      }}>
        {project.icon}
      </div>

      {/* Title */}
      <div style={{
        fontSize: "0.88rem", fontWeight: 400,
        color: hovered ? "#fff" : "#e2e2e2",
        marginBottom: 8, transition: "color 0.3s",
        position: "relative",
      }}>
        {project.title}
      </div>

      {/* Desc */}
      <p style={{
        fontSize: "0.72rem", fontWeight: 300, lineHeight: 1.65,
        color: "rgba(255,255,255,0.35)", marginBottom: 14,
        position: "relative", flexGrow: 1,
      }}>
        {project.desc}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", position: "relative", marginBottom: hasLinks ? 14 : 0 }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            padding: "3px 9px", borderRadius: 9999,
            fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.1em",
            background: `${project.accent}0f`,
            border: `1px solid ${project.accent}2a`,
            color: project.accent,
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* ── Live + GitHub Buttons ── */}
      {hasLinks && (
        <div style={{
          display: "flex", gap: 8, position: "relative",
          borderTop: `1px solid rgba(255,255,255,0.05)`,
          paddingTop: 12, marginTop: 2,
        }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", flex: 1 }}
            >
              <button
                style={{
                  width: "100%",
                  padding: "7px 0",
                  borderRadius: 8,
                  background: `linear-gradient(135deg, ${project.accent}33, ${project.accent}18)`,
                  border: `1px solid ${project.accent}55`,
                  color: project.accent,
                  fontSize: "0.65rem",
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                  transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${project.accent}55, ${project.accent}33)`;
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 6px 20px ${project.accent}33`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${project.accent}33, ${project.accent}18)`;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live
              </button>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", flex: 1 }}
            >
              <button
                style={{
                  width: "100%",
                  padding: "7px 0",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.65rem",
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                  transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,255,255,0.08)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <GithubIcon />
                Code
              </button>
            </a>
          )}

          {/* If only one button, show disabled placeholder for the other */}
          {project.live && !project.github && (
            <button
              disabled
              style={{
                flex: 1, padding: "7px 0", borderRadius: 8,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.18)",
                fontSize: "0.65rem",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "not-allowed",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
              }}
            >
              <GithubIcon />
              Soon
            </button>
          )}

          {project.github && !project.live && (
            <button
              disabled
              style={{
                flex: 1, padding: "7px 0", borderRadius: 8,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.18)",
                fontSize: "0.65rem",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "not-allowed",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Soon
            </button>
          )}
        </div>
      )}

      {/* Bottom glow line */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.3s",
        borderRadius: "0 0 14px 14px",
      }}/>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setStarted(true), 200);
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <>
      <style>{`
        .projects-section {
          min-height: 100vh;
          margin-left: 230px;
          padding: 7rem 5vw 6rem;
          font-family: 'Poppins', sans-serif;
          background:
            linear-gradient(rgba(11,12,16,0.82), rgba(11,12,16,0.92)),
            url('/src/assets/bg1.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: #e2e2e2;
          position: relative;
          overflow: hidden;
        }
        .projects-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            -55deg, transparent, transparent 60px,
            rgba(255,255,255,0.01) 60px, rgba(255,255,255,0.01) 61px
          );
          pointer-events: none;
        }
        .pr-mouse-glow {
          position: absolute; width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139,92,246,0.05), transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: left 0.15s ease, top 0.15s ease;
          z-index: 0;
        }
        .pr-orb {
          position: absolute; border-radius: 50%;
          filter: blur(80px); opacity: 0.09; pointer-events: none;
        }
        .pr-inner { position: relative; z-index: 1; max-width: 1100px; }
        .pr-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 300; letter-spacing: 0.3em;
          text-transform: uppercase; color: #8b5cf6; margin-bottom: 1.2rem;
        }
        .pr-label-line { width: 28px; height: 1px; background: #8b5cf6; }
        .pr-title {
          font-size: clamp(3rem, 5.5vw, 5.5rem);
          color: #f0ecff; line-height: 1.05; margin-bottom: 0.5rem;
        }
        .pr-divider {
          width: 60px; height: 2px;
          background: linear-gradient(90deg, #8b5cf6, transparent);
          border-radius: 2px; margin-bottom: 0.8rem;
        }
        .pr-subtitle {
          font-size: 0.8rem; font-weight: 300; letter-spacing: 0.08em;
          color: rgba(255,255,255,0.3); margin-bottom: 3.5rem;
          border-left: 2px solid rgba(139,92,246,0.3);
          padding-left: 1rem;
        }
        .pr-main-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 22px;
          margin-bottom: 4rem;
        }
        .pr-section-label {
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 1.8rem;
        }
        .pr-section-label-text {
          font-size: 0.65rem; font-weight: 300; letter-spacing: 0.26em;
          text-transform: uppercase; color: rgba(255,255,255,0.3);
          white-space: nowrap;
        }
        .pr-section-label-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, rgba(139,92,246,0.3), transparent);
        }
        .pr-mini-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 14px;
        }
        @keyframes projFade {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes orbFloat {
          0%,100% { transform: translate(0,0); }
          33%      { transform: translate(16px,24px); }
          66%      { transform: translate(-10px,8px); }
        }
        @media(max-width:900px){
          .projects-section { margin-left: 64px; padding: 4rem 2rem; }
          .pr-main-grid { grid-template-columns: 1fr; }
          .pr-mini-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <section
        id="projects"
        className="projects-section"
        ref={sectionRef}
        onMouseMove={(e) => {
          const rect = sectionRef.current?.getBoundingClientRect();
          if (rect) setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
      >
        <div className="pr-mouse-glow" style={{ left: mousePos.x, top: mousePos.y }}/>
        <div className="pr-orb" style={{ width: 400, height: 400, background: "#5b4fcf", top: -120, right: -80, animation: "orbFloat 14s ease-in-out infinite" }}/>
        <div className="pr-orb" style={{ width: 250, height: 250, background: "#0e9f6e", bottom: 100, left: "5%", animation: "orbFloat 18s ease-in-out infinite reverse" }}/>

        <div className="pr-inner">
          <div className="pr-label" style={fadeUp(0.1)}>
            <span className="pr-label-line"/>Projects
          </div>
          <h2 className="pr-title" style={fadeUp(0.2)}>What I've Built</h2>
          <div className="pr-divider" style={fadeUp(0.25)}/>
          <p className="pr-subtitle" style={fadeUp(0.3)}>
            Real-world applications crafted with the MERN stack
          </p>

          <div style={fadeUp(0.35)}>
            <div className="pr-section-label">
              <span className="pr-section-label-text">// main_projects</span>
              <div className="pr-section-label-line"/>
            </div>
          </div>
          <div className="pr-main-grid">
            {MAIN_PROJECTS.map((p, i) => (
              <MainCard key={p.id} project={p} index={i} started={started} />
            ))}
          </div>

          <div style={fadeUp(0.4)}>
            <div className="pr-section-label">
              <span className="pr-section-label-text">// mini_projects</span>
              <div className="pr-section-label-line"/>
            </div>
          </div>
          <div className="pr-mini-grid">
            {MINI_PROJECTS.map((p, i) => (
              <MiniCard key={p.title} project={p} index={i} started={started} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}