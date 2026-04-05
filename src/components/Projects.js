import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'HireSpace',
    description:
      'A platform that connects local workers and employers — making it easier to find the right person for the job or land the right opportunity. Built with React for a seamless experience.',
    tags: ['React', 'JavaScript', 'CSS'],
    live: 'https://hirespace-chi.vercel.app/',
    github: 'https://github.com/lamhace',
    color: '#00ff87',
    image: '/images/hirespace.png',
  },
  {
    id: 2,
    title: 'WeatherGlass',
    description:
      'Search any location worldwide and get real-time weather results plus a beautiful 5-day forecast. Features a glassmorphic UI that adapts to current weather conditions.',
    tags: ['React', 'Weather API', 'CSS'],
    live: 'https://weather-app-for-p.vercel.app/',
    github: 'https://github.com/lamhace',
    color: '#38bdf8',
    image: '/images/weatherglass.png',
  },
  {
    id: 3,
    title: 'Coming Soon',
    description:
      'A new project currently in development. Stay tuned — something exciting is on the way! Built with React and modern tools.',
    tags: ['React', 'Next.js', 'TypeScript'],
    live: '#',
    github: '#',
    color: '#a259ff',
    emoji: '🚀',
    wip: true,
  },
  {
    id: 4,
    title: 'Coming Soon',
    description:
      'Another project in the pipeline. Check back soon for something great.',
    tags: ['React', 'Tailwind', 'API'],
    live: '#',
    github: '#',
    color: '#f59e0b',
    emoji: '⚡',
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

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
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
              {/* Thumbnail area */}
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
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link ghost">
                    <GitHubIcon /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
