import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="About" element={<About />}/>
      <Route path="Work" element={<Work />}/>
      <Route path="Skill" element={<Skill />}/>
      <Route path="Contact" element={<Contact />}/>
      <Route path="Footer" element={<Footer />}/>
    </Routes>
    </div>
  );
}
export default App;
