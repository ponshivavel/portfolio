import React from "react";

function Achievements() {
  const achievements = [
    {
      title: "🏆 NPTEL Elite + Gold – Programming in Java",
      description:
        "Scored 90% in the NPTEL Programming in Java certification, demonstrating strong knowledge of Core Java and Object-Oriented Programming.",
    },
    {
      title: "🤖 The Economic Times AI Hackathon 2026",
      description:
        "Semi-Finalist and Top Performer in a national AI hackathon by developing innovative AI-powered solutions.",
    },
    {
      title: "💻 LeetCode Problem Solving",
      description:
        "Solved 150+ Data Structures and Algorithms problems using Java and SQL, strengthening problem-solving and coding skills.",
    },
    {
      title: "🎓 Microsoft Learn Certification",
      description:
        "Earned the \"Develop Code Features Using GitHub Copilot\" certification, demonstrating AI-assisted software development skills.",
    },
  ];

  return (
    <section id="achievements" style={sectionStyle}>
      <h2 style={heading}>My Achievements</h2>
      <div style={grid}>
        {achievements.map((item, idx) => (
          <div key={idx} style={card}>
            <h3 style={cardTitle}>{item.title}</h3>
            <p style={cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: "90px 20px",
  background: "linear-gradient(135deg, #020617, #020617)",
  color: "#ffffff",
  textAlign: "center",
};

const heading = {
  fontSize: "32px",
  marginBottom: "45px",
};

const grid = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "22px",
};

const card = {
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.15)",
  padding: "26px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
  transition: "transform 0.35s ease",
};

const cardTitle = {
  fontSize: "18px",
  marginBottom: "10px",
  color: "#ffffff",
};

const cardDescription = {
  fontSize: "15px",
  lineHeight: "1.7",
  color: "#e5e7eb",
};

export default Achievements;

