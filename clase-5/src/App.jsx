import { useState} from 'react';
import { UsuarioSaludo } from './components/UsuarioSaludo';
import {Tarjeta} from './components/Tarjeta';
import {EstadoSesion} from './components/EstadoSesion';
function App () {
  const [estado, setEstado] = useState('autenticado');
  const estaLogeado = true;
  const usuario = "Atzin";
  return (
    <div style= {{padding: '20px', fontFamily:'sans-serif'}}> 
    <h1>Proyecto de Auteticación</h1>
    
    <Tarjeta titulo="Perfil del Usuario">
      <EstadoSesion estado = {estado}/>
    

    <UsuarioSaludo
    estaLogeado={estado === 'autenticado'}
    username="Atzin"
    mensajeNoLeido={5}
    />
    <button
    onClick={() => setEstado(estado === 'autenticado' ? 'invitado' : 'autenticado')}>
    Alternar Estado
    </button>
    </Tarjeta>
    </div>
  );
}

export default App;