import React from 'react'
import img from '../assets/statics/MGV.png'
const Personaje = (props)=>{
    const {onClick,id,image,name,status,species,type,gender,origin} = props
    return(
        <div id="Personaje" className="Personaje" onClick={onClick}>  
            <div style={{  display: "flex", flexDirection: "column"}}>
                <div id={id} className="subcard">
                    <img className="img-Character" src={image||img} alt={name}/>
                    <h1 className="Character-name">{name}</h1>
                    <div className="grid-container">
                        <h1 className="grid-item gridAlterColor">Estado: </h1>
                        <h1 className="grid-item gridAlterColor">{status}</h1>
                        <h1 className="grid-item">Especie: </h1>
                        <h1 className="grid-item">{species}</h1>
                        <h1 className="grid-item gridAlterColor">Tipo: </h1>
                        <h1 className="grid-item gridAlterColor">{type}</h1>
                        <h1 className="grid-item">Género: </h1>
                        <h1 className="grid-item">{gender}</h1>
                        <h1 className="grid-item gridAlterColor">Origen: </h1>
                        <h1 className="grid-item gridAlterColor">{origin.name}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Personaje