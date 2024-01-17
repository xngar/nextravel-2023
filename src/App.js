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
} from "./components/api/Api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useContext } from "react";
import { contexto } from "./components/contexto/contexto";
import Cookies from "universal-cookie";

function App() {
  //const context = useContext(contexto)
  const cookie = new Cookies();
  const token2 = useQuery({
    queryKey: ["user"],
    queryFn: () => obtenerToken(),
  });
  const x = token2.data;

  const currency = useQuery({
    queryKey: ['currency'],
    queryFn: () => pedirMoneda(x.value)
  });

  const slider = useQuery({
    queryKey: ['sliders'],
    queryFn: () => getSlider(x.value, 'CLP')
  });

  const banners = useQuery({
    queryKey: ['banners'],
    queryFn: () => getBanners(x.value)
  });

  const destinos = useQuery({
    queryKey: ['destinos'],
    queryFn: () => getDestinos(x.value, 17)
  });

  const listaPrograma = useQuery({
    queryKey: ['listaProgramas'],
    queryFn: () => getProgramList(x.value, 17, 63, null)
  });
  const programa = useQuery({
    queryKey: ['program'],
    queryFn: () => getProgramDetail(x.value, 6400, null)
  });
  useEffect(() => {
    console.log('Cambio: ', currency.data);
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
