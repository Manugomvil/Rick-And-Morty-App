import React, { Fragment, useState } from 'react';
import {useHistory, useParams } from 'react-router-dom';
import Personaje from '../components/Personaje';
import Loading from '../components/Loading';
import useFetch from  '../hooks/useFetch';
import { animateScroll as scroll} from 'react-scroll';
import Paginacion from '../components/Paginacion';
import NotFound from './NotFound';
import ApiUrl from '../config';
import '../assets/style/components/Tarjetera.css';
import Popup from '../components/PopUp';
import EpisodiosList from '../components/EpisodiosList';

const Personajes = () =>{
  const h = useHistory()
  var {id}= useParams();
  if(isNaN(id)) id = 1;
  id = parseInt(id)
  scroll.scrollToTop();
  console.log(`${ApiUrl}/character/?page=${id}`)
  const{data,isLoading, isError} = useFetch(`${ApiUrl}/character/?page=${id}`,
  [])
  const [showPopup, setShowPopup] = useState(false);
  const [dataPopUp, setDataPopUp] = useState({});
  const HandlePopup = e => {
    if(showPopup !== true){ 
      let c = data.results.find(element => element.id === e.personaje.id)
      setDataPopUp(c)
    }
      setShowPopup(!showPopup)
  }
  if(isLoading) return (<div className="Central"><Loading/></div>)
  if(isError) return <div className="Central"><NotFound/></div>
  try {
    return (
        
      <Fragment>
        <Paginacion/>
        <div className="Central">
          <div className="Personajes">
            <button id="atras" className="btn-desplazamiento" onClick={Atras}></button>
            {showPopup ? 
          <Popup
            // children={<div>Hola</div>}
            children={<EpisodiosList {...dataPopUp} onClick={() => HandlePopup({})}/> }
            // children={<Personaje key={-1} className="childGrid" {...dataPopUp} onClick={() => HandlePopup({})}/> }
            closePopup={HandlePopup}
          />
          : null
        }
            <div className="Grid">{
              data.results?.map((personaje, i) => {
                return(
                  <div key={personaje.id} className="childGrid">
                    <Personaje  {...personaje} onClick={() => HandlePopup({personaje})}/> 
                  </div>
                )
              })
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