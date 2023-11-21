import "./App.css";
import Button from "./components/button";
import Screen from "./components/screen";
import Clear from "./components/Clear";
import Logo from "./components/logo";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const addInput = (val) => {
    setInput(input + val);
  };

  const result = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Valores en blanco");
    }
  };
  return (
    <div className="App">
      <div className="logo-contenedor">
        <Logo />
      </div>
      <div className="contenedor-calculadora">
        <Screen input={input} />
        <div className="fila">
          <Button handlerClic={addInput}>1</Button>
          <Button handlerClic={addInput}>2</Button>
          <Button handlerClic={addInput}>3</Button>
          <Button handlerClic={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button handlerClic={addInput}>4</Button>
          <Button handlerClic={addInput}>5</Button>
          <Button handlerClic={addInput}>6</Button>
          <Button handlerClic={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button handlerClic={addInput}>7</Button>
          <Button handlerClic={addInput}>8</Button>
          <Button handlerClic={addInput}>9</Button>
          <Button handlerClic={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button handlerClic={result}>=</Button>
          <Button handlerClic={addInput}>0</Button>
          <Button handlerClic={addInput}>.</Button>
          <Button handlerClic={addInput}>/</Button>
        </div>
        <div className="fila">
          <Clear handlerClear={() => setInput("")}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
