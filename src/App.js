import "./index.css";
import './App.css';
import Contactenos from './components/Contactenos';
import Footer from './components/Footer';
import { Menu } from './components/Menu';
import QuienesSomos from './components/QuienesSomos';
import Slider from './components/Slider';
import {
  getBanners,
  getSlider,
  obtenerToken,
  pedirMoneda,
  getDestinos,
  getProgramList,
  getProgramDetail
} from "./components/api/Apis";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useContext } from "react";
import { contexto } from "./components/contexto/contexto";

function App() {
   const context = useContext(contexto)

  const token = useQuery({
    queryKey: ["user"],
    queryFn: () => obtenerToken(),
  });

context.setToken(token.data);
 
    const currency = useQuery({
      queryKey: ['currency'],
      queryFn: () => pedirMoneda(context.token?.value)
    });
  

  console.log('Currency: ',currency.data);

  //const mon = currency.data.CambioContado;

  const slider = useQuery({
    queryKey: ['sliders'],
    queryFn: () => getSlider(context.token?.value, 'CLP')
  });

  const banners = useQuery({
    queryKey: ['banners'],
    queryFn: () => getBanners(context.token?.value)
  });

  const destinos = useQuery({
    queryKey: ['destinos'],
    queryFn: () => getDestinos(context.token?.value, 17)
  });

  const listaPrograma = useQuery({
    queryKey: ['listaProgramas'],
    queryFn: () => getProgramList(context.token?.value, 17, 63, null)
  });
  const programa = useQuery({
    queryKey: ['program'],
    queryFn: () => getProgramDetail(context.token?.value, 6400, null)
  });
  useEffect(() => {
    //console.log('Cambio: ', currency.data);
    console.log('Slider: ', slider.data);
    console.log('Banners: ', banners.data);
    console.log('Destinos: ', destinos.data);
    console.log('Program List: ', listaPrograma.data);
    console.log('Programa: ', programa.data)

  }, []);



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
