import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 720) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNav = (section) => {
    setActive(section);
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(section.toLowerCase());
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  };

  return (
    <>
      {/* Overlay backdrop */}
      <div
        className={`nav-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <button
            className="nav-logo"
            onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="logo-bracket">&lt;</span>OO<span className="logo-bracket">/&gt;</span>
          </button>

          {/* Desktop links */}
          <ul className="nav-links-desktop">
            {links.map((l) => (
              <li key={l}>
                <button
                  className={`nav-link ${active === l ? 'active' : ''}`}
                  onClick={() => handleNav(l)}
                >
                  {l}
                </button>
              </li>
            ))}
            <li>
              <a className="nav-cta" href="mailto:Oladimejiojo93@gmail.com">
                Hire Me
              </a>
            </li>
          </ul>

          {/* Burger */}
          <button
            className={`burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="nav-drawer-links">
          {links.map((l, i) => (
            <li key={l} style={{ transitionDelay: menuOpen ? `${i * 0.07}s` : '0s' }}>
              <button
                className={`nav-drawer-link ${active === l ? 'active' : ''}`}
                onClick={() => handleNav(l)}
              >
                {l}
              </button>
            </li>
          ))}
          <li style={{ transitionDelay: menuOpen ? `${links.length * 0.07}s` : '0s' }}>
            <a
              className="nav-drawer-cta"
              href="mailto:Oladimejiojo93@gmail.com"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
          </li>
        </ul>

        <div className="nav-drawer-footer">
          <a href="https://github.com/lamhace" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span>·</span>
          <a href="mailto:Oladimejiojo93@gmail.com">Email</a>
        </div>
      </div>
    </>
  );
}
