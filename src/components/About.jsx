import React, { useState, useEffect } from "react";

/* ===== STYLES ===== */

const sectionStyle = {
  padding: "90px 20px",
  background: "linear-gradient(135deg, #020617, #020617)",
  color: "#ffffff"
};

const aboutContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "70px",
  flexWrap: "wrap",
  maxWidth: "1100px",
  margin: "0 auto"
};

const imageBlock = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  minWidth: "260px",
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  padding: "30px",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.15)",
  boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
  transition: "all 0.35s ease"
};

const imageStyle = {
  width: "260px",
  height: "260px",
  borderRadius: "50%",
  objectFit: "cover",
  boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
  transition: "transform 0.4s ease"
};

const nameStyle = {
  marginTop: "18px",
  fontSize: "22px",
  fontWeight: "600",
  letterSpacing: "1px"
};

const roleStyle = {
  marginTop: "6px",
  fontSize: "13px",
  color: "#cbd5e1",
  letterSpacing: "3px"
};

const textContainer = {
  maxWidth: "520px",
  lineHeight: "1.8",
  fontSize: "16px",
  color: "#e5e7eb"
};

const divider = {
  width: "60px",
  height: "3px",
  backgroundColor: "#38bdf8",
  margin: "22px 0"
};

const resumeStyle = {
  display: "inline-block",
  marginTop: "16px",
  padding: "12px 22px",
  borderRadius: "16px",
  color: "#38bdf8",
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.25)",
  textDecoration: "none",
  fontWeight: "500",
  transition: "all 0.35s ease"
};

const blinkArrowStyle = {
  animation: "blink 1s infinite"
};

/* ===== COMPONENT ===== */

function About() {
  const firstLine =
    "I am a 3rd-year AI & Data Science student passionate about solving real-world problems using Artificial Intelligence, Data Analytics, and Data Visualization.";
  const secondLine =
    "I enjoy working with Python, Java, SQL, and Power BI, and I love building simple and impactful projects that help me learn faster.";

  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (index1 < firstLine.length) {
      const t = setTimeout(() => {
        setDisplayText1(displayText1 + firstLine[index1]);
        setIndex1(index1 + 1);
      }, 35);
      return () => clearTimeout(t);
    }
  }, [index1, displayText1]);

  useEffect(() => {
    if (index1 === firstLine.length && index2 < secondLine.length) {
      const t = setTimeout(() => {
        setDisplayText2(displayText2 + secondLine[index2]);
        setIndex2(index2 + 1);
      }, 35);
      return () => clearTimeout(t);
    }
    if (index2 === secondLine.length) {
      setTypingDone(true);
    }
  }, [index1, index2, displayText2]);

  return (
    <section id="about" style={sectionStyle}>
      <div style={aboutContainer}>
        {/* PROFILE */}
        <div
          style={imageBlock}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform =
              "translateY(-10px) scale(1.03)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "none")
          }
        >
          <img
            src="/ponshivavelproff.png"
            alt="Ponshivavel S K"
            style={imageStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.08)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          />
          <div style={nameStyle}>PONSHIVAVEL S K</div>
          <div style={roleStyle}>AI & DATA SCIENCE</div>
        </div>

        {/* TEXT */}
        <div style={textContainer}>
          <p>{displayText1}</p>
          <p>{displayText2}</p>

          {typingDone && (
            <>
              <div style={divider}></div>
              <a
                href="https://docs.google.com/document/d/1lJXFyhwYJjC2z8GB-yWnh2eG55tRgWSCgGCHJcqIJZ0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={resumeStyle}
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
                View My Resume <span style={blinkArrowStyle}>→</span>
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
