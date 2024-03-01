import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import "./sass/main.scss";
import OpeningHours from "./Components/OpeningHours";
import Menu from "./Components/Menu";
import Drinks from "./Components/Drinks";
import Footer from "./Components/Footer";

import { useEffect, useState } from "react";
import Loading from "./Components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [drinksOpen, setDrinksOpen] = useState(false);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  return (
    <div className="App">
      <Nav
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
        drinksOpen={drinksOpen}
        isLoading={isLoading}
      />
      <Hero />
      <OpeningHours />
      <Menu
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
        setDrinksOpen={setDrinksOpen}
        drinksOpen={drinksOpen}
      />
      <Drinks
        setDrinksOpen={setDrinksOpen}
        drinksOpen={drinksOpen}
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
      />
      <Footer />
    </div>
  );
}

export default App;
