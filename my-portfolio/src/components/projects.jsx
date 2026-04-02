import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Deep Learning-Based COVID-19 & Pneumonia Detection',
      description: 'Developing an AI-powered diagnostic framework to classify COVID-19 and Pneumonia from Chest X-ray (CXR) images using Convolutional Neural Networks (CNNs) and Transfer Learning.',
      tech: ['Python', 'TensorFlow/Keras', 'DenseNet', 'EfficientNet', 'Xception', 'Grad-CAM'],
      githubUrl: 'https://github.com/Hemalatha-Ganesan/Medical_diagnosis_using_ML',
      color: '#f87171'
    },
    {
      title: 'Personal Portfolio Website - Full Stack',
      description: 'Developing a modern, responsive personal portfolio to showcase my projects and skills. Building reusable React components and styling with Tailwind CSS for a clean UI/UX.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'Git', 'GitHub'],
      liveUrl: 'https://hema-portfolio-lake.vercel.app/',
      color: '#3b82f6'
    },
    {
      title: 'AI-Driven Course Recommendation System – Full-stack / AI Integration',
      description: 'Developed a web application that recommends personalized courses based on user interests, skills, and learning goals. Integrated AI to analyze user preferences and generate intelligent course suggestions, along with insights to improve learning paths and skill development.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'OpenAI API', 'Git', 'GitHub'],
      githubUrl: 'https://github.com/Hemalatha-Ganesan/AI-Course-Recommendation-System',
      color: '#10b981'
    }
  ];

  const getLinkProps = (project) => {
    const url = project.liveUrl || project.githubUrl;
    const text = project.liveUrl ? 'Live Demo →' : 'View on GitHub →';
    return { href: url, text };
  };

  return (
    <section id="projects" style={{
      padding: '5rem 2rem',
      backgroundColor: '#f9fafb',
      minHeight: '80vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          textAlign: 'center',
          color: '#1f2937',
          fontWeight: '700'
        }}>
          Featured Projects
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
          {projects.map((project, idx) => {
            const linkProps = getLinkProps(project);
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{
                  height: '150px',
                  background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '3rem'
                }}>
                  💼
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    color: '#1f2937',
                    fontWeight: '600'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    color: '#6b7280',
                    marginBottom: '1rem',
                    lineHeight: '1.6'
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: '#f3f4f6',
                          color: '#4b5563',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '12px',
                          fontSize: '0.85rem'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={linkProps.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: project.color,
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: '500',
                      transition: 'opacity 0.3s',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                  >
                    {linkProps.text}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;

