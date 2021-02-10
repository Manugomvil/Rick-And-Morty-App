import { BrowserRouter, Link, Route} from "react-router-dom";
import Personajes from '../pages/Personajes';
import Episodios from "../pages/Episodios";
import CharacterNew from "../pages/NuevoPersonaje"
import '../Styles/App.css';
import Main from "../pages/Main";
import React from "react";
import Cabecera from "./Cabecera";

const App = () => {
    
    // function handlePageClick(data){
    //     h.push(`/Personajes/${id}`)
    //   };
    //const location = useLocation();
    
    return(
        <BrowserRouter>
        <div className="App">
            <ul>
                <li><Link to={`/Personajes/1`}>Personajes</Link></li>
                <li><Link to={`/Episodios/1`}>Episodios</Link></li>
                <li><Link to={`/CharacterNew`}>Nuevo Personaje</Link></li>
            </ul>
            <Cabecera/>
            <Route exact path="/Personajes/:id" component={Personajes}/>
            <Route exact path="/Episodios/:id" component={Episodios}/>
            <Route exact path="/CharacterNew" component={CharacterNew}/>
            <Route exact path="/" component={Main}/>
        </div>
    </BrowserRouter>
    )
}
export default App