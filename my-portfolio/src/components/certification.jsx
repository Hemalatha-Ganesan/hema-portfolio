import React, { useState } from "react";

// ===== IMPORT CERTIFICATE IMAGES =====
import hackspora from "../assets/certificates/hackspora_hackathon.jpeg";
import nptelJava from "../assets/certificates/nptel_java.png";
import nptelPython from "../assets/certificates/nptel_python.jpeg";
import simplilearnJava from "../assets/certificates/simplilearn_java.png";
import simplilearnSQL from "../assets/certificates/simplilearn_sql.png";
import ideathon from "../assets/certificates/Ideathon_participation.jpeg";
import shadowfox from "../assets/certificates/shadowfox_internship.jpeg";


// ======================================

function Certification() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    { name: "NPTEL - Python", img: nptelPython },
    { name: "NPTEL - Java", img: nptelJava },
    { name: "Simplilearn - Java", img: simplilearnJava },
    { name: "Simplilearn - SQL", img: simplilearnSQL },
    { name: "Hackspora - National Level Hackathon", img: hackspora },
    { name: "Ideathon - Participation", img: ideathon },
    { name: "Shadowfox - Internship", img: shadowfox },
  ];

  return (
    <section
      id="certifications"
      style={{
        padding: "80px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        animation: "fadeInUp 1s ease",
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .scroll-container {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .scroll-content {
          display: flex;
          gap: 40px;
          animation: scroll 25s linear infinite;
        }

        .scroll-container:hover .scroll-content {
          animation-play-state: paused;
        }

        .cert-item {
          padding: 20px;
          background: white;
          border-radius: 12px;
          text-align: center;
          min-width: 220px;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cert-item:hover {
          transform: scale(1.07);
          box-shadow: 0 8px 15px rgba(0,0,0,0.3);
        }

        .modal-bg {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 12px;
          max-width: 90%;
          max-height: 90%;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          animation: fadeInUp 0.4s ease;
        }

        .modal-img {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }

        .close-btn {
          position: absolute;
          top: 25px;
          right: 30px;
          background: #ff4d4d;
          border: none;
          color: white;
          font-size: 18px;
          padding: 8px 14px;
          border-radius: 6px;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        .close-btn:hover {
          background: #e60000;
        }
      `}</style>

      <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "30px" }}>
        Certifications
      </h2>

      {/* SCROLLING CERTIFICATES */}
      <div className="scroll-container">
        <div className="scroll-content">
          {[...certifications, ...certifications].map((cert, index) => (
            <div
              key={index}
              className="cert-item"
              onClick={() => setSelectedCert(cert)}
            >
              <img
                src={cert.img}
                alt={cert.name}
                style={{ width: "200px", borderRadius: "10px" }}
              />
              <p style={{ marginTop: "10px", fontWeight: "600" }}>{cert.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL POPUP */}
      {selectedCert && (
        <div className="modal-bg" onClick={() => setSelectedCert(null)}>
          <button className="close-btn" onClick={() => setSelectedCert(null)}>
            Close
          </button>

          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCert.img} className="modal-img" alt="certificate" />
            <h3 style={{ marginTop: "15px", textAlign: "center" }}>
              {selectedCert.name}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certification;
