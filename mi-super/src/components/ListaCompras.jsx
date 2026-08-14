import {useState} from "react";
import './ListaCompras.css';

function ListaCompras(){
    const [productos, setProductos]= useState([ ]);
    const [nuevoProducto, setNuevoProducto] = useState("");

const agregarProducto = () =>{
    if(nuevoProducto.trim() !==""){
    setProductos([...productos, nuevoProducto]);
    setNuevoProducto("");
    }
};

const eliminarProducto = (index) =>{
    setProductos(productos.filter((producto, i) => i !== index));
};
 return (
    <div className= "estilos">
        <h2>Lista de Compras</h2>
        <input
          type="text"
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
          />
          <button onClick={agregarProducto}>Agregar</button>
          <ul>
            {productos.map((producto, index) =>(
            <li key={index}>
                <span className="textpro">{producto}</span>
                <button onClick={() => eliminarProducto(index)}>Eliminar</button>
            </li>
            ))}
          </ul>
    </div>
 );
}

 export default ListaCompras;