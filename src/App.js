import { useEffect } from 'react';
import Contact from './components/Contact';
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import Aos from "aos";
import "aos/dist/aos.css";
import Hireme from './components/HireMe';
import Resume from './components/Resume';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Services/>
      <Projects/>
      <Resume/>
      <Hireme/>
      <Contact/>
      <footer className="p-3 text-center">
        <h6 className="mb-3">Addisu Motora</h6>
      </footer>
    </div>
  );
}

export default App;
