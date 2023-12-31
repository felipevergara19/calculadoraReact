import React from "react";
import '../stylesheet/Button.css'


function Button(props){

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor!== '=');
  }
  return (
    <div 
      className={`button-contenedor ${esOperador(props.children) ? 'operador':null}`.trimEnd()}
      onClick={() => props.handlerClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;