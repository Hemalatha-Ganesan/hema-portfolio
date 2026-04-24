import React from "react";

function Navbar({
  isScrolled,
  activeSection,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen,
}) {
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  const sidebarWidth = "260px";
  const isSidebarVisible = isMenuOpen;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: sidebarWidth,
          background: isScrolled
            ? "linear-gradient(180deg, rgba(47, 35, 30, 0.98), rgba(150, 76, 58, 0.98))"
            : "linear-gradient(180deg, #2f231e, #964c3a)",
          backdropFilter: "blur(14px)",
          padding: "2rem 1.5rem",
          zIndex: 1000,
          transition: "all 0.3s ease",
          boxShadow: "8px 0 28px rgba(47,35,30,0.24)",
          display: "flex",
          flexDirection: "column",
          transform: isSidebarVisible ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <h2
          style={{
            margin: "0 0 3rem 0",
            color: "#f8fafc",
            fontSize: "1.9rem",
            fontWeight: "800",
            textAlign: "center",
            letterSpacing: "0.04em",
          }}
        >
          Hema.dev
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.55rem",
            flex: 1,
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background:
                  activeSection === item.id ? "rgba(244, 191, 117, 0.18)" : "transparent",
                border: "1px solid transparent",
                color: "#f8fafc",
                cursor: "pointer",
                fontSize: "1rem",
                padding: "0.9rem 1.15rem",
                borderRadius: "14px",
                textAlign: "left",
                transition: "all 0.3s ease",
                opacity: activeSection === item.id ? 1 : 0.8,
                fontWeight: activeSection === item.id ? "700" : "500",
                borderLeft:
                  activeSection === item.id
                    ? "4px solid #f6c177"
                    : "4px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(244, 191, 117, 0.12)";
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  activeSection === item.id ? "rgba(244, 191, 117, 0.18)" : "transparent";
                e.currentTarget.style.opacity = activeSection === item.id ? "1" : "0.8";
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div
          style={{
            marginTop: "auto",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            textAlign: "center",
            color: "rgba(255,236,214,0.72)",
            fontSize: "0.85rem",
          }}
        >
          Copyright 2025 Hema
        </div>
      </nav>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          position: "fixed",
          top: "1rem",
          left: "1rem",
          zIndex: 1001,
          background: "linear-gradient(135deg, #2f231e, #964c3a)",
          border: "none",
          color: "white",
          cursor: "pointer",
          padding: "0.7rem 1rem",
          fontSize: "1rem",
          fontWeight: "700",
          borderRadius: "12px",
          boxShadow: "0 10px 24px rgba(150, 76, 58, 0.28)",
        }}
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(43,33,28,0.45)",
            zIndex: 999,
          }}
        />
      )}

      <div
        style={{
          width: "0",
          flexShrink: 0,
        }}
      />
    </>
  );
}

export default Navbar;
