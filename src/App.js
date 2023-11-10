import './App.css';
import logo from './Images/Felipe Vergara-logos_black_short.png';
import Button from './components/button';
import Screen from './components/screen';
import Clear from './components/Clear';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src={logo}
          className='logo'
          alt='Logo'/>
      </div>
      <div className='contenedor-calculadora'>
        <Screen />
        <div className='fila'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='fila'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='fila'>    
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='fila'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='fila'>
          <Clear>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
