import React from "react";

function Education() {
  const educationList = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Bannari Amman Institute of Technology, Sathyamangalam",
      duration: "2023 — 2027",
      score: "CGPA: 8.14 / 10",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary Certificate (HSLC)",
      institution: "Government Model Girls Higher Secondary School, Komarapalayam",
      duration: "2022 — 2023",
      score: "Percentage: 88%",
      icon: "📘",
    
    },
  ];

  return (
    <section
      id="education"
      style={{
        padding: "5rem 2rem",
        backgroundColor: "#f9fafb",
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
            color: "#1f2937",
            fontWeight: "700",
          }}
        >
          Education
        </h2>

        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "#667eea",
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
                borderRadius: "15px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "row",
                alignItems: "stretch",
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "default",
                flexWrap: "wrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
              }}
            >
              {/* Image Section */}
              <div
                style={{
                  flex: "1 1 250px",
                  minHeight: "180px",
                  backgroundImage: `url(${edu.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Content Section */}
              <div
                style={{
                  flex: "2 1 300px",
                  padding: "1.5rem 2rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    flexShrink: 0,
                    marginTop: "0.2rem",
                  }}
                >
                  {edu.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      color: "#1f2937",
                      fontWeight: "600",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#667eea",
                      fontWeight: "500",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {edu.institution}
                  </p>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#6b7280",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {edu.duration}
                  </p>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#4b5563",
                      fontWeight: "500",
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

