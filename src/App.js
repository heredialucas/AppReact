import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [contador, upgradeContador] = useState(0);

  return (
    <div className="App gap-2">
      <h1 className="App-Titulo">CONTADOR</h1>
      <div className="App-Circle">
        <span className="App-Contador">{contador}</span>
      </div>
      <div className="d-grid gap-2">
        <Button onClick={() => upgradeContador(contador + 1)} variant="primary">
          Aumentar
        </Button>
        <Button
          onClick={(e) => {
            contador > 0 ? upgradeContador(contador - 1) : e.preventDefault();
          }}
          variant="warning"
        >
          Disminuir
        </Button>
        <Button onClick={() => upgradeContador(0)} variant="danger">
          Resetear
        </Button>
      </div>
    </div>
  );
}

export default App;
