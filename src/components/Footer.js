import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <button
          className="footer-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="logo-bracket">&lt;</span>OO<span className="logo-bracket">/&gt;</span>
        </button>
        <p className="footer-copy">
          © {new Date().getFullYear()} Ojo Oladimeji · Built with React
        </p>
        <button
          className="footer-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      </div>
    </footer>
  );
}
