import type { Pokemon, PokemonsListResponse, PokemonResponse } from '../interfaces/index';

import axios from 'axios';
import PokemonApi from '@/pokemons/api/PokemonApi';

export const getPokemons = async (): Promise<Pokemon[]> => {
    const { data } = await PokemonApi.get<PokemonsListResponse>('/pokemon?limit=45');
    const pokemons = await Promise.all(
        data.results.map(async ({ url }) => {
            const { data: pokemon } = await axios.get<PokemonResponse>(url);
            return {
                id: pokemon.id,
                name: pokemon.name,
                frontSprite: pokemon.sprites.front_default,
            };
        })
    );

    return pokemons;
}