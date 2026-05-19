import { useState, useEffect } from "react";
import avatar from "../assets/avatar.avif";

const NAV = ["Home", "About Me", "Skills", "Projects", "Contact"];
const ROLES = [
  "MERN Stack Developer",
  "React Developer",
  "Full Stack Engineer",
];

// Map nav labels → section IDs
const NAV_IDS = {
  Home: "home",
  "About Me": "about",
  Skills: "skills",
  Projects: "projects",
  Contact: "contact",
};

export default function Hero() {
  const [active, setActive] = useState("Home");
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let t;
    if (!deleting && typed.length < current.length)
      t = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 90);
    else if (!deleting && typed.length === current.length)
      t = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && typed.length > 0)
      t = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 45);
    else if (deleting && typed.length === 0)
      t = setTimeout(() => {
        setDeleting(false);
        setRoleIdx((p) => (p + 1) % ROLES.length);
      }, 100);
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  useEffect(() => {
    const observers = [];
    Object.entries(NAV_IDS).forEach(([navItem, id]) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) setActive(navItem);
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -60% 0px",
  },
);
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (item) => {
    setActive(item);
    if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const id = NAV_IDS[item];
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=poppins:wght@200;300;400;500;600&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
        body{background:#0b0c10;}
        .pr{min-height:100vh;display:flex;font-family:'Poppins',sans-serif;background:linear-gradient(rgba(11,12,16,0.75),rgba(11,12,16,0.85)),url('/src/assets/bg1.jpg');background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed;color:#e2e2e2;position:relative;overflow:hidden;}
        .bgc{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;}
        .bgc::before{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(-55deg,transparent,transparent 60px,rgba(255,255,255,0.018) 60px,rgba(255,255,255,0.018) 61px);}
        .bgc::after{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,rgba(255,255,255,0.045) 1px,transparent 1px);background-size:28px 28px;}
        .orb{position:absolute;border-radius:50%;filter:blur(90px);opacity:0.18;animation:of 10s ease-in-out infinite;}
        .o1{width:500px;height:500px;background:#5b4fcf;top:-180px;right:-120px;}
        .o2{width:340px;height:340px;background:#2d9cdb;bottom:-100px;left:160px;animation-delay:4s;}
        .o3{width:200px;height:200px;background:#8b5cf6;top:55%;right:20%;animation-delay:7s;}
        @keyframes of{0%,100%{transform:translate(0,0);}50%{transform:translate(20px,30px);}}
        .sb{position:fixed;left:0;top:0;bottom:0;width:230px;display:flex;flex-direction:column;padding:2.8rem 2rem;border-right:1px solid rgba(255,255,255,0.06);background:rgba(11,12,16,0.7);backdrop-filter:blur(16px);z-index:10;}
        .lg{font-family:'poppins',cursive;font-size:2.4rem;color:#c8b8ff;margin-bottom:0.3rem;line-height:1;}
        .ls{font-size:0.6rem;font-weight:300;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:3rem;}
        .nl{list-style:none;display:flex;flex-direction:column;gap:6px;flex:1;}
        .ni{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:10px;cursor:pointer;transition:all 0.3s;position:relative;font-size:0.82rem;font-weight:300;letter-spacing:0.12em;color:rgba(255,255,255,0.45);text-transform:uppercase;}
        .ni:hover{color:rgba(255,255,255,0.8);background:rgba(255,255,255,0.04);}
        .ni.active{color:#c8b8ff;background:rgba(139,92,246,0.12);}
        .nd{width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,0.2);flex-shrink:0;transition:background 0.3s;}
        .ni.active .nd{background:#8b5cf6;box-shadow:0 0 8px #8b5cf6;}
        .nb{width:2px;height:0;position:absolute;left:0;top:50%;transform:translateY(-50%);background:linear-gradient(to bottom,#8b5cf6,#2d9cdb);border-radius:2px;transition:height 0.3s;}
        .ni.active .nb{height:60%;}
        .sf{display:flex;gap:14px;align-items:center;}
        .si{width:32px;height:32px;border:1px solid rgba(255,255,255,0.12);border-radius:8px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.4);font-size:0.75rem;cursor:pointer;transition:all 0.3s;text-decoration:none;}
        .si:hover{border-color:#8b5cf6;color:#c8b8ff;background:rgba(139,92,246,0.1);}
        .mn{margin-left:230px;flex:1;display:flex;align-items:center;justify-content:space-between;padding:2rem 5vw;min-height:100vh;position:relative;z-index:1;gap:2rem;}
        .ht{flex:1;max-width:560px;}
        .eb{display:inline-flex;align-items:center;gap:10px;font-size:0.72rem;font-weight:300;letter-spacing:0.28em;text-transform:uppercase;color:#8b5cf6;margin-bottom:1.4rem;opacity:0;animation:si 0.8s ease forwards 0.2s;}
        .el{width:28px;height:1px;background:#8b5cf6;}
        .hn{font-family:'poppins',cursive;font-size:clamp(3.8rem,6vw,6.5rem);color:#f0ecff;line-height:1.05;margin-bottom:0.6rem;opacity:0;animation:si 0.9s ease forwards 0.4s;}
        .rl{font-size:clamp(1rem,2vw,1.25rem);font-weight:300;color:rgba(255,255,255,0.6);margin-bottom:1.6rem;height:2rem;display:flex;align-items:center;gap:6px;opacity:0;animation:si 0.9s ease forwards 0.6s;}
        .rll{color:rgba(255,255,255,0.35);font-weight:200;margin-right:6px;}
        .tt{color:yellow;font-weight:400;}
        .cb{display:inline-block;width:2px;height:1.1em;background:#8b5cf6;margin-left:2px;vertical-align:middle;animation:bk 0.75s step-end infinite;}
        @keyframes bk{0%,100%{opacity:1}50%{opacity:0}}
        .tg{font-size:0.95rem;font-weight:300;line-height:1.75;color:rgba(255,255,255,0.45);max-width:440px;margin-bottom:2.8rem;border-left:2px solid rgba(139,92,246,0.4);padding-left:1rem;opacity:0;animation:si 0.9s ease forwards 0.8s;}
        .cr{display:flex;gap:14px;flex-wrap:wrap;opacity:0;animation:si 0.9s ease forwards 1s;}
        .bp{padding:12px 32px;border-radius:9999px;background:linear-gradient(135deg,#7c3aed,#2d9cdb);color:#fff;font-family:'poppins',sans-serif;font-size:0.78rem;letter-spacing:0.18em;text-transform:uppercase;border:none;cursor:pointer;transition:opacity 0.3s,transform 0.3s;}
        .bp:hover{opacity:0.85;transform:translateY(-2px);}
        .bo {
  position: relative;
  padding: 12px 32px;
  border-radius: 9999px;
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Poppins', sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s, border-color 0.3s, background 0.3s;
}

/* shimmer shine sweep */
.bo-shine {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(139, 92, 246, 0.15) 40%,
    rgba(200, 184, 255, 0.25) 50%,
    transparent 60%
  );
  transform: translateX(-100%);
  transition: transform 0s;
}

/* download icon bounce */
.bo-icon {
  display: inline-flex;
  align-items: center;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* text slide up slightly */
.bo-text {
  display: inline-block;
  transition: transform 0.3s ease;
}

/* hover states */
.bo:hover {
  border-color: #8b5cf6;
  color: #c8b8ff;
  background: rgba(139, 92, 246, 0.08);
}

.bo:hover .bo-shine {
  transform: translateX(100%);
  transition: transform 0.65s ease;
}

.bo:hover .bo-icon {
  transform: translateY(3px);
}

.bo:hover .bo-text {
  transform: translateY(-1px);
}

/* click press */
.bo:active {
  transform: scale(0.96);
  background: rgba(139, 92, 246, 0.15);
}

/* pulse ring on hover */
.bo::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 9999px;
  border: 1px solid rgba(139, 92, 246, 0.4);
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.3s, transform 0.3s;
}

.bo:hover::after {
  opacity: 1;
  transform: scale(1);
}
        .sr{display:flex;gap:2.5rem;margin-top:3rem;opacity:0;animation:si 0.9s ease forwards 1.2s;}
        .st{display:flex;flex-direction:column;gap:2px;}
        .sn{font-size:1.8rem;font-weight:500;background:linear-gradient(135deg,#c8b8ff,#7ee8fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .sl{font-size:0.65rem;font-weight:300;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.3);}
        .sd{width:1px;background:rgba(255,255,255,0.08);align-self:stretch;}
        .iw{flex-shrink:0;width:clamp(260px,28vw,380px);height:clamp(320px,36vw,470px);position:relative;opacity:0;animation:si 1s ease forwards 0.5s;}
        .iw::before{content:'';position:absolute;inset:-14px;border-radius:40% 60% 55% 45%/45% 40% 60% 55%;border:1px solid rgba(139,92,246,0.25);animation:mb 8s ease-in-out infinite;}
        .iw::after{content:'';position:absolute;inset:-28px;border-radius:55% 45% 40% 60%/60% 55% 45% 40%;border:1px solid rgba(45,156,219,0.15);animation:mb 11s ease-in-out infinite reverse;}
        @keyframes mb{0%,100%{border-radius:40% 60% 55% 45%/45% 40% 60% 55%;}33%{border-radius:55% 45% 60% 40%/60% 55% 40% 45%;}66%{border-radius:45% 55% 40% 60%/40% 60% 55% 45%;}}
        .if{width:100%;height:100%;border-radius:38% 62% 54% 46%/44% 38% 62% 56%;overflow:hidden;background:linear-gradient(145deg,#1a1a2e,#16213e);border:1px solid rgba(139,92,246,0.2);animation:mb 8s ease-in-out infinite;display:flex;align-items:center;justify-content:center;position:relative;}
        .bg{position:absolute;background:rgba(11,12,16,0.85);backdrop-filter:blur(12px);border:1px solid rgba(139,92,246,0.3);border-radius:12px;padding:8px 14px;display:flex;align-items:center;gap:8px;z-index:5;}
        .bd{width:7px;height:7px;border-radius:50%;background:#22c55e;box-shadow:0 0 8px #22c55e;flex-shrink:0;}
        .bt{font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.6);}
        .av{bottom:24px;left:-30px;}
        .tc{top:24px;right:-24px;font-size:0.62rem;color:#c8b8ff;border-color:rgba(139,92,246,0.4);}
        @keyframes si{from{opacity:0;transform:translateY(22px);}to{opacity:1;transform:translateY(0);}}
        @media(max-width:900px){.sb{width:64px;padding:2rem 1rem;}.lg,.ls,.ni span,.sf{display:none;}.ni{justify-content:center;padding:12px;}.mn{margin-left:64px;flex-direction:column;justify-content:center;padding:3rem 2rem;}.iw{width:240px;height:280px;}}
      `}</style>

      <div className="pr" id="home">
        <div className="bgc">
          <div className="orb o1" />
          <div className="orb o2" />
          <div className="orb o3" />
        </div>

        {/* Sidebar */}
        <aside className="sb">
          <div className="lg">RG</div>
          <div className="ls">Portfolio</div>
          <ul className="nl">
            {NAV.map((item) => (
              <li
                key={item}
                className={`ni ${active === item ? "active" : ""}`}
                onClick={() => handleNav(item)}
              >
                <div className="nb" />
                <div className="nd" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="sf">
            <a href="https://github.com/revathiganeshinfo-cpu" className="si">
              Gh
            </a>
            <a href="https://www.linkedin.com/in/revathi-ganesh-54a799264/" className="si">
              in
            </a>
            <a href="https://twitter.com/revathiG_15" className="si">
              𝕏
            </a>
          </div>
        </aside>

        {/* Hero Content */}
        <main className="mn">
          <div className="ht">
            <div className="eb">
              <span className="el" />
              Hello There
            </div>
            <h1 className="hn">I&apos;m Revathi G</h1>
            <div className="rl">
              <span className="rll">And I&apos;m a</span>
              <span className="tt">{typed}</span>
              <span className="cb" />
            </div>
            <p className="tg">
              I craft purposeful experiences that ignite creativity and spark
              engagement — turning ideas into clean, scalable, and meaningful
              digital solutions.
            </p>
            <div className="cr">
              <a
                href="/full stack developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Revathi_Ganesh_CV.pdf"
                style={{ textDecoration: "none" }}
              >
                <button className="bo">
                  <span className="bo-text">Download CV</span>
                  <span className="bo-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </span>
                  <span className="bo-shine" />
                </button>
              </a>
            </div>
            <div className="sr">
              <div className="st">
                <span className="sn">5+</span>
                <span className="sl">Projects</span>
              </div>
              <div className="sd" />
              <div className="sd" />
              <div className="st">
                <span className="sn">10+</span>
                <span className="sl">Tech Stack</span>
              </div>
            </div>
          </div>

          <div className="iw">
            <div className="if">
              <img
                src={avatar}
                alt="Revathi G"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
            <div className="bg av">
              <div className="bd" />
              <span className="bt">Available for work</span>
            </div>
            <div className="bg tc">
              <span>⚛ MERN Stack</span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
