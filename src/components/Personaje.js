import React from 'react'
import img from '../resources/MGV.png'
const Personaje = (props)=>{
    console.log(props)
    return(
    <div id="Personaje" className="Personaje">  
        <div style={{  display: "flex", flexDirection: "column"}}>
            <div className="subcard">
                <img className="img-Character" src={props.image||img} alt={props.name}/>
                <h1 className="Character-name">{props.nameCharacter}</h1>
                <div className="grid-container">
                    <h1 className="grid-item gridAlterColor">Estado: </h1>
                    <h1 className="grid-item gridAlterColor">{props.status}</h1>
                    <h1 className="grid-item">Especie: </h1>
                    <h1 className="grid-item">{props.species}</h1>
                    <h1 className="grid-item gridAlterColor">Tipo: </h1>
                    <h1 className="grid-item gridAlterColor">{props.type}</h1>
                    <h1 className="grid-item">Género: </h1>
                    <h1 className="grid-item">{props.gender}</h1>
                    <h1 className="grid-item gridAlterColor">Origen: </h1>
                    <h1 className="grid-item gridAlterColor">{props.origin.name}</h1>
                </div>
            </div>
        </div>
    </div>
)}
export default Personaje