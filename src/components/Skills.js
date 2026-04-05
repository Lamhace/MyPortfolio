import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML & CSS', level: 92, color: '#e44d26', category: 'Core' },
  { name: 'JavaScript', level: 85, color: '#f7df1e', category: 'Core' },
  { name: 'React.js', level: 88, color: '#61dafb', category: 'Framework' },
  { name: 'TypeScript', level: 72, color: '#3178c6', category: 'Language' },
  { name: 'Tailwind CSS', level: 90, color: '#38bdf8', category: 'Styling' },
  { name: 'Next.js', level: 75, color: '#ffffff', category: 'Framework' },
  { name: 'Git & GitHub', level: 82, color: '#f05032', category: 'Tools' },
  { name: 'Figma / UI', level: 70, color: '#a259ff', category: 'Design' },
];

const tools = [
  'VS Code', 'Vercel', 'npm/yarn', 'Postman', 'Chrome DevTools',
  'Netlify', 'ESLint', 'Prettier',
];

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="skills-header reveal">
          <span className="section-label">Skills</span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-sub">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div
              className="skill-card reveal"
              key={s.name}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="skill-top">
                <div className="skill-info">
                  <span
                    className="skill-dot"
                    style={{ background: s.color, boxShadow: `0 0 8px ${s.color}60` }}
                  />
                  <span className="skill-name">{s.name}</span>
                </div>
                <span className="skill-level">{s.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ '--width': `${s.level}%`, '--color': s.color }}
                />
              </div>
              <span className="skill-category">{s.category}</span>
            </div>
          ))}
        </div>

        <div className="tools-section reveal" style={{ transitionDelay: '0.3s' }}>
          <p className="tools-label">Other tools I work with</p>
          <div className="tools-list">
            {tools.map((t) => (
              <span key={t} className="tool-chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
