import {CicloDeVida} from "./components/CicloDeVida";
import { useState } from "react";
export default function App (){
  const [mostrar, setMostrar] = useState(true);
  return (
    <div>
    <h1>Inspector del Ciclo de Vida</h1>
    <button onClick={() => setMostrar (!mostrar)}>
      {mostrar ? "Ocultar": "Mostrar" }
    </button>

    {mostrar && <CicloDeVida />}
    
    </div>
  );
}