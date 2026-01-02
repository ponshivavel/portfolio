import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h2>WELCOME TO PORTFOLIO</h2>
      <nav>
        <ul style={navStyle}>
            
          <li><a className="nav-link" style={linkStyle} href="#about">About</a></li>
          <li><a className="nav-link" style={linkStyle} href="#projects">Projects</a></li>
          <li><a className="nav-link" style={linkStyle} href="#contact">Contact</a></li>
          
        </ul>
        
      </nav>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#282c34",
  color: "white"
};

const navStyle = {
  listStyle: "none",
  display: "flex",
  gap: "15px",
  margin: 0,
  padding: 0
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

export default Header;
