import React, { useState, useEffect, isValidElement } from "react";
import "./index.css";
import './App.css';
import Contactenos from './components/Contactenos';
import Footer from './components/Footer';
import { Menu } from './components/Menu';
import QuienesSomos from './components/QuienesSomos';
import { Slider } from './components/Slider';
import { getSlider, pedirMoneda } from "./components/api/Apis";
import { useQuery } from "@tanstack/react-query";
import { HashLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(false);


  // pedimos el cambio
  const cambio = useQuery({
    queryKey: ["change"],
    queryFn: () => pedirMoneda()
  });

  // invocamos a los Slider de Turisclub
  const carousel = useQuery({
    queryKey: ["slider"],
    queryFn: () => getSlider('USD')
  });
  console.log('Valor de Carousel: ', carousel.data)
  console.log('Valor del Loading: ', loading);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)

  }, [])

  return (<>
    {
      loading ?
        <HashLoader
          color={'#d3761b'}
          loading={loading}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
          style={{ float: 'center' }}

        />
        :
        <div className="App">
          <Menu change={cambio} />
          <Slider items={carousel} />
          <QuienesSomos />
          <Contactenos />
          <Footer />
        </div>
    }
  </>);
}

export default App;
