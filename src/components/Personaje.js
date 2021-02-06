import React from 'react'

class Personaje extends React.Component{
    render(){
        return <div id="Personaje" className="Personaje">
            <div style={{  display: "flex",
            flexDirection: "column"}}>

        <div className="subcard">
            <img className="img-Character" src={this.props.image} alt={this.props.name}/>
                <h1 className="Character-name">{this.props.nameCharacter}</h1>
            <div className="grid-container">
                <h1 className="grid-item gridAlterColor">{this.props.status}</h1>
                <h1 className="grid-item gridAlterColor">Estado: </h1>
                <h1 className="grid-item">Especie: </h1>
                <h1 className="grid-item">{this.props.species}</h1>
                <h1 className="grid-item gridAlterColor">Tipo: </h1>
                <h1 className="grid-item gridAlterColor">{this.props.type}</h1>
                <h1 className="grid-item">Género: </h1>
                <h1 className="grid-item">{this.props.gender}</h1>
                <h1 className="grid-item gridAlterColor">Origen: </h1>
                <h1 className="grid-item gridAlterColor">{this.props.origin}</h1>
            </div>
            </div>
        </div>
    </div>
    }
}
export default Personaje