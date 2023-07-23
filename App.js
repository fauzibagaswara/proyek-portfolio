import { BrowserRouter as Router, Routes, Route ,} from 'react-router-dom';
import Background from './background/Background';
import Nav from './nav/Nav';
// import Avatar from './avatar/Avatar';
import About from './about/About';
import PlayerStart from './playerstart/PlayerStart';
import Personal from './item/Personal';
import Education from './item/Education';
import Karir from './item/Karir';
import Skills from  './skills/skills';
import Project from './project/Project';
import Contact from './contact/Contact'
import ProjectTwo from './project/ProjectTwo';
import ProjectTree from './project/ProjectTree';
import ProjectOne from './project/ProjectOne';


function App() {

  return (
    <Router>
      <Nav />
      <Background />
    
          <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills  />}
          />
          <Route
            path="/projects"
            element={<Project/>}
          />
          <Route
            path="/contact"
            element={<Contact/>}
          />
          <Route path="/Personal" element={<Personal />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Karir" element={<Karir />} />


          <Route path="/ProjectOne" element={<ProjectOne/>} />
          <Route path="/ProjectTwo" element={<ProjectTwo />} />
           
          </Routes>
      <PlayerStart />
    </Router>
  );
}

export default App;
