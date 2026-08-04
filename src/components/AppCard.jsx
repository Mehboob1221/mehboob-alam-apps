import "./AppCard.css";
import { motion } from "framer-motion";

function AppCard({
  image,
  title,
  description,
  button,
  comingSoon,
}) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -15,
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
    >
      {/* Image Container with Overlay */}
      <div className="card-image-container">
        <img src={image} alt={title} />
        <div className="card-image-overlay">
          <span className="card-image-icon">✦</span>
        </div>
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3>{title}</h3>
          {comingSoon && (
            <span className="badge">Coming Soon</span>
          )}
        </div>

        <p>{description}</p>

        <div className="card-footer">
          <button 
            className={comingSoon ? 'notify-btn' : 'download-btn'}
            onClick={() => {
              if (comingSoon) {
                alert('📢 Coming Soon! You\'ll be notified.');
              } else {
                document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {button}
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default AppCard;