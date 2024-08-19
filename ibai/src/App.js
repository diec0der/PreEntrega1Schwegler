import "./App.css";
import {NavBar} from "./Components/NavBar/NavBar";
import {ItemListContainer} from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return <>
    <NavBar/>
    <ItemListContainer mensaje = "Listado de Productos"/>
    </>
}

export default App;