import React, {useState, useEffect} from 'react';

export function EjemplosEfectos(){
    const [count, setCount] = useState(0);
    const [productos, setProductos] = useState ([]);
    const [cargando, setCargando] = useState(true);

    //Sincronizamos con el DOM
    useEffect(()=> {
        document.title = `Clicks: ${count}`;
        console.log('[useEffect1] Titulo actualizado en DOM:',count);
        }, [count]); //Dependencia
    
        //Petición asincrona
        useEffect(()=>{
            console.log('[useEffect2] Iniciando Fetch de datos..');
            const timer = setTimeout(()=>{
                setProductos([
                    {id:1, nombre:'Teclado mecanico'},
                    {id:2, nombre: 'Mouse Gamer'}
                ]);
                setCargando(false);
            }, 1500);

            //Función de Limpieza

            return() => {
                console.log('[useEffect 2 Cleanuo] Limpiando temporizador...');
                clearTimeout(timer);
            };

        }, []) //Array vacío

        
             return (
        <div>
            <h2>Ejemplos con useEffect</h2>
            <p>Contador <strong>{count}</strong></p>
            <button onClick={() => setCount ( c => c + 1)}>Incrementar contador</button>
            <h3>Lista de Productos (Fetch simulado)</h3>
            {cargando ? <p>⏳ Cargando productos...</p> : (
                <ul>
                {productos.map(p => <li key={p.id}>{p.nombre}</li>)}
                </ul>
            )}
        </div>
    );
}