import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import "./sass/main.scss";
import OpeningHours from "./Components/OpeningHours";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <OpeningHours />
    </div>
  );
}

export default App;
