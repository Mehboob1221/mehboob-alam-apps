import "./Download.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Download() {
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    // Simulate download count
    const saved = localStorage.getItem('downloadCount');
    if (saved) {
      setDownloadCount(parseInt(saved));
    } else {
      // Starting download count
      const initial = Math.floor(Math.random() * 8000 + 2000);
      setDownloadCount(initial);
      localStorage.setItem('downloadCount', initial);
    }
  }, []);

  const handleDownload = () => {
    // Increment download count
    const newCount = downloadCount + 1;
    setDownloadCount(newCount);
    localStorage.setItem('downloadCount', newCount);
    alert(`🚀 Download started!\n\nTotal Downloads: ${newCount.toLocaleString()}`);
  };

  return (
    <motion.section
      className="download"
      id="download"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>
        Download <span>Calculator Pro</span>
      </h2>

      <p>
        A modern Windows calculator built with Python,
        designed to be fast, beautiful, and easy to use.
      </p>

      <div className="download-features">
        <span>✔ Windows 10 & 11</span>
        <span>✔ Free Forever</span>
        <span>✔ Lightweight</span>
        <span>✔ Modern UI</span>
      </div>

      <div className="download-stats">
        <span className="download-count">
          📥 {downloadCount.toLocaleString()} Downloads
        </span>
      </div>

      <button onClick={handleDownload}>
        Download Now ⬇
      </button>
    </motion.section>
  );
}

export default Download;