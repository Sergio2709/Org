import { useState } from "react"
import "./miOrg.css"

const MiOrg = (props) => {
    //const [nombreVariable,funcionActualizar] = useState(valorInicial)
    
    return <section className="orgSection">
        <h3>Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.changeShow}/>
    </section>

}

export default MiOrg