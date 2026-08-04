import { useState, useEffect } from 'react';
import './TypingAnimation.css';

function TypingAnimation({ text, speed = 50, delay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    const type = () => {
      const currentText = text[index];
      if (!currentText) return;

      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
          timeout = setTimeout(type, speed);
        } else {
          // Pause before deleting
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          timeout = setTimeout(type, speed / 2);
        } else {
          setIsDeleting(false);
          setIndex((index + 1) % text.length);
          timeout = setTimeout(type, 500);
        }
      }
    };

    const startDelay = setTimeout(type, delay);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeout);
    };
  }, [text, index, displayText, isDeleting, speed, delay]);

  return (
    <span className="typing-animation">
      {displayText}
      <span className="cursor-blink">|</span>
    </span>
  );
}

export default TypingAnimation;