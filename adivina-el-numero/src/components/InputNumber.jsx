function InputNumber({valor, onChange}) {
    return(
        <input type="number" placeholder="Ingresa un número"
        value={valor} onChange={onChange}/>
    );
}

export default InputNumber;