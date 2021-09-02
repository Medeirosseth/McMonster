
import "./App.scss";
import { useState } from "react";

import { Topbar, Menu, Intro, Portfolio, Mural, Products} from './Components'

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
        <Products />
      </div> 
    </div>
  );
}

export default App;
