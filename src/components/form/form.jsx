import { useState } from "react"
import "./form.css"
import Field from "../field"
import OptionList from "../option-list"
import Button from "../button"

const Form = (props) => {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [photo, setPhoto] = useState("");
    const [team, setTeam] = useState("");

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");

    const {registerCollab, createTeam} = props

    const sendCollab = (e) => {
        e.preventDefault();
        let dataSend = {
            name: name,
            position: position,
            photo: photo,
            team: team
        }
        registerCollab(dataSend)
    } 

    const sendTeam = (e) => {
        e.preventDefault()
        createTeam({title, color1:color})
    }

    return <section className="form">
        <form onSubmit={sendCollab}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Field 
                label="Nombre" 
                placeholder="ingresar nombre" 
                required 
                value={name} 
                setValue={setName} /> 
            <Field 
                label="Puesto"
                placeholder="ingresar puesto" 
                required 
                value={position} 
                setValue={setPosition} />
            <Field 
                label="Foto" 
                placeholder="ingresar enlace de foto" 
                required 
                value={photo} 
                setValue={setPhoto} />
            <OptionList 
                value={team}
                setTeam={setTeam}
                teams={props.teams}/>
            <Button> 
                crear
            </Button>
        </form>
        <form onSubmit={sendTeam}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Field 
                label="Titulo" 
                placeholder="ingresar titulo" 
                required 
                value={title} 
                setValue={setTitle} /> 
            <Field 
                label="Color"
                placeholder="ingresar color hex" 
                required 
                value={color} 
                setValue={setColor} 
                type="color" />
            <Button>Crear equipo</Button>
        </form>
    </section>
}

export default Form