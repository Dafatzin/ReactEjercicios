import {EjemploHook} from './components/ejemploHook';
import {CicloRender} from './components/ciclorender';
import {Botonera} from './components/Botonera';
function App() {
    return (
        <div>
        <div> 
            <h1>Ejemplo de Reactividad</h1>
        <CicloRender/>
        </div>

        <div>
            <h1>Ejemplo de useState</h1>
            <EjemploHook/>
        </div>
        <div> 
            <h1> Botonera Más y Menos</h1>
            <Botonera/>
        </div>
        <div>
            <h1>Práctica useState</h1>
            <Botonera/>
        </div>
        </div>
    )
}
export default App;