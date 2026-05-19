import { useState, useEffect } from "react";

const SOCIALS = [
  {
    id: "github", label: "GitHub", abbr: "GH",
    tip: "revathiganeshinfo-cpu",
    tipSub: "View my repositories →",
    href: "https://github.com/revathiganeshinfo-cpu",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    id: "instagram", label: "Instagram", abbr: "IG",
    tip: "@revathiganesh",
    tipSub: "Follow for updates →",
    href: "https://www.instagram.com/accounts/login/?hl=en",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    id: "twitter", label: "Twitter / X", abbr: "X",
    tip: "@revathiganesh",
    tipSub: "Follow on X →",
    href: "https://twitter.com/revathiG_15",
    svg: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.258 5.633 5.905-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    id: "linkedin", label: "LinkedIn", abbr: "LI",
    tip: "Revathi Ganesh",
    tipSub: "Connect with me →",
    href: "https://www.linkedin.com/in/revathi-ganesh-54a799264/",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

const CONTACTS = [
  {
    id: "email", label: "Email",
    value: "revathiganeshinfo@gmail.com",
    tip: "Drop me a line anytime",
    tipSub: "Replies within 24 hrs",
    href: "mailto:revathiganeshinfo@gmail.com",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    id: "phone", label: "Mobile",
    value: "+91 86100 01756",
    tip: "Available Mon–Sat",
    tipSub: "IST: 9 AM – 7 PM",
    href: "tel:+918610001756",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.93 5.93l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/>
      </svg>
    ),
  },
  {
    id: "location", label: "Location",
    value: "Chennai, Tamil Nadu",
    tip: "India 🇮🇳",
    tipSub: "UTC +5:30",
    href: "https://maps.google.com/?q=Chennai",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

function Tooltip({ visible, title, sub, align = "center" }) {
  const leftMap = { center: "50%", left: "20px" };
  const transformMap = { center: "translateX(-50%)", left: "none" };

  return (
    <div style={{
      position: "absolute",
      bottom: "calc(100% + 14px)",
      left: leftMap[align],
      transform: `${transformMap[align]} translateY(${visible ? 0 : 8}px)`,
      opacity: visible ? 1 : 0,
      pointerEvents: "none",
      zIndex: 100,
      transition: "all 0.28s cubic-bezier(0.34,1.56,0.64,1)",
      minWidth: "140px",
    }}>
      <div style={{
        background: "#c9a96e",
        borderRadius: "4px",
        padding: "8px 14px",
        textAlign: "left",
      }}>
        <div style={{
          fontFamily: "'DM Mono',monospace",
          fontSize: "11px",
          fontWeight: 500,
          color: "#1a0e00",
          letterSpacing: "0.03em",
          whiteSpace: "nowrap",
        }}>{title}</div>
        {sub && (
          <div style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "10px",
            color: "#6b4a00",
            marginTop: "2px",
            whiteSpace: "nowrap",
          }}>{sub}</div>
        )}
      </div>
      <div style={{
        position: "absolute",
        top: "100%",
        left: align === "center" ? "50%" : "24px",
        transform: "translateX(-50%)",
        width: 0, height: 0,
        borderLeft: "6px solid transparent",
        borderRight: "6px solid transparent",
        borderTop: "6px solid #c9a96e",
      }} />
    </div>
  );
}

function FloatInput({ label, type = "text", value, onChange, multiline, rows = 4 }) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  const base = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${focused ? "#c9a96e" : "#252540"}`,
    color: "#eee8dc",
    fontSize: "14px",
    fontFamily: "'DM Mono',monospace",
    padding: "20px 0 10px",
    outline: "none",
    resize: "none",
    transition: "border-color 0.3s",
    boxSizing: "border-box",
  };

  return (
    <div style={{ position: "relative", marginBottom: "32px" }}>
      <label style={{
        position: "absolute",
        top: lifted ? "2px" : "18px",
        left: 0,
        fontSize: lifted ? "9px" : "12px",
        letterSpacing: lifted ? "0.2em" : "0.1em",
        textTransform: "uppercase",
        color: focused ? "#c9a96e" : "#484868",
        fontFamily: "'DM Mono',monospace",
        transition: "all 0.25s ease",
        pointerEvents: "none",
      }}>{label}</label>
      {multiline
        ? <textarea value={value} onChange={onChange} rows={rows} style={base}
            onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
        : <input type={type} value={value} onChange={onChange} style={base}
            onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
      }
      <div style={{
        position: "absolute",
        bottom: 0, left: 0,
        height: "1px",
        background: "#c9a96e",
        width: focused ? "100%" : "0%",
        transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)",
      }} />
    </div>
  );
}

export default function ContactSection() {
  const [tip, setTip] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, setState] = useState("idle"); // idle | sending | sent

useEffect(() => {
  const id = "contact-fonts";
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400;500&display=swap";
  document.head.appendChild(link);
}, []);

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) return;
    setState("sending");
    setTimeout(() => {
      setState("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setState("idle"), 4000);
    }, 1800);
  };

  const field = (key) => ({
    value: form[key],
    onChange: (e) => setForm((p) => ({ ...p, [key]: e.target.value })),
  });
 

 return (
    <div id="contact" style={{
      minHeight: "100vh",
      background: "#07070f",
      backgroundImage: `
        linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      color: "#eee8dc",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 24px",
    }}>

      {/* ── Header ── */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "14px", marginBottom: "16px",
        }}>
          <div style={{ width: "48px", height: "1px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
          <span style={{
            fontFamily: "'DM Mono',monospace", fontSize: "10px",
            letterSpacing: "0.35em", color: "#c9a96e", textTransform: "uppercase",
          }}>Let's Connect</span>
          <div style={{ width: "48px", height: "1px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
        </div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "clamp(44px,8vw,72px)",
          fontWeight: 300, margin: 0,
          letterSpacing: "0.04em",
          lineHeight: 1,
          color: "#eee8dc",
        }}>
          Get In <em style={{ fontStyle: "italic", color: "#c9a96e" }}>Touch</em>
        </h1>
        <p style={{
          marginTop: "16px", fontFamily: "'DM Mono',monospace",
          fontSize: "12px", color: "#484868", letterSpacing: "0.08em",
          lineHeight: 1.8,
        }}>
          Open for collaborations, freelance & full-time opportunities
        </p>
      </div>

      {/* ── Main Panel ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1.5fr)",
        maxWidth: "960px",
        width: "100%",
        border: "1px solid #1c1c30",
        background: "#0a0a17",
      }}>

        {/* ── LEFT: Info ── */}
        <div style={{
          padding: "52px 44px",
          borderRight: "1px solid #1c1c30",
          display: "flex", flexDirection: "column", gap: "0",
        }}>
          <p style={{
            fontFamily: "'DM Mono',monospace", fontSize: "9px",
            letterSpacing: "0.28em", color: "#484868",
            textTransform: "uppercase", margin: "0 0 32px",
          }}>Contact Info</p>

          {CONTACTS.map((c) => (
            <div key={c.id} style={{ position: "relative", marginBottom: "32px" }}>
              <Tooltip visible={tip === c.id} title={c.tip} sub={c.tipSub} align="left" />
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                style={{ textDecoration: "none", display: "flex", alignItems: "flex-start", gap: "14px", cursor: "pointer" }}
                onMouseEnter={() => setTip(c.id)}
                onMouseLeave={() => setTip(null)}
              >
                <div style={{
                  width: "36px", height: "36px", flexShrink: 0,
                  border: `1px solid ${tip === c.id ? "#c9a96e" : "#1c1c30"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: tip === c.id ? "#c9a96e" : "#484868",
                  transition: "all 0.2s",
                  marginTop: "2px",
                }}>
                  {c.svg}
                </div>
                <div>
                  <div style={{
                    fontFamily: "'DM Mono',monospace", fontSize: "9px",
                    letterSpacing: "0.22em", color: "#484868",
                    textTransform: "uppercase", marginBottom: "4px",
                  }}>{c.label}</div>
                  <div style={{
                    fontSize: "15px", fontWeight: 300,
                    color: tip === c.id ? "#c9a96e" : "#c8c0b0",
                    transition: "color 0.2s",
                    letterSpacing: "0.01em",
                    wordBreak: "break-all",
                  }}>{c.value}</div>
                </div>
              </a>
            </div>
          ))}

          {/* ── Social ── */}
          <div style={{ marginTop: "12px" }}>
            <p style={{
              fontFamily: "'DM Mono',monospace", fontSize: "9px",
              letterSpacing: "0.28em", color: "#484868",
              textTransform: "uppercase", margin: "0 0 16px",
            }}>Follow Me</p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {SOCIALS.map((s) => (
                <div key={s.id} style={{ position: "relative" }}>
                  <Tooltip visible={tip === s.id} title={s.tip} sub={s.tipSub} />
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    style={{
                      width: "44px", height: "44px",
                      border: `1px solid ${tip === s.id ? "#c9a96e" : "#1c1c30"}`,
                      background: tip === s.id ? "rgba(201,169,110,0.08)" : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: tip === s.id ? "#c9a96e" : "#484868",
                      textDecoration: "none",
                      transition: "all 0.22s",
                    }}
                    onMouseEnter={() => setTip(s.id)}
                    onMouseLeave={() => setTip(null)}
                  >
                    {s.svg}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ── Availability badge ── */}
          <div style={{
            marginTop: "auto", paddingTop: "40px",
            display: "flex", alignItems: "center", gap: "10px",
          }}>
            <div style={{
              width: "8px", height: "8px", borderRadius: "50%",
              background: "#3ec87a",
              boxShadow: "0 0 0 3px rgba(62,200,122,0.15)",
            }} />
            <span style={{
              fontFamily: "'DM Mono',monospace", fontSize: "10px",
              color: "#3ec87a", letterSpacing: "0.15em",
            }}>Available for work</span>
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <div style={{ padding: "52px 44px" }}>
          <p style={{
            fontFamily: "'DM Mono',monospace", fontSize: "9px",
            letterSpacing: "0.28em", color: "#484868",
            textTransform: "uppercase", margin: "0 0 40px",
          }}>Send a Message</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
            <FloatInput label="Your Name" {...field("name")} />
            <FloatInput label="Your Email" type="email" {...field("email")} />
          </div>
          <FloatInput label="Subject" {...field("subject")} />
          <FloatInput label="Message" multiline rows={5} {...field("message")} />

          {/* ── Submit ── */}
          <button
            onClick={handleSend}
            disabled={state !== "idle"}
            style={{
              width: "100%",
              padding: "16px 32px",
              background: state === "sent"
                ? "rgba(62,200,122,0.07)"
                : state === "sending"
                ? "rgba(201,169,110,0.06)"
                : "transparent",
              border: `1px solid ${state === "sent" ? "#3ec87a" : "#c9a96e"}`,
              color: state === "sent" ? "#3ec87a" : "#c9a96e",
              fontFamily: "'DM Mono',monospace",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              cursor: state === "idle" ? "pointer" : "default",
              transition: "all 0.35s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              if (state === "idle") e.currentTarget.style.background = "rgba(201,169,110,0.07)";
            }}
            onMouseLeave={(e) => {
              if (state === "idle") e.currentTarget.style.background = "transparent";
            }}
          >
            {state === "sending" && (
              <div style={{
                width: "14px", height: "14px",
                border: "1.5px solid #c9a96e",
                borderTopColor: "transparent",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
              }} />
            )}
            {state === "sent"
              ? "✓  Message Received"
              : state === "sending"
              ? "Sending..."
              : "Send Message  →"}

            {state === "idle" && (
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(90deg, transparent 0%, rgba(201,169,110,0.08) 50%, transparent 100%)",
                transform: "translateX(-100%)",
                transition: "transform 0.6s ease",
              }}
                className="btn-shine"
              />
            )}
          </button>

          {state === "sent" && (
            <p style={{
              fontFamily: "'DM Mono',monospace", fontSize: "11px",
              color: "#484868", textAlign: "center", marginTop: "16px",
              letterSpacing: "0.05em",
            }}>
              Thanks! I'll get back to you soon.
            </p>
          )}
        </div>
      </div>

      {/* ── Footer line ── */}
      <div style={{ marginTop: "40px", display: "flex", alignItems: "center", gap: "20px" }}>
        <div style={{ width: "80px", height: "1px", background: "linear-gradient(to right, transparent, #1c1c30)" }} />
        <span style={{
          fontFamily: "'DM Mono',monospace", fontSize: "9px",
          letterSpacing: "0.3em", color: "#2a2a40", textTransform: "uppercase",
        }}>Revathi Ganesh · Chennai</span>
        <div style={{ width: "80px", height: "1px", background: "linear-gradient(to left, transparent, #1c1c30)" }} />
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
        a { -webkit-tap-highlight-color: transparent; }
        textarea { font-family: 'DM Mono', monospace !important; }
        input::placeholder, textarea::placeholder { color: transparent; }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 100px #0a0a17 inset !important;
          -webkit-text-fill-color: #eee8dc !important;
        }
      `}</style>
    </div>
  );
}