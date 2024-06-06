import { Routes, Route } from "react-router-dom";
import Pokedex from "../Components/Pokedex/pokedex";
import PokemonDetails from "../Components/PokemonDetails/PokemonDetails";

function CustomRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Pokedex/>} />
            <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
        </Routes>
    )
}

export default CustomRoutes;