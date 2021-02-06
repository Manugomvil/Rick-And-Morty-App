import React, {useEffect, useState} from 'react';
import '../Styles/Tarjetera.css';
import {useHistory, useParams } from 'react-router-dom';
import Personaje from '../components/Personaje';

function Personajes() {
  const h = useHistory()
  const [Character, setCharacter] = useState([])
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
    }catch(e){
      
    }
  }
  try{
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
}catch(e){
 return (
  <div className="Personajes">
  
  <Personaje name="Carta" nameCharacter="" status="" species="" type=""
          gender="" origin="" image=""/>
</div>

 )
}
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