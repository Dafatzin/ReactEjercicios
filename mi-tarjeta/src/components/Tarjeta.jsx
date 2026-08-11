import {useState} from 'react'
import './Tarjeta.css'

function Tarjeta({ imagen, nombre, edad, profesion, presentacion, instagram, colorBorde }) {
    return (
        <div className="tarjetacont" style={{ borderColor: colorBorde, boxShadow: `0 4px 8px ${colorBorde}` }}>
             <img src={imagen} alt={nombre} className="img"></img>
        <div className="tarjeta">
            <h2>{nombre}</h2>
            <p><b>Edad:</b> {edad}</p>
            <p><b>Profesión:</b> {profesion}</p>
            <p>{presentacion}</p>
            <p><b>Instagram:</b> @{instagram}</p>
        </div>
        </div>
    );
}

export default Tarjeta