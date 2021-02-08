import { BrowserRouter, Link, Route} from "react-router-dom";
import Tarjetera from '../pages/Personajes';
import Episodios from "../pages/Episodios";
import '../Styles/App.css';
const App = () =>(
    <BrowserRouter>
        <div className="App">
            <ul>
                <li><Link to={`/Personajes/1`}>Personajes</Link></li>
                <li><Link to={`/Episodios/1`}>Episodios</Link></li>
            </ul>
            <Route exact path="/Personajes/:id" component={Tarjetera}/>
            <Route exact path="/Episodios/:id" component={Episodios}/>
        </div>
    </BrowserRouter>
)
export default App