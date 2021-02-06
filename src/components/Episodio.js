import React from 'react'

class Episodio extends React.Component{
    render(){
        return <div id="Episodio" className="Episodio">
            <div style={{  display: "flex",
            flexDirection: "column"}}>
        <div className="subcard">
            <div className="img-Character"/>
            {/* <img className="img-Character" src={this.props.image} alt={this.props.name}/> */}
                <h1 className="Character-name">{this.props.nameCharacter}</h1>
            <div className="grid-container">
                <h1 className="grid-item gridAlterColor">Fecha de lanzamiento: </h1>
                <h1 className="grid-item gridAlterColor">{this.props.air_date}</h1>
                <h1 className="grid-item">Episodio: </h1>
                <h1 className="grid-item">{this.props.episode}</h1>
                <h1 className="grid-item gridAlterColor">Episodios: </h1>
                <h1 className="grid-item gridAlterColor">{this.props.characters}</h1>
            </div>
            </div>
        </div>
    </div>
    }
}
export default Episodio