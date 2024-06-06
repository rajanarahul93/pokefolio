import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex(){

    const [searchTerm, setSearchTerm] = useState('');
    
    return(
        <div className="pokedex-wrapper flex flex-col">
            <Search updateSearchTerm={setSearchTerm}/>
            { (!searchTerm) ? <PokemonList/> : <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
        </div>
    )
}

export default Pokedex;