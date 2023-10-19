import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import "./sass/main.scss";
import OpeningHours from "./Components/OpeningHours";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <OpeningHours />
      <Menu />
    </div>
  );
}

export default App;
