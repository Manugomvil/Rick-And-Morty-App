import React, {useEffect, useState} from 'react';
import '../Styles/Tarjetera.css';
import {useHistory, useParams } from 'react-router-dom';
import Personaje from '../components/Personaje';
import Loading from '../components/Loading';

function Personajes() {
  const h = useHistory()
  const [isError, setError] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [Character, setCharacter] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {name: ''},
    image: ''
  })
  var {id}= useParams();
  if(isNaN(id)) id = 1;
  id = parseInt(id)
  
  useEffect(()=>{
    obtenerDatos(id)
  },[id])
  const obtenerDatos = async(id) => {
    try{

      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const data = await response.json()
      setCharacter(data)
      setLoading(false)
    }catch(e){
      setError(true)
    }
  }
  if(isLoading) return (<div className="Central"><Loading/></div>)
    return (
      <div className="Central">
        <div className="Personajes">
      <button id="atras" className="btn-desplazamiento" onClick={Atras}></button>
          <Personaje name="Carta" nameCharacter={Character.name} status={Character.status} species={Character.species} type={Character.type}
          gender={Character.gender} origin={Character.origin.name} image={Character.image}/> 
      <button id="adelante" className="btn-desplazamiento" onClick={Adelante}></button>
          </div>
    </div>
  );
function Adelante() {
  if(id<671){
    id++
    h.push(`/Personajes/${id}`)
    //obtenerDatos(Id)
  }
}
function Atras() {
  if(id>1){
    id--
    h.push(`/Personajes/${id}`)
    //obtenerDatos(Id)
  }
}
}
export default Personajes;