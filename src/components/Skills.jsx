import React from "react";

/* ===== STYLES ===== */

const sectionStyle = {
  padding: "90px 20px",
  background: "linear-gradient(135deg, #020617, #020617)",
  textAlign: "center",
  color: "#ffffff"
};

const titleStyle = {
  fontSize: "32px",
  marginBottom: "10px"
};

const subtitleStyle = {
  fontSize: "15px",
  color: "#cbd5e1",
  marginBottom: "45px"
};

const skillsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gap: "20px",
  maxWidth: "900px",
  margin: "0 auto"
};

const skillCard = {
  padding: "14px 18px",
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderRadius: "30px",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "default",
  border: "1px solid rgba(255,255,255,0.2)",
  transition: "all 0.35s ease",
  boxShadow: "0 10px 25px rgba(0,0,0,0.25)"
};

/* ===== DATA ===== */

const skills = [
  "Java",
  "Python",
  "SQL",
  "Power BI",
  "Machine Learning",
  "Artificial Intelligence",
  "Prompt Engineering",
  "Data Analysis",
  "Data Visualization",
  "React",
  "Git & GitHub",
  "Problem Solving",
  "Spring Boot"
];

/* ===== COMPONENT ===== */

function Skills() {
  return (
    <section id="skills" style={sectionStyle}>
      <h2 style={titleStyle}>My Skills</h2>
      <p style={subtitleStyle}>
        Technologies I use to build scalable and data-driven applications
      </p>

      <div style={skillsGrid}>
        {skills.map((skill, index) => (
          <div
            key={index}
            style={skillCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(56,189,248,0.6)";
              e.currentTarget.style.color = "#38bdf8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.25)";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
