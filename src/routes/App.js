import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
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
                    <Switch>
                        <Route exact path="/Personajes/:id" component={Personajes}/>
                        <Route exact path="/Episodios/:id" component={Episodios}/>
                        <Route exact path="/CharacterNew" component={CharacterNew}/>
                        <Route exact path="/" component={Home}/>
                        <Route component={NotFound}></Route>
                    </Switch>
                </Layout>
            </div>
        </BrowserRouter>
    )
}

export default App