import React from 'react';
import {useHistory, useParams } from 'react-router-dom';
import Episodio from '../components/Episodio';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';
import NotFound from './NotFound';
import ApiUrl from '../config';
import '../assets/style/components/Tarjetera.css';

const Episodios = () =>{
  const h = useHistory()
  var {id}= useParams();
  if(isNaN(id)) id = 1;
  id = parseInt(id)
  
  const{data:Episode,isLoading, isError} = useFetch(`${ApiUrl}/episode/${id}`,
  [])
  
  if(isLoading) return <div className="Central"><Loading/></div>
  if(isError) return <div className="Central"><NotFound/></div>

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