import React from "react";
import myPhoto from "../assets/my_photo.jpg";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero({ scrollToSection }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "2rem 4rem",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f3e8ff 100%)",
        color: "#1e293b",
      }}
    >
      {/* Decorative Blobs */}
      <div style={blobStyle("#c7d2fe", "-5%", "-10%", "400px")} />
      <div style={blobStyle("#ddd6fe", "70%", "60%", "350px")} />
      <div style={blobStyle("#fbcfe8", "40%", "80%", "300px")} />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "4rem",
          alignItems: "center",
          width: "100%",
          zIndex: 2,
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ animation: "fadeInUp 1s ease-out" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(99, 102, 241, 0.1)",
              color: "#4f46e5",
              padding: "0.5rem 1.2rem",
              borderRadius: "50px",
              fontSize: "0.95rem",
              fontWeight: "600",
              marginBottom: "1.5rem",
            }}
          >
            👋 Welcome to my portfolio
          </div>

          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "800",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #4f46e5, #9333ea)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Hemalatha G
            </span>
          </h1>

          <h2
            style={{
              fontSize: "1.5rem",
              color: "#475569",
              fontWeight: "500",
              marginBottom: "1.5rem",
            }}
          >
            Aspiring Full-Stack Developer | ML & SQL Enthusiast
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748b",
              lineHeight: 1.8,
              marginBottom: "2rem",
              maxWidth: "500px",
            }}
          >
            I craft modern web applications and explore machine learning to build
            smarter, scalable digital solutions. Passionate about Java, DSA, and
            creating impactful user experiences.
          </p>

          {/* Social Icons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <SocialIcon
              href="https://github.com/Hemalatha-Ganesan"
              icon={<FaGithub size={20} />}
            />
            <SocialIcon
              href="https://leetcode.com/u/hemalatha_08/"
              icon={<SiLeetcode size={20} />}
            />
            <SocialIcon
              href="https://www.hackerrank.com/profile/hemalathaganesan"
              icon={<FaHackerrank size={20} />}
            />
            <SocialIcon
              href="https://linkedin.com"
              icon={<FaLinkedin size={20} />}
            />
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => scrollToSection("projects")}
              style={{
                padding: "0.9rem 2rem",
                borderRadius: "50px",
                background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "600",
                boxShadow: "0 8px 25px rgba(79, 70, 229, 0.35)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(79, 70, 229, 0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(79, 70, 229, 0.35)";
              }}
            >
              View My Work
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              style={{
                padding: "0.9rem 2rem",
                borderRadius: "50px",
                background: "transparent",
                color: "#4f46e5",
                border: "2px solid #4f46e5",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "600",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#4f46e5";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#4f46e5";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Contact Me
            </button>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "3rem",
            }}
          >
            <StatBox number="10+" label="Projects" />
            <StatBox number="5+" label="Certifications" />
            <StatBox number="3+" label="Years Coding" />
          </div>
        </div>

        {/* RIGHT CONTENT - Photo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            animation: "fadeInUp 1.2s ease-out",
          }}
        >
          {/* Decorative ring */}
          <div
            style={{
              position: "absolute",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              border: "3px dashed #c7d2fe",
              animation: "spin 20s linear infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              border: "2px solid #ddd6fe",
              animation: "spin 25s linear infinite reverse",
            }}
          />

          {/* Photo container */}
          <div
            style={{
              position: "relative",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              padding: "8px",
              background: "linear-gradient(135deg, #4f46e5, #9333ea)",
              boxShadow: "0 20px 50px rgba(79, 70, 229, 0.3)",
            }}
          >
            <img
              src={myPhoto}
              alt="Hemalatha"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid white",
              }}
            />
          </div>

          {/* Floating badges */}
          <FloatingBadge
            text="React"
            top="10%"
            right="5%"
            color="#61dafb"
          />
          <FloatingBadge
            text="Python"
            bottom="15%"
            left="0%"
            color="#ffd43b"
          />
          <FloatingBadge
            text="Java"
            top="50%"
            right="-10%"
            color="#f89820"
          />
        </div>
      </div>

      {/* Down Arrow */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "2rem",
          color: "#4f46e5",
          cursor: "pointer",
          animation: "bounce 2s infinite",
          zIndex: 3,
        }}
        onClick={() => scrollToSection("about")}
      >
        ⌄
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}

/* Social Icon Component */
function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        background: "white",
        color: "#4f46e5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#4f46e5";
        e.currentTarget.style.color = "white";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "white";
        e.currentTarget.style.color = "#4f46e5";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {icon}
    </a>
  );
}

/* Stat Box Component */
function StatBox({ number, label }) {
  return (
    <div>
      <div
        style={{
          fontSize: "1.8rem",
          fontWeight: "800",
          color: "#4f46e5",
        }}
      >
        {number}
      </div>
      <div
        style={{
          fontSize: "0.9rem",
          color: "#64748b",
          fontWeight: "500",
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* Floating Badge */
function FloatingBadge({ text, top, bottom, left, right, color }) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        bottom,
        left,
        right,
        background: "white",
        color: "#334155",
        padding: "0.5rem 1rem",
        borderRadius: "50px",
        fontSize: "0.85rem",
        fontWeight: "600",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        animation: "float 3s ease-in-out infinite",
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        zIndex: 5,
      }}
    >
      <span
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: color,
          display: "inline-block",
        }}
      />
      {text}
    </div>
  );
}

/* Blob Style */
function blobStyle(color, left, top, size) {
  return {
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    background: color,
    filter: "blur(80px)",
    opacity: 0.4,
    left,
    top,
    zIndex: 0,
  };
}

export default Hero;

