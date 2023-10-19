import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import "./sass/main.scss";
import OpeningHours from "./Components/OpeningHours";
import Menu from "./Components/Menu";

import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="App">
      <Nav setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Hero />
      <OpeningHours />
      <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
    </div>
  );
}

export default App;
