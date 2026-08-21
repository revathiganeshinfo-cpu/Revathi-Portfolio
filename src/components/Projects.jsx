import { useEffect, useRef, useState } from "react";

const FRONTEND_PROJECTS = [
  {
    id: 1,
    title: "Invoice Builder",
    desc: "A clean invoice creation app for generating professional invoices and exporting them as PDF.",
    features: [
      "Invoice creation",
      "PDF export",
      "Tax & item calculation",
    ],
    tags: ["React.js", "Tailwind CSS", "html2canvas", "jsPDF"],
    category: "Frontend",
    live: "https://invoiceappbuild.netlify.app/",
    github: "https://github.com/revathiganeshinfo-cpu/Project_2.git",
    accent: "#8b5cf6",
    preview: "invoice",
  },
];

const FULLSTACK_PROJECTS = [
  {
    id: 2,
    title: "Movie Review Platform",
    desc: "A full-stack movie platform where users can search movies, filter by genre, rate films, and write reviews.",
    features: [
      "Movie search & filters",
      "Ratings & reviews",
      "User authentication",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    category: "Full Stack",
    live: "https://cute-horse-43fe0e.netlify.app/",
    github: "https://github.com/revathiganeshinfo-cpu/Project-1.git",
    accent: "#f59e0b",
    preview: "movie",
  },

  {
    id: 3,
    title: "Restaurant Reservation Platform",
    desc: "A MERN restaurant platform for browsing restaurants, booking tables, reviews, and online payments.",
    features: [
      "Table reservations",
      "Reviews & ratings",
      "Stripe payments",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    category: "Full Stack",
    live: "https://fsd-project-frontend.vercel.app/",
    github: null,
    backend: "https://fsd-project-backend-n2dp.onrender.com/",
    accent: "#22d3ee",
    preview: "restaurant",
  },
];

/* ---------------- ICONS ---------------- */

function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .6a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.69 1.26 3.35.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.12-3.06 0 0 .98-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.19-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.35.78 1.04.78 2.1v3.1c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .6Z" />
    </svg>
  );
}

/* ---------------- PROJECT PREVIEWS ---------------- */

function MoviePreview() {
  return (
    <div className="preview movie-preview">
      <div className="movie-header">
        <strong>
          MOVIE<span>HUB</span>
        </strong>

        <div className="movie-menu">
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="movie-content">
        <small>FEATURED</small>

        <h4>
          Discover Your
          <br />
          Next Favorite Movie
        </h4>

        <div className="stars">★★★★★</div>
      </div>

      <div className="movie-posters">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

function InvoicePreview() {
  return (
    <div className="preview invoice-preview">
      <div className="invoice-paper">
        <div className="invoice-heading">
          <strong>INVOICE</strong>
          <span>#INV-2026</span>
        </div>

        <div className="invoice-purple-line" />

        <div className="invoice-info">
          <div>
            <small>BILL TO</small>
            <span>Client Name</span>
            <span>client@email.com</span>
          </div>

          <div>
            <small>DATE</small>
            <span>21 Aug 2026</span>
          </div>
        </div>

        <div className="invoice-table">
          <div>
            <span>ITEM</span>
            <span>AMOUNT</span>
          </div>

          <div>
            <span>Design Service</span>
            <span>$450</span>
          </div>

          <div>
            <span>Development</span>
            <span>$800</span>
          </div>

          <div>
            <span>Tax</span>
            <span>$125</span>
          </div>
        </div>

        <div className="invoice-total">
          <span>TOTAL</span>
          <strong>$1,375</strong>
        </div>
      </div>
    </div>
  );
}

function RestaurantPreview() {
  return (
    <div className="preview restaurant-preview">
      <div className="restaurant-header">
        <span className="restaurant-logo">R</span>

        <div>
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="restaurant-content">
        <small>FINE DINING</small>

        <h4>Reserve Your Table</h4>

        <span />
      </div>

      <div className="restaurant-cards">
        <div>
          <i />
          <strong>Italian House</strong>
          <small>★★★★★ · Chennai</small>
        </div>

        <div>
          <i />
          <strong>Urban Kitchen</strong>
          <small>★★★★☆ · Chennai</small>
        </div>

        <div>
          <i />
          <strong>The Garden</strong>
          <small>★★★★★ · Chennai</small>
        </div>
      </div>
    </div>
  );
}

function ProjectPreview({ type }) {
  if (type === "invoice") {
    return <InvoicePreview />;
  }

  if (type === "restaurant") {
    return <RestaurantPreview />;
  }

  return <MoviePreview />;
}

/* ---------------- PROJECT CARD ---------------- */

function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`project-card ${hovered ? "project-card-hover" : ""}`}
      style={{
        "--accent": project.accent,
        "--delay": `${index * 0.1}s`,
        opacity: visible ? 1 : 0,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Preview */}

      <div className="project-preview">
        <ProjectPreview type={project.preview} />

        <span className="project-category">
          {project.category}
        </span>
      </div>

      {/* Content */}

      <div className="project-content">

        <div className="project-title-row">
          <div className="project-title-wrap">
            <span className="project-number">
              0{project.id}
            </span>

            <h3>{project.title}</h3>
          </div>

          <span className="project-label">
            PROJECT
          </span>
        </div>

        <p className="project-description">
          {project.desc}
        </p>

        {/* Features */}

        <div className="project-features">
          {project.features.map((feature) => (
            <span key={feature}>
              <b>✓</b>
              {feature}
            </span>
          ))}
        </div>

        {/* Technologies */}

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {/* Buttons */}

        <div className="project-actions">

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-button live-button"
          >
            <ExternalIcon />
            Live Demo
          </a>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button github-button"
            >
              <GithubIcon />
              GitHub
            </a>
          ) : (
            <a
              href={project.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button github-button"
            >
              <ExternalIcon />
              Backend
            </a>
          )}

        </div>

      </div>
    </article>
  );
}

/* ---------------- PROJECT GROUP ---------------- */

function ProjectGroup({ title, projects, visible }) {
  return (
    <div className="project-group">

      <div className="project-group-heading">
        <span>{title}</span>
        <div />
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            visible={visible}
          />
        ))}

      </div>
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function Projects() {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`

        /* ==============================
           PROJECT SECTION
        ============================== */

        .projects-section {
          min-height: 100vh;

          margin-left: 230px;

          padding: 7rem 5vw 6rem;

          font-family: "Poppins", sans-serif;

          background:
            linear-gradient(
              rgba(11,12,16,0.92),
              rgba(11,12,16,0.97)
            ),
            url("/src/assets/bg1.jpg");

          background-size: cover;
          background-position: center;

          color: #e8e8ea;

          position: relative;

          overflow: hidden;
        }

        .projects-section::before {
          content: "";

          position: absolute;

          inset: 0;

          background:
            radial-gradient(
              circle at 85% 15%,
              rgba(139,92,246,0.09),
              transparent 28%
            ),

            radial-gradient(
              circle at 10% 80%,
              rgba(34,211,238,0.05),
              transparent 25%
            );

          pointer-events: none;
        }

        .pr-inner {
          position: relative;

          z-index: 1;

          max-width: 1120px;

          margin: 0 auto;
        }

        /* ==============================
           SECTION HEADING
        ============================== */

        .pr-label {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 1rem;

          color: #a78bfa;

          font-size: 0.75rem;

          font-weight: 500;

          letter-spacing: 0.22em;

          text-transform: uppercase;
        }

        .pr-label-line {
          width: 30px;

          height: 1px;

          background: #a78bfa;
        }

        .pr-title {
          margin: 0;

          color: #f5f3ff;

          font-size: clamp(
            2.8rem,
            5vw,
            5rem
          );

          line-height: 1.05;

          font-weight: 600;

          letter-spacing: -0.03em;
        }

        .pr-divider {
          width: 70px;

          height: 2px;

          margin: 1rem 0;

          background:
            linear-gradient(
              90deg,
              #8b5cf6,
              transparent
            );
        }

        .pr-subtitle {
          max-width: 650px;

          margin: 0 0 4rem;

          padding-left: 1rem;

          border-left: 2px solid
            rgba(139,92,246,0.45);

          color:
            rgba(255,255,255,0.62);

          font-size: 0.95rem;

          line-height: 1.7;

          font-weight: 400;
        }

        /* ==============================
           GROUP
        ============================== */

        .project-group {
          margin-bottom: 4.5rem;
        }

        .project-group-heading {
          display: flex;

          align-items: center;

          gap: 16px;

          margin-bottom: 1.4rem;
        }

        .project-group-heading span {
          color:
            rgba(255,255,255,0.72);

          font-size: 0.78rem;

          font-weight: 600;

          letter-spacing: 0.18em;

          text-transform: uppercase;

          white-space: nowrap;
        }

        .project-group-heading div {
          height: 1px;

          flex: 1;

          background:
            linear-gradient(
              90deg,
              rgba(139,92,246,0.35),
              transparent
            );
        }

        /* ==============================
           GRID
        ============================== */

        .projects-grid {
          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(0, 1fr)
            );

          gap: 28px;
        }

        /* ==============================
           CARD
        ============================== */

        .project-card {
          --accent: #8b5cf6;

          background:
            rgba(13,14,20,0.9);

          border:
            1px solid
            rgba(255,255,255,0.1);

          border-radius: 18px;

          overflow: hidden;

          box-shadow:
            0 12px 35px
            rgba(0,0,0,0.22);

          transform:
            translateY(18px);

          animation:
            projectEnter
            0.55s
            ease
            var(--delay)
            forwards;

          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .project-card-hover {
          transform:
            translateY(-4px);

          border-color:
            var(--accent);

          box-shadow:
            0 18px 45px
            rgba(0,0,0,0.34);
        }

        /* ==============================
           PREVIEW
        ============================== */

        .project-preview {
          height: 215px;

          position: relative;

          overflow: hidden;

          border-bottom:
            1px solid
            rgba(255,255,255,0.08);
        }

        .preview {
          width: 100%;
          height: 100%;

          position: relative;

          overflow: hidden;
        }

        .project-category {
          position: absolute;

          top: 14px;

          right: 14px;

          z-index: 5;

          padding:
            5px 10px;

          border:
            1px solid
            rgba(255,255,255,0.14);

          border-radius: 999px;

          background:
            rgba(8,9,14,0.75);

          color:
            rgba(255,255,255,0.75);

          font-size: 0.62rem;

          font-weight: 600;

          letter-spacing: 0.1em;

          text-transform: uppercase;
        }

        /* ==============================
           MOVIE PREVIEW
        ============================== */

        .movie-preview {
          padding: 22px;

          background:
            radial-gradient(
              circle at 70% 25%,
              rgba(124,58,237,0.35),
              transparent 30%
            ),

            linear-gradient(
              135deg,
              #10091d,
              #090d14
            );
        }

        .movie-header {
          display: flex;

          justify-content:
            space-between;

          align-items: center;
        }

        .movie-header strong {
          color: white;

          font-size: 0.82rem;

          letter-spacing: 0.08em;
        }

        .movie-header strong span {
          color: #a78bfa;
        }

        .movie-menu {
          display: flex;

          gap: 5px;
        }

        .movie-menu i {
          width: 20px;

          height: 4px;

          border-radius: 99px;

          background:
            rgba(255,255,255,0.15);
        }

        .movie-content {
          margin-top: 28px;
        }

        .movie-content small {
          color: #a78bfa;

          font-size: 0.55rem;

          letter-spacing: 0.18em;
        }

        .movie-content h4 {
          margin: 7px 0 10px;

          color: white;

          font-size: 1.15rem;

          line-height: 1.2;

          font-weight: 600;
        }

        .stars {
          color: #f59e0b;

          font-size: 0.7rem;

          letter-spacing: 0.08em;
        }

        .movie-posters {
          position: absolute;

          right: 18px;

          bottom: 22px;

          display: flex;

          gap: 6px;
        }

        .movie-posters div {
          width: 48px;

          height: 68px;

          border-radius: 5px;

          border:
            1px solid
            rgba(255,255,255,0.08);

          background:
            linear-gradient(
              160deg,
              #5b21b6,
              #171127
            );
        }

        .movie-posters div:nth-child(2) {
          background:
            linear-gradient(
              160deg,
              #b91c1c,
              #241012
            );
        }

        .movie-posters div:nth-child(3) {
          background:
            linear-gradient(
              160deg,
              #047857,
              #071914
            );
        }

        .movie-posters div:nth-child(4) {
          background:
            linear-gradient(
              160deg,
              #1d4ed8,
              #0b1024
            );
        }

        /* ==============================
           INVOICE PREVIEW
        ============================== */

        .invoice-preview {
          display: flex;

          align-items: center;

          justify-content: center;

          padding: 18px;

          background:
            linear-gradient(
              135deg,
              #161021,
              #0b0b10
            );
        }

        .invoice-paper {
          width: 74%;

          min-height: 175px;

          padding: 16px;

          border-radius: 6px;

          background: #f8f7fb;

          color: #25212e;

          box-shadow:
            0 15px 35px
            rgba(0,0,0,0.35);

          transform: rotate(-1deg);
        }

        .invoice-heading,
        .invoice-total {
          display: flex;

          justify-content:
            space-between;

          align-items: center;
        }

        .invoice-heading strong {
          font-size: 0.75rem;

          letter-spacing: 0.08em;
        }

        .invoice-heading span {
          color: #8b5cf6;

          font-size: 0.55rem;
        }

        .invoice-purple-line {
          height: 1px;

          margin: 8px 0;

          background: #8b5cf6;

          opacity: 0.5;
        }

        .invoice-info {
          display: flex;

          justify-content:
            space-between;

          margin-bottom: 9px;
        }

        .invoice-info div {
          display: flex;

          flex-direction: column;

          gap: 2px;
        }

        .invoice-info small {
          color: #8b8492;

          font-size: 0.42rem;

          letter-spacing: 0.08em;
        }

        .invoice-info span {
          font-size: 0.48rem;
        }

        .invoice-table {
          border-top:
            1px solid #e5e2e9;

          border-bottom:
            1px solid #e5e2e9;

          padding: 4px 0;
        }

        .invoice-table div {
          display: flex;

          justify-content:
            space-between;

          padding: 3px 0;

          font-size: 0.48rem;
        }

        .invoice-table div:first-child {
          color: #8b8492;

          font-size: 0.42rem;
        }

        .invoice-total {
          padding-top: 7px;

          font-size: 0.55rem;
        }

        .invoice-total strong {
          color: #8b5cf6;
        }

        /* ==============================
           RESTAURANT PREVIEW
        ============================== */

        .restaurant-preview {
          padding: 20px;

          background:
            radial-gradient(
              circle at 75% 15%,
              rgba(34,211,238,0.18),
              transparent 30%
            ),

            linear-gradient(
              135deg,
              #07171a,
              #090d10
            );
        }

        .restaurant-header {
          display: flex;

          justify-content:
            space-between;

          align-items: center;
        }

        .restaurant-logo {
          width: 28px;

          height: 28px;

          display: grid;

          place-items: center;

          border:
            1px solid
            rgba(34,211,238,0.5);

          border-radius: 50%;

          color: #67e8f9;

          font-weight: 700;
        }

        .restaurant-header div {
          display: flex;

          gap: 6px;
        }

        .restaurant-header i {
          width: 22px;

          height: 4px;

          border-radius: 99px;

          background:
            rgba(255,255,255,0.13);
        }

        .restaurant-content {
          margin-top: 28px;
        }

        .restaurant-content small {
          color: #67e8f9;

          font-size: 0.5rem;

          letter-spacing: 0.2em;
        }

        .restaurant-content h4 {
          margin: 5px 0;

          color: #f4ffff;

          font-size: 1.15rem;

          font-weight: 600;
        }

        .restaurant-content span {
          display: block;

          width: 65px;

          height: 2px;

          background: #22d3ee;
        }

        .restaurant-cards {
          position: absolute;

          left: 20px;

          right: 20px;

          bottom: 18px;

          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 8px;
        }

        .restaurant-cards div {
          padding: 8px;

          border:
            1px solid
            rgba(255,255,255,0.08);

          border-radius: 7px;

          background:
            rgba(255,255,255,0.04);
        }

        .restaurant-cards div > i {
          display: block;

          height: 25px;

          margin-bottom: 5px;

          border-radius: 4px;

          background:
            linear-gradient(
              135deg,
              #0e7490,
              #164e63
            );
        }

        .restaurant-cards div:nth-child(2) > i {
          background:
            linear-gradient(
              135deg,
              #92400e,
              #422006
            );
        }

        .restaurant-cards div:nth-child(3) > i {
          background:
            linear-gradient(
              135deg,
              #166534,
              #052e16
            );
        }

        .restaurant-cards strong,
        .restaurant-cards small {
          display: block;

          overflow: hidden;

          white-space: nowrap;

          text-overflow: ellipsis;
        }

        .restaurant-cards strong {
          color: #eaffff;

          font-size: 0.48rem;
        }

        .restaurant-cards small {
          margin-top: 2px;

          color:
            rgba(255,255,255,0.4);

          font-size: 0.38rem;
        }

        /* ==============================
           CARD CONTENT
        ============================== */

        .project-content {
          padding: 24px;
        }

        .project-title-row {
          display: flex;

          align-items: flex-start;

          justify-content:
            space-between;

          gap: 14px;

          margin-bottom: 12px;
        }

        .project-title-wrap {
          display: flex;

          align-items: baseline;

          gap: 10px;
        }

        .project-number {
          color: var(--accent);

          font-size: 0.7rem;

          font-weight: 600;
        }

        .project-title-wrap h3 {
          margin: 0;

          color: #f5f5f7;

          font-size: 1.22rem;

          line-height: 1.3;

          font-weight: 600;

          letter-spacing: -0.015em;
        }

        .project-label {
          flex-shrink: 0;

          padding: 4px 8px;

          border:
            1px solid
            rgba(255,255,255,0.1);

          border-radius: 999px;

          color:
            rgba(255,255,255,0.4);

          font-size: 0.56rem;

          font-weight: 600;

          letter-spacing: 0.1em;
        }

        .project-description {
          margin: 0 0 15px;

          color:
            rgba(255,255,255,0.68);

          font-size: 0.88rem;

          line-height: 1.65;

          font-weight: 400;
        }

        /* ==============================
           FEATURES
        ============================== */

        .project-features {
          display: flex;

          flex-wrap: wrap;

          gap: 7px 15px;

          margin-bottom: 16px;
        }

        .project-features span {
          color:
            rgba(255,255,255,0.58);

          font-size: 0.68rem;

          line-height: 1.5;
        }

        .project-features b {
          margin-right: 4px;

          color: var(--accent);
        }

        /* ==============================
           TECHNOLOGIES
        ============================== */

        .project-tags {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;

          padding-top: 14px;

          border-top:
            1px solid
            rgba(255,255,255,0.07);
        }

        .project-tags span {
          padding:
            5px 10px;

          border-radius: 999px;

          background:
            rgba(139,92,246,0.07);

          border:
            1px solid
            rgba(139,92,246,0.25);

          color: var(--accent);

          font-size: 0.66rem;

          font-weight: 500;
        }

        /* ==============================
           BUTTONS
        ============================== */

        .project-actions {
          display: flex;

          gap: 9px;

          margin-top: 18px;

          padding-top: 16px;

          border-top:
            1px solid
            rgba(255,255,255,0.07);
        }

        .project-button {
          min-width: 120px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 7px;

          padding:
            9px 15px;

          border-radius: 8px;

          text-decoration: none;

          font-family:
            "Poppins",
            sans-serif;

          font-size: 0.7rem;

          font-weight: 500;

          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .project-button:hover {
          transform:
            translateY(-2px);
        }

        .live-button {
          color: #0b0c10;

          background:
            var(--accent);

          border:
            1px solid
            var(--accent);
        }

        .github-button {
          color:
            rgba(255,255,255,0.78);

          background:
            rgba(255,255,255,0.04);

          border:
            1px solid
            rgba(255,255,255,0.14);
        }

        .github-button:hover {
          color: white;

          background:
            rgba(255,255,255,0.09);
        }

        /* ==============================
           ANIMATION
        ============================== */

        @keyframes projectEnter {
          from {
            opacity: 0;

            transform:
              translateY(18px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }
        }

        /* ==============================
           TABLET
        ============================== */

        @media (max-width: 1100px) {

          .projects-section {
            margin-left: 180px;
          }

        }

        /* ==============================
           MOBILE
        ============================== */

        @media (max-width: 900px) {

          .projects-section {
            margin-left: 64px;

            padding:
              5rem 2rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 600px) {

          .projects-section {
            margin-left: 0;

            padding:
              5rem 1.1rem
              4rem;
          }

          .pr-title {
            font-size: 2.8rem;
          }

          .pr-subtitle {
            font-size: 0.88rem;

            margin-bottom: 3rem;
          }

          .project-preview {
            height: 190px;
          }

          .project-content {
            padding: 20px 18px;
          }

          .project-title-wrap h3 {
            font-size: 1.08rem;
          }

          .project-description {
            font-size: 0.84rem;
          }

          .project-actions {
            gap: 8px;
          }

          .project-button {
            min-width: 0;

            flex: 1;

            padding:
              9px 10px;

            font-size: 0.66rem;
          }

        }

      `}</style>

      <section
        id="projects"
        className="projects-section"
        ref={sectionRef}
      >
        <div className="pr-inner">

          {/* Heading */}

          <div
            className="pr-label"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(18px)",
              transition:
                "all 0.5s ease",
            }}
          >
            <span className="pr-label-line" />
            Projects
          </div>

          <h2
            className="pr-title"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(18px)",
              transition:
                "all 0.6s ease 0.05s",
            }}
          >
            What I've Built
          </h2>

          <div className="pr-divider" />

          <p className="pr-subtitle">
            Selected projects built with React,
            JavaScript, and the MERN stack
          </p>

          {/* Frontend */}

          <ProjectGroup
            title="Frontend Projects"
            projects={FRONTEND_PROJECTS}
            visible={visible}
          />

          {/* Full Stack */}

          <ProjectGroup
            title="Full-Stack Projects"
            projects={FULLSTACK_PROJECTS}
            visible={visible}
          />

        </div>
      </section>
    </>
  );
}