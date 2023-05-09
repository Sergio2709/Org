import "./team.css";
import Collaborator from "../colaborator";
import hexToRgba from "hex-to-rgba";

const Team = (props) => {

    const { color1, color2, title, id } = props.datos;
    const { collaborators, deleteCollab, setColor, like } = props;

    return <>
        { collaborators.length>0 && 
            <section className="equipo" style={{ backgroundColor: hexToRgba(color1,0.6) }}>
                <input 
                    type="color"
                    className="input_color"
                    value={hexToRgba(color1,0.6)}
                    onChange={(evento)=> setColor(evento.target.value, id)}
                />
                <h3 style={{ borderColor: color1 }}>{title}</h3>
                <div className="collaborators">
                    {
                        collaborators.map( (collaborator, index) => <Collaborator
                        datos={collaborator} 
                        key={index} 
                        color={color1}
                        deleteCollab={deleteCollab} 
                        like={like}/> )
                    }
                </div>
            </section>
        }
    </>
}

export default Team
