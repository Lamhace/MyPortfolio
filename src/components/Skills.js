import React from 'react';
import './Skills.css';

const skills = [
  { name: 'React.js', level: 90, color: '#61dafb', category: 'Framework' },
  { name: 'TypeScript', level: 80, color: '#3178c6', category: 'Language' },
  { name: 'Prompt Engineering & LLMs', level: 88, color: '#10b981', category: 'AI' },
  { name: 'Tailwind CSS', level: 92, color: '#38bdf8', category: 'Styling' },
  { name: 'JavaScript (ES6+)', level: 88, color: '#f7df1e', category: 'Core' },
  { name: 'HTML & CSS', level: 94, color: '#e44d26', category: 'Core' },
  { name: 'Next.js', level: 78, color: '#ffffff', category: 'Framework' },
  { name: 'Git & GitHub', level: 85, color: '#f05032', category: 'Tools' },
  { name: 'Figma / UI Design', level: 75, color: '#a259ff', category: 'Design' },
];

const tools = [
  'OpenAI API', 'Google Gemini', 'LangChain', 'VS Code', 'Vercel', 
  'npm/yarn', 'Postman', 'Chrome DevTools', 'Netlify', 'ESLint', 'Prettier',
];

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="skills-header reveal">
          <span className="section-label">Skills</span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-sub">
            Tools, technologies, and AI workflows I use to bring ideas to life.
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
                  className="skill-fill"
                  style={{ width: `${s.level}%`, background: s.color }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="tools-wrapper reveal">
          <h3 className="tools-title">Tools &amp; Workflow Ecosystem</h3>
          <div className="tools-tags">
            {tools.map((t) => (
              <span className="tool-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
