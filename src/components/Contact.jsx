// File: src/components/Contact.jsx
import React from "react";

function Contact() {
  return (
    <section id="contact" style={sectionStyle}>
      <h2>Contact Me</h2>
      <p>Email: ponshivavelsk@gmail.com</p>
      <p>Phone: +91 6374880291</p>
      <p><a style={linkStyle} href="https://www.linkedin.com/in/ponshivavel-sk/"
             target="_blank" rel="noopener noreferrer">Linkedin</a></p>
             <p><a style={linkStyle} href="https://github.com/ponshivavel"
             target="_blank" rel="noopener noreferrer">GitHub</a></p>
    </section>
  );
}

const sectionStyle = {
  padding: "50px 20px",
  textAlign: "center",
  backgroundColor: "#f5f5f5"
};
const linkStyle = {
  color: "#0e76a8",
  textDecoration: "none",
  fontWeight: "bold"
};

export default Contact;
