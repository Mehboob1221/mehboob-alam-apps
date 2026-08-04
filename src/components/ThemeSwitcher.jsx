import { useState, useEffect } from 'react';
import './ThemeSwitcher.css';

const themes = [
  { name: 'Gold', primary: '#ffd700', secondary: '#f59e0b' },
  { name: 'Blue', primary: '#3b82f6', secondary: '#1d4ed8' },
  { name: 'Purple', primary: '#8b5cf6', secondary: '#7c3aed' },
  { name: 'Pink', primary: '#ec4899', secondary: '#db2777' },
  { name: 'Green', primary: '#22c55e', secondary: '#16a34a' },
  { name: 'Red', primary: '#ef4444', secondary: '#dc2626' },
  { name: 'Cyan', primary: '#06b6d4', secondary: '#0891b2' },
  { name: 'White', primary: '#ffffff', secondary: '#e5e7eb' },
];

function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(0);

  useEffect(() => {
    // Load saved theme
    const saved = localStorage.getItem('selectedTheme');
    if (saved) {
      const index = themes.findIndex(t => t.name === saved);
      if (index !== -1) {
        setCurrentTheme(index);
        applyTheme(index);
      }
    }
  }, []);

  const applyTheme = (index) => {
    const theme = themes[index];
    const root = document.documentElement;
    
    // Apply theme colors to CSS variables
    root.style.setProperty('--theme-primary', theme.primary);
    root.style.setProperty('--theme-secondary', theme.secondary);
    root.style.setProperty('--theme-color', theme.primary);
    root.style.setProperty('--theme-gradient', `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`);
    root.style.setProperty('--theme-shadow', `${theme.primary}33`);
    root.style.setProperty('--theme-glow', `${theme.primary}26`);
    
    // Also update all themed elements
    updateElementStyles(theme);
    
    localStorage.setItem('selectedTheme', theme.name);
    setCurrentTheme(index);
  };

  const updateElementStyles = (theme) => {
    // Update all elements with theme colors
    const elements = document.querySelectorAll('.theme-color-element');
    elements.forEach(el => {
      if (el.tagName === 'BUTTON') {
        el.style.background = `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`;
      }
    });
  };

  const toggleTheme = () => {
    const next = (currentTheme + 1) % themes.length;
    applyTheme(next);
  };

  return (
    <div className="theme-switcher">
      <button 
        className="theme-trigger"
        onClick={() => setIsOpen(!isOpen)}
        title="Change Theme Color"
      >
        🎨
      </button>

      {isOpen && (
        <div className="theme-dropdown">
          <div className="theme-grid">
            {themes.map((theme, index) => (
              <button
                key={index}
                className={`theme-option ${currentTheme === index ? 'active' : ''}`}
                onClick={() => {
                  applyTheme(index);
                  setIsOpen(false);
                }}
                title={theme.name}
              >
                <div 
                  className="theme-color"
                  style={{ 
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                    border: currentTheme === index ? `2px solid ${theme.primary}` : '2px solid rgba(255,255,255,0.1)'
                  }}
                />
                <span className="theme-name">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;