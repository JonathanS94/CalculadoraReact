import "./App.css";
import freeeCodeCampLogo from "./imagenes/freecodecamplogo.png";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";

function App() {
  return (
    <div className="App">
      <div className="frecodecamp-logo-contendor">
        <img
          src={freeeCodeCampLogo}
          className="freecodecamp-logo"
          alt="FreeCodeCamp Logo"
        />
        <div className="contenedor-calculadora">
          <Pantalla />
          <div className="fila">
            <Boton>1</Boton>
            <Boton>2</Boton>
            <Boton>3</Boton>
            <Boton>+</Boton>
          </div>
          <div className="fila">
            <Boton>4</Boton>
            <Boton>5</Boton>
            <Boton>6</Boton>
            <Boton>-</Boton>
          </div>
          <div className="fila">
            <Boton>7</Boton>
            <Boton>8</Boton>
            <Boton>9</Boton>
            <Boton>x</Boton>
          </div>
          <div clasName="fila">
            <Boton>=</Boton>
            <Boton>0</Boton>
            <Boton>.</Boton>
            <Boton>/</Boton>
          </div>
          <div className="fila">
            <BotonClear>Clear</BotonClear>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
