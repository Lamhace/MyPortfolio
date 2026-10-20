import React from 'react';
import './About.css';

const highlights = [
  { icon: '🤖', label: 'AI-Leveraged', desc: 'Expertise in LLM prompt engineering, few-shot prompting, and structured schemas' },
  { icon: '🎨', label: 'Design-Conscious', desc: 'Deeply care about UI/UX, responsive layouts, and pixel-perfect detail' },
  { icon: '🤝', label: 'Collaborative & Fast', desc: 'Great communicator who delivers clean, maintainable code on time' },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-inner">
          {/* Left: text */}
          <div className="about-left reveal">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Turning Ideas Into<br />
              <em className="about-em">Digital Reality</em>
            </h2>
            <p className="section-sub" style={{ marginBottom: '20px' }}>
              I'm <strong>Ojo Oladimeji</strong>, a Frontend Developer and AI-enabled software builder based in Nigeria with hands-on experience building fast, responsive web applications and AI workflows using React, TypeScript, and Next.js.
            </p>
            <p className="section-sub" style={{ marginBottom: '32px' }}>
              I combine clean frontend architecture with prompt engineering and LLM integrations. Whether turning complex Figma designs into responsive components or engineering robust AI prompt workflows, my focus is delivering measurable value and reliable code.
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

          {/* Right: code card */}
          <div className="about-right reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="about-card">
              <div className="about-card-header">
                <span className="about-card-dot red" />
                <span className="about-card-dot yellow" />
                <span className="about-card-dot green" />
                <span className="about-card-title">developer.js</span>
              </div>
              <pre className="about-code">
{`// about.js — Ojo Oladimeji
const developer = {
  name: "Ojo Oladimeji",
  role: "Frontend Developer & AI Engineer",
  location: "Nigeria 🇳🇬",
  experience: "2+ years",
  available: true,
  loves: [
    "Clean UI & UX",
    "Prompt Engineering & LLMs",
    "React & Next.js Ecosystems",
    "Turning ideas → products",
  ],
  flagshipWork: [
    "PromptSmith AI Studio",
    "HireSpace Marketplace",
    "Scissor URL Shortener",
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
