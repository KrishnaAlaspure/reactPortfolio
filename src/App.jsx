import { useState } from "react";
import FrontPage from './assets/components/FrontPage'
import { Routes,Route  } from "react-router-dom";
import AboutMe from "./assets/components/AboutMe";
import Experience from "./assets/components/Experience";
import Projects from "./assets/components/Projects";
import Skills from "./assets/components/Skills";
import ContactMe from "./assets/components/ContactMe";
import NavBar from "./assets/components/NavBar";
import Footer from "./assets/components/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg bg-black text-white">
    
      <NavBar/>
    
    {/* <Routes>
        
          <Route path='/' element={<FrontPage />} />
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contactme" element={<ContactMe />} />
          
        
      </Routes> */}
      <FrontPage/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Skills/>
      <ContactMe/>
      <Footer/> 
   
    </div>
  );
}

export default App;
