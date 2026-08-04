import { useState, useEffect } from 'react';
import './VisitorCounter.css';

function VisitorCounter() {
  const [visitors, setVisitors] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Get or create visitor count
    let count = localStorage.getItem('visitorCount');
    
    if (!count) {
      // Generate random starting count (simulates real visitors)
      count = Math.floor(Math.random() * 5000 + 1000);
      localStorage.setItem('visitorCount', count);
    }
    
    // Increment for current visitor
    const currentCount = parseInt(count) + 1;
    localStorage.setItem('visitorCount', currentCount);
    setVisitors(currentCount);

    // Simulate real-time updates (every 30 seconds)
    const interval = setInterval(() => {
      const newCount = parseInt(localStorage.getItem('visitorCount')) + 1;
      localStorage.setItem('visitorCount', newCount);
      setVisitors(newCount);
    }, 30000);

    // Show counter after 2 seconds
    setTimeout(() => setIsVisible(true), 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`visitor-counter ${isVisible ? 'visible' : ''}`}>
      <div className="visitor-icon">👥</div>
      <div className="visitor-info">
        <span className="visitor-number">{visitors.toLocaleString()}</span>
        <span className="visitor-label">Live Visitors</span>
      </div>
      <div className="visitor-dot">
        <span className="pulse-dot"></span>
        <span className="pulse-text">Live</span>
      </div>
    </div>
  );
}

export default VisitorCounter;