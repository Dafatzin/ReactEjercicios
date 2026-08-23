//import { BadPractice } from "./components/BadPractice";
//import { GoodPractice } from "./components/GoodPractice";
import { EjemplosEfectos } from "./components/EjemplosEfectos";
import { ListaFiltrable } from './components/ListaFiltrable';
import "./App.css";

 export default function App(){
  return(
    <div style={{maxWidth: '800px', margin:'0 auto', fontFamily:'sans-serif', padding:'20px'}}>
      {/*<h1>Ejemplo de React</h1>*/}
      <h1>Lista Filtros</h1>
      {/*<EjemplosEfectos/>*/}
      <ListaFiltrable />
    
    </div>
  );
}
