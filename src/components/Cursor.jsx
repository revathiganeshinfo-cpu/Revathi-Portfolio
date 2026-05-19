import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const pos      = useRef({ x: -100, y: -100 });
  const ring     = useRef({ x: -100, y: -100 });
  const raf      = useRef(null);
  const [clicked,  setClicked]  = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden,   setHidden]   = useState(false);
  const [color,    setColor]    = useState("#8b5cf6");

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };

      /* detect what we're hovering */
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (!el) return;

      const isInteractive = el.closest(
        "a, button, input, textarea, select, [role='button'], .ab-tag, .ab-stat, .sk-filter-btn, .ni"
      );
      const isLink   = el.closest("a");
      const isInput  = el.closest("input, textarea");

      setHovering(!!isInteractive);
      setHidden(!!isInput);

      /* color by section */
      const section = el.closest("section[id], div[id='home']");
      const id = section?.id || "";
      const colorMap = {
        home:     "#8b5cf6",
        about:    "#c8b8ff",
        skills:   "#22d3ee",
        projects: "#f59e0b",
        contact:  "#8b5cf6",
      };
      setColor(isLink ? "#7ee8fa" : (colorMap[id] || "#8b5cf6"));
    };

    const onClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 400);
    };

    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener("mousemove",   onMove);
    window.addEventListener("mousedown",   onClick);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    /* smooth ring lag */
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%,-50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%,-50%)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove",   onMove);
      window.removeEventListener("mousedown",   onClick);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const baseHidden = { opacity: hidden ? 0 : 1, transition: "opacity 0.2s" };

  return (
    <>
      <style>{`
        *, *::before, *::after { cursor: none !important; }

        .cur-dot {
          position: fixed;
          top: 0; left: 0;
          width: 8px; height: 8px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          will-change: transform;
          transition: width 0.25s cubic-bezier(0.34,1.56,0.64,1),
                      height 0.25s cubic-bezier(0.34,1.56,0.64,1),
                      background 0.3s ease,
                      opacity 0.2s ease;
        }
        .cur-dot.hover {
          width: 12px; height: 12px;
        }
        .cur-dot.click {
          width: 5px; height: 5px;
        }

        .cur-ring {
          position: fixed;
          top: 0; left: 0;
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1.5px solid;
          pointer-events: none;
          z-index: 99998;
          will-change: transform;
          transition: width 0.35s cubic-bezier(0.34,1.56,0.64,1),
                      height 0.35s cubic-bezier(0.34,1.56,0.64,1),
                      border-color 0.3s ease,
                      opacity 0.2s ease,
                      background 0.3s ease;
        }
        .cur-ring.hover {
          width: 52px; height: 52px;
          background: rgba(139,92,246,0.07);
        }
        .cur-ring.click {
          width: 60px; height: 60px;
          opacity: 0.3;
        }

        .cur-burst {
          position: fixed;
          top: 0; left: 0;
          width: 60px; height: 60px;
          border-radius: 50%;
          border: 1px solid;
          pointer-events: none;
          z-index: 99997;
          will-change: transform, opacity;
          animation: none;
        }
        .cur-burst.active {
          animation: burstOut 0.4s ease-out forwards;
        }
        @keyframes burstOut {
          0%   { width: 8px; height: 8px; opacity: 0.8; }
          100% { width: 70px; height: 70px; opacity: 0; }
        }

        .cur-trail {
          position: fixed;
          top: 0; left: 0;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99996;
          will-change: transform;
        }
      `}</style>

      {/* Dot */}
      <div
        ref={dotRef}
        className={`cur-dot ${hovering ? "hover" : ""} ${clicked ? "click" : ""}`}
        style={{
          background: color,
          boxShadow: `0 0 ${hovering ? 14 : 6}px ${color}99`,
          ...baseHidden,
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className={`cur-ring ${hovering ? "hover" : ""} ${clicked ? "click" : ""}`}
        style={{
          borderColor: color + "88",
          ...baseHidden,
        }}
      />

      {/* Click burst */}
      <BurstEffect active={clicked} color={color} pos={pos} />

      {/* Trail particles */}
      <TrailParticles color={color} />
    </>
  );
}

/* ── Click burst ring ── */
function BurstEffect({ active, color, pos }) {
  const ref = useRef(null);
  const prev = useRef(false);

  useEffect(() => {
    if (active && !prev.current && ref.current) {
      ref.current.style.transform =
        `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%,-50%)`;
      ref.current.style.borderColor = color;
      ref.current.style.animation = "none";
      void ref.current.offsetWidth;
      ref.current.style.animation = "burstOut 0.4s ease-out forwards";
    }
    prev.current = active;
  }, [active, color, pos]);

  return <div ref={ref} className="cur-burst" />;
}

/* ── Trailing sparkle dots ── */
function TrailParticles({ color }) {
  const trailRef  = useRef([]);
  const mouseHist = useRef([]);
  const rafRef    = useRef(null);

  useEffect(() => {
    const COUNT = 6;
    const container = document.getElementById("cur-trail-container");
    if (!container) return;

    const dots = Array.from({ length: COUNT }, (_, i) => {
      const d = document.createElement("div");
      d.className = "cur-trail";
      const size = 5 - i * 0.6;
      d.style.cssText = `
        width: ${size}px; height: ${size}px;
        background: ${color};
        opacity: 0;
        transition: background 0.3s;
      `;
      container.appendChild(d);
      return { el: d, x: -100, y: -100 };
    });
    trailRef.current = dots;

    const onMove = (e) => {
      mouseHist.current.unshift({ x: e.clientX, y: e.clientY });
      if (mouseHist.current.length > COUNT * 3) mouseHist.current.length = COUNT * 3;
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      dots.forEach((dot, i) => {
        const target = mouseHist.current[i * 3] || mouseHist.current[0];
        if (!target) return;
        dot.x += (target.x - dot.x) * 0.25;
        dot.y += (target.y - dot.y) * 0.25;
        dot.el.style.transform = `translate(${dot.x}px, ${dot.y}px) translate(-50%,-50%)`;
        dot.el.style.opacity   = `${0.35 - i * 0.05}`;
        dot.el.style.background = color;
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      dots.forEach(d => d.el.remove());
    };
  }, [color]);

  return <div id="cur-trail-container" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 99995 }} />;
}