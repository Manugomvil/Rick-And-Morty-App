import React, { Fragment } from 'react';
import '../Styles/Tarjetera.css';
import {useHistory, useParams } from 'react-router-dom';
import Personaje from '../components/Personaje';
import Loading from '../components/Loading';
import useFetch from  '../hooks/useFetch';
import { animateScroll as scroll} from 'react-scroll';
import Paginacion from '../components/Paginacion';
import NotFound from './NotFound';

const Personajes = () =>{
  const h = useHistory()
  var {id}= useParams();
  if(isNaN(id)) id = 1;
  id = parseInt(id)
  scroll.scrollToTop();
  const{data,isLoading, isError} = useFetch(`https://rickandmortyapi.com/api/character/?page=${id}`,
  {info:{},
  result:{}})
  if(isLoading) return (<div className="Central"><Loading/></div>)
  if(isError) return <div className="Central"><NotFound/></div>
  try {
    return (
        
      <Fragment>
        <Paginacion/>
        <div className="Central">
          <div className="Personajes">
            <button id="atras" className="btn-desplazamiento" onClick={Atras}></button>
            <div className="Grid">{
              data.results.map((tarea, i) => (
                <Personaje className="childGrid" key={tarea.id} {...tarea}/> 
                ))
              }</div>
            <button id="adelante" className="btn-desplazamiento" onClick={Adelante}></button>
          </div>
        </div>
      </Fragment>
    );
  } catch (error) {
    return <div className="Central"><NotFound/></div>
  }
function Adelante() {
  if(id<34){
    id++
    h.push(`/Personajes/${id}`)
    console.log(h)
  }
}
function Atras() {
  if(id>1){
    id--
    h.push(`/Personajes/${id}`)
  }
}
}
export default Personajes;