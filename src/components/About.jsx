import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-image">
        <img
          src="/profile.jpg"
          alt="Mehboob Alam"
        />
      </div>

      <div className="about-text">
        <h2>
          About <span>Me</span>
        </h2>
        <h3>Mehboob Alam</h3>
        <h4>✦ Desktop Application Developer</h4>
        <p>
          I'm passionate about building modern Windows desktop
          applications that are fast, beautiful, and easy to use.
          My goal is to create software that helps people become
          more productive in their daily lives.
        </p>

        <div className="skills">
          <span>🐍 Python</span>
          <span>⚛️ React</span>
          <span>🪟 Windows Apps</span>
          <span>🗄️ SQLite</span>
          <span>🎨 UI Design</span>
        </div>

        <button onClick={() => {
          document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          View My Apps →
        </button>
      </div>
    </motion.section>
  );
}

export default About;