import React, { useEffect, useState } from 'react';
import './Hero.css';

const roles = ['Frontend Developer', 'React Specialist', 'UI Engineer', 'Freelancer'];

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
            Available for freelance work
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
            I craft fast, beautiful, and accessible web experiences
            using React and modern frontend tools. Let's build something great together.
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
              <span className="stat-num">2+</span>
              <span className="stat-label">Projects Live</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-num">8+</span>
              <span className="stat-label">Tech Skills</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Passion</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-avatar-ring">
            <div className="hero-avatar-ring-inner" />
            <div className="hero-avatar">
              <img src="/images/me.jpg" alt="Ojo Oladimeji" />
            </div>
            <div className="hero-orbit-dot hero-orbit-dot-1" />
            <div className="hero-orbit-dot hero-orbit-dot-2" />
            <div className="hero-orbit-dot hero-orbit-dot-3" />
          </div>

          <div className="hero-tech-badges">
            {['React', 'Next.js', 'TypeScript', 'Tailwind'].map((t) => (
              <span key={t} className="hero-tech-badge">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="hero-scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
