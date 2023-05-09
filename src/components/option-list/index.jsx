import "./option-list.css"

/*metodo map -> arreglo.map( (data, index)=> {
    return <option><option>
})*/

const OptionList = (props) => {

    const controlChange = (e) => {
        props.setTeam(e.target.value)
    }
    
    return <div className="OptionList">
        <label>Equipos</label>
        <select value={props.value} onChange={controlChange}>
            <option value="" disabled defaultValue="" hidden>seleccionar equipo</option>
            {props.teams.map((equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
} 

export default OptionList