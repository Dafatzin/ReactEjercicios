import React, {useState, useEffect, useMemo} from 'react';
import './App.css';

function App(){
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');
  const [duracionMinima, setDuracionMinima] = useState('');

  // Efecto secundario: Actualizar el título del documento cada vez que cambia el total
  useEffect(() =>{ 
    document.title = `Total: ${calcularTiempoTotal}minutos`;
  }, [tareas]); // Solo se recalcula cuando cambian las tareas

  //Cálculo de tiempo total optimizado con useMemo
  const calcularTiempoTotal = useMemo(() =>{
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]);  // Solo se recalcula cuando cambbian las tareas

  // Función para agregar una nueva tarea
  const agregarTarea= () => {
    if(nuevaTarea && duracion){
      const nuevaTareaObj = {
        id: Date.now(),
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  // Filtrar las Tareas
  const filtrarTareas= useMemo(() =>{
    if(duracionMinima ===''){
      return tareas; // Se muestra TODO
    }
    return tareas.filter((tarea) =>tarea.duracion === parseInt(duracionMinima));
  }, [tareas, duracionMinima]);
  // Eliminar Tareas
  const eliminarTarea = (idEliminar) => {
    setTareas(tareas.filter((tarea) => tarea.id !== idEliminar));
  };
  
  return(
    <div className='General'>
      <h1>Contador de Tareas</h1>
      <div className='Element'>
        <input type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nombre de la tarea"
        />
        <input
        type="number"
        value={duracion}
        onChange={(e) => setDuracion(e.target.value)}
        placeholder="Duración en minutos"
        />
        <button onClick={agregarTarea}>Agregar</button>
        <input
        type="number"
        value={duracionMinima}
        onChange={(e) => setDuracionMinima(e.target.value)}
        />
      </div>
      <h2>Tareas</h2>
      <ul>
        {filtrarTareas.map((tarea) => (
          <li key={tarea.id}><span>{tarea.nombre}: {tarea.duracion} minutos</span>
          <button onClick={() => eliminarTarea(tarea.id)} className='Elimin'>Eliminar</button>
          </li>
        ))}
      </ul>

      <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
    </div>
  );
}

export default App;
