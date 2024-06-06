import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList(type){
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexUrl: 'https://pokeapi.co/api/v2/pokemon',        // api
        nextUrl: '',                                            // to set at next button
        prevUrl: '',                                             // to set at prev button
    });

    async function downloadPokemon(){

        setPokemonListState({...pokemonListState, isLoading: true});   //isLoading set

        const response = await axios.get(pokemonListState.pokedexUrl); // this downloads list of 20 pokemons

        const pokemonResults = response.data.results; // we get the array of pokemons from the result

        console.log(response.data);

        setPokemonListState((state)=> ({        //nextUrl, prevUrl set
            ...state, 
            nextUrl:response.data.next, 
            prevUrl:response.data.previous 
        }));

        const pokemonResultPromise = pokemonResults.map((pokemon)=> axios.get(pokemon.url));

        // passing that promise array to axios.all
        const pokemonData = await axios.all(pokemonResultPromise); // array of 20 pokems detailed data
        console.log(pokemonData);

        // now iterate on the data of each pokemon, and extraxt id, name, image, types

        const pokeListResult = pokemonData.map((pokeData)=>{
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name, 
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny , 
                types: pokemon.types
            };
        });

        console.log(pokeListResult);

        setPokemonListState((state)=>({     //pokemonList, isLoading set
            ...state, 
            pokemonList: pokeListResult, 
            isLoading: false
        }));
    };

    useEffect(()=>{
        downloadPokemon();
    }, [pokemonListState.pokedexUrl])

    return {pokemonListState, setPokemonListState};
}

export default usePokemonList;