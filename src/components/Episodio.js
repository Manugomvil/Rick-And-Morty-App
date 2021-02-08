import React from 'react'

const Episodio = (props) => (
    <div id="Episodio" className="Episodio">
        <div style={{  display: "flex", flexDirection: "column"}}>
            <div className="subcard">
                <div className="img-Character"/>
                <h1 className="Character-name">{props.nameCharacter}</h1>
                <div className="grid-container">
                    <h1 className="grid-item gridAlterColor">Fecha de lanzamiento: </h1>
                    <h1 className="grid-item gridAlterColor">{props.air_date}</h1>
                    <h1 className="grid-item">Episodio: </h1>
                    <h1 className="grid-item">{props.episode}</h1>
                    <h1 className="grid-item gridAlterColor">Episodios: </h1>
                    <h1 className="grid-item gridAlterColor">{props.characters}</h1>
                </div>
            </div>
        </div>
    </div>

)
export default Episodio