import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonList';

function PokemonList() {
    const { pokemonListState, setPokemonListState } = usePokemonList(false); // call custom hook

    return (
        <div className="pokemon-list-wrapper m-2 flex-col items-center justify-center mb-4">
            <div className="pokemon-wrapper flex-wrap flex-row justify-evenly m-2 lg:flex md:flex">
                {pokemonListState.isLoading ? 'Loading...' :
                    pokemonListState.pokemonList.map((p) =>
                        <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
                    )
                }
            </div>
            <div className="controls w-screen flex items-center justify-center gap-4 mt-8">
                <button className='text-center justify-center text-xl text-white bg-red-700 w-20 border-none rounded-lg h-8 hover:bg-blue-700'
                    disabled={pokemonListState.prevUrl == null}
                    onClick={() => setPokemonListState({ ...pokemonListState, pokedexUrl: pokemonListState.prevUrl })}>
                    Prev
                </button>
                <button className='pr-1 pl-1 text-xl text-white bg-red-700 w-20 border-none rounded-lg h-8 hover:bg-blue-700'
                    disabled={pokemonListState.nextUrl == null}
                    onClick={() => setPokemonListState({ ...pokemonListState, pokedexUrl: pokemonListState.nextUrl })}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default PokemonList;
