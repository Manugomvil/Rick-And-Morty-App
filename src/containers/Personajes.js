import React, { Fragment, useState } from 'react';
import {useHistory, useParams } from 'react-router-dom';
import Personaje from '../components/Personaje';
import Loading from '../components/Loading';
import useFetch from  '../hooks/useFetch';
import {connect} from 'react-redux'
import {getAPIData} from '../Actions'
import { animateScroll as scroll} from 'react-scroll';
import Paginacion from '../components/Paginacion';
import NotFound from './NotFound';
import ApiUrl from '../config';
import '../assets/styles/components/Tarjetera.css';
import Popup from '../components/PopUp';
import EpisodiosList from '../components/EpisodiosList';
import classNames from 'classnames'
import Search from '../components/Search';

const Personajes = (props) =>{
  const {getAPIData, result, searchData, isSearch} = props
  const h = useHistory()
  var {id}= useParams();
  if(isNaN(id)) id = 1;
  id = parseInt(id)
  scroll.scrollToTop();
  const{isLoading, isError} = useFetch(`${ApiUrl}/character/?page=${id}`,getAPIData)
  
  const [showPopup, setShowPopup] = useState(false);
  const [dataPopUp, setDataPopUp] = useState({});
  const headerClass = classNames({ childGrid: true }, { childGridAnimate: !showPopup })
  const HandlePopup = e => {
    if(showPopup !== true){ 
      let c = result.find(element => element.id === e.personaje.id)
      setDataPopUp(c)
    }
    setShowPopup(!showPopup)
  }
  if(isLoading) return (<div className="Central"><Loading/></div>)
  if(isError) return <div className="Central"><NotFound/></div>
  var data = searchData?.length > 0?searchData:result
  return (
    <Fragment>
        <Search/>
        <div className="Central">
          <div className="Personajes">
            <button id="atras" className="btn-desplazamiento" onClick={Atras}/>
            <button id="adelante" className="btn-desplazamiento" onClick={Adelante}></button>
            <div className="Grid">{
              searchData?.length === 0 && isSearch?<div>Sin Resultados</div>:data?.map((personaje, i) => {
                return(
                  <div key={personaje.id} className={headerClass}>
                    <Personaje  {...personaje} onClick={() => HandlePopup({personaje})}/> 
                  </div>
                )
              })
            }</div>
            {showPopup ? 
              <Popup
                children={<EpisodiosList {...dataPopUp} onClick={() => HandlePopup({})}/> }
                closePopup={HandlePopup}
              />
              : null
            }
          </div>
        </div>
        <Paginacion/>
      </Fragment>
    );
    function Adelante() {
      if(id<34){
        id++
        h.push(`/Personajes/${id}`)
      }
    }
    function Atras() {
      if(id>1){
    id--
    h.push(`/Personajes/${id}`)
  }
}

}
const mapDispatchToProps = {
  getAPIData
}
const mapStateToProps = state =>(
  {
    result: state.data.results,
    searchData:state.search,
    isSearch:state.isSearch
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(Personajes);