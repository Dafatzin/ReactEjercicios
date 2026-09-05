import { useReducer, useRef, useCallback, useEffect, useState } from "react";

const intialState= { count: 0, history: []};

function reducer(state, action) {
    switch (action.type){
     case "increment":
        return{
            count: state.count + action.payload,
            history: [...state.history, `+${action.payload} (Nuevo valor: ${state.count + action.payload})`]
        };
        case"decrement":
        return{
            count: state.count - action.payload, 
            history: [...state.history, `-${action.payload} (Nuevo valor: ${state.count - action.payload})`]
        };
        case "reset":
            return intialState;

            case "undo": {
            if(state.history.length === 0) {
               return state;
            }
            const lastEntry = state.history[state.history.length - 1];
            const firstChunk = lastEntry.split(" ")[0];
            const amount = Number (firstChunk);
            const newCount = state.count - amount;
            return {
                count: newCount,
                history: state.history.slice(0, -1)
            };
        }
        default:
            return state;
    }
    }
    


    function CounterGame(){
        const [state, dispatch] = useReducer(reducer, intialState, (initial) => {
            const saved = localStorage.getItem("historyData");
            return saved ? JSON.parse(saved) : initial;
        });
        const incrementBtnRef = useRef(null);
        const [ingreso, setIngreso] = useState("");

        useEffect(() => {
            incrementBtnRef.current.focus();
        }, []);

        const handleIncrement = useCallback(() => {
            dispatch({ type: "increment"});
        }, []);

        const handleDecrement = useCallback (() => {
            dispatch({ type: "decrement"});
        }, []);

        const handleUndo = useCallback(() => {
            dispatch({type: "undo"});
        }, []);

        useEffect(() => {
            localStorage.setItem("historyData", JSON.stringify(state));
        }, [state]);

        return(
            <div>
                <h2 className="titulo"> Contador: {state.count}</h2>
                <input type="number" value={ingreso} onChange={(e) => setIngreso(e.target.value)} />
                <button ref={incrementBtnRef} onClick={() => dispatch({ type: "increment", payload: Number(ingreso)})}>+</button>
                <button onClick={() => dispatch({ type: "decrement", payload: Number(ingreso) })}>-</button>
                <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
                <button onClick={handleUndo}>Deshacer</button>

                <h3>Historial de cambios:</h3>
                <ul>
                    {state.history.map((entry, index) =>(
                        <li key={index}> {entry} </li>
                    ))}
                </ul>
            </div>
        );
    }
export default CounterGame;