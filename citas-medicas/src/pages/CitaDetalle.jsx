import { useParams } from 'react-router-dom';
import { citas } from './Citas';

function CitaDetalle() {
    const { id } = useParams();
    const cita = citas.find((c) => c.id === parseInt(id));
return(
    <div>
        <h2>Detalle de la cita</h2>
        {cita ? (
            <>
            <p>Paciente: {cita.paciente}</p>
            <p>Fehca: {cita.fecha}</p>
            </>
        ) : (
        <p>ID de la cita: {id}</p>
        )}
    </div>
);
}

export default CitaDetalle;