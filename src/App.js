
import './App.css';
import Footer from './components/Footer';
import { Menu } from './components/Menu';
import QuienesSomos from './components/QuienesSomos';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Menu />
      <Slider />
      <QuienesSomos />
      <Footer />
    </div>
  );
}

export default App;
