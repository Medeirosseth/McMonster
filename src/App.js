import Topbar from "./Components/Topbar/Topbar";
import Menu from "./Components/Menu/Menu";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import "./App.scss";
import { useState } from "react";
import Mural from "./Components/Mural/Mural";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Mural />
      </div>
    </div>
  );
}

export default App;
