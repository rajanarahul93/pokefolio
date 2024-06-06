import { useParams } from "react-router-dom";
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails({pokemonName}){

    const {id} = useParams();
    const [pokemon] = usePokemonDetails(id, pokemonName);

    return(
        <div className="pokemon-defaults-wrapper font-semibold gap-4 flex flex-col items-center justify-center text-2xl text-black capitalize">
            <img className="pokemon-deatils-image mt-8" src={pokemon.image}/>
            <div className="pokeemon-deatils-name"><span>{pokemon.name}</span> </div>
            <div className="pokeemon-deatils-name">Height: {pokemon.height}</div>
            <div className="pokeemon-deatils-name">Weight:{pokemon.weight}</div>
            <div className="pokemon-deatils-types flex w-screen justify-center items-center gap-10 ">
                {pokemon.types && pokemon.types.map((t)=> <div className=" w-28 text-center text-white text-2xl pt-1 pb-1 bg-red-500 rounded-3xl" key={t}>{t}</div>)}
            </div>

            { 
                pokemon.types &&  pokemon.similarPokemons &&
                <div className="pokemonTypes items-center justify-center gap-4 lg:flex w-screen text-center"> 
                    <h2 className=" text-blue-500 text-center p-8 lg:w-3/5 lg:text-end">more {pokemon.types[0]} type pokemons:</h2>
                    <ul className=" flex flex-wrap items-center justify-center w-screen lg:w-3/2 gap-6 lg:justify-start">
                        {pokemon.similarPokemons.map((p) => <li className=" text-center items-center text-red-600  gap-4 lg:flex" key={p.pokemon.url}>{p.pokemon.name}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}

export default PokemonDetails;