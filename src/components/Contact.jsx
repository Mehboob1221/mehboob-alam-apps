import "./Contact.css";
import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setFormStatus('✅ Message sent successfully!');
        form.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('❌ Something went wrong. Please try again.');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      setFormStatus('❌ Network error. Please try again.');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>
        Get In <span>Touch</span>
      </h2>

      <p>
        Have a question, suggestion, or business inquiry?
        I'd love to hear from you.
      </p>

      <form
        className="contact-form"
        action="https://formspree.io/f/xjgnqdgr"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Tell me about your project, feedback, or question..."
          required
        ></textarea>

        <button type="submit">Send Message ✦</button>
      </form>

      {formStatus && (
        <div style={{
          marginTop: '20px',
          padding: '12px 24px',
          borderRadius: '12px',
          background: formStatus.includes('✅') ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
          border: `1px solid ${formStatus.includes('✅') ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
          color: formStatus.includes('✅') ? '#4ade80' : '#f87171',
          display: 'inline-block'
        }}>
          {formStatus}
        </div>
      )}
    </motion.section>
  );
}

export default Contact;