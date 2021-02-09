import React, { useState } from   'react'
import PersonajeForm from '../components/NewPersonajeForm'
import Personaje from '../components/Personaje'
import '../Styles/Tarjetera.css';
const NewPersonaje = () =>{
    const [form, setForm] = useState({
        Nombre:'',
        Estado:'',
        Especie:'',
        Tipo:'',
        Genero:'',
        Origen:'',
        Img:''
    })
    const handleChangeInput = e =>{
        setForm({...form,[e.target.name]: e.target.value})
        }
    return(
        <div className="Central">
            <div className="Personajes">
                <div className="colNewPersonaje">
                <Personaje name="Carta" nameCharacter={form.Nombre} status={form.Estado} species={form.Especie} type={form.Tipo}
          gender={form.Genero} origin={form.Origen} image={form.Img}/> 
                </div>
                <div className="colNewPersonaje">
                    <PersonajeForm onChange= {handleChangeInput} form={form}/>
                </div>
            </div>
        </div>
    )
}
export default NewPersonaje