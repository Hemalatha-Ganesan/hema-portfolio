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
  FaJava,
  FaBrain,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMongodb, SiVscodium } from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      tag: "Core",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Programming",
      tag: "Logic",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "DSA", icon: <FaCode /> },
        { name: "Problem Solving", icon: <FaCode /> },
      ],
    },
    {
      title: "Database & Tools",
      tag: "Stack",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "VS Code", icon: <SiVscodium /> },
        { name: "Figma", icon: <FaFigma /> },
      ],
    },
    {
      title: "Learning",
      tag: "Focus",
      skills: [
        { name: "Machine Learning", icon: <FaBrain /> },
        { name: "AI Integration", icon: <FaBrain /> },
        { name: "Full-Stack Projects", icon: <FaReact /> },
        { name: "SQL Optimization", icon: <SiMysql /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "#fff7ee",
        minHeight: "70vh",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(150, 76, 58, 0.12)",
              color: "#964c3a",
              padding: "0.42rem 1rem",
              borderRadius: "999px",
              fontSize: "0.82rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.9rem",
            }}
          >
            My Skills
          </span>
          <h2
            style={{
              fontSize: "2.35rem",
              fontWeight: "800",
              color: "#2b211c",
              marginBottom: "0.55rem",
            }}
          >
            Skills & <span style={{ color: "#964c3a" }}>Expertise</span>
          </h2>
          <p
            style={{
              maxWidth: "620px",
              margin: "0 auto 1rem",
              color: "#6b564b",
              lineHeight: "1.7",
              fontSize: "0.96rem",
            }}
          >
            A concise overview of the technologies and areas I work with most.
          </p>
          <div
            style={{
              width: "62px",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "white",
                padding: "1.5rem",
                borderRadius: "20px",
                boxShadow: "0 8px 22px rgba(47,35,30,0.07)",
                border: "1px solid #ead7c4",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 30px rgba(47,35,30,0.12)";
                e.currentTarget.style.borderColor = "#efc9a6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 22px rgba(47,35,30,0.07)";
                e.currentTarget.style.borderColor = "#ead7c4";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <h3
                  style={{
                    color: "#2b211c",
                    fontSize: "1.18rem",
                    fontWeight: "700",
                  }}
                >
                  {category.title}
                </h3>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "#964c3a",
                    background: "#fff3e6",
                    borderRadius: "999px",
                    padding: "0.32rem 0.7rem",
                    fontWeight: "800",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {category.tag}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.75rem 0.9rem",
                      borderRadius: "14px",
                      background: "#fffaf5",
                      border: "1px solid #f1dfcf",
                      color: "#5b463d",
                      fontWeight: "600",
                      fontSize: "0.94rem",
                    }}
                  >
                    <span
                      style={{
                        color: "#964c3a",
                        fontSize: "1.05rem",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "20px",
                      }}
                    >
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
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
