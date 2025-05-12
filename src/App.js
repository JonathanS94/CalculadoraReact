import "./App.css";
import freeeCodeCampLogo from "./imagenes/freecodecamplogo.png";

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
          <div className="fila"></div>
          <div className="fila"></div>
          <div className="fila"></div>
          <div className="fila"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
