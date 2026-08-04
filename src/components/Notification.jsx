import { useState, useEffect } from 'react';
import './Notification.css';

function Notification({ message, type = 'info', duration = 4000 }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: '💡',
    welcome: '👋'
  };

  return (
    <div className={`notification notification-${type}`}>
      <span className="notification-icon">{icons[type] || '💡'}</span>
      <span className="notification-message">{message}</span>
      <button 
        className="notification-close"
        onClick={() => setIsVisible(false)}
      >
        ✕
      </button>
    </div>
  );
}

function NotificationManager() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Welcome notification
    setTimeout(() => {
      showNotification('Welcome to Mehboob Alam Apps! ✨', 'welcome');
    }, 1000);

    // Tip notification
    setTimeout(() => {
      showNotification('Try changing the theme color! 🎨', 'info');
    }, 4000);
  }, []);

  const showNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  return (
    <div className="notification-container">
      {notifications.map(notif => (
        <Notification
          key={notif.id}
          message={notif.message}
          type={notif.type}
        />
      ))}
    </div>
  );
}

export default NotificationManager;