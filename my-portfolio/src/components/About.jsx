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
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Tamil", level: "Fluent" },
    { name: "Kannada", level: "Native" },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        background: "linear-gradient(180deg, #fff7ee 0%, #f7ecdf 100%)",
        minHeight: "70vh",
      }}
    >
      <div style={{ maxWidth: "1100px", width: "100%", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(150, 76, 58, 0.12)",
              color: "#964c3a",
              padding: "0.4rem 1rem",
              borderRadius: "999px",
              fontSize: "0.85rem",
              fontWeight: "700",
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
              color: "#2b211c",
              marginBottom: "0.5rem",
            }}
          >
            Know Who <span style={{ color: "#964c3a" }}>I Am</span>
          </h2>
          <div
            style={{
              width: "60px",
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
            gap: "3rem",
            alignItems: "start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "320px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px rgba(47,35,30,0.15)",
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
                  border: "4px solid #964c3a",
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
                  background: "#f0d2b5",
                  borderRadius: "16px",
                  zIndex: -1,
                }}
              />
            </div>

            <div
              style={{
                background: "#fffaf5",
                borderRadius: "16px",
                border: "1px solid #ead7c4",
                padding: "1.2rem 1.3rem",
                boxShadow: "0 8px 18px rgba(47,35,30,0.06)",
                maxWidth: "360px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  fontSize: "1.02rem",
                  fontWeight: "700",
                  color: "#2b211c",
                  marginBottom: "0.95rem",
                }}
              >
                Languages Known
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {languages.map((language, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                      paddingBottom: idx !== languages.length - 1 ? "0.75rem" : "0",
                      borderBottom:
                        idx !== languages.length - 1 ? "1px solid #f1dfcf" : "none",
                    }}
                  >
                    <span
                      style={{
                        color: "#5b463d",
                        fontWeight: "600",
                        fontSize: "0.98rem",
                      }}
                    >
                      {language.name}
                    </span>
                    <span
                      style={{
                        color: "#964c3a",
                        background: "#fff3e6",
                        border: "1px solid #e8c9ac",
                        borderRadius: "999px",
                        padding: "0.32rem 0.72rem",
                        fontSize: "0.82rem",
                        fontWeight: "700",
                      }}
                    >
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3
              style={{
                fontSize: "1.6rem",
                fontWeight: "700",
                color: "#2b211c",
                marginBottom: "1rem",
              }}
            >
              I'm Hemalatha G, a passionate{" "}
              <span style={{ color: "#964c3a" }}>Full-Stack Developer</span> and{" "}
              <span style={{ color: "#5a3428" }}>ML Enthusiast</span>
            </h3>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: "#6b564b",
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
                color: "#6b564b",
                marginBottom: "2rem",
              }}
            >
              I have hands-on experience with modern frameworks like React, robust
              databases like MySQL and MongoDB, and I'm actively exploring AI and ML
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
                    padding: "0.95rem 1rem",
                    background: "#fffaf5",
                    borderRadius: "14px",
                    border: "1px solid #ead7c4",
                  }}
                >
                  <span style={{ color: "#964c3a", fontSize: "1.1rem" }}>{item.icon}</span>
                  <div>
                    <div
                      style={{ fontSize: "0.75rem", color: "#8a6f62", fontWeight: "600" }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{ fontSize: "0.95rem", color: "#2b211c", fontWeight: "700" }}
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
                  padding: "0.9rem 1.8rem",
                  background: "linear-gradient(90deg, #964c3a, #2f231e)",
                  color: "white",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "0.95rem",
                  boxShadow: "0 10px 24px rgba(47,35,30,0.16)",
                }}
              >
                Download CV
              </a>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <SocialLink href="https://github.com/Hemalatha-Ganesan" icon={<FaGithub size={18} />} />
                <SocialLink href="https://leetcode.com/u/hemalatha_08/" icon={<SiLeetcode size={18} />} />
                <SocialLink
                  href="https://www.hackerrank.com/profile/hemalathaganesan"
                  icon={<FaHackerrank size={18} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        background: "#fff3e6",
        color: "#964c3a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        border: "1px solid #e8c9ac",
      }}
    >
      {icon}
    </a>
  );
}

export default About;
