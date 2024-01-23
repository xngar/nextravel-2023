import React, { useEffect,useState } from "react";
import "./index.css";
import './App.css';
import Contactenos from './components/Contactenos';
import Footer from './components/Footer';
import { Menu } from './components/Menu';
import QuienesSomos from './components/QuienesSomos';
import {Slider} from './components/Slider';


import { ContextoDatos } from "./components/contexto/ContextoDatos";

function App() {

 return (
  <ContextoDatos>
      <div className="App">
        <Menu />
        <Slider />
        <QuienesSomos />
        <Contactenos />
        <Footer />
      </div>
  </ContextoDatos>
  );
}

export default App;
