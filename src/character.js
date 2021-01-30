import { render} from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'


class Character extends React.Component{
    render(){
        return <h1>Hola</h1>
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {date: new Date()};
    //     this.character = props.character
    //   }
    // render(){
    // return(
    //     <div id="card" className="card">
    //         <button id="atras" className="btn-desplazamiento"></button>
    //         <div>
    //             <img className="img-Character" src={this.character.image} alt={this.character.name}/>
    //                 <h1 className="Character-name">{this.character.name}</h1>
    //             <div className="grid-container">
    //                 <h1 className="grid-item">Estado: </h1>
    //                 <h1 className="grid-item">{this.character.status}</h1>
    //                 <h1 className="grid-item">Especie: </h1>
    //                 <h1 className="grid-item">{this.character.species}</h1>
    //                 <h1 className="grid-item">Tipo: </h1>
    //                 <h1 className="grid-item">{this.character.type}</h1>
    //                 <h1 className="grid-item">Género: </h1>
    //                 <h1 className="grid-item">{this.character.gender}</h1>
    //                 <h1 className="grid-item">Creado: </h1>
    //                 <h1 className="grid-item">{this.character.created}</h1>
    //             </div>
    //         </div>
    //         <button id="adelante" className="btn-desplazamiento"></button>
    //     </div>
    //     )
    // }
}
    // function desplazar() {
    //     const component = document.getElementById('App')
    //     ReactDOM.render(component)
    // }
    export default Character

    {/* <button id="atras" className="btn-desplazamiento" onClick="desplazar()"></button>
            <div>
                <img className="img-Character" src={character.image} alt={character.name}/>
                    <h1 className="Character-name">{character.name}</h1>
                <div className="grid-container">
                    <h1 className="grid-item">Estado: </h1>
                    <h1 className="grid-item">{character.status}</h1>
                    <h1 className="grid-item">Especie: </h1>
                    <h1 className="grid-item">{character.species}</h1>
                    <h1 className="grid-item">Tipo: </h1>
                    <h1 className="grid-item">{character.type}</h1>
                    <h1 className="grid-item">Género: </h1>
                    <h1 className="grid-item">{character.gender}</h1>
                    <h1 className="grid-item">Creado: </h1>
                    <h1 className="grid-item">{character.created}</h1>
                </div>
            </div>
            <button id="adelante" className="btn-desplazamiento"></button> */}