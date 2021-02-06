import React, {useEffect, useState} from 'react';
import '../Styles/Tarjetera.css';
import {useHistory, useParams } from 'react-router-dom';
import Personaje from '../components/Personaje';
import Episodio from '../components/Episodio';

function Episodios() {
  const h = useHistory()
  const [Episode, setEpisode] = useState([])
  var {id}= useParams();
  if(isNaN(id)) id = 1;
  id = parseInt(id)
  
  useEffect(()=>{
    obtenerDatos(id)
  },[id])
  const obtenerDatos = async(id) => {
    try{

      const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      const data = await response.json()
      setEpisode(data)
    }catch(e){
      
    }
  }
  try{
    return (
        <div className="Central">
      <div className="Episodios">
      <button id="atras" className="btn-desplazamiento" onClick={Atras}></button>
          <Episodio name="Carta" nameCharacter={Episode.name} air_date={Episode.air_date} episode={Episode.episode} characters={Episode.characters.length}/> 
      <button id="adelante" className="btn-desplazamiento" onClick={Adelante}></button>
    </div>
        </div>
  );
}catch(e){
 return (
  <div className="Episodios">
  
  <Personaje name="Carta" nameCharacter="" status="" species="" type=""
          gender="" origin="" image=""/>
</div>

 )
}
function Adelante() {
  if(id<41){
    id++
    h.push(`/Episodios/${id}`)
    //obtenerDatos(Id)
  }
}
function Atras() {
  if(id>1){
    id--
    h.push(`/Episodios/${id}`)
    //obtenerDatos(Id)
  }
}
}
export default Episodios;