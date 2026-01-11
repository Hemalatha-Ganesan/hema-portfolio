import React from 'react';

function Navbar({ isScrolled, activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) {

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },

    // ⭐ NEW MENU ITEM ADDED HERE
    { id: 'certifications', label: 'Certifications' },

    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: isScrolled ? 'rgba(79, 70, 229, 0.95)' : 'rgba(79, 70, 229, 1)',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      padding: '1rem 2rem',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      boxShadow: isScrolled ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        
        <h2 style={{ margin: 0, color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>
          Hema.dev
        </h2>
        
        {/* Desktop Menu */}
        <div style={{ 
          display: window.innerWidth >= 768 ? 'flex' : 'none',
          gap: '2rem',
          alignItems: 'center'
        }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1rem',
                padding: '0.5rem 0',
                position: 'relative',
                transition: 'opacity 0.3s',
                opacity: activeSection === item.id ? 1 : 0.7,
                borderBottom: activeSection === item.id ? '2px solid white' : '2px solid transparent'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = activeSection === item.id ? '1' : '0.7'}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: window.innerWidth < 768 ? 'block' : 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '0.5rem',
            fontSize: '1.5rem'
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(79, 70, 229, 0.98)',
          padding: '1rem',
          animation: 'slideDown 0.3s ease'
        }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1.1rem',
                padding: '1rem',
                textAlign: 'left',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
