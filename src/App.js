import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience/>
      <Projects />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
