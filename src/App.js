import "./index.css";
import './App.css';
import Contactenos from './components/Contactenos';
import Footer from './components/Footer';
import { Menu } from './components/Menu';
import QuienesSomos from './components/QuienesSomos';
import Slider from './components/Slider';
import { obtenerToken } from "./components/Api/Api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { useContext } from "react";
import { contexto } from "./components/contexto/contexto";

function App() {
  const contexto2 = useContext(contexto)

  const token2 = useQuery({
    queryKey: ["user"],
    queryFn: () => obtenerToken(),
  });

  useEffect(() => {
    contexto2.setToken(token2);
    console.log(token2.data);
  }, [])



  return (
    <div className="App">
      <Menu />
      <Slider />
      <QuienesSomos />
      <Contactenos />
      <Footer />
    </div>
  );
}

export default App;
