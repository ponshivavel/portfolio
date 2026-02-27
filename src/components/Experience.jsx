import React from "react";

function Experience() {
  const experiences = [
{
      role: "Java Full Stack Intern", // Changed from title
      company: "Infosys Springboard", // Changed from organization
      duration: "Oct 2025 - Dec 2025",
      description: "Project: InsurAI - Corporate Policy Automation and Intelligence System. Focused on streamlining policy management using AI." // Changed from details
    },
    {
      role: "Data Science Intern",
      company: "SmartED",
      duration: "JAN 2025 - MAR 2025",
      description:
        "Completed an internship in Data Science. Learned machine learning concepts and developed a Disease Predictor project using Random Forest. Gained hands-on experience working with APIs."
    }
  ];

  return (
    <section id="experience" style={sectionStyle}>
      <h2 style={heading}>Internship / Experience</h2>

      <div style={container}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 0 35px rgba(56,189,248,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(0,0,0,0.3)";
            }}
          >
            <h3 style={role}>
              {exp.role} <span style={company}>@ {exp.company}</span>
            </h3>

            <p style={duration}>{exp.duration}</p>
            <p style={description}>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===== STYLES ===== */

const sectionStyle = {
  padding: "90px 20px",
  background: "linear-gradient(135deg, #020617, #020617)",
  color: "#ffffff"
};

const heading = {
  textAlign: "center",
  fontSize: "32px",
  marginBottom: "45px"
};

const container = {
  maxWidth: "900px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "30px"
};

const card = {
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  color: "#ffffff",
  padding: "30px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.15)",
  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  transition: "all 0.35s ease"
};

const role = {
  fontSize: "20px",
  marginBottom: "6px"
};

const company = {
  color: "#38bdf8",
  fontWeight: "500"
};

const duration = {
  fontSize: "14px",
  color: "#cbd5e1",
  marginBottom: "14px"
};

const description = {
  fontSize: "15px",
  lineHeight: "1.7",
  color: "#e5e7eb"
};

export default Experience;
