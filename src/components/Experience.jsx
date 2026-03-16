import React from 'react'
import './Experience.css'

const experience = [
  {
    role: 'Intern Associate Frontend Developer',
    company: 'Codetikki Pvt Ltd',
    type: 'Internship',
    period: 'Recent',
    color: '#00d4ff',
    responsibilities: [
      'Developed responsive user interfaces using React and modern CSS techniques.',
      'Worked on improving UI components and user experience across the application.',
      'Collaborated with team members to build and ship web application features.',
      'Participated in code reviews and implemented feedback to improve code quality.',
    ],
    tags: ['React', 'CSS', 'JavaScript', 'UI/UX', 'Team Collaboration'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label">Experience</div>
        <h2 className="section-title">Work History</h2>
        <p className="section-subtitle" style={{ marginBottom: '56px' }}>
          Professional experience building real-world web applications.
        </p>

        <div className="exp-timeline">
          {experience.map((exp, i) => (
            <div className="exp-card" key={i} style={{ '--exp-color': exp.color }}>
              <div className="exp-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>

              <div className="exp-content">
                <div className="exp-header">
                  <div className="exp-meta">
                    <span className="exp-type">{exp.type}</span>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                    {exp.company}
                  </div>
                </div>

                <ul className="exp-responsibilities">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j}>
                      <span className="resp-dot"></span>
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="exp-tags">
                  {exp.tags.map(tag => (
                    <span key={tag} className="exp-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="exp-education-note">
            <div className="note-icon">🎓</div>
            <div>
              <div className="note-title">Educational Foundation</div>
              <div className="note-text">MCA from Amity University Patna · BCA from St. Xavier's College, Patna</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
