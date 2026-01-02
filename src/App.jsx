import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />   {/* Added Internship Section */}
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
