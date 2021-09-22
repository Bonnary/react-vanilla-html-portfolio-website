import { useState } from "react";
import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/intro/Intro.jsx";
import Portfolio from "./Components/portfolio/Portfolio.jsx";
import Work from "./Components/work/Work.jsx";
import Testimonials from "./Components/testimonials/Testimonials.jsx";
import Contact from "./Components/contact/Contact.jsx";
import "./App.css";
import Menu from "./Components/menu/Menu"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
