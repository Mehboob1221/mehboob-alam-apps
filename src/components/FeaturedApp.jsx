import "./FeaturedApp.css";
import AppCard from "./AppCard";
import { motion } from "framer-motion";

import calculatorIcon from "../assets/calculator.ico";
import bodybuildingIcon from "../assets/bodybuilding-pro.png";

function FeaturedApp() {
  return (
    <section className="featured" id="apps">
      {/* Section Header with Animation */}
      <motion.div
        className="featured-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="featured-badge">✦ Premium Collection</span>
        <h2>
          Featured <span>Apps</span>
        </h2>
        <p className="featured-subtitle">
          Handcrafted Windows applications for the modern professional
        </p>
        <div className="featured-line"></div>
      </motion.div>

      <div className="apps-grid">
        {/* Calculator Pro - Featured Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="app-card-wrapper featured-card"
        >
          <div className="app-card-badge">⭐ Most Popular</div>
          <AppCard
            image={calculatorIcon}
            title="Calculator Pro"
            description="A powerful modern calculator for Windows with advanced features and beautiful design."
            button="Download Now"
          />
        </motion.div>

        {/* Bodybuilding Pro - Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="app-card-wrapper coming-soon-card"
        >
          <div className="app-card-badge coming-soon-badge">🚀 Coming Soon</div>
          <AppCard
            image={bodybuildingIcon}
            title="Bodybuilding Tracker Pro"
            description="Track workouts, nutrition and progress with our premium fitness solution."
            button="Notify Me"
            comingSoon={true}
          />
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="featured-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p>Looking for more?</p>
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Request a Custom App →
        </button>
      </motion.div>
    </section>
  );
}

export default FeaturedApp;