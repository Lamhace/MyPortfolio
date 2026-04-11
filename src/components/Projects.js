import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'HireSpace',
    description:
      'A platform that connects local workers and employers — with real-time chat integration so both parties can communicate directly within the app, making hiring faster and more personal.',
    tags: ['React', 'JavaScript', 'CSS', 'Real-time Chat'],
    live: 'https://hirespace-chi.vercel.app/',
    color: '#00ff87',
    image: '/images/hirespace.png',
  },
  {
    id: 2,
    title: 'Scissor',
    description:
      'A lightning-fast URL shortener that transforms long links into branded short URLs — complete with custom aliases, domain selection, and QR code generation. Sign-up required.',
    tags: ['React', 'TypeScript', 'API', 'Auth'],
    live: 'https://lamhaceurlscissor.vercel.app/',
    color: '#7c6ff7',
    image: '/images/scissor.png',
  },
  {
    id: 3,
    title: 'WeatherGlass',
    description:
      'Search any location worldwide and get real-time weather results plus a beautiful 5-day forecast. Features a glassmorphic UI that adapts to current weather conditions.',
    tags: ['React', 'Weather API', 'CSS'],
    live: 'https://weather-app-for-p.vercel.app/',
    color: '#38bdf8',
    image: '/images/weatherglass.png',
  },
  {
    id: 4,
    title: 'Coming Soon',
    description:
      'A new project currently in development. Stay tuned — something exciting is on the way!',
    tags: ['React', 'Next.js', 'TypeScript'],
    live: '#',
    color: '#f59e0b',
    emoji: '🚀',
    wip: true,
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects-header reveal">
          <span className="section-label">Projects</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-sub">
            A selection of my work — more coming as I keep building and shipping.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`project-card reveal ${p.wip ? 'project-wip' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s`, '--project-color': p.color }}
            >
              <div className="project-thumb">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="project-screenshot" />
                ) : (
                  <span className="project-emoji">{p.emoji}</span>
                )}
                {p.wip && <span className="project-wip-badge">In Progress</span>}
              </div>

              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  {!p.wip && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link primary">
                      Live Demo <ArrowIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
