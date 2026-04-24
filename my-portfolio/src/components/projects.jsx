import React from "react";

function Projects() {
  const projects = [
    {
      title: "Medical Diagnosis Using Deep Learning",
      category: "AI / Healthcare",
      summary:
        "Deep-learning solution for detecting COVID-19 and pneumonia from chest X-ray images.",
      highlight: "Added Grad-CAM for more explainable predictions.",
      tech: ["Python", "TensorFlow", "DenseNet", "EfficientNet", "Xception", "Grad-CAM"],
      githubUrl: "https://github.com/Hemalatha-Ganesan/Medical_diagnosis_using_ML",
      color: "#964c3a",
    },
    {
      title: "Personal Portfolio Website",
      category: "Frontend / Branding",
      summary:
        "Responsive portfolio website to showcase projects, skills, certifications, and profile details.",
      highlight: "Built with reusable React components and mobile-friendly layout.",
      tech: ["React", "JavaScript", "CSS", "Responsive UI", "GitHub"],
      liveUrl: "https://hema-portfolio-lake.vercel.app/",
      color: "#5a3428",
    },
    {
      title: "AI-Driven Course Recommendation System",
      category: "Full Stack / AI",
      summary:
        "Course recommendation platform that suggests learning paths based on user interests and goals.",
      highlight: "Integrated AI recommendation logic into the user workflow.",
      tech: ["React", "JavaScript", "OpenAI API", "Tailwind CSS", "Git", "Vercel"],
      liveUrl: "https://ai-course-recommendation-system.vercel.app/login",
      color: "#d29a2e",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "5rem 2rem",
        background: "linear-gradient(180deg, #f8efe6 0%, #fff7ee 100%)",
        minHeight: "80vh",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(150, 76, 58, 0.12)",
              color: "#964c3a",
              padding: "0.45rem 1rem",
              borderRadius: "999px",
              fontSize: "0.82rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "1rem",
            }}
          >
            Featured Work
          </span>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "0.75rem",
              color: "#2b211c",
              fontWeight: "800",
            }}
          >
            Projects With <span style={{ color: "#964c3a" }}>Impact</span>
          </h2>
          <p
            style={{
              maxWidth: "560px",
              margin: "0 auto 1rem",
              color: "#6b564b",
              lineHeight: "1.65",
              fontSize: "0.92rem",
            }}
          >
            Selected work across frontend development, full-stack applications, and AI.
          </p>
          <div
            style={{
              width: "64px",
              height: "4px",
              backgroundColor: "#964c3a",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      style={{
        backgroundColor: "white",
        borderRadius: "22px",
        overflow: "hidden",
        boxShadow: "0 10px 24px rgba(47,35,30,0.08)",
        transition: "transform 0.3s, box-shadow 0.3s",
        border: "1px solid #ead7c4",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 20px 36px rgba(47,35,30,0.13)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 24px rgba(47,35,30,0.08)";
      }}
    >
      <div
        style={{
          padding: "1.25rem",
          background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)`,
          color: "white",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            background: "rgba(255,255,255,0.18)",
            padding: "0.35rem 0.7rem",
            borderRadius: "999px",
            fontSize: "0.72rem",
            fontWeight: "700",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "0.9rem",
          }}
        >
          {project.category}
        </div>
        <h3
          style={{
            fontSize: "1.3rem",
            fontWeight: "800",
            lineHeight: "1.3",
          }}
        >
          {project.title}
        </h3>
      </div>

      <div
        style={{
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.95rem",
          flex: 1,
        }}
      >
        <p
          style={{
            color: "#6b564b",
            lineHeight: "1.6",
            fontSize: "0.9rem",
          }}
        >
          {project.summary}
        </p>

        <div
          style={{
            background: "#fffaf5",
            border: "1px solid #f1dfcf",
            borderRadius: "14px",
            padding: "0.75rem 0.85rem",
            color: "#5b463d",
            fontSize: "0.85rem",
            lineHeight: "1.5",
            fontWeight: "500",
          }}
        >
          {project.highlight}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.45rem",
          }}
        >
          {project.tech.map((tech, i) => (
            <span
              key={i}
              style={{
                backgroundColor: "#fff3e6",
                color: "#964c3a",
                padding: "0.28rem 0.65rem",
                borderRadius: "999px",
                fontSize: "0.78rem",
                fontWeight: "600",
                border: "1px solid #e8c9ac",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: "0.65rem",
            flexWrap: "wrap",
            marginTop: "auto",
          }}
        >
          {project.liveUrl && (
            <ActionLink href={project.liveUrl} label="Live Demo" background={project.color} />
          )}
          {project.githubUrl && (
            <ActionLink href={project.githubUrl} label="GitHub" background="#2b211c" />
          )}
        </div>
      </div>
    </article>
  );
}

function ActionLink({ href, label, background }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: background,
        color: "white",
        padding: "0.72rem 1.1rem",
        borderRadius: "999px",
        cursor: "pointer",
        fontSize: "0.86rem",
        fontWeight: "700",
        transition: "opacity 0.3s",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.9";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
      }}
    >
      {label}
    </a>
  );
}

export default Projects;
