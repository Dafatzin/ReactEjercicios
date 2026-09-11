import { Link } from 'react-router-dom';

export const citas = [
        { id: 1, paciente: "Juan Pérez", fecha: "2026-01-10"},
        { id: 2, paciente: "María Beltrán", fecha: "2026-02-13"},
        { id: 3, paciente: "Andres López", fecha: "2026-03-16"},
     ];
     
function Citas() {
     return (
        <div>
            <h1> C I T A S</h1>
            <ul>
                {citas.map((cita) =>(
                    <li key={cita.id}>
                        <Link to= {`/cita/${cita.id}`}>{cita.paciente}</Link> 
                    </li>
                ))}
            </ul>
        </div>
     );
}

  export default Citas;