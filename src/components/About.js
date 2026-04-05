import React from 'react';
import './About.css';

const highlights = [
  { icon: '⚡', label: 'Fast Learner', desc: 'Constantly picking up new tools and frameworks' },
  { icon: '🎨', label: 'Design-Conscious', desc: 'I care deeply about UI/UX and pixel-perfect detail' },
  { icon: '🤝', label: 'Collaborative', desc: 'Great communicator who delivers on time' },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-left reveal">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Turning Ideas Into<br />
              <em className="about-em">Digital Reality</em>
            </h2>
            <p className="section-sub" style={{ marginBottom: '20px' }}>
              I'm <strong>Ojo Oladimeji</strong>, a Frontend Developer based in Nigeria with 2 years of experience building fast, responsive web applications using React, TypeScript, and Next.js.
            </p>
            <p className="section-sub" style={{ marginBottom: '32px' }}>
              I love clean UI and turning ideas into products. As a freelancer, my goal is simple: help clients ship things they're proud of — on time, with clean code they can grow with.
            </p>

            <div className="about-highlights">
              {highlights.map((h) => (
                <div className="about-highlight" key={h.label}>
                  <span className="highlight-icon">{h.icon}</span>
                  <div>
                    <p className="highlight-label">{h.label}</p>
                    <p className="highlight-desc">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              className="btn-primary about-cta"
              href="/Ojo_Oladimeji_Resume.pdf"
              download
              style={{ display: 'inline-block', marginTop: '36px' }}
            >
              Download Resume
            </a>
          </div>

          <div className="about-right reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="about-card">
              <div className="about-card-header">
                <span className="about-card-dot red" />
                <span className="about-card-dot yellow" />
                <span className="about-card-dot green" />
              </div>
              <pre className="about-code">
{`// about.js — Ojo Oladimeji

const developer = {
  name: "Ojo Oladimeji",
  role: "Frontend Developer",
  location: "Nigeria 🇳🇬",
  experience: "2 years",
  available: true,

  loves: [
    "Clean UI",
    "Smooth animations",
    "React ecosystems",
    "Turning ideas → products",
  ],

  currentlyBuilding: [
    "Portfolio v2 (this one!)",
    "2 more secret projects...",
  ],

  github: "github.com/lamhace",
  email: "Oladimejiojo93@gmail.com",
};

export default developer;`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
