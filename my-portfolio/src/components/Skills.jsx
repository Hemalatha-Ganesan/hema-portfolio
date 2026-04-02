import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['MySQL', 'Python', 'MongoDB', 'SQL']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'VS Code', 'Machine Learning', 'Problem Solving','Figma','canva']
    }
  ];

  return (
    <section id="skills" style={{
      padding: '5rem 2rem',
      backgroundColor: 'white',
      minHeight: '60vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          textAlign: 'center',
          color: '#1f2937',
          fontWeight: '700'
        }}>
          Skills & Expertise
        </h2>
        <div style={{
          width: '60px',
          height: '4px',
          backgroundColor: '#667eea',
          margin: '0 auto 3rem',
          borderRadius: '2px'
        }} />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#f9fafb',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
              }}
            >
              <h3 style={{
                color: '#667eea',
                marginBottom: '1.5rem',
                fontSize: '1.5rem',
                fontWeight: '600'
              }}>
                {category.title}
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: 'white',
                      color: '#4b5563',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;