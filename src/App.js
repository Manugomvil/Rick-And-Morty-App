import React, {useEffect, useState} from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  
  const [Character, setCharacter] = useState([])
  const [Id, setID] = useState(1)
  useEffect(()=>{
    obtenerDatos(Id)
  },[Id])
  const obtenerDatos = async(id) => {
    const response = await fetch(`https://rickandmortyapi.com//api/character/${id}`)
    const data = await response.json()
    setCharacter(data)
  }
  try{
    return (
      <div className="App">
      <button id="atras" className="btn-desplazamiento" onClick={Atras}></button>
      
          <Card name="Carta" nameCharacter={Character.name} status={Character.status} species={Character.species} type={Character.type}
          gender={Character.gender} origin={Character.origin.name} image={Character.image}/> 
      <button id="adelante" className="btn-desplazamiento" onClick={Adelante}></button>
    </div>
  );
}catch(e){
 return (<Card name="Carta" nameCharacter="" status="" species="" type=""
          gender="" origin="" image=""/> )
}
function Adelante() {
  if(Id<20){

    setID(Id+1)
    obtenerDatos(Id)
  }
}
function Atras() {
  if(Id>1){

    setID(Id-1)
    obtenerDatos(Id)
  }
}
}
export default App;
