import "./collaborator.css"
import { AiFillCloseCircle,AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Collaborator = (props) => {

    const {name, position, photo, team, id, fav} = props.datos
    const {color, deleteCollab, like} = props

    return <div className="collaborator">
        <AiFillCloseCircle onClick={()=>deleteCollab(id)} className="delete"/>
        <div className="header" style={ { backgroundColor: color } }>
            <img src={photo} alt={name} /> 
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{position}</h5>
            { fav ? <AiFillHeart color="red" onClick={() => like(id)}/>: <AiOutlineHeart onClick={() => like(id)}/> }
        </div>
    </div>
}

export default Collaborator