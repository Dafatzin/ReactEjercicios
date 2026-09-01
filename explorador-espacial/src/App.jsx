import { useState, useEffect, useMemo, useRef } from 'react';
import Planeta from './components/Planeta';
import PlanetasDisp from './components/Planetas.json';
import './App.css'

// Atzin S --> @un_alien_estuvo_aqui

function App() {
  const [distancia, setDistancia] = useState (0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState ('En órbita');
  const [planetasVisitados, setPlanetasVisitados]= useState([]);
  const [planetaSeleccionado, setPlanetaSeleccionado] = useState(null);
  //Arreglo
  const [planetasDisponibles, setPlanetasDisponibles] = useState(() => {
  const datosGuardados = localStorage.getItem("planetas");
  if (datosGuardados !== null) {
    return JSON.parse(datosGuardados);
  }
  return PlanetasDisp;
});
  
  // Variables para el formulario
  const nombreRef = useRef(null);
  const descripcionRef = useRef(null);
  const imagenRef = useRef(null);

  //Empiezan los efectos Secundarios
  useEffect(() =>{
   console.log("El panel de control está listo");
   if(planetaSeleccionado !== null){
   const intervalo = setInterval(() =>{
   setCombustible(combustible => combustible -1);
   setDistancia(distancia => distancia + 100 );
     }, 1000);
    

     return () => {
      clearInterval(intervalo);
      console.log("El panel se ha apagado")
     }
    }
  }, [planetaSeleccionado]);

  useEffect(() =>{
    console.log("¡Combustible actualizado"); //Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `${estadoNave}`;
  },[estadoNave]);

  // Guardar los datos Formulario
  useEffect(() =>{
    localStorage.setItem("planetas", JSON.stringify(planetasDisponibles));
  },[planetasDisponibles]);
  

// Btn aterrizaje, se cambie estado, se agrega planeta a la lista
  function btncambio(){
    if(planetaSeleccionado === null){
       alert("No se ha seleccionado ningun planeta");
    } else{
      setEstadoNave("Aterrizando");
      setPlanetaSeleccionado (null);
      setPlanetasVisitados(planetasVisitados =>[...planetasVisitados, planetaSeleccionado]);
      }
  }

  //Función para agregar planetas visitados
 function agregarPlanetas (setPlanetasSeleccionados) {
    setPlanetasVisitados(planetasVisitados => [...planetasVisitados,nuevoPlanetas])
  }

  function seleccionarPlaneta(nombre){
    setPlanetaSeleccionado(nombre);
  }

  //Empezando con la función para el formulario
function agregarFormulario(){
if(nombreRef.current.value === "" || descripcionRef.current.value === "" || imagenRef.current.value === ""){
  alert("Completa el Formulario");
} else{
   const archivo = imagenRef.current.files[0];
  const lector = new FileReader(); // Empieza a leer el archivo 
  lector.onload = () =>{
  const nuevoPlanetaF = {
    nombre: nombreRef.current.value,
    descripcion: descripcionRef.current.value,
    imagen: lector.result
  };
  setPlanetasDisponibles(planetasDisponibles =>[...planetasDisponibles, nuevoPlanetaF]);
};
lector.readAsDataURL(archivo);
}
}

 return(
    <div>
      {<nav className="menu"> <p>Distancia:{distancia}</p> <p>Estado:{mensajeEstado}</p> <p>Combustible {combustible}</p></nav>}
      {planetasVisitados.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />
         ))}
         {planetasDisponibles.map((PlanetasDis, index) =>(
          <div key={index} className="planetadet" onClick={() => seleccionarPlaneta(PlanetasDis.nombre, PlanetasDis.descripcion, PlanetasDis.imagen)}>
           <p className="nombre">{PlanetasDis.nombre}</p>
           <div className="planetainfo">  
            <p className="Descripcion">{PlanetasDis.descripcion}</p>
            <img src={PlanetasDis.imagen} alt="Planeta Seleccionado" className="imagen"/>
          </div>
          </div>
         ))}
         {/*Empieza el formulario */}
         <div className="formcon">
        <input ref={nombreRef} type="text"  className="nombrein" placeholder="Nombre del Planeta"/>
        <input ref={descripcionRef} type="text" className="descripin" placeholder="Describe el Planeta"/>
        <input ref={imagenRef} type="file" className="imgin" accept="image/*" /> 
        </div>
        
        <button onClick={btncambio} className="btnate">Aterrizar</button>
        <button onClick={agregarFormulario} className="btnagre">Agregar</button>
    
    </div>
  );
}

export default App;