import React from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Personajes from '../containers/Personajes'
import Episodios from '../containers/Episodios'
import CharacterNew from '../containers/NuevoPersonaje'
import Layout from '../components/Layout'
import Home from '../containers/Home'
import NotFound from '../containers/NotFound'
import '../assets/styles/App.css';

 const App = () => {
     return(
        <BrowserRouter>
            <div className="App">
                <ul className="App__ul">
                    <li><Link className="App-li-a" to={`/Personajes/1`}>Personajes</Link></li>
                    <li><Link className="App-li-a" to={`/Episodios/1`}>Episodios</Link></li>
                    <li><Link className="App-li-a" to={`/CharacterNew`}>Nuevo Personaje</Link></li>
                </ul>
                <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="Personajes/:id" element={<Personajes />} />
                    <Route exact path="Episodios/:id" element={<Episodios />} />
                    <Route exact path="CharacterNew" element={<CharacterNew />} />
                    <Route element={<NotFound />}></Route>
                </Routes>
                </Layout>
            </div>
        </BrowserRouter>
    )
}

export default App