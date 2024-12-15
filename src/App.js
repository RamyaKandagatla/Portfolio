import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects/>
      <Portfolio />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
