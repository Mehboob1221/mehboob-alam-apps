import { useRef, useEffect } from 'react';
import './ParallaxSection.css';

function ParallaxSection({ children, speed = 0.5, direction = 'up' }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const content = contentRef.current;
      if (!section || !content) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const offset = rect.top - windowHeight;
      const maxOffset = rect.height + windowHeight;
      
      let progress = Math.abs(offset) / maxOffset;
      progress = Math.min(Math.max(progress, 0), 1);
      
      const translateY = direction === 'up' 
        ? -progress * 100 * speed 
        : progress * 100 * speed;
      
      content.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div className="parallax-section" ref={sectionRef}>
      <div className="parallax-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}

export default ParallaxSection;