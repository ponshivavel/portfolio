import React from "react";

/* IMPORT IMAGES */
import socialMediaImg from "../../public/sk2.png";
import tradeToolImg from "../../public/sk.png";
import heartImg from "../../public/sk4.png";
import insuraiImg from "../../public/sk3.png";

function Projects() {
  const projects = [
    {
      title: "Insurai - Insurance Management App",
      image: insuraiImg,
      github: "https://github.com/ponshivavel/InsurAI",
      duration: "OCT 2025 - DEC 2025",
      tech: "React | Spring Boot | SQL",
      description:
        "Developed a full-stack insurance management app to manage policies, track claims, and visualize analytics using React, Spring Boot, and SQL."
    },
    {
      title: "Social Media Trend Analysis",
      image: socialMediaImg,
      github: "#",
      duration: "SEP 2025 - NOV 2025",
      tech: "PySpark | Big Data",
      description:
        "Built a PySpark-based pipeline to analyze large-scale social media data and identify trending topics and engagement patterns."
    },
    {
      title: "Trade History Normalization Tool",
      image: tradeToolImg,
      github: "#",
      duration: "DEC 2024 - JAN 2025",
      tech: "Python | Pandas | Tkinter",
      description:
        "Developed a desktop tool to normalize nested JSON trade data from CSV files with GUI-based upload and validation."
    },
    {
      title: "Heart Disease Predictor",
      image: heartImg,
      github: "#",
      duration: "JAN 2025 - MAR 2025",
      tech: "Python | Scikit-learn | SMOTE | GridSearchCV",
      description:
        "Built a Random Forest model on UCI heart disease data for real-time prediction using joblib."
    }
  ];

  return (
    <section id="projects" style={sectionStyle}>
      <h2 style={heading}>My Projects</h2>

      <div style={projectsContainer}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={projectCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-12px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 30px 60px rgba(56,189,248,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(0,0,0,0.25)";
            }}
          >
            {/* IMAGE */}
            <div
              style={imageWrapper}
              onMouseEnter={(e) =>
                (e.currentTarget.firstChild.style.transform = "scale(1.12)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.firstChild.style.transform = "scale(1)")
              }
            >
              <img
                src={project.image}
                alt={project.title}
                style={imageStyle}
              />
            </div>

            {/* CONTENT */}
            <h3 style={title}>{project.title}</h3>
            <p style={duration}>{project.duration}</p>

            <span style={tech}>{project.tech}</span>

            <p style={description}>{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(56,189,248,0.8)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.color = "#38bdf8";
              }}
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===== STYLES ===== */

const sectionStyle = {
  padding: "90px 20px",
  background: "linear-gradient(135deg, #020617, #020617)"
};

const heading = {
  textAlign: "center",
  fontSize: "34px",
  marginBottom: "50px",
  color: "#ffffff"
};

const projectsContainer = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "35px"
};

const projectCard = {
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  color: "#ffffff",
  padding: "22px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.15)",
  boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
  transition: "all 0.35s ease"
};

const imageWrapper = {
  overflow: "hidden",
  borderRadius: "14px",
  marginBottom: "16px"
};

const imageStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  transition: "transform 0.5s ease"
};

const title = {
  fontSize: "20px",
  marginBottom: "6px"
};

const duration = {
  fontSize: "14px",
  color: "#cbd5e1",
  marginBottom: "10px"
};

const tech = {
  display: "inline-block",
  background: "rgba(255,255,255,0.12)",
  padding: "6px 14px",
  borderRadius: "20px",
  fontSize: "13px",
  marginBottom: "14px"
};

const description = {
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "14px 0",
  color: "#e5e7eb"
};

const linkStyle = {
  display: "inline-block",
  padding: "10px 18px",
  marginTop: "10px",
  borderRadius: "14px",
  color: "#38bdf8",
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.25)",
  textDecoration: "none",
  fontWeight: "500",
  transition: "all 0.35s ease"
};

export default Projects;
