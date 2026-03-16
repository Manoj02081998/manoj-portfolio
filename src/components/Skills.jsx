import React, { useState } from 'react'
import './Skills.css'

const skillCategories = [
  {
    label: 'Frontend',
    icon: '🎨',
    color: '#00d4ff',
    skills: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Bootstrap', level: 85 },
    ],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    color: '#7c3aed',
    skills: [
      { name: 'Node.js', level: 65 },
      { name: 'Express.js', level: 60 },
      { name: 'PHP', level: 55 },
    ],
  },
  {
    label: 'Database',
    icon: '🗄️',
    color: '#10b981',
    skills: [
      { name: 'MongoDB', level: 60 },
      { name: 'MySQL', level: 65 },
    ],
  },
  {
    label: 'Tools',
    icon: '🛠️',
    color: '#f59e0b',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 80 },
      { name: 'VS Code', level: 95 },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">Skills</div>
        <h2 className="section-title">My Technical Stack</h2>
        <p className="section-subtitle" style={{marginBottom: '56px'}}>
          Technologies and tools I work with to bring ideas to life.
        </p>

        <div className="skills-layout">
          <div className="skills-tabs">
            {skillCategories.map((cat, i) => (
              <button
                key={i}
                className={`skill-tab ${activeCategory === i ? 'active' : ''}`}
                onClick={() => setActiveCategory(i)}
                style={{ '--tab-color': cat.color }}
              >
                <span className="tab-icon">{cat.icon}</span>
                <span>{cat.label}</span>
                <span className="tab-count">{cat.skills.length}</span>
              </button>
            ))}
          </div>

          <div className="skills-panel">
            {skillCategories.map((cat, ci) => (
              <div
                key={ci}
                className={`skill-category-panel ${activeCategory === ci ? 'active' : ''}`}
              >
                <div className="panel-header" style={{ '--tab-color': cat.color }}>
                  <span className="panel-icon">{cat.icon}</span>
                  <span className="panel-title">{cat.label} Skills</span>
                </div>
                <div className="skills-bars">
                  {cat.skills.map((skill, si) => (
                    <div key={si} className="skill-bar-item">
                      <div className="skill-bar-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent" style={{ color: cat.color }}>{skill.level}%</span>
                      </div>
                      <div className="skill-track">
                        <div
                          className="skill-fill"
                          style={{
                            width: activeCategory === ci ? `${skill.level}%` : '0%',
                            background: 'var(--accent-primary)',
                            transitionDelay: `${si * 0.08}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All skills chips */}
        <div className="skills-chips-section">
          <div className="chips-label">All Technologies</div>
          <div className="skills-chips">
            {skillCategories.flatMap(cat =>
              cat.skills.map(skill => (
                <span
                  key={skill.name}
                  className="skill-chip"
                  style={{ '--chip-color': cat.color }}
                >
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
