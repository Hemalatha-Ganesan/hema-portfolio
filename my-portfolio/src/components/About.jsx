import React from "react";
import myPhoto from "../assets/hema_jean_photo.jpeg";
import {
  FaGithub,
  FaHackerrank,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCalendarAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function About() {
  const personalInfo = [
    {
      icon: <FaGraduationCap />,
      label: "Degree",
      value: "B.E Computer Science and Engineering",
    },
    { icon: <FaEnvelope />, label: "Email", value: "hemalathaganesan08@gmail.com" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Tamil Nadu, India" },
    { icon: <FaCalendarAlt />, label: "Year", value: "3rd Year" },
  ];

  return (
    <section
      id="about"
      style={{ padding: "6rem 2rem", backgroundColor: "#ffffff", minHeight: "70vh" }}
    >
      <div style={{ maxWidth: "1100px", width: "100%", margin: "0 auto" }}>
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
            About Me
          </span>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              color: "#1e293b",
              marginBottom: "0.5rem",
            }}
          >
            Know Who <span style={{ color: "#4f46e5" }}>I Am</span>
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "320px",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={myPhoto}
                alt="Hemalatha"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "-15px",
                left: "-15px",
                width: "80px",
                height: "80px",
                border: "4px solid #4f46e5",
                borderRadius: "16px",
                zIndex: -1,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-15px",
                right: "-15px",
                width: "80px",
                height: "80px",
                background: "#c7d2fe",
                borderRadius: "16px",
                zIndex: -1,
              }}
            />
          </div>

          <div>
            <h3
              style={{
                fontSize: "1.6rem",
                fontWeight: "700",
                color: "#1e293b",
                marginBottom: "1rem",
              }}
            >
              I'm Hemalatha G, a passionate{" "}
              <span style={{ color: "#4f46e5" }}>Full-Stack Developer</span> and{" "}
              <span style={{ color: "#4f46e5" }}>ML Enthusiast</span>
            </h3>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: "#64748b",
                marginBottom: "1.5rem",
              }}
            >
              I am a dedicated Computer Science student with a strong foundation in
              full-stack web development, database management, and machine learning. I
              enjoy solving complex problems and building applications that make a real
              difference.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: "#64748b",
                marginBottom: "2rem",
              }}
            >
              I have hands-on experience with modern frameworks like React, robust
              databases like MySQL and MongoDB, and I'm actively exploring AI/ML
              domains.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {personalInfo.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.8rem 1rem",
                    background: "#f8fafc",
                    borderRadius: "10px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <span style={{ color: "#4f46e5", fontSize: "1.1rem" }}>{item.icon}</span>
                  <div>
                    <div
                      style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: "500" }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{ fontSize: "0.95rem", color: "#334155", fontWeight: "600" }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/src/assets/7376231CS179_Resume.pdf"
                download="Hemalatha_Resume.pdf"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.8rem",
                  background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
                  color: "white",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  boxShadow: "0 8px 20px rgba(79, 70, 229, 0.3)",
                }}
              >
                Download CV
              </a>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <a
                  href="https://github.com/Hemalatha-Ganesan"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#f1f5f9",
                    color: "#475569",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://leetcode.com/u/hemalatha_08/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#f1f5f9",
                    color: "#475569",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <SiLeetcode size={18} />
                </a>
                <a
                  href="https://www.hackerrank.com/profile/hemalathaganesan"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#f1f5f9",
                    color: "#475569",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <FaHackerrank size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
