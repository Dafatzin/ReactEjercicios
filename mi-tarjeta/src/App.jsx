import Tarjeta from './components/Tarjeta'
import imagen from './assets/Alien.jpg'
import imagen2 from './assets/lilPeep.jpg'
import imagen3 from './assets/xxtentacion.jpg'

function App() {
  
  return (
    <div className="contenedor">
      <Tarjeta
      imagen = {imagen}
      nombre = "Atzin M Espejel"
      edad = "23"
      profesion = "Creative Developer"
      presentacion = "Hola, soy creative developer enfocaada en el diseño de interfaces, frontend y experiencias interactivas."
      instagram = "un_alien_estuvo_aqui"
      colorBorde = "#09b133"
      />
      <Tarjeta
      imagen = {imagen2}
      nombre = "Lil Peep"
      edad = "21"
      profesion = "Cantante"
      presentacion = "Hey, soy cantante de rap y pop punk, me gusta la moda y el arte."
      instagram = "lilpeep"
      colorBorde = "#af0777"
      />
      <Tarjeta
      imagen = {imagen3}
      nombre = "XXXTENTACION"
      edad = "20"
      profesion = "Cantante"
      presentacion = "Hey, soy cantante de hip-hop y pop, me gusta la moda y el arte."
      instagram = "xxtentacion"
      colorBorde = "#ffffff"
      />
    </div>
  )
}
export default App