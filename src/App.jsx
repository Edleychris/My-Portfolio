import { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Skill from './Components/Skills/Skill';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import { BsMoon, BsSun } from 'react-icons/bs';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      {/* Floating toggle button */}
      <button className="moon-toggle" onClick={toggleTheme}>
        {isDark ? <BsSun /> : <BsMoon />}
      </button>

      <Home />
      <Nav />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
