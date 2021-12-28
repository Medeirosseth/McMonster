import React, { useState} from 'react'
// import { commerce } from './lib/commerce'
import  Topbar  from './Components/Topbar/Topbar'
import  Menu from './Components/Menu/Menu'
import  Intro from './Components/Intro/Intro'
import  Portfolio  from './Components/Portfolio/Portfolio'

// import  Products from './Components/Products/Products'

import "./App.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [products, setProducts] = useState([]);

  // const fetchProducts = async () => {
  //   const data = await commerce.products.list();

  //   setProducts(data);
  // }

  // useEffect(() => {
  //   fetchProducts();
  // }, [])

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
      </div> 
    </div>
  );
}

export default App;
