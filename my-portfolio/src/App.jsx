import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Certification from "./components/certification";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "skills", "projects", "certifications", "contact"];

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        backgroundColor: "#f8f9fb",
        color: "#111827",
        lineHeight: 1.6,
      }}
    >
      <Navbar
        isScrolled={isScrolled}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <Hero scrollToSection={scrollToSection} />
      <SectionWrapper><About /></SectionWrapper>
      <SectionWrapper><Skills /></SectionWrapper>
      <SectionWrapper><Projects /></SectionWrapper>
      <SectionWrapper><Certification /></SectionWrapper>
      <SectionWrapper><Contact /></SectionWrapper>
      <Footer />

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        section {
          padding: 80px 0;
          animation: fadeInUp 0.6s ease both;
        }

        #certifications {
          scroll-margin-top: 130px;
        }

        /* FIX: ADD MISSING KEYFRAMES FOR HERO */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}

const SectionWrapper = ({ children }) => (
  <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
    {children}
  </div>
);

export default App;
