import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaCode,
  FaPaintBrush,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiVscodium,
  SiLeetcode,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 90 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 85 },
        { name: "JavaScript", icon: <FaJs />, level: 80 },
        { name: "React", icon: <FaReact />, level: 75 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 80 },
      ],
    },
    {
      title: "Backend & Database",
      icon: "⚙️",
      skills: [
        { name: "Java", icon: <FaCode />, level: 85 },
        { name: "Python", icon: <FaPython />, level: 80 },
        { name: "MySQL", icon: <SiMysql />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb />, level: 70 },
        { name: "SQL", icon: <SiMysql />, level: 80 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 80 },
        { name: "VS Code", icon: <SiVscodium />, level: 90 },
        { name: "Figma", icon: <FaFigma />, level: 75 },
        { name: "Canva", icon: <FaPaintBrush />, level: 85 },
        { name: "Problem Solving", icon: <SiLeetcode />, level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "#f8fafc",
        minHeight: "70vh",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(79, 70, 229, 0.1)",
              color: "#4f46e5",
              padding: "0.4rem 1rem",
              borderRadius: "50px",
              fontSize: "0.85rem",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "1rem",
            }}
          >
            My Skills
          </span>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              color: "#1e293b",
              marginBottom: "0.5rem",
            }}
          >
            Skills & <span style={{ color: "#4f46e5" }}>Expertise</span>
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "#4f46e5",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
                border: "1px solid #e2e8f0",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)";
                e.currentTarget.style.borderColor = "#c7d2fe";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{category.icon}</span>
                <h3
                  style={{
                    color: "#1e293b",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                  }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skill Bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.4rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: "#475569",
                          fontWeight: "600",
                          fontSize: "0.95rem",
                        }}
                      >
                        <span style={{ color: "#4f46e5", fontSize: "1.1rem" }}>
                          {skill.icon}
                        </span>
                        {skill.name}
                      </div>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          color: "#4f46e5",
                          fontWeight: "700",
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar Background */}
                    <div
                      style={{
                        width: "100%",
                        height: "8px",
                        backgroundColor: "#e2e8f0",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      {/* Progress Bar Fill */}
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: "100%",
                          background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
                          borderRadius: "10px",
                          transition: "width 1s ease-in-out",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

