import React, { useState } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'Notes Management Application',
    description: 'A professional Notes Management Application built with React and Vite. Features include adding notes with title and description, recent notes section, notes table with view and delete actions, and a full-page note reader for distraction-free reading.',
    tech: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/Manoj02081998/notes-management-app',
    color: '#00d4ff',
    emoji: '📝',
    features: ['Add notes with title & description', 'Recent notes section', 'View & delete actions', 'Full-page note reader'],
  },
  {
    title: 'Product Manager Application',
    description: 'A React-based Product Manager application with search, add/edit functionality, table and card views, and pagination for efficient product management.',
    tech: ['React', 'CSS'],
    github: 'https://github.com/Manoj02081998/product-manager-assignment',
    color: '#7c3aed',
    emoji: '📦',
    features: ['Search & filter products', 'Add / edit functionality', 'Table & card views', 'Pagination support'],
  },
  {
    title: 'Rainbow House',
    description: 'A website designed for users who are searching for rooms or houses for rent. Clean and intuitive UI to browse rental listings with ease.',
    tech: ['React', 'CSS'],
    github: 'https://github.com/Manoj02081998/RAINBOW-HOUSE',
    color: '#10b981',
    emoji: '🏠',
    features: ['Room & house listings', 'User-friendly interface', 'Responsive design', 'Easy navigation'],
  },
]

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">Projects</div>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle" style={{ marginBottom: '56px' }}>
          A selection of projects I've built — from utility apps to full-featured web experiences.
        </p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`project-card ${hovered === i ? 'hovered' : ''}`}
              style={{ '--project-color': project.color }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="project-top">
                <div className="project-emoji-wrap">
                  <span className="project-emoji">{project.emoji}</span>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener"
                  className="project-github-link"
                  aria-label="View on GitHub"
                >
                  <GitHubIcon />
                  <span>View Code</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </a>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-features">
                {project.features.map(f => (
                  <div key={f} className="project-feature">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {f}
                  </div>
                ))}
              </div>

              <div className="project-footer">
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              <div className="project-glow"></div>
            </div>
          ))}
        </div>

        <div className="projects-more">
          <a href="https://github.com/Manoj02081998" target="_blank" rel="noopener" className="btn-outline">
            <GitHubIcon />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
