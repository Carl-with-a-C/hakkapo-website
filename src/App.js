import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import "./sass/main.scss";
import OpeningHours from "./Components/OpeningHours";
import Menu from "./Components/Menu";
import Drinks from "./Components/Drinks";
import Footer from "./Components/Footer";

import { useEffect, useState } from "react";
import Loading from "./Components/Loading";

import { LazyMotion, domAnimation, domMax } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [drinksOpen, setDrinksOpen] = useState(false);

  // const someRequest = () => {
  //   //Simulates a request; makes a "promise" that'll run for 2.5 seconds
  //   return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  // };

  // useEffect(() => {
  //   someRequest().then(() => {
  //     const loaderElement = document.querySelector(
  //       ".loading-screen--container"
  //     );
  //     if (loaderElement) {
  //       loaderElement.remove();
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <LazyMotion features={domAnimation}>
        <Loading isLoading={isLoading} />;
      </LazyMotion>
    );
  }

  return (
    <div className="App">
      <LazyMotion features={domMax}>
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
      </LazyMotion>
    </div>
  );
}

export default App;
