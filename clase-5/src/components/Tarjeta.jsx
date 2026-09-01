export function Tarjeta({titulo,children}){
    return(
        <div style={{
            border: '1 px solid'
        }}> 
        {titulo && <h3>{titulo}</h3>}

        {/* Imprimer todo lo que se pase dentro de <Tarjeta>...</Tarjeta>*/}

        <div className="tarjeta-contenido">{children}</div>
        </div>
    )
}