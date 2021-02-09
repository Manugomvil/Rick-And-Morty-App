import React from   'react'

const NewPersonajeForm = (props) =>{ 
const {form, onChange} = props  
const handleSubmitBtn = e =>{
    e.preventDefault()
    console.log(form)
}
    return(
    <div className="container">
        <form onSubmit={handleSubmitBtn}>
            <div className="col">
                <input
                    type="text"
                    className="input-form"
                    placeholder="Nombre"
                    name="Nombre"
                    onChange={onChange}
                    value={form.Nombre}
                    />
            </div>
            <div className="col">
                <input
                    type="text"
                    className="input-form"
                    placeholder="Img"
                    name="Img"
                    onChange={onChange}
                    value={form.Img}
                    />
            <div className="col">
            </div>
                <input
                    type="text"
                    className="input-form"
                    placeholder="Estado"
                    name="Estado"
                    onChange={onChange}
                    value={form.Estado}
                    />
            <div className="col">
            </div>
                <input
                    type="text"
                    className="input-form"
                    placeholder="Especie"
                    name="Especie"
                    onChange={onChange}
                    value={form.Especie}
                    />
            <div className="col">
            </div>
                <input
                    type="text"
                    className="input-form"
                    placeholder="Tipo"
                    name="Tipo"
                    onChange={onChange}
                    value={form.Tipo}
                    />
            <div className="col">
            </div>
                <input
                    type="text"
                    className="input-form"
                    placeholder="Género"
                    name="Genero"
                    onChange={onChange}
                    value={form.Genero}
                    />
            <div className="col">
            </div>
                <input
                    type="text"
                    className="input-form"
                    placeholder="Origen"
                    name="Origen"
                    onChange={onChange}
                    value={form.Origen}
                    />
            </div>
            <button type="submit" className="btn-submit">Submit</button>
        </form>
    </div>
    )
}
export default NewPersonajeForm