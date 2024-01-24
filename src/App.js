import React, { useEffect,useState } from "react";
import "./index.css";
import './App.css';
import Contactenos from './components/Contactenos';
import Footer from './components/Footer';
import { Menu } from './components/Menu';
import QuienesSomos from './components/QuienesSomos';
import {Slider} from './components/Slider';
import {getSlider, obtenerToken, pedirMoneda } from "./components/api/Apis";
import { useQuery } from "@tanstack/react-query";

function App() {
const [auth, setAuth] = useState('');

// get Auth / token validation
const token = useQuery({
    queryKey: ["user"],
    queryFn: () => obtenerToken()
  });

  // pedimos el cambio
  const cambio = useQuery({
    queryKey: ["change"],
    queryFn: () => pedirMoneda(token.data?.value)
  });
 
  const carousel = useQuery ({
    queryKey: ["slider"],
    queryFn: () => getSlider(token.data?.value, 'USD')
  })

useEffect(()=>{
     const getToken = localStorage.getItem('token');
     if(getToken === undefined){
      setAuth(token.data?.value);
      localStorage.setItem('token', auth);
     }
    
}, [])

 return (
  <>
      <div className="App">
        <Menu change={cambio}/>
        <Slider items={carousel} />
        <QuienesSomos />
        <Contactenos />
        <Footer />
      </div>
  </>
  );
}

export default App;
