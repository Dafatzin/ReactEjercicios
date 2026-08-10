import Producto from './components/Producto'
import Tarjetaperfil from './components/Tarjetaperfil'

function App(){

  return(
    <div>
      <Tarjetaperfil
      nombre="Ana Villanueva"
      profesion="Ingeniera en Computacion"
      ciudad="Ciudad de México"
      />
      <Tarjetaperfil
      nombre="Victor Ramirez"
      profesion="Diseñador UI UX"
      ciudad="Monterrey"
      />
    </div>
    /*
    <main>
      <h1>Catalogo de Productos</h1>
      <Producto nombre= "Laptop" precio = {1999}/>
      <Producto nombre="Mouse" precio={600}/>
      <Producto nombre="Teclado" precio={500}/>
    </main>
    */
  )
 
}
export default App

 /*
  const nombre = 'Ana'
  const curso = 'React'
  const edad = 25

  return (
    <div>
    <h1>Hola, {nombre}</h1>
    <h1>Estas tomando el Curso Intro a {curso}</h1>
    <p>Tienes {edad} años</p>
    <p>El proximo año tendrás {edad + 1} años</p>
    <p>Esta es mi primera aplicación</p>
    <button>Comenzar</button>
    </div>
    //Podemos hacer operaciones
    */