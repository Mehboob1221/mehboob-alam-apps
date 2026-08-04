import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Mehboob Alam</h3>
          <p>Building premium desktop applications for Windows.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#apps">Apps</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub">🐙</a>
          <a href="https://twitter.com/yourusername" target="_blank" aria-label="Twitter">🐦</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">🔗</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Mehboob Alam Apps. All Rights Reserved.</p>
        <p>Made with ✦</p>
      </div>
    </footer>
  );
}

export default Footer;