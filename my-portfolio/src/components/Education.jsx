import React from "react";

function createEducationImage(title, subtitle, startColor, endColor) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${startColor}" />
          <stop offset="100%" stop-color="${endColor}" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" rx="32" fill="url(#bg)" />
      <circle cx="110" cy="110" r="70" fill="rgba(255,255,255,0.18)" />
      <circle cx="690" cy="390" r="90" fill="rgba(255,255,255,0.12)" />
      <rect x="70" y="310" width="260" height="14" rx="7" fill="rgba(255,255,255,0.45)" />
      <rect x="70" y="338" width="360" height="12" rx="6" fill="rgba(255,255,255,0.28)" />
      <text x="70" y="210" fill="white" font-size="46" font-family="Segoe UI, Arial, sans-serif" font-weight="700">
        ${title}
      </text>
      <text x="70" y="265" fill="rgba(255,255,255,0.92)" font-size="28" font-family="Segoe UI, Arial, sans-serif">
        ${subtitle}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function Education() {
  const educationList = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Bannari Amman Institute of Technology, Sathyamangalam",
      duration: "2023 - 2027",
      score: "CGPA: 8.14 / 10",
      icon: "CS",
      image: createEducationImage("B.E CSE", "Engineering Degree", "#964c3a", "#2f231e"),
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Government Model Girls Higher Secondary School, Komarapalayam",
      duration: "2022 - 2023",
      score: "Percentage: 88%",
      icon: "HSC",
      image: createEducationImage("Higher Secondary", "School Education", "#d29a2e", "#8a5a44"),
    },
  ];

  return (
    <section
      id="education"
      style={{
        padding: "5rem 2rem",
        backgroundColor: "#f8efe6",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1000px", width: "100%" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            textAlign: "center",
            color: "#2b211c",
            fontWeight: "700",
          }}
        >
          Education
        </h2>

        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "#964c3a",
            margin: "0 auto 3rem",
            borderRadius: "2px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "white",
                borderRadius: "18px",
                boxShadow: "0 10px 24px rgba(47,35,30,0.08)",
                display: "flex",
                flexDirection: "row",
                alignItems: "stretch",
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "default",
                flexWrap: "wrap",
                border: "1px solid #ead7c4",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 18px 34px rgba(47,35,30,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 24px rgba(47,35,30,0.08)";
              }}
            >
              <div style={{ flex: "1 1 280px", minHeight: "220px" }}>
                <img
                  src={edu.image}
                  alt={edu.institution}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div
                style={{
                  flex: "2 1 320px",
                  padding: "1.75rem 2rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    minWidth: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #964c3a, #2f231e)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.95rem",
                    fontWeight: "700",
                    letterSpacing: "0.4px",
                    flexShrink: 0,
                  }}
                >
                  {edu.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      color: "#2b211c",
                      fontWeight: "700",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#964c3a",
                      fontWeight: "600",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {edu.institution}
                  </p>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#8a6f62",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {edu.duration}
                  </p>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#5b463d",
                      fontWeight: "600",
                    }}
                  >
                    {edu.score}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
