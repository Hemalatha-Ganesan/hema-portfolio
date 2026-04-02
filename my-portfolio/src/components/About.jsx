import React from "react";
import BioImage from "../assets/my_photo.jpg";
import { FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";




function About() {
  return (
    <section
      id="about"
      style={{
        padding: "5rem 2rem",
        backgroundColor: "#f9fafb",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1000px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            textAlign: "center",
            color: "#1f2937",
            fontWeight: "700",
          }}
        >
          About Me
        </h2>

        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "#667eea",
            margin: "0 auto 3rem",
            borderRadius: "2px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {/* LEFT SIDE - Text Section */}
          <div>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#4b5563",
                marginBottom: "1.5rem",
              }}
            >
              I'm <strong>Hema</strong>, a passionate Computer Science student dedicated to creating
              impactful digital experiences through code. My journey in technology is driven by
              curiosity and a commitment to continuous learning.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#4b5563",
              }}
            >
              I specialize in building dynamic web applications with modern frameworks, managing
              robust databases, and exploring innovative AI & Machine Learning solutions. I believe
              in writing clean, efficient code that solves real-world problems.
            </p>

            {/* Coding Platform Icons */}
            <div style={{ fontSize: "28px", marginTop: "1.5rem" }}>
              <a
                href="https://leetcode.com/u/hemalatha_08/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLeetcode style={{ margin: "0 10px", color: "#f39c12" }} />
              </a>
              <a
                href="https://www.hackerrank.com/profile/hemalathaganesan"
                target="_blank"
                rel="noreferrer"
              >
                <FaHackerrank style={{ margin: "0 10px", color: "#2ecc71" }} />
              </a>
              <a
                href="https://github.com/Hemalatha-Ganesan"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub style={{ margin: "0 10px", color: "#000" }} />
              </a>
            </div>
          </div>

          <a href="/src/assets/7376231CS179_Resume.pdf" download="Hemalatha's Resume.pdf">
               <button className="bg-green-500 text-white px-5 py-2 mt-4 rounded-lg hover:bg-green-600">
                 ⬇️ Download Resume
               </button>
          </a>

          {/* RIGHT SIDE - Image + Quick Facts */}
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            {/* Bio Image */}
            <img
              src={BioImage}
              alt="Hemalatha"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "1.2rem",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            />

            <h3
              style={{
                marginBottom: "1rem",
                color: "#667eea",
                fontSize: "1.3rem",
              }}
            >
              Quick Facts
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                lineHeight: "2",
                fontSize: "1.05rem",
              }}
            >
              <li>🎓 Computer Science Student</li>
              <li>💻 Full-Stack Development</li>
              <li>🤖 ML & AI Enthusiast</li>
              <li>🚀 Always Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
