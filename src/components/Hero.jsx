import "./Hero.css";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import TypingAnimation from "./TypingAnimation";

function Hero() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      content.style.transform = `rotateX(${y * 6}deg) rotateY(${x * 6}deg)`;
    };

    const handleMouseLeave = () => {
      content.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Create floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 20,
    size: Math.random() * 4 + 2,
  }));

  return (
    <section className="hero" id="home" ref={containerRef}>
      {/* Floating 3D Elements */}
      <div className="floating-3d-element"></div>
      <div className="floating-3d-element"></div>
      <div className="floating-3d-element"></div>

      {/* Floating Particles */}
      <div className="particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </div>

      <div className="hero-3d-container">
        <div className="hero-3d-content" ref={contentRef}>
          <motion.span
            className="hero-tag"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Premium Desktop Applications
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Royal Desktop
            <br />
            <span className="highlight">
              <TypingAnimation 
                text={['Applications', 'Software', 'Tools']}
                speed={100}
                delay={1000}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Premium Windows software crafted with elegance, performance, and simplicity. 🚀
            performance, and simplicity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button 
              className="hero-btn" 
              onClick={() => {
                document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Download Calculator Pro
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;