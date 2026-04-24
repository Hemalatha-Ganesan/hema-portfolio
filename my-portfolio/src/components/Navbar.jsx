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
  const isDesktop = typeof window !== "undefined" ? window.innerWidth >= 768 : true;
  const isSidebarVisible = isMenuOpen || isDesktop;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: sidebarWidth,
          backgroundColor: isScrolled
            ? "rgba(79, 70, 229, 0.98)"
            : "rgba(79, 70, 229, 1)",
          backdropFilter: "blur(10px)",
          padding: "2rem 1.5rem",
          zIndex: 1000,
          transition: "all 0.3s ease",
          boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          transform: isSidebarVisible ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <h2
          style={{
            margin: "0 0 3rem 0",
            color: "white",
            fontSize: "1.8rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Hema.dev
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            flex: 1,
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background:
                  activeSection === item.id ? "rgba(255,255,255,0.15)" : "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "1rem",
                padding: "0.9rem 1.2rem",
                borderRadius: "10px",
                textAlign: "left",
                transition: "all 0.3s ease",
                opacity: activeSection === item.id ? 1 : 0.75,
                fontWeight: activeSection === item.id ? "600" : "400",
                borderLeft:
                  activeSection === item.id
                    ? "4px solid white"
                    : "4px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  activeSection === item.id ? "rgba(255,255,255,0.15)" : "none";
                e.currentTarget.style.opacity = activeSection === item.id ? "1" : "0.75";
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
            borderTop: "1px solid rgba(255,255,255,0.1)",
            textAlign: "center",
            color: "rgba(255,255,255,0.6)",
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
          background: "rgba(79, 70, 229, 1)",
          border: "none",
          color: "white",
          cursor: "pointer",
          padding: "0.7rem 1rem",
          fontSize: "1.3rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          display: isDesktop ? "none" : "block",
        }}
      >
        {isMenuOpen ? "X" : "Menu"}
      </button>

      {isMenuOpen && !isDesktop && (
        <div
          onClick={() => setIsMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
        />
      )}

      <div
        style={{
          width: isDesktop ? sidebarWidth : "0",
          flexShrink: 0,
        }}
      />
    </>
  );
}

export default Navbar;
