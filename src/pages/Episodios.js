import React, {useEffect, useState} from 'react';
import '../Styles/Tarjetera.css';
import {useHistory, useParams } from 'react-router-dom';
import Episodio from '../components/Episodio';
import Loading from '../components/Loading';

const Episodios = () =>{
  const h = useHistory()
  const [isError, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [Episode, setEpisode] = useState({
    name: '',
    air_date:'',
    episode:'',
    characters:{length:''}
  })
  var {id}= useParams();
  if(isNaN(id)) id = 1;
  id = parseInt(id)
  
  useEffect(()=>{
    const obtenerDatos = async(id) => {
      try{
        setLoading(true)
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
        const data = await response.json()
        setEpisode(data)
        setLoading(false)
      }catch(e){
        //setLoading(false)
        setError(e)
      }
    }
    obtenerDatos(id)
  },[id])
  
  if(isLoading) return <div className="Central"><Loading/></div>
    return (
        <div className="Central">
      <div className="Episodios">
      <button id="atras" className="btn-desplazamiento" onClick={Atras}></button>
          <Episodio name="Carta" Episode ={Episode}/>
      <button id="adelante" className="btn-desplazamiento" onClick={Adelante}></button>
    </div>
        </div>
  );
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