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
        background:
          "linear-gradient(135deg, #f7ecdf 0%, #efd8c2 48%, #e5b98b 100%)",
        color: "#2b211c",
      }}
    >
      <div style={blobStyle("rgba(198, 93, 54, 0.32)", "-8%", "-10%", "420px")} />
      <div style={blobStyle("rgba(133, 62, 43, 0.24)", "68%", "60%", "360px")} />
      <div style={blobStyle("rgba(244, 191, 117, 0.28)", "38%", "82%", "300px")} />

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
        <div style={{ animation: "fadeInUp 1s ease-out" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(150, 76, 58, 0.12)",
              color: "#964c3a",
              padding: "0.5rem 1.2rem",
              borderRadius: "999px",
              fontSize: "0.95rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
            }}
          >
            Welcome to my portfolio
          </div>

          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "800",
              lineHeight: 1.15,
              marginBottom: "1rem",
              color: "#2b211c",
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                color: "#964c3a",
              }}
            >
              Hemalatha G
            </span>
          </h1>

          <h2
            style={{
              fontSize: "1.45rem",
              color: "#5b463d",
              fontWeight: "500",
              marginBottom: "1.5rem",
            }}
          >
            Aspiring Full-Stack Developer | ML and SQL Enthusiast
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#6b564b",
              lineHeight: 1.8,
              marginBottom: "2rem",
              maxWidth: "520px",
            }}
          >
            I craft modern web applications and explore machine learning to build
            smarter, scalable digital solutions with clean interfaces and thoughtful
            user experiences.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <SocialIcon href="https://github.com/Hemalatha-Ganesan" icon={<FaGithub size={20} />} />
            <SocialIcon href="https://leetcode.com/u/hemalatha_08/" icon={<SiLeetcode size={20} />} />
            <SocialIcon
              href="https://www.hackerrank.com/profile/hemalathaganesan"
              icon={<FaHackerrank size={20} />}
            />
            <SocialIcon href="https://linkedin.com" icon={<FaLinkedin size={20} />} />
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => scrollToSection("projects")}
              style={primaryButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 14px 30px rgba(150,76,58,0.28)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 24px rgba(47,35,30,0.18)";
              }}
            >
              View My Work
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              style={secondaryButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#964c3a";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#964c3a";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Contact Me
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "3rem",
              flexWrap: "wrap",
            }}
          >
            <StatBox number="3+" label="Projects" />
            <StatBox number="5+" label="Certifications" />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            animation: "fadeInUp 1.2s ease-out",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              border: "3px dashed rgba(150, 76, 58, 0.26)",
              animation: "spin 20s linear infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              border: "2px solid rgba(47, 35, 30, 0.12)",
              animation: "spin 25s linear infinite reverse",
            }}
          />

          <div
            style={{
              position: "relative",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              padding: "8px",
              background: "linear-gradient(135deg, #964c3a, #2f231e)",
              boxShadow: "0 24px 50px rgba(47,35,30,0.22)",
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

          <FloatingBadge text="React" top="10%" right="5%" color="#c65d36" />
          <FloatingBadge text="Python" bottom="15%" left="0%" color="#8a5a44" />
          <FloatingBadge text="Java" top="50%" right="-10%" color="#d29a2e" />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "2rem",
          color: "#964c3a",
          cursor: "pointer",
          animation: "bounce 2s infinite",
          zIndex: 3,
        }}
        onClick={() => scrollToSection("about")}
      >
        v
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

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.82)",
        color: "#964c3a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 14px rgba(150,76,58,0.12)",
        transition: "all 0.3s ease",
        textDecoration: "none",
        border: "1px solid rgba(150,76,58,0.12)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#964c3a";
        e.currentTarget.style.color = "white";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.82)";
        e.currentTarget.style.color = "#964c3a";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {icon}
    </a>
  );
}

function StatBox({ number, label }) {
  return (
    <div>
      <div
        style={{
          fontSize: "1.8rem",
          fontWeight: "800",
          color: "#964c3a",
        }}
      >
        {number}
      </div>
      <div
        style={{
          fontSize: "0.9rem",
          color: "#6b564b",
          fontWeight: "500",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function FloatingBadge({ text, top, bottom, left, right, color }) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        bottom,
        left,
        right,
        background: "rgba(255,255,255,0.92)",
        color: "#2b211c",
        padding: "0.5rem 1rem",
        borderRadius: "999px",
        fontSize: "0.85rem",
        fontWeight: "700",
        boxShadow: "0 8px 18px rgba(47,35,30,0.12)",
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

function blobStyle(color, left, top, size) {
  return {
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    background: color,
    filter: "blur(80px)",
    opacity: 0.9,
    left,
    top,
    zIndex: 0,
  };
}

const primaryButtonStyle = {
  padding: "0.9rem 2rem",
  borderRadius: "999px",
  background: "linear-gradient(90deg, #964c3a, #2f231e)",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "700",
  boxShadow: "0 10px 24px rgba(47,35,30,0.18)",
  transition: "all 0.3s ease",
};

const secondaryButtonStyle = {
  padding: "0.9rem 2rem",
  borderRadius: "999px",
  background: "transparent",
  color: "#964c3a",
  border: "2px solid #964c3a",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "700",
  transition: "all 0.3s ease",
};

export default Hero;
