//useState es un hook de React que nos permite guardar datos
import {useState} from 'react'

//Componente reutilizable que muestra un perfi
// Recibe 3 pasos
function Tarjetaperfil({nombre, profesion, ciudad}){
    //Estado local de un componente (likes)
    const [likes, setLikes] = useState(0);

    //likes = valor actual
    //setLikes = funcion para cambiarlo
    function agregarLike(){
        //sumar 1 al contador
        setLikes(likes +1)
    }

    return(
        <article className="tarjeta">
            <h2>{nombre}</h2>
            <p>{profesion}</p>
            <p>{ciudad}</p>

            <button onClick={agregarLike}>
                Me gusta: {likes}
            </button>
        </article>
        /*
        <article>
            <h2>{nombre}</h2>
            <p>{profesion}</p>
            <p>{ciudad}</p>
        </article>
        */
    )
}

export default Tarjetaperfil