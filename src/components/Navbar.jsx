import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'apps', 'about', 'contact'];
      const scrollY = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo" onClick={() => scrollToSection('home')}>
        Mehboob Alam
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a 
          href="#home" 
          className={activeSection === 'home' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
        >
          Home
        </a>
        <a 
          href="#apps" 
          className={activeSection === 'apps' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); scrollToSection('apps'); }}
        >
          Apps
        </a>
        <a 
          href="#about" 
          className={activeSection === 'about' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
        >
          About
        </a>
        <a 
          href="#contact" 
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
        >
          Contact
        </a>
      </nav>

      <div className="nav-actions">
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <button className="nav-btn" onClick={() => scrollToSection('download')}>
          Download
        </button>
      </div>
    </header>
  );
}

export default Navbar;