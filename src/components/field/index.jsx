import "./fields.css"

const Field = (props) => {
    const placeholderModificado = `${props.placeholder}...`;

    const { type="text" } = props

    const manejarCambio = (e) => {
      props.setValue(e.target.value); 
    }

      return <div className={`field field-${type}`}>
        <label> {props.label} </label>
        <input 
          placeholder={placeholderModificado} 
          required={props.required} 
          value={props.value}
          onChange={manejarCambio} 
          type={type} 
        />
    </div>

}

export default Field; 