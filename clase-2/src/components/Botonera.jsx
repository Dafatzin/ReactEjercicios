import {useState} from 'react';

export function Botonera(){
 //Estado que guarda el valor actual del valor
 const[variable,setVariable] = useState (0);
 //Función para sumar la variable
 const sumar = () => {
    setVariable(variable + 1);
 };

 //Función para disminuir el contador
 const restar = () => {
    //Validamos que el contador no sea menor que 0
   if(variable > 0 ){
        setVariable(variable-1);
   } else{
    alert("El contador no puede tener valores negativos");
   }
   
 };
  //Función para regresar el contador a 0
 const resetear = () => {
        setVariable(0);
    };
    return(
        <div>
            <h2>Contador con useState</h2>
            {/*
              Si el contador es mayor o igual a 10,
              el texto cambia a rojo.
              Si no, permanece negro.*/}
            <h1 style={{color: variable >= 10 ? "red" : "black"}}>
                {variable}
            </h1>

            {/* Botón para aumentar */}
            <button onClick={sumar}>+1</button>
            {/*Botón para restar*/}
            <button onClick={restar}>-1</button>
            {/* Botón para disminuir */}
            <button onClick={resetear}>Reset</button>
        </div>
    );
}
export default Botonera;