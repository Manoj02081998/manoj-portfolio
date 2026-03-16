import React from 'react'
import './About.css'

const stats = [
  { value: '3+', label: 'Years Learning' },
  { value: '5+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
]

const education = [
  {
    degree: 'MCA',
    full: 'Master of Computer Applications',
    institution: 'Amity University Patna',
    year: '2021 – 2023',
    icon: '🎓',
  },
  {
    degree: 'BCA',
    full: 'Bachelor of Computer Applications',
    institution: "St. Xavier's College of Management and Technology, Patna",
    year: '2016 – 2019',
    icon: '📚',
  },
]

export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div className="about-text">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Crafting digital<br/>experiences with code</h2>
          <p className="about-para">
            I'm Manoj Kumar, a passionate Frontend and MERN Stack Developer based in Patna, India. 
            I specialize in building responsive, performant, and user-friendly web applications that 
            bridge great design with clean code.
          </p>
          <p className="about-para">
            Currently working as an Associate Frontend Developer, I focus on React-based UIs and 
            collaborate closely with teams to deliver seamless digital experiences. My long-term goal 
            is to become a skilled full-stack developer contributing to innovative, impactful solutions.
          </p>

          <div className="about-stats">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-education">
          <div className="edu-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            Education
          </div>

          <div className="edu-timeline">
            {education.map((edu, i) => (
              <div className="edu-card" key={i}>
                <div className="edu-icon">{edu.icon}</div>
                <div className="edu-info">
                  <div className="edu-degree">
                    <span className="degree-badge">{edu.degree}</span>
                    <span className="edu-year">{edu.year}</span>
                  </div>
                  <div className="edu-full">{edu.full}</div>
                  <div className="edu-institution">{edu.institution}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="about-goal">
            <div className="goal-icon">🎯</div>
            <div>
              <div className="goal-title">Career Goal</div>
              <div className="goal-text">Become a skilled full-stack web developer and contribute to building innovative and impactful web solutions.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
