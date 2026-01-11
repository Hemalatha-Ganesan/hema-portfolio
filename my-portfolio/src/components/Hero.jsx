import React from "react";

function Hero({ scrollToSection }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #0F172A 0%, #1E1B4B 40%, #312E81 100%)",
        color: "white",
        animation: "fadeIn 1.2s ease-out",
      }}
    >
      {/* TECH GRID BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      ></div>

      {/* PARTICLE GLOWING SPHERES */}
      <div style={pulseBall(15, "20%", "15%", "#6EE7B7")}></div>
      <div style={pulseBall(18, "70%", "75%", "#93C5FD")}></div>
      <div style={pulseBall(22, "40%", "85%", "#F472B6")}></div>

      {/* HERO TEXT */}
      <div style={{ maxWidth: "850px", zIndex: 2 }}>
        <h3
          style={{
            fontSize: "1.2rem",
            opacity: 0.9,
            animation: "fadeInUp 0.8s ease-out",
          }}
        >
          👋 Hello, Welcome to my portfolio
        </h3>

        <h1
          style={{
            fontSize: "3.8rem",
            fontWeight: "800",
            margin: "1rem 0",
            background:
              "linear-gradient(90deg, #A78BFA, #FDE68A, #93C5FD)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            animation: "fadeInUp 1.1s ease-out",
          }}
        >
          I'm Hemalatha G
        </h1>

        <p
          style={{
            fontSize: "1.6rem",
            opacity: 0.95,
            marginBottom: "1.5rem",
            animation: "fadeInUp 1.3s ease-out",
          }}
        >
          Aspiring Full-Stack Developer | ML & SQL Enthusiast | Java & DSA Practitioner
        </p>

        <p
          style={{
            fontSize: "1.2rem",
            opacity: 0.8,
            marginBottom: "2rem",
            maxWidth: "650px",
            margin: "0 auto 2rem auto",
            animation: "fadeInUp 1.4s ease-out",
          }}
        >
          Crafting modern web applications and exploring machine learning to build smarter, scalable digital solutions.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            animation: "fadeInUp 1.6s ease-out",
          }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            style={primaryBtn}
          >
            View My Work
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            style={outlineBtn}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* DOWN ARROW */}
      <div
        style={{
          fontSize: "2.7rem",
          position: "absolute",
          bottom: "1.5rem",
          cursor: "pointer",
          opacity: 0.8,
          animation: "bounce 2s infinite",
          zIndex: 3,
        }}
        onClick={() => scrollToSection("about")}
      >
        ⌄
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.25); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}

/* ----------- BUTTON STYLES ----------- */
const primaryBtn = {
  padding: "1rem 2rem",
  borderRadius: "50px",
  background: "linear-gradient(90deg, #6366F1, #8B5CF6)",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontSize: "1.1rem",
  fontWeight: "600",
  boxShadow: "0 8px 25px rgba(99,102,241,0.4)",
  transition: "0.3s",
};

const outlineBtn = {
  padding: "1rem 2rem",
  borderRadius: "50px",
  background: "transparent",
  color: "#D1D5DB",
  border: "2px solid #D1D5DB",
  cursor: "pointer",
  fontSize: "1.1rem",
  fontWeight: "600",
  transition: "0.3s",
};

/* ----------- GLOWING TECH SPHERES ----------- */
function pulseBall(size, left, top, color) {
  return {
    position: "absolute",
    width: `${size}rem`,
    height: `${size}rem`,
    borderRadius: "50%",
    background: color,
    filter: "blur(80px)",
    opacity: 0.25,
    left,
    top,
    animation: "pulseGlow 6s infinite ease-in-out",
    zIndex: 1,
  };
}

export default Hero;
