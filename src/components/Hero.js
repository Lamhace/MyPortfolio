import React, { useEffect, useState } from 'react';
import './Hero.css';

const roles = [
  'Frontend Developer', 
  'AI Prompt Engineer', 
  'React Specialist', 
  'UI Engineer', 
  'Freelancer'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for freelance &amp; contract work
          </div>

          <h1 className="hero-name">
            Hi, I'm <br />
            <span className="hero-name-accent">Ojo Oladimeji</span>
          </h1>

          <p className="hero-role">
            <span className="hero-role-typed">{displayed}</span>
            <span className="hero-cursor" aria-hidden="true">|</span>
          </p>

          <p className="hero-description">
            I craft fast, responsive web applications and AI-leveraged workflows
            using React, TypeScript, and modern LLM prompt engineering. Let's build something great together.
          </p>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <a className="btn-ghost" href="mailto:Oladimejiojo93@gmail.com">
              Get In Touch
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-num">4+</span>
              <span className="stat-label">Live Projects</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-num">10+</span>
              <span className="stat-label">Tech Skills</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Dedication</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-ring" />
            <img
              src="/images/me.jpg"
              alt="Ojo Oladimeji"
              className="hero-avatar-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.parentElement.querySelector('.hero-avatar-fallback');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="hero-avatar-fallback" style={{ display: 'none' }}>
              <span>OO</span>
            </div>
          </div>

          <div className="hero-float-card hero-float-1">
            <span className="float-icon">⚡</span>
            <div>
              <p className="float-title">Pixel-Perfect</p>
              <p className="float-sub">Figma to React</p>
            </div>
          </div>

          <div className="hero-float-card hero-float-2">
            <span className="float-icon">🤖</span>
            <div>
              <p className="float-title">AI Workflows</p>
              <p className="float-sub">Prompt Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
