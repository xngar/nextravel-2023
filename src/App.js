import React from "react";
import "./index.css";
import './App.css';
import Contactenos from './components/Contactenos';
import Footer from './components/Footer';
import { Menu } from './components/Menu';
import QuienesSomos from './components/QuienesSomos';
import {Slider} from './components/Slider';
import {getSlider, pedirMoneda } from "./components/api/Apis";
import { useQuery } from "@tanstack/react-query";

function App() {
//const [auth, setAuth] = useState('');

  // pedimos el cambio
  const cambio = useQuery({
    queryKey: ["change"],
    queryFn: () => pedirMoneda()
  });
 
  // invocamos a los Slider de Turisclub
  const carousel = useQuery ({
    queryKey: ["slider"],
    queryFn: () => getSlider('USD')
  });


 return (<>
      <div className="App">
        <Menu change={cambio}/>
        <Slider items={carousel} />
        <QuienesSomos />
        <Contactenos />
        <Footer />
      </div>
  </>);
}

export default App;
