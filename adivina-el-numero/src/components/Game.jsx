import {useState, useEffect} from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

function Game(){
const [numero, setNumero] = useState('');
const [aleatorio, setAleatorio] =  useState(0);
const [mensaje, setMensaje] = useState('');

// Funcion para numero aleatorio
useEffect(() => {
    setAleatorio(Math.floor(Math.random() * 100) + 1);
}, []);

//Funcion guardar numero
function manejarCambio(e){
      const valor = e.target.value;
      setNumero(valor);

      const valorNum= Number(valor);

      // Comparar numero
      if (valorNum === aleatorio){
        setMensaje("Número adivinado correctamente");
    } else if (valorNum > aleatorio){
        setMensaje("El número es menor");
    } else {
        setMensaje("El número es mayor");
    }
}

// Funncion reiniciar juego
function reiniciar(){
        setAleatorio(Math.floor(Math.random() * 100) +1);
        setNumero('');
        setMensaje('');
    }

return(
    <div className="contgame">
        <h1 className="titulo"> Adivina el Número</h1>
        <InputNumber valor={numero} onChange={manejarCambio} className="inumero"placeholder="Ingresa un número"/>
        <Message texto={mensaje} />
        <RestartButton onRestart={reiniciar} />
    </div>
);
}

  export default Game;