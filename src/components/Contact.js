import React, { useState } from 'react';
import './Contact.css';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/lamhace',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:Oladimejiojo93@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'Oladimejiojo93@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-inner reveal">
          <div className="contact-text">
            <span className="section-label">Contact</span>
            <h2 className="section-title">
              Let's Build Something<br />
              <span className="contact-accent">Together</span>
            </h2>
            <p className="section-sub" style={{ marginBottom: '40px' }}>
              Available for freelance projects, collaborations, and contract opportunities.
              Drop me a message and I'll get back to you quickly.
            </p>

            <div className="contact-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-pill">
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-card reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="contact-email-block">
              <p className="contact-email-label">Reach me directly</p>
              <div className="contact-email-row">
                <span className="contact-email-text">{email}</span>
                <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                  {copied ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="contact-divider" />

            <a
              className="contact-mailto"
              href={`mailto:${email}?subject=Freelance%20Enquiry&body=Hi%20Ojo%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project.`}
            >
              <span>Send Me an Email</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <div className="contact-availability">
              <span className="avail-dot" />
              <span>Currently open to new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
