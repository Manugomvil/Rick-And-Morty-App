import React from 'react'
import '../assets/styles/components/Tarjetera.css'
import img from '../assets/statics/MGV.png'
import { Link } from 'react-router-dom'
const EpisodiosList = (props) => {
    return (
        <div id="Personaje" className="Personaje" onClick={props.onClick}>  
        <div style={{  display: "flex", flexDirection: "column"}}>
            <div id={props.id} className="subcard">
                <img className="img-Character" src={props.image||img} alt={props.name}/>
                <h1 className="Character-name">{props.name}</h1>
                <ul className="episodioList"><h2>Episodios</h2>{
            props.episode.map((episodio, i) => {
              return(
                <div key={i} className="episodioList-child">
                    <li>
                    <Link to={`/Episodios/${episodio.substring(('https://rickandmortyapi.com/api/episode/').length)}`}>{episodio}</Link>
                    </li>
                </div>
              )
            })
            }</ul>
                </div>
            </div>
        </div>
        
    )
}

export default EpisodiosList
