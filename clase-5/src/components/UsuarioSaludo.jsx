export function UsuarioSaludo({estaLogeado, username, mensajeNoLeido}){
    
    return(
        // Usar el operador ternario para alterar entre 2 estados
     <div>
      {estaLogeado} ? (
        <h2>Bienvenido de nuevo, {username}</h2>
      ) : (
        <h2>Por favor, inicia sesión para continuar</h2>
      )

      //Uso del oprador && para mostrar infromación si cumple una condición
      {estaLogeado && mensajeNoLeido > 0 && ( 
        <p>Tienes {mensajeNoLeido} sin leer</p>)}
         
     </div>
    );
}