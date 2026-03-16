import React from 'react'
import './Resume.css'

const highlights = [
  { icon: '🎓', label: 'MCA', sub: 'Amity University Patna' },
  { icon: '💼', label: 'Frontend Dev', sub: 'Codetikki Pvt Ltd' },
  { icon: '⚛️', label: 'React Expert', sub: 'Frontend Specialist' },
  { icon: '🛠️', label: 'MERN Stack', sub: 'Full Stack Learning' },
]

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-bg-accent"></div>
      <div className="container resume-inner">
        <div className="resume-left">
          <div className="section-label">Resume</div>
          <h2 className="section-title">Download My<br />CV / Resume</h2>
          <p className="section-subtitle" style={{ marginBottom: '36px' }}>
            Get a complete overview of my skills, education, and work experience in a single document.
          </p>

          <div className="resume-highlights">
            {highlights.map((h, i) => (
              <div className="resume-highlight" key={i}>
                <span className="highlight-icon">{h.icon}</span>
                <div>
                  <div className="highlight-label">{h.label}</div>
                  <div className="highlight-sub">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="resume-actions">
            <a
              href="/Manoj_Kumar_Resume.pdf"
              download="Manoj_Kumar_Resume.pdf"
              className="btn-primary resume-download-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume (PDF)
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me Instead
            </a>
          </div>
        </div>

        <div className="resume-right">
          <div className="resume-card-preview">
            <div className="preview-header">
              <div className="preview-avatar">MK</div>
              <div>
                <div className="preview-name">Manoj Kumar</div>
                <div className="preview-title">Frontend & MERN Stack Developer</div>
              </div>
            </div>
            <div className="preview-divider"></div>
            <div className="preview-section">
              <div className="preview-section-title">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
                Experience
              </div>
              <div className="preview-item">
                <div className="preview-item-title">Intern Associate Frontend Developer</div>
                <div className="preview-item-sub">Codetikki Pvt Ltd</div>
              </div>
            </div>
            <div className="preview-section">
              <div className="preview-section-title">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                Education
              </div>
              <div className="preview-item">
                <div className="preview-item-title">MCA — Amity University Patna</div>
                <div className="preview-item-sub">2021 – 2023</div>
              </div>
              <div className="preview-item">
                <div className="preview-item-title">BCA — St. Xavier's College, Patna</div>
                <div className="preview-item-sub">2016 – 2019</div>
              </div>
            </div>
            <div className="preview-section">
              <div className="preview-section-title">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                Core Skills
              </div>
              <div className="preview-skills-chips">
                {['React', 'JavaScript', 'Node.js', 'MongoDB', 'CSS', 'Express'].map(s => (
                  <span key={s} className="preview-chip">{s}</span>
                ))}
              </div>
            </div>
            <div className="preview-download-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              PDF Available
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
