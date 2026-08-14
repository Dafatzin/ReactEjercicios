import {useState} from 'react';

export function CicloRender(){
    let variableNormal = 0;
    const [estadoReactivo, setEstadoReactivo] = useState(0);

    const probarVariableNormal = () => {
        variableNormal += 1;
        console.log("Varibale normal cambio a:", variableNormal);

    };

    const probarEstadoReactivo = () => {
        setEstadoReactivo(estadoReactivo +1)
    };
    return(
        <div>
            <h3> Demostracion de Reactividad</h3>
            <p>Variable Normal (consola): {variableNormal}</p>
            <button onClick ={probarVariableNormal}>
                 Sumar a Variable Normal
            </button>
            <hr />
            <p> Estado rectivo (pantalla): {estadoReactivo}</p>
            <button onClick={probarEstadoReactivo}>
                Sumar a Estado Reactivo
            </button>
        </div>
    )
}
export default CicloRender;