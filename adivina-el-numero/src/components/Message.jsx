function Message({ texto }){
    let imagen = null;
    if(texto ==="Número adivinado correctamente"){
        imagen = "/RObten.jpg";
    } else if(texto === "El número es mayor"){
        imagen = "/RAlto.jpg";
    } else if (texto === "El número es menor"){
        imagen = "/RBajo.jpg";
    }
    return(
        <div className="contmens">
     <p className="mensaje">{texto}</p>;
     {imagen && <img src={imagen} alt={texto} className="imagen"/>}
    </div>
    );
    }


export default Message;